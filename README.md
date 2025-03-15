<<<<<<< HEAD
# Mini-Project---2-React-Dibimbing.id-
Register : eve.holt@reqres.in || pass : pistol Login    : eve.holt@reqres.in || pass : cityslicka 
=======
1️⃣ Project Title & Description
Mini Project 2 React - Frontend Web Development dibimbing bootcamp batch 21 
Tujuan dari proyek ini : Saya sedang mengembangkan sebuah aplikasi Frontend (WebDev) menggunakan React dengan integrasi API dari Reqres. Project ini memiliki beberapa milestone yang sudah dipenuhi, serta fitur-fitur dasar seperti login, registrasi, dan menampilkan data pengguna.

2️⃣ Features (Fitur yang Diimplementasi)
Autentikasi (Login & Register)
List User (dengan Search & Pagination)
Detail User Profile
Dark Mode & Light Mode
Responsive Layout (Mobile, Tablet, Desktop)
Breadcrumb Navigation
Dynamic Services Page
Counter Animation
Partners & Technologies Section


3️⃣ Technologies Used (Teknologi yang Digunakan)
Frontend: React + Vite & Tailwind CSS
State Management: React Hooks (useState, useEffect)
Routing: React Router DOM
API Handling: Axios
Icons & Animations: React Icons


4️⃣ API Used (Sumber Data API)
ReqRes API (https://reqres.in/)
/api/login → Autentikasi
/api/register → Registrasi
/api/users?page=1 & /api/users?page=2 → List User
/api/users/:id → Detail User

### 🔐 Login (/login)
- Menggunakan API `https://reqres.in/api/login`.
- **Validasi email & password** sebelum mengirim request.
- **Notifikasi error atau sukses** muncul dalam box login.
- Jika login berhasil, redirect ke **Landing Page**.
- Menggunakan session **localStorage** untuk menyimpan token akses.

### 📝 Register (/register)
- Menggunakan API `https://reqres.in/api/register`.
- **Validasi email & password** sebelum mengirim request.
- **Notifikasi error atau sukses** muncul dalam box register.
- Jika registrasi berhasil, redirect otomatis ke **Login Page**.

**parameter**

Register : eve.holt@reqres.in || pass : pistol
Login    : eve.holt@reqres.in || pass : cityslicka 

5️⃣ Breakdown Halaman
### 🏠 Home (Landing Page)
- Menampilkan section dengan tagline utama.
- Section layanan "Why Choose WebDev?" dengan Fa Icons.
- Menampilkan daftar layanan utama dengan deskripsi singkat.
- Menampilkan **Latest Blog / News Section** dengan ikon Fa Icons.
- Section **Animation** untuk statistik pencapaian (active developers, supported countries, experience).
- **Partners & Technologies Section** untuk menampilkan mitra dan teknologi yang digunakan.

### 👥 List Users (/list)
- Halaman ini by default (sebelum login) akan terprotect / protected route dan tidak bisa diakses sampai pengguna berhasil login dengan parameter login yang sesuai
- Menampilkan daftar pengguna yang diambil dari API ReqRes.
- **Fitur pencarian** untuk mencari user berdasarkan nama & pekerjaan.
- **Pagination langsung dari API** untuk navigasi halaman user.
- **Dark Mode Support** untuk tampilan gelap dan terang.
- **Breadcrumb Navigation** untuk menunjukkan posisi halaman.
- **Navigasi ke masing-masing ID bisa dengan klik "VIEW PROFILE" dan klik nama masing-masing User.**

### 👤 Profile User (/profile/:id)
- Menampilkan detail masing-masing user berdasarkan ID.
- Menampilkan **nama, avatar, email, pekerjaan & pengalaman**.
- Direct dari halaman **List Users** dengan klik pada nama user.
- **Breadcrumb Navigation** menampilkan jalur `Home / List / Profile`.



### 🛠️ Services (/services)
- Menampilkan daftar layanan yang ditawarkan.
- **Dark Mode Support** untuk tampilan lebih nyaman.
- CTA untuk menghubungi tim layanan melalui tombol **Get in Touch**.

### 🏷️ Breadcrumb Navigation (Semua Halaman Kecuali Home)
- Tampil di bawah navbar dan menunjukkan posisi halaman.
- Jika di halaman **Profile User**, breadcrumb akan menampilkan `Home / Users / Profile / "ID user".
>>>>>>> 6964954 (pertamax commit)
