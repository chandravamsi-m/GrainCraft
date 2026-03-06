/**
 * theme.js
 * Handles dark/light mode switching and persistence
 */

function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    // Initial theme setup (runs once or on re-init)
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        updateToggleIcon(themeToggle, currentTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
        updateToggleIcon(themeToggle, 'dark');
    }

    // Toggle click handler
    if (themeToggle) {
        // Remove old listener if any to prevent duplicates
        themeToggle.onclick = () => {
            let theme = document.documentElement.getAttribute('data-theme');
            let targetTheme = theme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', targetTheme);
            localStorage.setItem('theme', targetTheme);
            updateToggleIcon(themeToggle, targetTheme);
        };
    }
}

function updateToggleIcon(el, theme) {
    if (!el) return;
    if (theme === 'dark') {
        el.classList.add('is-dark');
    } else {
        el.classList.remove('is-dark');
    }
}

// Global initialization on first load
document.addEventListener('DOMContentLoaded', initTheme);
