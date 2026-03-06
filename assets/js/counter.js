/**
 * counter.js
 * Animates numbers when they enter the viewport
 */

document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.c-stat__number');
  const duration = 2000; // 2 seconds

  const animateCounter = (el) => {
    const target = +el.getAttribute('data-target');
    const start = 0;
    const startTime = performance.now();

    const update = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(progress * target);
      
      el.textContent = current;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target; // Ensure it ends at the exact target
      }
    };

    requestAnimationFrame(update);
  };

  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => counterObserver.observe(counter));
});
