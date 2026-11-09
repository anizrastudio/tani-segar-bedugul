// Menu HP: buka/tutup saat tombol menu diklik
function initMobileMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-nav');
  if (!toggle || !nav) return;

  function setMenu(open) {
    toggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
  }

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    setMenu(!isOpen);
  });

  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenu(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenu(false);
  });
}

initMobileMenu();

// Animasi muncul saat di-scroll, ke bawah maupun ke atas
function initReveal() {
  const items = document.querySelectorAll('.reveal');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduceMotion || !('IntersectionObserver' in window)) {
    items.forEach((item) => item.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      } else {
        // Keluar layar: sembunyikan lagi, dan catat dari arah mana ia akan masuk kembali
        entry.target.classList.remove('is-visible');
        entry.target.dataset.from = entry.boundingClientRect.top < 0 ? 'top' : 'bottom';
      }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });

  items.forEach((item) => observer.observe(item));
}

// Latar hero: pilih video sesuai bentuk layar (tegak untuk HP, lebar untuk laptop)
function initHeroBackground() {
  const hero = document.querySelector('.hero');
  const video = document.querySelector('.hero__video');
  const button = document.querySelector('.motion-toggle');
  if (!hero || !video || !button) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const saveData = navigator.connection && navigator.connection.saveData;
  if (reduceMotion) return; // tanpa video dan tanpa gerakan: cukup foto diam

  // Tombol jeda selalu tersedia saat ada gerakan di latar
  button.hidden = false;
  button.addEventListener('click', () => {
    const paused = hero.classList.toggle('is-paused');
    button.classList.toggle('is-paused', paused);
    button.setAttribute('aria-label', paused ? 'Putar animasi latar' : 'Jeda animasi latar');
    if (paused) video.pause();
    else if (hero.classList.contains('has-video')) video.play().catch(() => {});
  });

  if (saveData) return; // mode hemat data: foto saja

  // Layar lebar memakai video lebar jika ada; jika belum ada, video tegak dipakai juga (dipotong otomatis)
  const wideQuery = window.matchMedia('(min-aspect-ratio: 4/5)');
  function pickSource() {
    return (wideQuery.matches && video.dataset.srcWide) || video.dataset.srcPortrait;
  }

  video.addEventListener('canplay', () => {
    hero.classList.add('has-video');
    if (!hero.classList.contains('is-paused')) video.play().catch(() => {});
  });

  function loadVideo() {
    const src = pickSource();
    if (!src || video.getAttribute('src') === src) return;
    video.src = src;
    video.load();
  }
  loadVideo();
  // Bentuk layar berubah (HP diputar, jendela diubah ukurannya): ganti video bila perlu
  wideQuery.addEventListener('change', loadVideo);

  // Hemat baterai: video berhenti saat hero tidak terlihat
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([entry]) => {
      if (!hero.classList.contains('has-video') || hero.classList.contains('is-paused')) return;
      if (entry.isIntersecting) video.play().catch(() => {});
      else video.pause();
    }).observe(hero);
  }
}

initReveal();
initHeroBackground();
