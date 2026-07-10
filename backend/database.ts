import 'dotenv/config';
import bcrypt from 'bcryptjs';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import pg from 'pg';

const { Pool } = pg;
const connectionString = process.env.SUPABASE_DATABASE_URL;

if (!connectionString) {
  throw new Error('SUPABASE_DATABASE_URL is missing. Copy .env.example to .env and add your Supabase connection string.');
}

if (!/^postgres(?:ql)?:\/\/[^:]+:.+@[^:/]+:\d+\/.+/.test(connectionString)) {
  throw new Error(
    'SUPABASE_DATABASE_URL is invalid. In Supabase, open Connect > Session pooler and copy the complete URI beginning with postgresql://.',
  );
}

export const db = new Pool({
  connectionString,
  ssl: { rejectUnauthorized: process.env.SUPABASE_SSL_REJECT_UNAUTHORIZED === 'true' },
  max: 10,
  idleTimeoutMillis: 30_000,
});

export async function initializeDatabase() {
  const schemaPath = path.resolve(process.cwd(), 'backend/supabase-schema.sql');
  await db.query(await readFile(schemaPath, 'utf8'));

  const password = await bcrypt.hash('123456', 12);
  await db.query(
    `INSERT INTO users (name, email, password, role)
     VALUES ($1, $2, $3, 'admin')
     ON CONFLICT (email) DO UPDATE SET name = EXCLUDED.name, password = EXCLUDED.password, role = 'admin'`,
    ['Learts Admin', 'admin@gmail.com', password],
  );

  const { rows: countRows } = await db.query<{ count: string }>('SELECT COUNT(*)::text AS count FROM products');
  if (Number(countRows[0].count) > 0) return;

  const { rows: categories } = await db.query<{ id: number; slug: string }>('SELECT id, slug FROM categories');
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
  for (const product of products) {
    await db.query('INSERT INTO products (name, description, price, image, stock, category_id) VALUES ($1,$2,$3,$4,$5,$6)', product);
  }
}
