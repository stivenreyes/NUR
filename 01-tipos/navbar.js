document.addEventListener("DOMContentLoaded", () => {
    const navbarContainer = document.getElementById("navbar-container");
    if (!navbarContainer) return;

    navbarContainer.innerHTML = `
        <nav class="navbar solid-nav">
            <div class="navbar-top">
                <div class="logo">
                    <a href="index.html" class="logo-link">
                        <img src="NUR logo 2 enero 2025 2.png" alt="NUR Logo" class="logo-img">
                    </a>
                </div>

                <button class="menu-toggle" id="menu-toggle" aria-label="Abrir menú">
                    ☰
                </button>
            </div>

            <!-- MENÚ PC -->
            <ul class="desktop-menu">
                <li><a href="index.html">Inicio</a></li>
                <li><a href="Roles.html">Roles</a></li>
                <li><a href="bestias.html">Bestias</a></li>
                <li><a href="Tutorial.html">Crear PJ</a></li>
                <li><a href="tienda.html">Tienda</a></li>
                <li><a href="Exp.html">Exp</a></li>
            </ul>

            <!-- MENÚ MÓVIL -->
            <ul class="mobile-menu" id="mobile-menu">
                <li><a href="index.html">Inicio</a></li>
                <li><a href="Roles.html">Roles</a></li>
                <li><a href="bestias.html">Bestias</a></li>
                <li><a href="Tutorial.html">Crear PJ</a></li>
                <li><a href="tienda.html">Tienda</a></li>
                <li><a href="Exp.html">Exp</a></li>
            </ul>
        </nav>
    `;

    // Detectar página actual y marcar active
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const links = navbarContainer.querySelectorAll("a");

    links.forEach(link => {
        const href = link.getAttribute("href");
        if (href === currentPage) {
            link.classList.add("active");
        }
    });

    // Menú hamburguesa móvil
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener("click", () => {
            mobileMenu.classList.toggle("show");
        });

        // Cerrar menú móvil al tocar una opción
        mobileMenu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                mobileMenu.classList.remove("show");
            });
        });
    }
});