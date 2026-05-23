/* ============================================================
   FRAMM — script.js
   Production website JavaScript
   gitavaneesh.github.io/knowframm
   ============================================================ */

'use strict';

/* ── DOM Ready ──────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileNav();
  initScrollReveal();
  initScrollSpy();
  initStatCounters();
  initStatBar();
  initNamespaceFilter();
  initNamespaceSearch();
  initInstallTabs();
  initCodeCopy();
  initBackToTop();
  initHeroTyping();
  initFileTreeToggles();
  initRoadmapProgress();
});

/* ── Navbar ───────────────────────────────────────────────── */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ── Mobile Nav ───────────────────────────────────────────── */
function initMobileNav() {
  const toggle = document.getElementById('nav-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  if (!toggle || !mobileNav) return;

  toggle.addEventListener('click', () => {
    const open = toggle.classList.toggle('open');
    mobileNav.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  // Close on link click
  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      toggle.classList.remove('open');
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (!toggle.contains(e.target) && !mobileNav.contains(e.target)) {
      toggle.classList.remove('open');
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

/* ── Scroll Reveal ────────────────────────────────────────── */
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
}

/* ── Scroll Spy ───────────────────────────────────────────── */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          const active = link.getAttribute('href') === '#' + entry.target.id;
          link.classList.toggle('active', active);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => observer.observe(s));
}

/* ── Stat Counters ────────────────────────────────────────── */
function initStatCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const easeOutExpo = t => t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

  const animate = (el) => {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const decimals = el.dataset.decimals ? parseInt(el.dataset.decimals) : 0;
    const duration = 1400;
    const start = performance.now();

    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const value = target * easeOutExpo(progress);
      el.textContent = prefix + value.toFixed(decimals) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animate(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

/* ── Stat Bar animated underline ─────────────────────────── */
function initStatBar() {
  const items = document.querySelectorAll('.stat-item');
  if (!items.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('animated'), 200);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  items.forEach(el => observer.observe(el));
}

/* ── Namespace Filter & Search ────────────────────────────── */
function initNamespaceFilter() {
  const filters = document.querySelectorAll('.ns-filter');
  const cards = document.querySelectorAll('.ns-card');
  if (!filters.length || !cards.length) return;

  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.filter;
      cards.forEach(card => {
        const match = cat === 'all' || card.dataset.category === cat;
        card.style.display = match ? '' : 'none';
        if (match) {
          card.style.animation = 'none';
          card.offsetHeight;
          card.style.animation = 'fade-up 0.35s ease forwards';
        }
      });
    });
  });
}

function initNamespaceSearch() {
  const input = document.getElementById('ns-search');
  const cards = document.querySelectorAll('.ns-card');
  if (!input || !cards.length) return;

  input.addEventListener('input', () => {
    const q = input.value.toLowerCase().trim();
    cards.forEach(card => {
      const text = card.textContent.toLowerCase();
      card.style.display = (!q || text.includes(q)) ? '' : 'none';
    });
  });
}

/* ── Install Tabs ─────────────────────────────────────────── */
function initInstallTabs() {
  const tabs = document.querySelectorAll('.install-tab');
  const panels = document.querySelectorAll('.install-panel');
  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const panel = document.getElementById('panel-' + tab.dataset.tab);
      if (panel) panel.classList.add('active');
    });
  });
}

/* ── Code Copy ────────────────────────────────────────────── */
function initCodeCopy() {
  document.querySelectorAll('.code-block-copy').forEach(btn => {
    btn.addEventListener('click', async () => {
      const pre = btn.closest('.code-block')?.querySelector('pre');
      if (!pre) return;
      try {
        await navigator.clipboard.writeText(pre.textContent.trim());
        const orig = btn.innerHTML;
        btn.innerHTML = `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 8 5 12 15 3"/></svg> Copied`;
        btn.style.color = 'var(--green)';
        setTimeout(() => { btn.innerHTML = orig; btn.style.color = ''; }, 2000);
      } catch (_) {}
    });
  });
}

/* ── Back to Top ──────────────────────────────────────────── */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 600);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ── Hero Typing Effect ────────────────────────────────────── */
function initHeroTyping() {
  const el = document.getElementById('hero-typed');
  if (!el) return;
  const words = [
    'framm::widgets',
    'framm::charts',
    'framm::i18n',
    'framm::anim',
    'framm::render',
    'framm::a11y',
    'framm::unicode',
    'framm::platform',
  ];
  let wi = 0, ci = 0, deleting = false;
  const SPEED_TYPE = 55, SPEED_DEL = 28, PAUSE = 1800;

  const tick = () => {
    const word = words[wi];
    if (!deleting) {
      el.textContent = word.slice(0, ++ci);
      if (ci === word.length) { deleting = true; setTimeout(tick, PAUSE); return; }
    } else {
      el.textContent = word.slice(0, --ci);
      if (ci === 0) { deleting = false; wi = (wi + 1) % words.length; }
    }
    setTimeout(tick, deleting ? SPEED_DEL : SPEED_TYPE);
  };
  setTimeout(tick, 900);
}

/* ── File Tree Toggles ────────────────────────────────────── */
function initFileTreeToggles() {
  document.querySelectorAll('.ft-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.getElementById(btn.dataset.target);
      if (!target) return;
      const open = target.style.display !== 'none';
      target.style.display = open ? 'none' : '';
      btn.querySelector('.ft-arrow')?.classList.toggle('open', !open);
    });
  });
}

/* ── Roadmap Progress ─────────────────────────────────────── */
function initRoadmapProgress() {
  const bars = document.querySelectorAll('.roadmap-progress-bar');
  if (!bars.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        bar.style.width = bar.dataset.progress + '%';
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.5 });
  bars.forEach(b => observer.observe(b));
}

/* ── Smooth Anchor Scroll ─────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 64;
    const top = target.getBoundingClientRect().top + window.scrollY - navH - 8;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ── Ticker clone for seamless loop ───────────────────────── */
(function initTicker() {
  const ticker = document.querySelector('.ticker');
  if (!ticker) return;
  const clone = ticker.innerHTML;
  ticker.innerHTML += clone;
})();

/* ── Hover parallax on hero code block ───────────────────── */
(function initHeroParallax() {
  const card = document.querySelector('.hero-code-block');
  if (!card) return;
  let rafId = null;
  const container = card.parentElement;

  container.addEventListener('mousemove', e => {
    if (rafId) return;
    rafId = requestAnimationFrame(() => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width  - 0.5;
      const y = (e.clientY - rect.top)  / rect.height - 0.5;
      card.style.transform = `perspective(1000px) rotateY(${x * 6}deg) rotateX(${-y * 4}deg) translateZ(4px)`;
      rafId = null;
    });
  });

  container.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
})();