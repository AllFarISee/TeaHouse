# TeaHouse - Full Stack Web Application

TeaHouse adalah aplikasi **Full-Stack Web** yang dibangun sebagai tugas Ujian Akhir Semester mata kuliah **Pemrograman Web 2**. Aplikasi ini merupakan sistem manajemen toko teh (*Tea House*) yang memungkinkan pengguna melihat daftar produk teh, sedangkan admin dapat mengelola kategori dan produk secara lengkap melalui dashboard

---

## Profile

**Nama :** Alfarisi Azhar
**NIM :** 23552011180
**Kelas :** TIF K 23 B
**Mata Kuliah :** Pemrograman Web 2

---

## Fitur

### Customer

- 🏠 Landing Page
- 🍵 Daftar Produk
- 🔍 Pencarian Produk
- 📂 Filter Produk berdasarkan Kategori

### Admin

- 📊 Dashboard
- 📁 CRUD Category
- 🍃 CRUD Product
- 🖼 Upload Gambar Produk

---

## Teknologi yang Digunakan

### Frontend

- React JS
- React Router DOM
- Axios
- Tailwind CSS
- Vite

### Backend

- Node.js
- Express.js
- Prisma ORM
- Multer

### Database

- PostgreSQL

---

## Struktur Project

```
TeaHouse
│
├── backend
│   ├── prisma
│   ├── src
│   │   ├── controllers
│   │   ├── routes
│   │   ├── middleware
│   │   ├── uploads
│   │   ├── config
│   │   └── app.js
│   └── package.json
│
└── frontend
    ├── src
    │   ├── components
    │   ├── layouts
    │   ├── pages
    │   ├── routes
    │   ├── services
    │   └── App.jsx
    └── package.json
```

---

## Database

Database menggunakan PostgreSQL dengan Prisma ORM

Relasi antar tabel:

```
Category
    │
    │ 1
    │
    └──────────< Product
```

### Tabel Category

| Field | Type |
|-------|------|
| id | Integer |
| name | String |

### Tabel Product

| Field | Type |
|-------|------|
| id | Integer |
| name | String |
| description | String |
| price | Integer |
| stock | Integer |
| image | String |
| categoryId | Integer |

---

## Cara Menjalankan Project

### 1. Clone Repository

```bash
git clone <repository-url>
```

---

### 2. Install Dependency Backend

```bash
cd backend

npm install
```

---

### 3. Install Dependency Frontend

```bash
cd frontend

npm install
```

---

### 4. Konfigurasi Database

Buat database PostgreSQL

```
teahouse_db
```

Lalu jalankan migration Prisma

```bash
npx prisma migrate dev
```

---

### 5. Jalankan Backend

```bash
npm run dev
```

Backend berjalan pada

```
http://localhost:3000
```

---

### 6. Jalankan Frontend

```bash
npm run dev
```

Frontend berjalan pada

```
http://localhost:5173
```

---

## API Endpoint

### Category

| Method | Endpoint | Keterangan |
|---------|----------|------------|
| GET | /categories | Semua kategori |
| GET | /categories/:id | Detail kategori |
| POST | /categories | Tambah kategori |
| PUT | /categories/:id | Edit kategori |
| DELETE | /categories/:id | Hapus kategori |

---

### Product

| Method | Endpoint | Keterangan |
|---------|----------|------------|
| GET | /products | Semua produk |
| GET | /products/:id | Detail produk |
| POST | /products | Tambah produk |
| PUT | /products/:id | Edit produk |
| DELETE | /products/:id | Hapus produk |

---

## Screenshot

### Landing Page

<img width="670" height="442" alt="Main Page" src="https://github.com/user-attachments/assets/2c2abdac-324e-4975-aa2e-04effab32096" />

<img width="670" height="443" alt="Main Page 2" src="https://github.com/user-attachments/assets/44d231c5-8dd4-40cc-94dc-336a7cdac8a9" />

<img width="671" height="440" alt="Main Page 3" src="https://github.com/user-attachments/assets/4c610158-9003-4673-8054-ecdce0f089fd" />



---

### Product

<img width="671" height="441" alt="Products" src="https://github.com/user-attachments/assets/685688ac-2864-4d2d-a05a-0a0d9b71a527" />

---

### Dashboard Admin

<img width="671" height="442" alt="Dashboard info" src="https://github.com/user-attachments/assets/5b045d46-e09c-4bad-b094-518d6f4dd826" />

---

### CRUD Category

<img width="673" height="442" alt="Category Management" src="https://github.com/user-attachments/assets/f787d9fb-2d90-44ef-8f44-d4b6174b312d" />

---

### CRUD Product

<img width="673" height="443" alt="Product Management" src="https://github.com/user-attachments/assets/0cac3bd8-96ad-4dd9-b01f-5999f39e4551" />

---

## Tujuan Aplikasi

Aplikasi TeaHouse dibuat untuk mempermudah pengelolaan data produk teh dan kategori produk secara digital. Selain itu, aplikasi ini memberikan pengalaman bagi pengguna untuk melihat daftar produk dengan tampilan yang sederhana, responsif, dan mudah digunakan
