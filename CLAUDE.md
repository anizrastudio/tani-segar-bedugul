# Catatan Proyek: Tani Segar Bedugul (proyek konsep)

File ini dibaca otomatis oleh Claude Code setiap kali proyek ini dibuka.

## 1. Tentang pemilik
- Pemilik: pebisnis pemula, **bukan programmer**. Jelaskan dalam **Bahasa Indonesia sederhana**. Kode tetap dalam bahasa Inggris.
- Pola kerja: **Claude yang menulis kode, pemilik yang memeriksa (review)**.

## 2. Aturan wajib sebelum commit
- **Jangan pernah commit atau push tanpa diminta.** Push ke `main` langsung tayang di GitHub Pages.
- Setelah mengubah file, beri ringkasan: file apa yang diubah, dan apa yang perlu dicek.
- Pemilik selalu: (1) membaca perubahan di Source Control, (2) menguji di browser, (3) baru commit.
- Jangan menghapus gambar atau video sebelum mencari pemakaiannya (Ctrl+Shift+F). Dulu pernah terjadi 404 karena hal ini.

## 3. Apa proyek ini
- Website **contoh (fiktif)** buatan Anizra Studio untuk portofolio: pemasok sayur dari Bedugul untuk hotel dan restoran.
- Tayang di: https://anizrastudio.github.io/tani-segar-bedugul/ (GitHub Pages).
- Wajib tetap ada:
  - `<meta name="robots" content="noindex">`
  - concept-bar di atas halaman
  - catatan "usaha fiktif" di footer
- Semua tombol WhatsApp menuju nomor Anizra Studio `628214222807` dengan pesan "…tertarik dengan website seperti contoh Tani Segar Bedugul."
- Link ke Anizra Studio memakai `https://anizrastudio.com/` (bukan github.io lagi).
- Prinsip jujur: tidak ada testimoni, angka, atau logo palsu yang terlihat nyata.

## 4. Aturan teknis
- HTML, CSS, dan JS biasa. Penamaan class memakai **BEM**. Warna dan ukuran memakai **CSS variables** di `:root`.
- **Mobile-first.** Blok `@media (min-width: 900px)` untuk laptop diletakkan di bagian bawah CSS.
- Warna:
  - Krem `#F7F3EA`.
  - Hijau `#2F6B3A` / `#24532D`.
  - Kuning `#E9A23B` **hanya untuk dekorasi**, bukan untuk teks di atas krem.
  - Teks pudar di latar gelap `#C9D0C0`.
- Font: **Bitter 700** untuk judul, **Figtree 400/600** untuk isi.
  - Harus cocok di `<link>` HTML dan variabel CSS.
  - Bitter hanya dimuat dalam ketebalan 700, jadi jangan pakai 600 untuk judul.
- Gambar: `assets/img/*-480.webp` dan `*-800.webp` dengan `srcset`, ditambah `width`/`height` dan lazy loading.
- Video hero (latar belakang tulisan hero):
  - `assets/video/hero-wide.mp4` untuk layar lebar.
  - `assets/video/hero-portrait.mp4` untuk HP, dipilih lewat `(min-aspect-ratio: 4/5)`.
  - Gambar cadangannya: `hero-wide-1280.webp` dan `hero-portrait-406.webp`. **Jangan dihapus.**
  - Video dimuat setelah halaman siap (`initHeroBackground`), berhenti saat tidak terlihat, dan punya tombol jeda.
- Animasi:
  - **Tidak ada animasi pada tulisan hero** (LCP).
  - Animasi muncul saat di-scroll dua arah lewat `initReveal()`.
  - Selalu hormati `prefers-reduced-motion`.

## 5. Jebakan yang pernah terjadi
- Folder bersarang (folder `tani-segar-bedugul` di dalam folder dengan nama yang sama) setelah mengekstrak zip.
- Website live terlihat belum berubah karena cache browser. Cek di Incognito atau tekan Ctrl+Shift+R.
- Lighthouse di laptop memberi skor rendah. Pakai **PageSpeed Insights**. Skor terakhir: 94.
