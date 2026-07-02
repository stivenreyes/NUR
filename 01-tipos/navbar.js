document.addEventListener("DOMContentLoaded", () => {
    const navbarContainer = document.getElementById("navbar-container");
    if (!navbarContainer) return;


const path = window.location.pathname;

const base =
    path.includes("/roles/") || path.includes("/tienda/") || path.includes("/escenas/")
        ? "../"
        : "";

// SI SE VA A AÑADIR OTRA CARPETA TOCA AÑADIRLA ACA ARRIBA PARA QUE FUNCIONE EL NAVBAR!!! ""
// SI SE VA A AÑADIR OTRA CARPETA TOCA AÑADIRLA ACA ARRIBA PARA QUE FUNCIONE EL NAVBAR!!! ""
// SI SE VA A AÑADIR OTRA CARPETA TOCA AÑADIRLA ACA ARRIBA PARA QUE FUNCIONE EL NAVBAR!!! ""
// SI SE VA A AÑADIR OTRA CARPETA TOCA AÑADIRLA ACA ARRIBA PARA QUE FUNCIONE EL NAVBAR!!! ""

    navbarContainer.innerHTML = `
        <nav class="navbar solid-nav">

            <div class="navbar-top">
                <div class="logo">
                    <a href="${base}index.html">
                        <img src="${base}otrasimagenes/NUR logo 2 enero 2025 2.png" class="logo-img">
                    </a>
                </div>

                <button class="menu-toggle" id="menu-toggle">☰</button>
            </div>

            <ul class="desktop-menu">
                <li><a href="${base}roles.html">Roles</a></li>
                <li><a href="${base}bestias.html">Bestias</a></li>
                <li><a href="${base}tutorialdruidabestia.html">Crear PJ/BE</a></li>
                <li><a href="${base}tienda.html">Tienda</a></li>
                <li><a href="${base}exp.html">Exp</a></li>
                <li><a href="${base}enfoques.html">Enfoques</a></li>
                <li><a href="${base}escenas.html">Escenas</a></li>
                <li><a href="${base}lore.html">Lore</a></li>
                <li><a href="${base}reglas.html">Reglas</a></li>
            </ul>

            <ul class="mobile-menu" id="mobile-menu">
                <li><a href="${base}roles.html">Roles</a></li>
                <li><a href="${base}bestias.html">Bestias</a></li>
                <li><a href="${base}tutorialdruidabestia.html">Crear PJ/BE</a></li>
                <li><a href="${base}tienda.html">Tienda</a></li>
                <li><a href="${base}exp.html">Exp</a></li>
                <li><a href="${base}enfoques.html">Enfoques</a></li>
                <li><a href="${base}escenas.html">Escenas</a></li>
                <li><a href="${base}lore.html">Lore</a></li>
                <li><a href="${base}reglas.html">Reglas</a></li>
            </ul>

        </nav>
    `;

    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener("click", () => {
            mobileMenu.classList.toggle("show");
        });
    }

    // Resaltar la página actual
const paginaActual = window.location.pathname.split("/").pop().toLowerCase();

document.querySelectorAll(".desktop-menu a, .mobile-menu a").forEach(link => {
    const enlace = link.getAttribute("href").replace("../", "").toLowerCase();

    if (enlace === paginaActual) {
        link.classList.add("active");
    }
});
});