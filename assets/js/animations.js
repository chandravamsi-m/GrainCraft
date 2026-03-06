/**
 * animations.js
 * Handles scroll-triggered reveals using Intersection Observer
 */

function initAnimations() {
  const revealElements = document.querySelectorAll('.reveal');

  const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Unobserve once revealed to save performance
        observer.unobserve(entry.target);
      }
    });
  };

  const revealObserver = new IntersectionObserver(revealCallback, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => {
    // Only observe if not already active
    if (!el.classList.contains('active')) {
      revealObserver.observe(el);
    }
  });
}

// Global initialization on first load
document.addEventListener('DOMContentLoaded', initAnimations);
