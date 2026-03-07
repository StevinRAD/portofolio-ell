# Language Switcher Implementation

## Fitur yang Telah Ditambahkan

Halaman portfolio Anda sekarang memiliki sistem pengubah bahasa lengkap yang mendukung:

### 1. **Toggle Bahasa Indonesia ↔ English**
   - Klik tombol **ID/EN** di bagian atas kiri (logo) untuk mengubah bahasa
   - Bahasa akan otomatis disimpan di browser (localStorage)
   - Bahasa akan tetap sama saat Anda membuka ulang halaman

### 2. **Terjemahan Lengkap Mencakup:**
   - Menu navigasi (Beranda, Tentang, Riwayat, Portfolio, Blog, Kontak)
   - Semua konten halaman About, Resume, Portfolio, Blog, dan Contact
   - Deskripsi pengalaman dan pendidikan
   - Placeholders form dan input
   - Chat widget dan pesan
   - Copyright dan social links

### 3. **File-File yang Ditambahkan:**
   - **js/lang.js** - File utama berisi:
     * Objek translations dengan semua terjemahan
     * Fungsi setLanguage() untuk mengubah bahasa
     * Fungsi toggleLanguage() untuk toggle ke bahasa lain
     * Penyimpanan preferensi bahasa di localStorage
   
   - **css/language-switcher.css** - Styling untuk logo toggle dengan:
     * Warna gradient orange
     * Efek hover interaktif
     * Animasi smooth transition

### 4. **Cara Kerja:**
   1. Halaman dimulai dengan bahasa yang disimpan (default: Indonesia)
   2. Klik logo di header → bahasa berubah
   3. Semua teks di halaman diperbarui secara real-time
   4. Preferensi disimpan otomatis

### 5. **Struktur Data Translation:**
   - Setiap elemen HTML yang perlu diterjemahkan memiliki atribut `data-lang-key`
   - File lang.js menyimpan mapping lengkap untuk ID → EN
   - Sistem otomatis mengganti konten berdasarkan key yang diberikan

## File yang Dimodifikasi

1. **index.html**
   - Ditambahkan link ke language-switcher.css
   - Ditambahkan script lang.js sebelum plugins.min.js
   - Logo diubah menjadi toggle button dengan onclick="toggleLanguage()"
   - Semua teks ditandai dengan data-lang-key attribute

2. **js/lang.js** (baru)
   - 250+ baris kode dengan lengkap untuk semua terjemahan

3. **css/language-switcher.css** (baru)
   - Styling untuk logo toggle

## Penggunaan Lanjutan

Jika Anda ingin menambah terjemahan baru:
1. Buka file `js/lang.js`
2. Tambahkan key baru di objek `translations.id` dan `translations.en`
3. Di HTML, tambahkan `data-lang-key="nama_key"` pada elemen yang ingin diterjemahkan

Contoh:
```javascript
// Di lang.js
id: {
    new_text: 'Teks baru Indonesia'
},
en: {
    new_text: 'New text in English'
}

// Di HTML
<p data-lang-key="new_text">Teks baru Indonesia</p>
```

## Browser Compatibility
- Chrome ✓
- Firefox ✓
- Safari ✓
- Edge ✓
- Mobile browsers ✓

Semua browser modern yang mendukung ES6 dan localStorage dapat menggunakan fitur ini.
