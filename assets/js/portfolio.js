/**
 * portfolio.js
 * Handles category filtering for the portfolio grid
 */

document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.c-filter__btn');
  const portfolioItems = document.querySelectorAll('.c-portfolio-card');

  if (filterButtons.length === 0) return;

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button
      filterButtons.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      const filter = btn.getAttribute('data-filter');

      portfolioItems.forEach(item => {
        const category = item.getAttribute('data-category');
        
        if (filter === 'all' || category === filter) {
          item.style.display = 'block';
          // Re-trigger reveal animation if hidden
          setTimeout(() => {
            item.classList.add('active');
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          }, 10);
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
});
