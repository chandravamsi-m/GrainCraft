/**
 * main.js
 * Consolidated front-end behavior for the GrainCraft template.
 */

// Apply stored direction as early as possible to reduce layout flicker.
(() => {
  try {
    const savedDir = localStorage.getItem('dir');
    if (savedDir === 'rtl' || savedDir === 'ltr') {
      document.documentElement.setAttribute('dir', savedDir);
    } else if (!document.documentElement.getAttribute('dir')) {
      document.documentElement.setAttribute('dir', 'ltr');
    }
  } catch (_) {
    if (!document.documentElement.getAttribute('dir')) {
      document.documentElement.setAttribute('dir', 'ltr');
    }
  }
})();

/**
 * Update the sun/moon icon based on the current theme
 * @param {HTMLElement} el - The theme toggle button element
 * @param {string} theme - The current theme ('light' or 'dark')
 */
function updateToggleIcon(el, theme) {
  if (!el) return;
  // If theme is dark, the sun icon is shown via CSS [data-theme='dark']
  // If theme is light, the moon icon is shown.
  // We keep the is-dark class for any legacy CSS that might need it.
  el.classList.toggle('is-dark', theme === 'dark');
}

/**
 * Initialize dark/light mode functionality using localStorage and system preferences
 */
function initTheme() {
  const themeToggles = document.querySelectorAll('.theme-toggle, #theme-toggle');
  const currentTheme = localStorage.getItem('theme');

  if (themeToggles.length > 0) {
    if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme);
      document.documentElement.classList.toggle('dark', currentTheme === 'dark');
      themeToggles.forEach(btn => updateToggleIcon(btn, currentTheme));
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.documentElement.classList.toggle('dark', true);
      themeToggles.forEach(btn => updateToggleIcon(btn, 'dark'));
    }

    themeToggles.forEach(btn => {
      btn.onclick = () => {
        const theme = document.documentElement.getAttribute('data-theme');
        const targetTheme = theme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', targetTheme);
        document.documentElement.classList.toggle('dark', targetTheme === 'dark');
        localStorage.setItem('theme', targetTheme);
        themeToggles.forEach(el => updateToggleIcon(el, targetTheme));
      };
    });
  }
}

/**
 * Update the text and aria-label of the language/direction toggle button
 * @param {HTMLElement} el - The direction toggle button element
 * @param {string} dir - The current direction ('ltr' or 'rtl')
 */
function updateDirToggleLabel(el, dir) {
  if (!el) return;
  const nextDir = dir === 'rtl' ? 'ltr' : 'rtl';
  const label = el.querySelector('.dir-label');
  if (label) {
    label.textContent = nextDir.toUpperCase();
  } else {
    el.textContent = nextDir.toUpperCase();
  }
  el.setAttribute('aria-label', `Switch to ${nextDir.toUpperCase()} layout`);
}

/**
 * Initialize LTR/RTL layout switching functionality
 */
function initDirectionToggle() {
  const dirToggles = document.querySelectorAll('.dir-toggle, #dir-toggle');
  const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
  dirToggles.forEach(btn => updateDirToggleLabel(btn, currentDir));

  if (!dirToggles.length) return;

  dirToggles.forEach(btn => {
    btn.onclick = () => {
      const activeDir = document.documentElement.getAttribute('dir') || 'ltr';
      const nextDir = activeDir === 'rtl' ? 'ltr' : 'rtl';
      document.documentElement.setAttribute('dir', nextDir);
      localStorage.setItem('dir', nextDir);
      dirToggles.forEach(el => updateDirToggleLabel(el, nextDir));
    };
  });
}

/**
 * Initialize all navigation logic including scroll states, mobile menu toggling, and dropdowns
 */
function initNav() {
  const navbar = document.querySelector('.c-navbar');
  if (!navbar) return;

  if (!navbar.dataset.navInit) {
    const scrollThreshold = 50;
    const handleScroll = () => {
      navbar.classList.toggle('is-scrolled', window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    navbar.dataset.navInit = 'true';
  }

  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.c-navbar__menu');
  const backdrop = document.querySelector('.c-navbar__backdrop');
  const menuCloseBtn = document.querySelector('.c-navbar__menu-close');

  function closeMobileMenu() {
    if (navMenu) navMenu.classList.remove('is-open');
    if (mobileToggle) mobileToggle.classList.remove('is-active');
    if (backdrop) backdrop.classList.remove('is-open');
    if (navbar && window.scrollY <= 50) navbar.classList.remove('is-mobile-open');
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  }

  function openMobileMenu() {
    if (navMenu) navMenu.classList.add('is-open');
    if (mobileToggle) mobileToggle.classList.add('is-active');
    if (backdrop) backdrop.classList.add('is-open');
    if (navbar) navbar.classList.add('is-mobile-open');
    var scrollbarW = window.innerWidth - document.documentElement.clientWidth;
    if (scrollbarW > 0) document.body.style.paddingRight = scrollbarW + 'px';
    document.body.style.overflow = 'hidden';
  }

  if (mobileToggle && navMenu) {
    mobileToggle.onclick = (e) => {
      e.preventDefault();
      const isOpen = navMenu.classList.contains('is-open');
      if (isOpen) closeMobileMenu();
      else openMobileMenu();
    };
  }

  if (backdrop) {
    backdrop.onclick = () => closeMobileMenu();
  }

  if (menuCloseBtn && navMenu) {
    menuCloseBtn.onclick = (e) => {
      e.preventDefault();
      closeMobileMenu();
    };
  }

  const dropdowns = document.querySelectorAll('.c-navbar__dropdown');
  dropdowns.forEach((dropdown) => {
    const link = dropdown.querySelector('.c-navbar__link');
    if (link && window.innerWidth <= 1024) {
      link.onclick = (e) => {
        e.preventDefault();
        dropdown.classList.toggle('is-open');
      };
    }
  });
}

/**
 * Initialize scroll reveal animations using IntersectionObserver
 */
function initAnimations() {
  const revealElements = document.querySelectorAll('.reveal');
  if (!revealElements.length) return;

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  revealElements.forEach((el) => {
    if (!el.classList.contains('active')) {
      revealObserver.observe(el);
    }
  });
}

/**
 * Initialize number counting animations for statistics sections
 */
function initCounter() {
  const counters = document.querySelectorAll('.c-stat__number');
  if (!counters.length) return;

  const duration = 2000;
  const animateCounter = (el) => {
    const target = Number(el.getAttribute('data-target'));
    const startTime = performance.now();

    const update = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(progress * target);
      el.textContent = String(current);

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = String(target);
      }
    };

    requestAnimationFrame(update);
  };

  const counterObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => counterObserver.observe(counter));
}

/**
 * Initialize the portfolio category filtering logic
 */
function initPortfolioFilter() {
  const filterButtons = document.querySelectorAll('.c-filter__btn');
  const portfolioItems = document.querySelectorAll('.c-portfolio-card');
  if (!filterButtons.length || !portfolioItems.length) return;

  filterButtons.forEach((btn) => {
    btn.onclick = () => {
      filterButtons.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      const filter = btn.getAttribute('data-filter');
      portfolioItems.forEach((item) => {
        const category = item.getAttribute('data-category');
        const show = filter === 'all' || category === filter;
        item.style.display = show ? 'block' : 'none';
        if (show) {
          setTimeout(() => {
            item.classList.add('active');
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          }, 10);
        }
      });
    };
  });
}

/**
 * Initialize multi-step quote form functionality (next/prev steps, validation)
 */
function initQuoteForm() {
  const form = document.getElementById('quote-form');
  if (!form) return;

  const steps = Array.from(form.querySelectorAll('.form-step'));
  const nextBtn = document.getElementById('next-btn');
  const prevBtn = document.getElementById('prev-btn');
  const submitBtn = document.getElementById('submit-btn');
  const progressFill = document.getElementById('progress-fill');

  if (!steps.length || !nextBtn || !prevBtn || !submitBtn || !progressFill) return;

  let currentStep = 1;

  const updateForm = () => {
    steps.forEach((step) => {
      step.style.display = 'none';
      step.classList.remove('active');
    });

    const activeStep = form.querySelector(`.form-step[data-step="${currentStep}"]`);
    if (!activeStep) return;

    activeStep.style.display = 'block';
    setTimeout(() => activeStep.classList.add('active'), 10);

    const progress = (currentStep / steps.length) * 100;
    progressFill.style.width = `${progress}%`;

    prevBtn.style.visibility = currentStep === 1 ? 'hidden' : 'visible';
    nextBtn.style.display = currentStep === steps.length ? 'none' : 'block';
    submitBtn.style.display = currentStep === steps.length ? 'block' : 'none';
  };

  nextBtn.onclick = () => {
    const activeStep = form.querySelector(`.form-step[data-step="${currentStep}"]`);
    if (!activeStep) return;

    const inputs = activeStep.querySelectorAll('input[required], select[required], textarea[required]');
    let isValid = true;

    inputs.forEach((input) => {
      if (!input.checkValidity()) {
        input.reportValidity();
        isValid = false;
      }
    });

    if (isValid && currentStep < steps.length) {
      currentStep += 1;
      updateForm();
    }
  };

  prevBtn.onclick = () => {
    if (currentStep > 1) {
      currentStep -= 1;
      updateForm();
    }
  };

  form.onsubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your inquiry has been received. We will be in touch within 48 hours.');
    window.location.href = '../index.html';
  };

  updateForm();
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initDirectionToggle();
  initNav();
  initAnimations();
  initCounter();
  initPortfolioFilter();
  initQuoteForm();
});
