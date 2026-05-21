// ── DATA ─────────────────────────────────────────────────────────────────────

function loadData() {
  try {
    const saved = localStorage.getItem('planetegym_data');
    return saved ? JSON.parse(saved) : window.PLANETEGYM_DEFAULT;
  } catch {
    return window.PLANETEGYM_DEFAULT;
  }
}

// ── RENDER : PLANNING ────────────────────────────────────────────────────────

const TYPE_LABELS = { renfo: 'Renforcement', cardio: 'Cardio', souplesse: 'Souplesse', intensif: 'Intensif' };

function renderPlanning(data) {
  const days = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];
  days.forEach(day => {
    const el = document.getElementById(day);
    if (!el) return;
    const courses = (data.planning[day] || []).slice().sort((a, b) => a.start.localeCompare(b.start));
    if (courses.length === 0) {
      el.innerHTML = '<p class="planning-empty">Pas de cours ce jour.</p>';
      return;
    }
    el.innerHTML = courses.map(c => `
      <div class="course-card">
        <div class="course-time">${c.start}<span>→ ${c.end}</span></div>
        <div class="course-name">${c.name}</div>
        <span class="course-tag ${c.type}">${TYPE_LABELS[c.type] || c.type}</span>
      </div>`).join('');
  });
}

// ── RENDER : GALERIE ─────────────────────────────────────────────────────────

function renderGalerie(data) {
  const grid = document.getElementById('galerieGrid');
  if (!grid) return;
  grid.innerHTML = data.galerie.map(img => `
    <div class="galerie-item ${img.span || ''}" data-src="${img.src}">
      <img src="${img.src}" alt="${img.alt}" loading="lazy">
    </div>`).join('');

  grid.querySelectorAll('.galerie-item').forEach(item => {
    item.addEventListener('click', () => openLightbox(item.dataset.src));
  });
}

// ── RENDER : ABONNEMENTS ─────────────────────────────────────────────────────

function renderAbonnements(data) {
  const grid = document.getElementById('abonnementsGrid');
  if (!grid) return;
  grid.innerHTML = data.abonnements.map(a => `
    <div class="abo-card ${a.featured ? 'featured' : ''} fade-up">
      ${a.featured
        ? `<div class="abo-name-row"><p class="abo-name">${a.name}</p><span class="abo-recommended">${a.recommendedLabel || 'Recommandé'}</span></div>`
        : `<p class="abo-name">${a.name}</p>`}
      <div class="abo-price-wrap">
        <span class="abo-price-label-top">${a.label}</span>
        <p class="abo-price">${a.price}<span class="abo-currency">€</span></p>
        <span class="abo-price-sub">${a.sub}</span>
      </div>
      <ul class="abo-features">${a.features.map(f => `<li>${f}</li>`).join('')}</ul>
      <a href="tel:0327238097" class="btn ${a.featured ? 'btn-primary' : 'btn-outline'} full-width">S'inscrire</a>
    </div>`).join('');

  // re-observe newly rendered fade-up elements
  grid.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}

// ── RENDER : HORAIRES ────────────────────────────────────────────────────────

function renderHoraires(data) {
  const tbody = document.getElementById('horairesSalleBody');
  if (tbody) {
    tbody.innerHTML = data.horaires.salle.map(r =>
      `<tr><td class="day">${r.period}</td><td class="hours">${r.hours}</td></tr>`
    ).join('');
  }
  const accueil = document.getElementById('horairesAccueil');
  if (accueil) {
    accueil.innerHTML = data.horaires.accueil.map(r => `
      <div class="accueil-item">
        <span class="accueil-days">${r.days}</span>
        <span class="accueil-hours">${r.hours}</span>
      </div>`).join('');
  }
}

// ── INIT ─────────────────────────────────────────────────────────────────────

const siteData = loadData();
renderPlanning(siteData);
renderGalerie(siteData);
renderAbonnements(siteData);
renderHoraires(siteData);

// ── NAVBAR SCROLL ─────────────────────────────────────────────────────────────

const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// ── MOBILE MENU ───────────────────────────────────────────────────────────────

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileClose = document.getElementById('mobileClose');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.add('open');
  hamburger.classList.add('open');
});
mobileClose.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
  hamburger.classList.remove('open');
});
document.querySelectorAll('.mobile-link, .mobile-menu .btn').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
  });
});

// ── PLANNING TABS ─────────────────────────────────────────────────────────────

document.querySelectorAll('.tab-btn[data-day]').forEach(btn => {
  btn.addEventListener('click', () => {
    const day = btn.dataset.day;
    document.querySelectorAll('.planning-day').forEach(d => d.classList.remove('active'));
    document.querySelectorAll('.tab-btn[data-day]').forEach(b => b.classList.remove('active'));
    document.getElementById(day).classList.add('active');
    btn.classList.add('active');
  });
});

// ── LIGHTBOX ──────────────────────────────────────────────────────────────────

const lightbox    = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightboxClose');

function openLightbox(src) {
  lightboxImg.src = src;
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}
lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

// ── MOBILE STICKY CTA ─────────────────────────────────────────────────────────

const mobileCta = document.getElementById('mobileCta');
const heroEl    = document.getElementById('hero');
window.addEventListener('scroll', () => {
  mobileCta.classList.toggle('visible', heroEl.getBoundingClientRect().bottom < 0);
}, { passive: true });

// ── FADE-UP ON SCROLL ────────────────────────────────────────────────────────

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 90);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
