# Smart Hospital Management System

Dự án Hệ thống Quản lý Bệnh viện Thông minh (Smart Hospital).

---

## 📁 Cấu trúc dự án

```text
smart-hospital/
├── backend/            # Mã nguồn Backend (NestJS, TypeScript)
│   ├── src/
│   │   ├── modules/    # Các module chức năng (emr, hr, ...)
│   │   ├── app.module.ts
│   │   └── main.ts
│   └── package.json
├── frontend/           # Mã nguồn Frontend
├── docker-compose.yml  # Cấu hình Docker & các dịch vụ phụ trợ
└── README.md
```

---

## 🚀 Hướng dẫn chạy Backend

Backend được xây dựng bằng [NestJS](https://nestjs.com/) (Node.js framework) và TypeScript.

### 1. Yêu cầu môi trường (Prerequisites)

- **Node.js**: Phiên bản `18.x` hoặc `20.x` trở lên (khuyên dùng bản LTS)
- **npm** (hoặc `yarn` / `pnpm`)

Kiểm tra phiên bản Node.js và npm trên máy của bạn:

```bash
node -v
npm -v
```

---

### 2. Cài đặt các gói phụ thuộc (Dependencies)

Mở terminal tại thư mục gốc của dự án hoặc di chuyển vào thư mục `backend`:

```bash
cd backend
npm install
```

---

### 3. Cấu hình biến môi trường (Environment Variables)

Mặc định ứng dụng chạy ở cổng:
- `PORT`: `3000` (mặc định nếu không thiết lập biến môi trường)

Nếu cần cấu hình thêm, tạo file `.env` bên trong thư mục `backend/`:
```env
PORT=3000
```

---

### 4. Khởi chạy ứng dụng Backend

Tại thư mục `backend/`, bạn có thể chạy các lệnh sau:

#### a. Chế độ phát triển (Development / Watch mode - khuyến nghị khi code)
Lệnh này sẽ tự động tải lại (hot-reload) khi phát hiện thay đổi trong mã nguồn:

```bash
npm run start:dev
```

#### b. Chế độ thông thường (Standard start)
```bash
npm run start
```

#### c. Chế độ Debug
```bash
npm run start:debug
```

#### d. Chế độ Production (Build & Run)
Trước khi chạy production, cần build mã nguồn sang JavaScript:

```bash
# 1. Build mã nguồn
npm run build

# 2. Chạy ứng dụng từ bản build
npm run start:prod
```

---

### 5. Kiểm tra Backend hoạt động

Sau khi chạy thành công lệnh `npm run start:dev`, ứng dụng sẽ lắng nghe tại:
- **Địa chỉ:** `http://localhost:3000`
- Bạn có thể kiểm tra nhanh qua trình duyệt hoặc terminal:
  ```bash
  curl http://localhost:3000
  ```

---

### 6. Các lệnh hữu ích khác

Tại thư mục `backend/`:

- **Kiểm tra và sửa lỗi định dạng code (Linting):**
  ```bash
  npm run lint
  ```

- **Format mã nguồn bằng Prettier:**
  ```bash
  npm run format
  ```

- **Chạy kiểm thử (Tests):**
  ```bash
  # Unit tests
  npm run test

  # Watch tests
  npm run test:watch

  # Kiểm tra độ bao phủ kiểm thử (Coverage)
  npm run test:cov

  # E2E tests
  npm run test:e2e
  ```
