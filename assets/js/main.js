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

function updateToggleIcon(el, theme) {
  if (!el) return;
  el.classList.toggle('is-dark', theme === 'dark');
}

function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme');

  if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateToggleIcon(themeToggle, currentTheme);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
    updateToggleIcon(themeToggle, 'dark');
  }

  if (!themeToggle) return;

  themeToggle.onclick = () => {
    const theme = document.documentElement.getAttribute('data-theme');
    const targetTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', targetTheme);
    localStorage.setItem('theme', targetTheme);
    updateToggleIcon(themeToggle, targetTheme);
  };
}

function updateDirToggleLabel(el, dir) {
  if (!el) return;
  el.textContent = dir.toUpperCase();
  el.setAttribute('aria-label', `Switch to ${dir === 'rtl' ? 'LTR' : 'RTL'} layout`);
}

function initDirectionToggle() {
  const dirToggle = document.getElementById('dir-toggle');
  const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
  updateDirToggleLabel(dirToggle, currentDir);

  if (!dirToggle) return;

  dirToggle.onclick = () => {
    const activeDir = document.documentElement.getAttribute('dir') || 'ltr';
    const nextDir = activeDir === 'rtl' ? 'ltr' : 'rtl';
    document.documentElement.setAttribute('dir', nextDir);
    localStorage.setItem('dir', nextDir);
    updateDirToggleLabel(dirToggle, nextDir);
  };
}

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

  if (mobileToggle && navMenu) {
    mobileToggle.onclick = (e) => {
      e.preventDefault();
      const isOpen = navMenu.classList.toggle('is-open');
      mobileToggle.classList.toggle('is-active');
      
      if (isOpen) {
        navbar.classList.add('is-mobile-open');
      } else if (window.scrollY <= 50) {
        navbar.classList.remove('is-mobile-open');
      }
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

function initLightbox() {
  const triggerImages = document.querySelectorAll('.c-portfolio-card__img, .s-materials__img, [data-lightbox]');
  if (!triggerImages.length) return;

  let lightbox = document.getElementById('lightbox');

  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.className = 'c-lightbox';
    lightbox.innerHTML = `
      <button class="c-lightbox__close" aria-label="Close Lightbox">&times;</button>
      <div class="c-lightbox__content">
        <img src="" alt="" class="c-lightbox__img">
      </div>
      <div class="c-lightbox__caption"></div>
    `;
    document.body.appendChild(lightbox);
  }

  const lightboxImg = lightbox.querySelector('.c-lightbox__img');
  const lightboxCaption = lightbox.querySelector('.c-lightbox__caption');
  const closeBtn = lightbox.querySelector('.c-lightbox__close');

  const openLightbox = (img) => {
    lightboxImg.src = img.getAttribute('src') || '';
    lightboxImg.alt = img.getAttribute('alt') || '';
    lightboxCaption.textContent = img.getAttribute('alt') || '';
    lightbox.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    lightbox.classList.remove('is-active');
    document.body.style.overflow = '';
  };

  triggerImages.forEach((img) => {
    img.style.cursor = 'zoom-in';
    if (img.dataset.lightboxInit) return;
    img.addEventListener('click', () => openLightbox(img));
    img.dataset.lightboxInit = 'true';
  });

  closeBtn.onclick = closeLightbox;
  lightbox.onclick = (e) => {
    if (e.target === lightbox) closeLightbox();
  };

  if (!document.body.dataset.lightboxEscInit) {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('is-active')) {
        closeLightbox();
      }
    });
    document.body.dataset.lightboxEscInit = 'true';
  }
}

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

async function loadComponent(id, file) {
  const placeholder = document.getElementById(id);
  if (!placeholder) return;

  try {
    const response = await fetch(file);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    let html = await response.text();
    const isSubpage = window.location.pathname.includes('/pages/');

    if (isSubpage) {
      html = html.replace(/href="(?!http|#|mailto|tel)([^"]*)"/g, 'href="../$1"');
      html = html.replace(/src="(?!http)([^"]*)"/g, 'src="../$1"');
    }

    placeholder.innerHTML = html;

    const currentFileName = window.location.pathname.split('/').pop() || 'index.html';
    placeholder.querySelectorAll('a').forEach((link) => {
      const href = link.getAttribute('href') || '';
      const linkFileName = href.split('/').pop().split('?')[0].split('#')[0];
      if (linkFileName === currentFileName) {
        link.classList.add('is-active');
      }
    });

    // If a dropdown child is active (e.g. Home 2), mark the parent trigger link active too.
    placeholder.querySelectorAll('.c-navbar__dropdown').forEach((dropdown) => {
      const hasActiveChild = dropdown.querySelector('.c-navbar__dropdown-menu a.is-active');
      const parentLink = dropdown.querySelector('.c-navbar__link');
      if (hasActiveChild && parentLink) {
        parentLink.classList.add('is-active');
      }
    });
  } catch (err) {
    console.error(`Failed to load component ${file}:`, err);
  }
}

async function initComponents() {
  const isSubpage = window.location.pathname.includes('/pages/');
  const componentPath = isSubpage ? '../assets/components/' : 'assets/components/';

  await Promise.all([
    loadComponent('navbar-placeholder', `${componentPath}navbar.html`),
    loadComponent('footer-placeholder', `${componentPath}footer.html`),
  ]);
}

document.addEventListener('DOMContentLoaded', async () => {
  await initComponents();
  initTheme();
  initDirectionToggle();
  initNav();
  initAnimations();
  initCounter();
  initLightbox();
  initPortfolioFilter();
  initQuoteForm();
});
