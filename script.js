/* ═══════════════════════════════════════
   FRAMM · script.js
═══════════════════════════════════════ */

/* ── LOADER ──────────────────────────── */
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (!loader) return;
  setTimeout(() => {
    loader.classList.add('hidden');
    document.body.style.cursor = 'none';
    triggerHeroReveal();
  }, 1600);
});

/* ── CUSTOM CURSOR ───────────────────── */
(function initCursor() {
  const cursor      = document.getElementById('cursor');
  const cursorTrail = document.getElementById('cursorTrail');
  if (!cursor || !cursorTrail) return;

  let mouseX = 0, mouseY = 0;
  let trailX = 0, trailY = 0;
  let rafId;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top  = mouseY + 'px';
  });

  function animateTrail() {
    trailX += (mouseX - trailX) * 0.14;
    trailY += (mouseY - trailY) * 0.14;
    cursorTrail.style.left = trailX + 'px';
    cursorTrail.style.top  = trailY + 'px';
    rafId = requestAnimationFrame(animateTrail);
  }
  animateTrail();

  // Scale cursor on interactive elements
  const interactives = 'a, button, [data-tab], .cp-toggle, .al-mod';
  document.addEventListener('mouseover', e => {
    if (e.target.closest(interactives)) {
      cursor.style.transform = 'translate(-50%, -50%) scale(2)';
      cursor.style.opacity   = '0.7';
      cursorTrail.style.transform = 'translate(-50%, -50%) scale(0.5)';
    }
  });

  document.addEventListener('mouseout', e => {
    if (e.target.closest(interactives)) {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      cursor.style.opacity   = '1';
      cursorTrail.style.transform = 'translate(-50%, -50%) scale(1)';
    }
  });

  // Hide when leaving window
  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
    cursorTrail.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
    cursorTrail.style.opacity = '1';
  });
})();

/* ── TOPBAR SCROLL EFFECT ────────────── */
(function initTopbar() {
  const topbar = document.getElementById('topbar');
  if (!topbar) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        topbar.classList.toggle('scrolled', window.scrollY > 40);
        ticking = false;
      });
      ticking = true;
    }
  });
})();

/* ── MOBILE MENU ─────────────────────── */
(function initMobileMenu() {
  const toggle = document.getElementById('menuToggle');
  const nav    = document.getElementById('mobileNav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    toggle.classList.toggle('open');
  });

  // Close on link click
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.classList.remove('open');
    });
  });
})();

/* ── HERO REVEAL ─────────────────────── */
function triggerHeroReveal() {
  document.querySelectorAll('.hero .reveal').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), i * 120);
  });
}

/* ── SCROLL REVEAL ───────────────────── */
(function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal:not(.hero .reveal)');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Stagger children if they are step-cards or similar
          const children = entry.target.querySelectorAll('.step-card, .perf-card, .dx-item, .use-card, .pillar, .rm-item, .sf-item, .arch-pillar');
          children.forEach((child, i) => {
            setTimeout(() => child.classList.add('visible'), i * 80);
          });
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
  );

  elements.forEach(el => observer.observe(el));

  // Metric fills animate on visibility
  const metricBlocks = document.querySelectorAll('.metric-block');
  const metricObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          metricObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );
  metricBlocks.forEach(el => metricObserver.observe(el));
})();

/* ── ACTIVE NAV LINK ─────────────────── */
(function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            link.style.color = link.getAttribute('href') === `#${id}`
              ? 'var(--accent)'
              : '';
          });
        }
      });
    },
    { threshold: 0.4 }
  );

  sections.forEach(s => observer.observe(s));
})();

/* ── CODE TABS ───────────────────────── */
(function initCodeTabs() {
  const tabsContainer = document.getElementById('codeTabs');
  if (!tabsContainer) return;

  const buttons  = tabsContainer.querySelectorAll('.tab-btn');
  const contents = tabsContainer.querySelectorAll('.tab-content');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;

      buttons.forEach(b => b.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      const targetContent = tabsContainer.querySelector(`[data-content="${target}"]`);
      if (targetContent) {
        targetContent.classList.add('active');
        // Fade-in effect
        targetContent.style.opacity = '0';
        requestAnimationFrame(() => {
          targetContent.style.transition = 'opacity 0.25s ease';
          targetContent.style.opacity = '1';
        });
      }
    });
  });
})();

/* ── SMOOTH SCROLL OFFSET ────────────── */
(function initSmoothScroll() {
  const TOPBAR_H = 60;
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const y = target.getBoundingClientRect().top + window.scrollY - TOPBAR_H;
      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  });
})();

/* ── PANEL SIDEBAR INTERACTION ───────── */
(function initPanelSidebar() {
  const items = document.querySelectorAll('.sidebar-item');
  items.forEach(item => {
    item.addEventListener('click', () => {
      items.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });
})();

/* ── TOGGLE INTERACTION ──────────────── */
(function initToggles() {
  document.querySelectorAll('.cp-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
    });
  });
})();

/* ── ARCHITECTURE MODULE HOVER ───────── */
(function initArchHover() {
  document.querySelectorAll('.al-mod').forEach(mod => {
    mod.addEventListener('mouseenter', () => {
      mod.parentElement.querySelectorAll('.al-mod').forEach(m => {
        m.style.opacity = m === mod ? '1' : '0.4';
      });
    });
    mod.addEventListener('mouseleave', () => {
      mod.parentElement.querySelectorAll('.al-mod').forEach(m => {
        m.style.opacity = '1';
      });
    });
  });
})();

/* ── MARQUEE PAUSE ON HOVER ──────────── */
(function initMarquee() {
  const track = document.querySelector('.marquee-content');
  if (!track) return;
  const section = track.closest('.marquee-section');
  if (!section) return;
  section.addEventListener('mouseenter', () => {
    track.style.animationPlayState = 'paused';
  });
  section.addEventListener('mouseleave', () => {
    track.style.animationPlayState = 'running';
  });
})();

/* ── COUNTER ANIMATION (hero stats) ──── */
(function initCounters() {
  function animateValue(el, start, end, duration, suffix) {
    let startTime = null;
    const isFloat = String(end).includes('.');
    const decimals = isFloat ? String(end).split('.')[1].length : 0;

    function step(ts) {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = start + (end - start) * eased;
      el.textContent = current.toFixed(decimals) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  const stats = document.querySelectorAll('.hero-stats .stat');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const strong = entry.target.querySelector('strong');
      if (!strong || strong.dataset.animated) return;
      strong.dataset.animated = '1';

      const text = strong.textContent.trim();
      const match = text.match(/^([0-9.]+)(.*)$/);
      if (!match) return;

      const end = parseFloat(match[1]);
      const suffix = match[2];
      animateValue(strong, 0, end, 1400, suffix);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.5 });

  stats.forEach(s => observer.observe(s));
})();

/* ── KEYBOARD NAVIGATION ─────────────── */
(function initKeyNav() {
  document.addEventListener('keydown', e => {
    // Tab tabs via arrow keys
    const tabsContainer = document.getElementById('codeTabs');
    if (!tabsContainer) return;
    const buttons = [...tabsContainer.querySelectorAll('.tab-btn')];
    const activeIdx = buttons.findIndex(b => b.classList.contains('active'));

    if (e.key === 'ArrowRight' && document.activeElement.closest('#codeTabs')) {
      const next = buttons[(activeIdx + 1) % buttons.length];
      next.click(); next.focus();
    }
    if (e.key === 'ArrowLeft' && document.activeElement.closest('#codeTabs')) {
      const prev = buttons[(activeIdx - 1 + buttons.length) % buttons.length];
      prev.click(); prev.focus();
    }
  });
})();