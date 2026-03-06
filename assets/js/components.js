/**
 * components.js
 * Loads and injects reusable HTML components (Navbar, Footer)
 * Handles path resolution for subpages and active link states.
 */

async function loadComponent(id, file) {
    const placeholder = document.getElementById(id);
    if (!placeholder) return;

    try {
        const response = await fetch(file);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const html = await response.text();
        
        // Determine if we are in the 'pages/' directory
        const isSubpage = window.location.pathname.includes('/pages/');
        let processedHtml = html;

        if (isSubpage) {
            // Prefix relative links and images with ../
            processedHtml = processedHtml.replace(/href="(?!http|#|mailto|tel)([^"]*)"/g, 'href="../$1"');
            processedHtml = processedHtml.replace(/src="(?!http)([^"]*)"/g, 'src="../$1"');
        }

        placeholder.innerHTML = processedHtml;

        // Set active link highlight
        const currentFileName = window.location.pathname.split('/').pop() || 'index.html';
        const links = placeholder.querySelectorAll('a');
        links.forEach(link => {
            const linkFileName = link.getAttribute('href').split('/').pop();
            if (linkFileName === currentFileName) {
                link.classList.add('is-active');
            }
        });

        // Re-initialize theme toggle if navbar is loaded
        if (id === 'navbar-placeholder' && typeof initTheme === 'function') {
            initTheme();
        }
        
        // Re-initialize nav scroll behavior
        if (id === 'navbar-placeholder' && typeof initNav === 'function') {
            initNav();
        }

        // Re-initialize scroll reveals if needed
        if (typeof initAnimations === 'function') {
            initAnimations();
        }

    } catch (err) {
        console.error(`Failed to load component ${file}:`, err);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const isSubpage = window.location.pathname.includes('/pages/');
    const componentPath = isSubpage ? '../assets/components/' : 'assets/components/';
    
    loadComponent('navbar-placeholder', `${componentPath}navbar.html`);
    loadComponent('footer-placeholder', `${componentPath}footer.html`);
});
