document.addEventListener("DOMContentLoaded", () => {
    // 1. Mostrar mensaje de bienvenida en consola
    console.log("%c¡Bienvenido al Proyecto Nur!", "color: #f1c40f; font-size: 20px; font-weight: bold;");

    // 2. Efecto Parallax suave en el texto principal y orbes
    const heroContent = document.querySelector('.hero-content');
    const glowOrb = document.querySelector('.glow-orb');

    window.addEventListener('scroll', () => {
        let scroll = window.scrollY;

        if (heroContent) {
            // Mover hacia abajo ligeramente al hacer scroll
            heroContent.style.transform = `translateY(${scroll * 0.3}px)`;
            // Desvanecer contenido
            heroContent.style.opacity = Math.max(1 - (scroll * 0.002), 0);
        }

        if (glowOrb) {
            glowOrb.style.transform = `translateY(${scroll * 0.5}px)`;
        }
    });

    // 3. Interacción del botón "Empezar" con un pequeño destello (ripple effect) manual o alert
    const ctaBtn = document.querySelector('.cta-btn');
    if (ctaBtn) {
        ctaBtn.addEventListener('click', function (e) {
            e.preventDefault();

            // Animación de pulso
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'translateY(-4px) scale(1.02)';
            }, 100);

        });
    }

    // 4. Smooth scrolling para todos los enlaces del navbar
    const anchorLinks = document.querySelectorAll('.nav-links a');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
