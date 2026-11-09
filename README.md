# Tani Segar Bedugul (Proyek Konsep)

Contoh website kelompok tani sayur yang memasok hotel, restoran, dan kafe di Bali.
Dibuat oleh **Anizra Studio** sebagai proyek konsep. Nama usaha dan seluruh data di dalamnya **fiktif**.

## Struktur

```
index.html        Halaman utama (satu halaman)
css/styles.css    Semua gaya tampilan
js/main.js        Menu HP (buka/tutup)
assets/img/       Foto (menyusul)
```

## Bagian halaman

1. Pita "proyek konsep" dan header
2. Hero: judul, tombol Minta Penawaran, 3 fakta singkat
3. Komoditas: 6 kartu (kemasan, kapasitas per minggu, ketersediaan)
4. Siap Pasok: jadwal kirim, jam tiba, area, minimal pesanan, pembayaran, standar mutu
5. Proses: panen, sortir dan kemas, kirim
6. Tentang: cerita singkat, 4 angka, dan "Janji kami kepada dapur Anda"
7. Kontak

## Catatan kejujuran

- Pita di atas dan footer menyatakan bahwa usaha ini fiktif.
- `<meta name="robots" content="noindex">` supaya Google tidak menampilkan usaha fiktif ini.
- Semua tombol WhatsApp terhubung ke Anizra Studio, bukan ke nomor fiktif.
- Tidak ada testimoni, logo hotel, atau sertifikat palsu.

## Foto & video

Foto dan video ilustrasi dari Unsplash dan Pexels (lisensi bebas pakai; kredit umum dicantumkan di footer).

- `assets/img/<nama>-480.webp` dan `-800.webp`: foto komoditas dan proses, rasio 4:3.
- Hero memakai foto/video sebagai **latar belakang tulisan**, dengan lapisan gelap agar tulisan selalu terbaca.
  - `assets/video/hero-wide.mp4` (layar lebar/laptop, 1280×720) dan `hero-portrait.mp4` (layar tegak/HP, potongan dari video yang sama).
    Keduanya 9 detik, tanpa suara, dan berulang tanpa sambungan yang terlihat (akhir video melebur ke awal).
  - `assets/img/hero-wide-1280.webp` dan `hero-portrait-406.webp`: bingkai pertama video, tampil sebelum video selesai dimuat.
  - Video tidak dimuat jika pengunjung mematikan animasi atau memakai mode hemat data, dan berhenti saat hero tidak terlihat.
    Tombol jeda di pojok kanan bawah menghentikan video maupun gerakan foto.

## Animasi

Elemen dengan kelas `.reveal` muncul perlahan saat di-scroll, baik ke bawah maupun ke atas (arah datangnya mengikuti arah scroll). Foto dengan kelas `.zoom`
di dalam `.reveal-zoom` sedikit "zoom out" saat muncul. Semua animasi otomatis mati
bagi pengunjung yang memilih "kurangi animasi" di perangkatnya.
