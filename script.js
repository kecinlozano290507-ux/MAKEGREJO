// Animaciones al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.product-card, .benefit-card, .recipe-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Funcionalidad de los botones
document.querySelectorAll('.buy-button, .cta-button').forEach(button => {
    button.addEventListener('click', function(e) {
        if(this.classList.contains('buy-button')) {
            const originalText = this.textContent;
            const originalBg = this.style.background;
            this.textContent = '✓ Añadido al Carrito';
            this.style.background = '#c86d56';
            setTimeout(() => {
                this.textContent = originalText;
                this.style.background = originalBg;
            }, 2000);
        }
    });
});

// Scroll suave para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
