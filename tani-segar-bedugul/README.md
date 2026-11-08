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

## Foto (menyusul)

Saat ini setiap foto masih berupa kotak bergaris (`.photo-slot`) dengan label, misalnya "Foto: wortel".
Setelah foto tersedia, setiap kotak diganti dengan `<img>` berformat WebP, dan nama fotografernya
dicantumkan di footer (bagian "Kredit foto").

## Video hero (menyusul)

Simpan video sebagai `assets/video/hero.mp4`. Video dimuat oleh JavaScript (`initHeroVideo`)
dan **tidak dimuat** jika pengunjung mematikan animasi atau memakai mode hemat data.
Selama video belum ada, yang tampil adalah tempat sementara bertuliskan "Video: kebun sayur".
Ada tombol jeda/putar di pojok kanan bawah video.

## Animasi

Elemen dengan kelas `.reveal` muncul perlahan saat di-scroll. Foto dengan kelas `.zoom`
di dalam `.reveal-zoom` sedikit "zoom out" saat muncul. Semua animasi otomatis mati
bagi pengunjung yang memilih "kurangi animasi" di perangkatnya.
