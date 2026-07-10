import bcrypt from 'bcryptjs';
import cors from 'cors';
import express, { type NextFunction, type Request, type Response } from 'express';
import helmet from 'helmet';
import { z } from 'zod';
import { authenticate, createToken, requireAdmin, type TokenUser } from './auth.js';
import { db, initializeDatabase } from './database.js';
import { failure, success } from './http.js';

const app = express();
const port = Number(process.env.PORT ?? 3001);
app.use(helmet({ crossOriginResourcePolicy: { policy: 'cross-origin' } }));
app.use(cors({ origin: process.env.CLIENT_ORIGIN?.split(',') ?? true }));
app.use(express.json({ limit: '100kb' }));

const credentialsSchema = z.object({ email: z.string().trim().email().max(150), password: z.string().min(6).max(72) });
const registerSchema = credentialsSchema.extend({ name: z.string().trim().min(2).max(100) });
const productSchema = z.object({
  name: z.string().trim().min(2).max(150), description: z.string().trim().max(2000).default(''),
  price: z.coerce.number().min(0), image: z.string().trim().min(1).max(500),
  stock: z.coerce.number().int().min(0), categoryId: z.coerce.number().int().positive(),
});
const orderSchema = z.object({
  customer: z.object({ name: z.string().trim().min(2).max(100), email: z.string().trim().email().max(150), address: z.string().trim().min(5).max(300) }),
  items: z.array(z.object({ productId: z.coerce.number().int().positive(), quantity: z.coerce.number().int().min(1).max(99) })).min(1).max(50),
});
const statusSchema = z.object({ status: z.enum(['pending', 'confirmed', 'shipping', 'completed', 'cancelled']) });

const productSelect = `SELECT p.id, p.name, p.description, p.price::float8 AS price, p.image, p.stock,
  p.category_id AS "categoryId", c.name AS "categoryName", c.slug AS "categorySlug",
  p.created_at AS "createdAt", p.updated_at AS "updatedAt"
  FROM products p JOIN categories c ON c.id = p.category_id`;
const orderSelect = `SELECT id, code, customer_name AS "customerName", customer_email AS "customerEmail",
  customer_address AS "customerAddress", total::float8 AS total, status,
  created_at AS "createdAt", updated_at AS "updatedAt" FROM orders`;

async function getOrder(id: number) {
  const { rows } = await db.query(`${orderSelect} WHERE id = $1`, [id]);
  if (!rows[0]) return null;
  const items = await db.query(`SELECT product_id AS "productId", product_name AS "productName",
    price::float8 AS price, quantity, subtotal::float8 AS subtotal FROM order_items WHERE order_id = $1`, [id]);
  return { ...rows[0], items: items.rows };
}

app.get('/api/health', async (_request, response, next) => {
  try { await db.query('SELECT 1'); return success(response, 'Server is healthy.', { service: 'learts-api-supabase', timestamp: new Date().toISOString() }); }
  catch (error) { next(error); }
});

app.post('/api/auth/register', async (request, response, next) => {
  try {
    const input = registerSchema.parse(request.body);
    const { rows } = await db.query<{ id: number }>(
      `INSERT INTO users (name,email,password,role) VALUES ($1,$2,$3,'user') RETURNING id`,
      [input.name, input.email.toLowerCase(), await bcrypt.hash(input.password, 12)],
    );
    const user: TokenUser = { id: Number(rows[0].id), email: input.email.toLowerCase(), role: 'user' };
    return success(response, 'Registration successful.', { token: createToken(user), user: { ...user, name: input.name } }, 201);
  } catch (error) { next(error); }
});

app.post('/api/auth/login', async (request, response, next) => {
  try {
    const input = credentialsSchema.parse(request.body);
    const { rows } = await db.query<{ id: number; name: string; email: string; password: string; role: 'admin' | 'user' }>(
      'SELECT id,name,email,password,role FROM users WHERE email=$1', [input.email.toLowerCase()],
    );
    const user = rows[0];
    if (!user || !(await bcrypt.compare(input.password, user.password))) return failure(response, 'Email or password is incorrect.', 401);
    const tokenUser: TokenUser = { id: Number(user.id), email: user.email, role: user.role };
    return success(response, 'Login successful.', { token: createToken(tokenUser), user: { ...tokenUser, name: user.name } });
  } catch (error) { next(error); }
});

app.get('/api/auth/me', authenticate, async (_request, response, next) => {
  try {
    const user = response.locals.user as TokenUser;
    const { rows } = await db.query('SELECT id,name,email,role,created_at AS "createdAt" FROM users WHERE id=$1', [user.id]);
    return success(response, 'Current user loaded.', rows[0]);
  } catch (error) { next(error); }
});

app.get('/api/categories', async (_request, response, next) => {
  try { const { rows } = await db.query('SELECT id,name,slug FROM categories ORDER BY name'); return success(response, 'Categories loaded.', rows); }
  catch (error) { next(error); }
});

app.get('/api/products', async (request, response, next) => {
  try {
    const page = Math.max(Number(request.query.page) || 1, 1);
    const limit = Math.min(Math.max(Number(request.query.limit) || 20, 1), 100);
    const search = String(request.query.search ?? '').trim();
    const category = String(request.query.category ?? '').trim();
    const conditions: string[] = [];
    const params: Array<string | number> = [];
    if (search) { params.push(`%${search}%`); conditions.push(`(p.name ILIKE $${params.length} OR p.description ILIKE $${params.length})`); }
    if (category) { params.push(category); conditions.push(`c.slug = $${params.length}`); }
    const where = conditions.length ? ` WHERE ${conditions.join(' AND ')}` : '';
    const countResult = await db.query<{ count: string }>(`SELECT COUNT(*)::text AS count FROM products p JOIN categories c ON c.id=p.category_id${where}`, params);
    const total = Number(countResult.rows[0].count);
    const queryParams = [...params, limit, (page - 1) * limit];
    const products = await db.query(`${productSelect}${where} ORDER BY p.id DESC LIMIT $${params.length + 1} OFFSET $${params.length + 2}`, queryParams);
    return success(response, 'Products loaded.', { products: products.rows, pagination: { page, limit, total, totalPages: Math.ceil(total / limit) } });
  } catch (error) { next(error); }
});

app.get('/api/products/:id', async (request, response, next) => {
  try {
    const id = z.coerce.number().int().positive().parse(request.params.id);
    const { rows } = await db.query(`${productSelect} WHERE p.id=$1`, [id]);
    return rows[0] ? success(response, 'Product loaded.', rows[0]) : failure(response, 'Product not found.', 404);
  } catch (error) { next(error); }
});

app.post('/api/admin/products', authenticate, requireAdmin, async (request, response, next) => {
  try {
    const input = productSchema.parse(request.body);
    const inserted = await db.query<{ id: number }>(`INSERT INTO products (name,description,price,image,stock,category_id)
      VALUES ($1,$2,$3,$4,$5,$6) RETURNING id`, [input.name, input.description, input.price, input.image, input.stock, input.categoryId]);
    const { rows } = await db.query(`${productSelect} WHERE p.id=$1`, [inserted.rows[0].id]);
    return success(response, 'Product created.', rows[0], 201);
  } catch (error) { next(error); }
});

app.put('/api/admin/products/:id', authenticate, requireAdmin, async (request, response, next) => {
  try {
    const id = z.coerce.number().int().positive().parse(request.params.id);
    const input = productSchema.parse(request.body);
    const result = await db.query(`UPDATE products SET name=$1,description=$2,price=$3,image=$4,stock=$5,category_id=$6,updated_at=NOW() WHERE id=$7 RETURNING id`,
      [input.name, input.description, input.price, input.image, input.stock, input.categoryId, id]);
    if (!result.rowCount) return failure(response, 'Product not found.', 404);
    const { rows } = await db.query(`${productSelect} WHERE p.id=$1`, [id]);
    return success(response, 'Product updated.', rows[0]);
  } catch (error) { next(error); }
});

app.delete('/api/admin/products/:id', authenticate, requireAdmin, async (request, response, next) => {
  try {
    const id = z.coerce.number().int().positive().parse(request.params.id);
    const result = await db.query('DELETE FROM products WHERE id=$1 RETURNING id', [id]);
    return result.rowCount ? success(response, 'Product deleted.', { id }) : failure(response, 'Product not found.', 404);
  } catch (error) { next(error); }
});

app.post('/api/orders', authenticate, async (request, response, next) => {
  const client = await db.connect();
  try {
    const input = orderSchema.parse(request.body);
    await client.query('BEGIN');
    const productIds = input.items.map((item) => item.productId);
    const productResult = await client.query<{ id: number; name: string; price: number; stock: number }>(
      'SELECT id,name,price::float8 AS price,stock FROM products WHERE id=ANY($1::bigint[]) FOR UPDATE', [productIds],
    );
    const productMap = new Map(productResult.rows.map((product) => [Number(product.id), product]));
    for (const item of input.items) {
      const product = productMap.get(item.productId);
      if (!product) throw new Error(`Product ${item.productId} does not exist.`);
      if (product.stock < item.quantity) throw new Error(`${product.name} only has ${product.stock} item(s) in stock.`);
    }
    const total = Number(input.items.reduce((sum, item) => sum + productMap.get(item.productId)!.price * item.quantity, 0).toFixed(2));
    const code = `ORD-${Date.now()}`;
    const currentUser = response.locals.user as TokenUser;
    const orderResult = await client.query<{ id: number }>(`INSERT INTO orders (code,customer_name,customer_email,customer_address,total,user_id)
      VALUES ($1,$2,$3,$4,$5,$6) RETURNING id`, [code, input.customer.name, input.customer.email, input.customer.address, total, currentUser.id]);
    const orderId = Number(orderResult.rows[0].id);
    for (const item of input.items) {
      const product = productMap.get(item.productId)!;
      const subtotal = Number((product.price * item.quantity).toFixed(2));
      await client.query(`INSERT INTO order_items (order_id,product_id,product_name,price,quantity,subtotal) VALUES ($1,$2,$3,$4,$5,$6)`,
        [orderId, product.id, product.name, product.price, item.quantity, subtotal]);
      await client.query('UPDATE products SET stock=stock-$1,updated_at=NOW() WHERE id=$2', [item.quantity, product.id]);
    }
    await client.query('COMMIT');
    return success(response, 'Order created and stock updated.', await getOrder(orderId), 201);
  } catch (error) {
    await client.query('ROLLBACK');
    if (error instanceof Error && (error.message.includes('stock') || error.message.includes('exist'))) return failure(response, error.message, 400);
    next(error);
  } finally { client.release(); }
});

app.get('/api/account/orders', authenticate, async (_request, response, next) => {
  try {
    const currentUser = response.locals.user as TokenUser;
    const { rows } = await db.query(`SELECT id,code,total::float8 AS total,status,created_at AS "createdAt"
      FROM orders WHERE user_id=$1 ORDER BY id DESC`, [currentUser.id]);
    return success(response, 'Customer orders loaded.', rows);
  } catch (error) { next(error); }
});

app.get('/api/admin/orders', authenticate, requireAdmin, async (_request, response, next) => {
  try {
    const { rows } = await db.query(`SELECT id,code,customer_name AS "customerName",customer_email AS "customerEmail",
      total::float8 AS total,status,created_at AS "createdAt" FROM orders ORDER BY id DESC`);
    return success(response, 'Orders loaded.', rows);
  } catch (error) { next(error); }
});

app.get('/api/admin/orders/:id', authenticate, requireAdmin, async (request, response, next) => {
  try { const order = await getOrder(z.coerce.number().int().positive().parse(request.params.id)); return order ? success(response, 'Order loaded.', order) : failure(response, 'Order not found.', 404); }
  catch (error) { next(error); }
});

app.put('/api/admin/orders/:id/status', authenticate, requireAdmin, async (request, response, next) => {
  try {
    const id = z.coerce.number().int().positive().parse(request.params.id);
    const { status } = statusSchema.parse(request.body);
    const result = await db.query('UPDATE orders SET status=$1,updated_at=NOW() WHERE id=$2 RETURNING id', [status, id]);
    return result.rowCount ? success(response, 'Order status updated.', await getOrder(id)) : failure(response, 'Order not found.', 404);
  } catch (error) { next(error); }
});

app.use((_request, response) => failure(response, 'API route not found.', 404));
app.use((error: unknown, _request: Request, response: Response, next: NextFunction) => {
  void next;
  if (error instanceof z.ZodError) return failure(response, 'Invalid request data.', 400, error.issues);
  const pgError = error as { code?: string };
  if (pgError.code === '23505') return failure(response, 'Email or unique value already exists.', 409);
  if (pgError.code === '23503') return failure(response, 'Referenced data is in use or does not exist.', 409);
  console.error(error);
  return failure(response, 'Internal server error.', 500);
});

initializeDatabase()
  .then(() => app.listen(port, () => console.log(`Learts API with Supabase running at http://localhost:${port}`)))
  .catch((error) => { console.error('Supabase initialization failed:', error); process.exitCode = 1; });
