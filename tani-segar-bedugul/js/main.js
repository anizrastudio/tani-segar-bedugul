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

// Animasi muncul saat di-scroll: tambahkan kelas .is-visible ketika elemen terlihat
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
        observer.unobserve(entry.target); // cukup sekali
      }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.15 });

  items.forEach((item) => observer.observe(item));
}

// Video hero: dimuat hanya jika pengunjung tidak mematikan animasi atau memakai mode hemat data
function initHeroVideo() {
  const video = document.querySelector('.hero__video');
  const button = document.querySelector('.video-toggle');
  if (!video || !button) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const saveData = navigator.connection && navigator.connection.saveData;
  if (reduceMotion || saveData) return;

  video.addEventListener('canplay', () => {
    video.closest('.media-frame').classList.add('has-video');
    button.hidden = false;
    video.play().catch(() => {});
  }, { once: true });

  button.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      button.classList.remove('is-paused');
      button.setAttribute('aria-label', 'Jeda video');
    } else {
      video.pause();
      button.classList.add('is-paused');
      button.setAttribute('aria-label', 'Putar video');
    }
  });

  video.src = video.dataset.src;
  video.load();
}

initReveal();
initHeroVideo();
