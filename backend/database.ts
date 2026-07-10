import bcrypt from 'bcryptjs';
import Database from 'better-sqlite3';
import { mkdirSync } from 'node:fs';
import path from 'node:path';

const dataDirectory = path.resolve(process.cwd(), 'backend/data');
mkdirSync(dataDirectory, { recursive: true });

export const db = new Database(process.env.DATABASE_PATH ?? path.join(dataDirectory, 'learts.sqlite'));
db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    role TEXT NOT NULL DEFAULT 'admin' CHECK(role IN ('admin', 'user')),
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE,
    slug TEXT NOT NULL UNIQUE
  );

  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT NOT NULL DEFAULT '',
    price REAL NOT NULL CHECK(price >= 0),
    image TEXT NOT NULL,
    stock INTEGER NOT NULL DEFAULT 0 CHECK(stock >= 0),
    category_id INTEGER NOT NULL,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE RESTRICT
  );

  CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    code TEXT NOT NULL UNIQUE,
    customer_name TEXT NOT NULL,
    customer_email TEXT NOT NULL,
    customer_address TEXT NOT NULL,
    total REAL NOT NULL CHECK(total >= 0),
    status TEXT NOT NULL DEFAULT 'pending' CHECK(status IN ('pending','confirmed','shipping','completed','cancelled')),
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS order_items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    order_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    product_name TEXT NOT NULL,
    price REAL NOT NULL,
    quantity INTEGER NOT NULL CHECK(quantity > 0),
    subtotal REAL NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE RESTRICT
  );
`);

const categorySeeds = [
  ['Gift ideas', 'gift-ideas'],
  ['Home Decor', 'home-decor'],
  ['Kids & Babies', 'kids-babies'],
  ['Kitchen', 'kitchen'],
];
const insertCategory = db.prepare('INSERT OR IGNORE INTO categories (name, slug) VALUES (?, ?)');
categorySeeds.forEach((category) => insertCategory.run(...category));

const adminEmail = 'admin@gmail.com';
const adminPasswordHash = bcrypt.hashSync('123456', 12);
db.prepare(`
  INSERT INTO users (name, email, password, role)
  VALUES (?, ?, ?, 'admin')
  ON CONFLICT(email) DO UPDATE SET
    name = excluded.name,
    password = excluded.password,
    role = 'admin'
`).run('Learts Admin', adminEmail, adminPasswordHash);

const productCount = (db.prepare('SELECT COUNT(*) AS count FROM products').get() as { count: number }).count;
if (productCount === 0) {
  const categories = db.prepare('SELECT id, slug FROM categories').all() as Array<{ id: number; slug: string }>;
  const categoryId = Object.fromEntries(categories.map((category) => [category.slug, category.id]));
  const products = [
    ['Boho Beard Mug', 'Handmade ceramic beard mug.', 39, '/assets/images/product/s328/product-1.webp', 25, categoryId['gift-ideas']],
    ['Motorized Tricycle', 'A nostalgic decorative tricycle.', 35, '/assets/images/product/s328/product-2.webp', 18, categoryId['kids-babies']],
    ['Walnut Cutting Board', 'Solid walnut cutting board.', 100, '/assets/images/product/s328/product-3.webp', 12, categoryId.kitchen],
    ['Pizza Plate Tray', 'Minimal wooden pizza serving tray.', 22, '/assets/images/product/s328/product-4.webp', 20, categoryId.kitchen],
    ['Minimalist Ceramic Pot', 'Minimalist pot for modern homes.', 120, '/assets/images/product/s328/product-5.webp', 8, categoryId['home-decor']],
    ['Clear Silicate Teapot', 'Clear handcrafted teapot.', 140, '/assets/images/product/s328/product-6.webp', 10, categoryId.kitchen],
    ['Lucky Wooden Elephant', 'Carved wooden elephant ornament.', 35, '/assets/images/product/s328/product-7.webp', 15, categoryId['gift-ideas']],
    ['Decorative Christmas Fox', 'Decorative wooden Christmas fox.', 50, '/assets/images/product/s328/product-8.webp', 14, categoryId['gift-ideas']],
    ['Aluminum Equestrian', 'Aluminum equestrian decoration.', 100, '/assets/images/product/s328/product-9.webp', 9, categoryId['home-decor']],
    ['Fish Cut Out Set', 'Set of decorative fish cut-outs.', 9, '/assets/images/product/s328/product-10.webp', 40, categoryId['home-decor']],
  ];
  const insertProduct = db.prepare(
    'INSERT INTO products (name, description, price, image, stock, category_id) VALUES (?, ?, ?, ?, ?, ?)',
  );
  const seedProducts = db.transaction(() => products.forEach((product) => insertProduct.run(...product)));
  seedProducts();
}
