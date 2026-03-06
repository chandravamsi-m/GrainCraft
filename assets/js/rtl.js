/**
 * rtl.js
 * Handles RTL toggle (for demonstration purposes)
 * In production, this would be set based on the HTML 'dir' attribute.
 */

const toggleRTL = () => {
    const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
    document.documentElement.setAttribute('dir', isRTL ? 'ltr' : 'rtl');
    
    // Notify user or update UI if needed
    console.log(`RTL Mode: ${!isRTL}`);
};

// Export or attach to window for demo
window.toggleRTL = toggleRTL;
