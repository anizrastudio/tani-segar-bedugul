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
- `assets/img/hero-wide-*.webp` (HP, 4:3) dan `hero-tall-960.webp` (laptop, 4:5): gambar hero.
- `assets/video/hero.mp4`: 12 detik, tanpa suara, sekitar 530 KB. Dimuat oleh JavaScript, dan **tidak dimuat**
  jika pengunjung mematikan animasi atau memakai mode hemat data. Ada tombol jeda/putar.

## Animasi

Elemen dengan kelas `.reveal` muncul perlahan saat di-scroll. Foto dengan kelas `.zoom`
di dalam `.reveal-zoom` sedikit "zoom out" saat muncul. Semua animasi otomatis mati
bagi pengunjung yang memilih "kurangi animasi" di perangkatnya.
