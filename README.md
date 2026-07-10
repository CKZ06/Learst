# Learts React + Express + Supabase

## Supabase database

Backend lưu users, categories, products và orders trên Supabase PostgreSQL.

1. Tạo project tại Supabase.
2. Trong Dashboard chọn **Connect** → **Session pooler** và sao chép connection string.
3. Sao chép `.env.example` thành `.env`.
4. Điền `SUPABASE_DATABASE_URL` và đổi `JWT_SECRET` trong `.env`.
5. Chạy `npm run dev`. Backend tự tạo bảng, dữ liệu mẫu và tài khoản admin.

```env
SUPABASE_DATABASE_URL=postgresql://postgres.PROJECT_REF:PASSWORD@aws-0-REGION.pooler.supabase.com:5432/postgres
JWT_SECRET=your-long-random-secret
```

Không commit `.env`; file này đã được thêm vào `.gitignore`.

Dự án thương mại điện tử gồm React/Vite frontend và Express/SQLite backend.

## Chạy dự án

```bash
npm install
npm run dev:full
```

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:3001`
- Admin login: `http://localhost:5173/admin/login`

Tài khoản admin mặc định:

```text
Email: admin@gmail.com
Password: 123456
```

Mật khẩu được bcrypt trước khi lưu vào SQLite.

## Thư mục Backend

Toàn bộ backend và dữ liệu nằm trong thư mục `backend/`:

```text
backend/
├── index.ts
├── database.ts
├── auth.ts
├── http.ts
├── tsconfig.json
└── data/
    └── learts.sqlite
```

## API Authentication

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/me` — Bearer Token

## API Public

- `GET /api/categories`
- `GET /api/products?page=1&limit=20&search=&category=`
- `GET /api/products/:id`
- `POST /api/orders`

## API Admin — yêu cầu JWT

- `POST /api/admin/products`
- `PUT /api/admin/products/:id`
- `DELETE /api/admin/products/:id`
- `GET /api/admin/orders`
- `GET /api/admin/orders/:id`
- `PUT /api/admin/orders/:id/status`

Header xác thực:

```text
Authorization: Bearer <token>
```

## Admin UI

- `/admin/login`
- `/admin/register`
- `/admin/dashboard`
- `/admin/products`
- `/admin/products/create`
- `/admin/products/:id/edit`
- `/admin/orders`

## Kiểm tra

```bash
npm run check
```

Lệnh trên chạy ESLint, TypeScript frontend/backend và production build.
