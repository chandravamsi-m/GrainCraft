/**
 * lightbox.js
 * Simple vanilla JS lightbox for image viewing
 */

document.addEventListener('DOMContentLoaded', () => {
    // Create Lightbox Markup
    const lightbox = document.createElement('div');
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

    const lightboxImg = lightbox.querySelector('.c-lightbox__img');
    const lightboxCaption = lightbox.querySelector('.c-lightbox__caption');
    const closeBtn = lightbox.querySelector('.c-lightbox__close');

    // Attach to all images with 'data-lightbox' or in portfolio grid
    const triggerImages = document.querySelectorAll('.c-portfolio-card__img, .s-materials__img, [data-lightbox]');

    triggerImages.forEach(img => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', () => {
            const src = img.getAttribute('src');
            const alt = img.getAttribute('alt');
            
            lightboxImg.src = src;
            lightboxImg.alt = alt;
            lightboxCaption.textContent = alt;
            
            lightbox.classList.add('is-active');
            document.body.style.overflow = 'hidden'; // Prevent scroll
        });
    });

    const closeLightbox = () => {
        lightbox.classList.remove('is-active');
        document.body.style.overflow = '';
    };

    closeBtn.addEventListener('click', closeLightbox);
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // ESC key to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('is-active')) {
            closeLightbox();
        }
    });
});
