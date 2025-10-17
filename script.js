// ----------------------
// SISTEM MULTI-BAHASA
// ----------------------
const langSelector = document.getElementById('language');
const translatableElements = document.querySelectorAll('.lang');

langSelector.addEventListener('change', function () {
  const lang = this.value;
  document.documentElement.lang = lang;

  translatableElements.forEach(el => {
    const translation = el.getAttribute(`data-${lang}`);
    if (translation) {
      el.textContent = translation;
    }
  });

  // Ubah placeholder form agar ikut bahasa
  const nameField = document.querySelector('input[placeholder="Nama"]');
  const emailField = document.querySelector('input[type="email"]');
  const messageField = document.querySelector('textarea');
  if (lang === 'id') {
    nameField.placeholder = "Nama";
    emailField.placeholder = "Email";
    messageField.placeholder = "Pesan";
  } else if (lang === 'en') {
    nameField.placeholder = "Name";
    emailField.placeholder = "Email";
    messageField.placeholder = "Message";
  } else {
    nameField.placeholder = "Nama";
    emailField.placeholder = "Emel";
    messageField.placeholder = "Mesej";
  }
});

// ----------------------
// EFEK SCROLL & ANIMASI
// ----------------------
function handleScrollAnimations() {
  const elements = document.querySelectorAll('.section, .hero, .service-card');
  const triggerBottom = window.innerHeight * 0.85;

  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  });
}
window.addEventListener('scroll', handleScrollAnimations);
handleScrollAnimations();

// ----------------------
// SMOOTH SCROLL NAVIGASI
// ----------------------
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ----------------------
// PARALLAX HERO SECTION
// ----------------------
const hero = document.querySelector('.hero');
if (hero) {
  window.addEventListener('scroll', () => {
    const offset = window.scrollY * 0.4;
    hero.style.backgroundPositionY = `${offset}px`;
  });
}

// ----------------------
// EFEK INTERAKSI TOMBOL
// ----------------------
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mouseenter', () => btn.classList.add('hovered'));
  btn.addEventListener('mouseleave', () => btn.classList.remove('hovered'));
  btn.addEventListener('mousedown', () => btn.classList.add('pressed'));
  btn.addEventListener('mouseup', () => btn.classList.remove('pressed'));
});

// ----------------------
// MODE GELAP - TERANG
// ----------------------
const modeToggle = document.createElement('button');
modeToggle.className = 'mode-toggle';
modeToggle.textContent = '🌙';
document.body.appendChild(modeToggle);

let darkMode = false;
modeToggle.addEventListener('click', () => {
  darkMode = !darkMode;
  document.body.classList.toggle('dark-mode', darkMode);
  modeToggle.textContent = darkMode ? '☀️' : '🌙';
});

// ----------------------
// VALIDASI FORM KONTAK
// ----------------------
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();

    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const message = form.querySelector('textarea').value.trim();

    if (!name || !email || !message) {
      alert('Sila isi semua ruangan sebelum menghantar.');
      return;
    }

    // Simulasi proses kirim
    const submitBtn = form.querySelector('button');
    submitBtn.textContent = 'Menghantar...';
    submitBtn.disabled = true;

    setTimeout(() => {
      alert('Terima kasih! Mesej anda telah dihantar dengan jayanya.');
      form.reset();
      submitBtn.textContent = 'Hantar';
      submitBtn.disabled = false;
    }, 1500);
  });
}
