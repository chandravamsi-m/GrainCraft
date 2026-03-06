/**
 * nav.js
 * Handles sticky navigation and mobile menu
 */

function initNav() {
    const navbar = document.querySelector('.c-navbar');
    const scrollThreshold = 50;

    if (!navbar) return;

    // Use a robust scroll listener
    const handleScroll = () => {
        if (window.scrollY > scrollThreshold) {
            navbar.classList.add('is-scrolled');
        } else {
            navbar.classList.remove('is-scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger initial check
    handleScroll();

    // Mobile Menu Implementation
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.c-navbar__menu');

    if (mobileToggle && navMenu) {
        mobileToggle.onclick = (e) => {
            e.preventDefault();
            navMenu.classList.toggle('is-open');
            mobileToggle.classList.toggle('is-active');
        };
    }
}

// Global initialization on first load
document.addEventListener('DOMContentLoaded', initNav);
