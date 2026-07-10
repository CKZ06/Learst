import { db, initializeDatabase } from './database.js';

const tables = ['users', 'categories', 'products', 'orders', 'order_items'] as const;

try {
  await initializeDatabase();
  const existing = await db.query<{ table_name: string }>(
    `SELECT table_name FROM information_schema.tables
     WHERE table_schema = 'public' AND table_name = ANY($1::text[])
     ORDER BY table_name`,
    [tables],
  );
  console.log('CONNECTED=true');
  console.log(`TABLES=${existing.rows.map((row) => row.table_name).join(',')}`);
  for (const table of tables) {
    if (existing.rows.some((row) => row.table_name === table)) {
      const result = await db.query<{ count: number }>(`SELECT COUNT(*)::int AS count FROM ${table}`);
      console.log(`${table.toUpperCase()}=${result.rows[0].count}`);
    }
  }
} catch (error) {
  const databaseError = error as { code?: string; message?: string };
  console.log('CONNECTED=false');
  console.log(`ERROR_CODE=${databaseError.code ?? 'UNKNOWN'}`);
  console.log(`ERROR_MESSAGE=${databaseError.message ?? 'Unknown database error'}`);
  process.exitCode = 1;
} finally {
  await db.end();
}
