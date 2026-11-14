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


    
navbarContainer.innerHTML = `
    <nav class="navbar solid-nav">

        <div class="navbar-top">
            <div class="logo">
                <a href="${base}index.html">
                    <img
                        src="${base}otrasimagenes/NUR%20logo%202%20enero%202025%203.png"
                        class="logo-img"
                        alt="Logo NUR"
                    >
                </a>
            </div>

            <button class="menu-toggle" id="menu-toggle"
                    aria-label="Abrir menú"
                    aria-expanded="false">
                ☰
            </button>
        </div>

        <!-- MENÚ PARA ESCRITORIO -->
        <ul class="desktop-menu">
            <li><a href="${base}sendas.html">Sendas <i class="fa-solid fa-tree"></i></a></li>
            <li><a href="${base}bestias.html">Bestias <i class="fa-solid fa-cat"></i></a></li>
            <li><a href="${base}tutorialdruidabestia.html">Crear <i class="fa-solid fa-paintbrush"></i></a></li>
            <li><a href="${base}tienda.html">Tienda <i class="fa-solid fa-bag-shopping"></i></a></li>
            <li><a href="${base}exp.html">Exp <i class="fa-solid fa-seedling"></i></a></li>
            <li><a href="${base}enfoques.html">Enfoques <i class="fa-solid fa-bullseye"></i></a></li>
            <li><a href="${base}escenas.html">Escenas <i class="fa-solid fa-clock"></i></a></li>
            <li><a href="${base}lore.html">Lore <i class="fa-solid fa-scroll"></i></a></li>
            <li><a href="${base}reglas.html">Reglas <i class="fa-solid fa-ruler"></i></a></li>
            <li><a href="${base}rolear.html">Rolear <i class="fa-solid fa-masks-theater"></i></a></li>
        </ul>

        <!-- MENÚ PARA MÓVIL -->
        <ul class="mobile-menu" id="mobile-menu">
            <li><a href="${base}sendas.html">Sendas <i class="fa-solid fa-tree"></i></a></li>
            <li><a href="${base}bestias.html">Bestias <i class="fa-solid fa-cat"></i></a></li>
            <li><a href="${base}tutorialdruidabestia.html">Crear PJ/BJ <i class="fa-solid fa-paintbrush"></i></a></li>
            <li><a href="${base}tienda.html">Tienda <i class="fa-solid fa-bag-shopping"></i></a></li>
            <li><a href="${base}exp.html">Exp <i class="fa-solid fa-seedling"></i></a></li>
            <li><a href="${base}enfoques.html">Enfoques <i class="fa-solid fa-bullseye"></i></a></li>
            <li><a href="${base}escenas.html">Escenas <i class="fa-solid fa-clock"></i></a></li>
            <li><a href="${base}lore.html">Lore <i class="fa-solid fa-scroll"></i></a></li>
            <li><a href="${base}reglas.html">Reglas <i class="fa-solid fa-ruler"></i></a></li>
            <li><a href="${base}rolear.html">Rolear <i class="fa-solid fa-masks-theater"></i></a></li>
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

    if (
        enlace === paginaActual ||
        (enlace === "lore.html" && 
        (paginaActual === "naciones.html" || paginaActual === "facciones.html"))
    ) {
        link.classList.add("active");
    }
});
});
