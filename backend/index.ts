import bcrypt from 'bcryptjs';
import cors from 'cors';
import express, { type NextFunction, type Request, type Response } from 'express';
import helmet from 'helmet';
import { z } from 'zod';
import { authenticate, createToken, requireAdmin, type TokenUser } from './auth.js';
import { db } from './database.js';
import { failure, success } from './http.js';

const app = express();
const port = Number(process.env.PORT ?? 3001);
app.use(helmet({ crossOriginResourcePolicy: { policy: 'cross-origin' } }));
app.use(cors({ origin: process.env.CLIENT_ORIGIN?.split(',') ?? true }));
app.use(express.json({ limit: '100kb' }));

const credentialsSchema = z.object({
  email: z.string().trim().email().max(150),
  password: z.string().min(6).max(72),
});
const registerSchema = credentialsSchema.extend({ name: z.string().trim().min(2).max(100) });
const productSchema = z.object({
  name: z.string().trim().min(2).max(150),
  description: z.string().trim().max(2000).default(''),
  price: z.coerce.number().min(0),
  image: z.string().trim().min(1).max(500),
  stock: z.coerce.number().int().min(0),
  categoryId: z.coerce.number().int().positive(),
});
const orderSchema = z.object({
  customer: z.object({
    name: z.string().trim().min(2).max(100),
    email: z.string().trim().email().max(150),
    address: z.string().trim().min(5).max(300),
  }),
  items: z.array(z.object({ productId: z.coerce.number().int().positive(), quantity: z.coerce.number().int().min(1).max(99) })).min(1).max(50),
});
const statusSchema = z.object({ status: z.enum(['pending', 'confirmed', 'shipping', 'completed', 'cancelled']) });

const productSelect = `
  SELECT p.id, p.name, p.description, p.price, p.image, p.stock,
         p.category_id AS categoryId, c.name AS categoryName, c.slug AS categorySlug,
         p.created_at AS createdAt, p.updated_at AS updatedAt
  FROM products p JOIN categories c ON c.id = p.category_id
`;

function getOrder(id: number) {
  const order = db.prepare('SELECT id, code, customer_name AS customerName, customer_email AS customerEmail, customer_address AS customerAddress, total, status, created_at AS createdAt, updated_at AS updatedAt FROM orders WHERE id = ?').get(id);
  if (!order) return null;
  const items = db.prepare('SELECT product_id AS productId, product_name AS productName, price, quantity, subtotal FROM order_items WHERE order_id = ?').all(id);
  return { ...(order as object), items };
}

app.get('/api/health', (_request, response) => success(response, 'Server is healthy.', { service: 'learts-api', timestamp: new Date().toISOString() }));

app.post('/api/auth/register', (request, response, next) => {
  try {
    const input = registerSchema.parse(request.body);
    const result = db.prepare('INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)').run(input.name, input.email.toLowerCase(), bcrypt.hashSync(input.password, 12), 'admin');
    const user: TokenUser = { id: Number(result.lastInsertRowid), email: input.email.toLowerCase(), role: 'admin' };
    return success(response, 'Registration successful.', { token: createToken(user), user: { ...user, name: input.name } }, 201);
  } catch (error) { next(error); }
});

app.post('/api/auth/login', (request, response, next) => {
  try {
    const input = credentialsSchema.parse(request.body);
    const user = db.prepare('SELECT id, name, email, password, role FROM users WHERE email = ?').get(input.email.toLowerCase()) as { id: number; name: string; email: string; password: string; role: 'admin' | 'user' } | undefined;
    if (!user || !bcrypt.compareSync(input.password, user.password)) return failure(response, 'Email or password is incorrect.', 401);
    const tokenUser: TokenUser = { id: user.id, email: user.email, role: user.role };
    return success(response, 'Login successful.', { token: createToken(tokenUser), user: { id: user.id, name: user.name, email: user.email, role: user.role } });
  } catch (error) { next(error); }
});

app.get('/api/auth/me', authenticate, (_request, response) => {
  const tokenUser = response.locals.user as TokenUser;
  const user = db.prepare('SELECT id, name, email, role, created_at AS createdAt FROM users WHERE id = ?').get(tokenUser.id);
  return success(response, 'Current user loaded.', user);
});

app.get('/api/categories', (_request, response) => success(response, 'Categories loaded.', db.prepare('SELECT id, name, slug FROM categories ORDER BY name').all()));

app.get('/api/products', (request, response, next) => {
  try {
    const page = Math.max(Number(request.query.page) || 1, 1);
    const limit = Math.min(Math.max(Number(request.query.limit) || 20, 1), 100);
    const search = String(request.query.search ?? '').trim();
    const category = String(request.query.category ?? '').trim();
    const conditions: string[] = [];
    const params: Array<string | number> = [];
    if (search) { conditions.push('(p.name LIKE ? OR p.description LIKE ?)'); params.push(`%${search}%`, `%${search}%`); }
    if (category) { conditions.push('c.slug = ?'); params.push(category); }
    const where = conditions.length ? ` WHERE ${conditions.join(' AND ')}` : '';
    const total = (db.prepare(`SELECT COUNT(*) AS count FROM products p JOIN categories c ON c.id=p.category_id${where}`).get(...params) as { count: number }).count;
    const products = db.prepare(`${productSelect}${where} ORDER BY p.id DESC LIMIT ? OFFSET ?`).all(...params, limit, (page - 1) * limit);
    return success(response, 'Products loaded.', { products, pagination: { page, limit, total, totalPages: Math.ceil(total / limit) } });
  } catch (error) { next(error); }
});

app.get('/api/products/:id', (request, response, next) => {
  try {
    const id = z.coerce.number().int().positive().parse(request.params.id);
    const product = db.prepare(`${productSelect} WHERE p.id = ?`).get(id);
    return product ? success(response, 'Product loaded.', product) : failure(response, 'Product not found.', 404);
  } catch (error) { next(error); }
});

app.post('/api/admin/products', authenticate, requireAdmin, (request, response, next) => {
  try {
    const input = productSchema.parse(request.body);
    const result = db.prepare('INSERT INTO products (name, description, price, image, stock, category_id) VALUES (?, ?, ?, ?, ?, ?)').run(input.name, input.description, input.price, input.image, input.stock, input.categoryId);
    return success(response, 'Product created.', db.prepare(`${productSelect} WHERE p.id = ?`).get(result.lastInsertRowid), 201);
  } catch (error) { next(error); }
});

app.put('/api/admin/products/:id', authenticate, requireAdmin, (request, response, next) => {
  try {
    const id = z.coerce.number().int().positive().parse(request.params.id);
    const input = productSchema.parse(request.body);
    const result = db.prepare("UPDATE products SET name=?, description=?, price=?, image=?, stock=?, category_id=?, updated_at=CURRENT_TIMESTAMP WHERE id=?").run(input.name, input.description, input.price, input.image, input.stock, input.categoryId, id);
    return result.changes ? success(response, 'Product updated.', db.prepare(`${productSelect} WHERE p.id = ?`).get(id)) : failure(response, 'Product not found.', 404);
  } catch (error) { next(error); }
});

app.delete('/api/admin/products/:id', authenticate, requireAdmin, (request, response, next) => {
  try {
    const id = z.coerce.number().int().positive().parse(request.params.id);
    const result = db.prepare('DELETE FROM products WHERE id = ?').run(id);
    return result.changes ? success(response, 'Product deleted.', { id }) : failure(response, 'Product not found.', 404);
  } catch (error) { next(error); }
});

const createOrder = db.transaction((input: z.infer<typeof orderSchema>) => {
  const getProduct = db.prepare('SELECT id, name, price, stock FROM products WHERE id = ?');
  const products = input.items.map((item) => ({ item, product: getProduct.get(item.productId) as { id: number; name: string; price: number; stock: number } | undefined }));
  for (const { item, product } of products) {
    if (!product) throw new Error(`Product ${item.productId} does not exist.`);
    if (product.stock < item.quantity) throw new Error(`${product.name} only has ${product.stock} item(s) in stock.`);
  }
  const total = Number(products.reduce((sum, row) => sum + row.product!.price * row.item.quantity, 0).toFixed(2));
  const code = `ORD-${Date.now()}`;
  const orderResult = db.prepare('INSERT INTO orders (code, customer_name, customer_email, customer_address, total) VALUES (?, ?, ?, ?, ?)').run(code, input.customer.name, input.customer.email, input.customer.address, total);
  const orderId = Number(orderResult.lastInsertRowid);
  const addItem = db.prepare('INSERT INTO order_items (order_id, product_id, product_name, price, quantity, subtotal) VALUES (?, ?, ?, ?, ?, ?)');
  const reduceStock = db.prepare('UPDATE products SET stock = stock - ?, updated_at=CURRENT_TIMESTAMP WHERE id = ?');
  products.forEach(({ item, product }) => { const subtotal = Number((product!.price * item.quantity).toFixed(2)); addItem.run(orderId, product!.id, product!.name, product!.price, item.quantity, subtotal); reduceStock.run(item.quantity, product!.id); });
  return getOrder(orderId);
});

app.post('/api/orders', (request, response, next) => {
  try { return success(response, 'Order created and stock updated.', createOrder(orderSchema.parse(request.body)), 201); }
  catch (error) { if (error instanceof Error && (error.message.includes('stock') || error.message.includes('exist'))) return failure(response, error.message, 400); next(error); }
});

app.get('/api/admin/orders', authenticate, requireAdmin, (_request, response) => {
  const orders = db.prepare('SELECT id, code, customer_name AS customerName, customer_email AS customerEmail, total, status, created_at AS createdAt FROM orders ORDER BY id DESC').all();
  return success(response, 'Orders loaded.', orders);
});

app.get('/api/admin/orders/:id', authenticate, requireAdmin, (request, response, next) => {
  try { const order = getOrder(z.coerce.number().int().positive().parse(request.params.id)); return order ? success(response, 'Order loaded.', order) : failure(response, 'Order not found.', 404); }
  catch (error) { next(error); }
});

app.put('/api/admin/orders/:id/status', authenticate, requireAdmin, (request, response, next) => {
  try {
    const id = z.coerce.number().int().positive().parse(request.params.id);
    const { status } = statusSchema.parse(request.body);
    const result = db.prepare('UPDATE orders SET status=?, updated_at=CURRENT_TIMESTAMP WHERE id=?').run(status, id);
    return result.changes ? success(response, 'Order status updated.', getOrder(id)) : failure(response, 'Order not found.', 404);
  } catch (error) { next(error); }
});

app.use((_request, response) => failure(response, 'API route not found.', 404));
app.use((error: unknown, _request: Request, response: Response, next: NextFunction) => {
  void next;
  if (error instanceof z.ZodError) return failure(response, 'Invalid request data.', 400, error.issues);
  if (error instanceof Error && error.message.includes('UNIQUE constraint')) return failure(response, 'Email or unique value already exists.', 409);
  if (error instanceof Error && error.message.includes('FOREIGN KEY constraint')) return failure(response, 'Referenced data is in use or does not exist.', 409);
  console.error(error);
  return failure(response, 'Internal server error.', 500);
});

app.listen(port, () => console.log(`Learts API running at http://localhost:${port}`));
