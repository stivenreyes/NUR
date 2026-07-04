const CLASE_ACTUAL =
    typeof GUERRERO !== "undefined" ? GUERRERO :
    typeof ARTESANO !== "undefined" ? ARTESANO :
    typeof RITUALISTA !== "undefined" ? RITUALISTA :
    typeof EXPLORADOR !== "undefined" ? EXPLORADOR :
    typeof HECHICERO !== "undefined" ? HECHICERO :
    typeof INVESTIGADOR !== "undefined" ? INVESTIGADOR :
    typeof BRUJO !== "undefined" ? BRUJO :
    typeof MEDIADOR !== "undefined" ? MEDIADOR :
    typeof BARDO !== "undefined" ? BARDO :
    typeof CAOTICO !== "undefined" ? CAOTICO :
    null;

function crearTarjeta(producto) {
    return `
        <div class="card">

            <details class="acordeon-card" data-id="${CLASE_ACTUAL.nombreClase}-${producto.nombre}">

                <summary class="card-roles">
                    <h2>${producto.nombre}</h2>

                    ${producto.descripcionGrimorio ? `
                        <p class="descripcion-principal">${producto.descripcionGrimorio}</p>
                    ` : ""}
                </summary>

                <div class="card-body">

                    ${producto.novato ? `
                        <p><span class="label">Novato:</span> <span class="valor novato">${producto.novato}</span></p>
                    ` : ""}

                    ${producto.experto ? `
                        <p><span class="label">Experto:</span> <span class="valor experto">${producto.experto}</span></p>
                    ` : ""}

                    ${producto.maestro ? `
                        <p><span class="label">Maestro:</span> <span class="valor maestro">${producto.maestro}</span></p>
                    ` : ""}

                    ${producto.legendario ? `
                        <p><span class="label">Legendario:</span> <span class="valor legendario">${producto.legendario}</span></p>
                    ` : ""}

                    ${producto.hechizos && producto.hechizos.length > 0 ? `
                        <div class="grimorio-hechizos">
                            <h3 class="subtitulo-hechizos">Hechizos</h3>

                            ${producto.hechizos.map(hechizo => `
                                <div class="subcard-hechizo">

                                    ${hechizo.nombreHechizo ? `
                                        <h4 class="titulo-hechizo">${hechizo.nombreHechizo}</h4>
                                    ` : ""}

                                    ${hechizo.nivelHechizo ? `
                                        <p><span class="label">Nivel:</span> <span class="valor">${hechizo.nivelHechizo}</span></p>
                                    ` : ""}

                                    ${hechizo.descripcion ? `
                                        <p><span class="label">Descripción:</span> <span class="valor">${hechizo.descripcion}</span></p>
                                    ` : ""}

                                    ${hechizo.tipoHechizo ? `
                                        <p><span class="label">Tipo:</span> <span class="valor">${hechizo.tipoHechizo}</span></p>
                                    ` : ""}

                                    ${hechizo.costoMana ? `
                                        <p><span class="label">Nur:</span> <span class="valor">${hechizo.costoMana}</span></p>
                                    ` : ""}

                                    ${hechizo.dificultad ? `
                                        <p><span class="label">Dificultad:</span> <span class="valor">${hechizo.dificultad}</span></p>
                                    ` : ""}

                                    ${hechizo.alcanceMaximo ? `
                                        <p><span class="label">Alcance:</span> <span class="valor">${hechizo.alcanceMaximo}</span></p>
                                    ` : ""}

                                </div>
                            `).join("")}
                        </div>
                    ` : ""}

                </div>

            </details>

        </div>
    `;
}

/* ================= aca abajo en el h2 se define especialidad y talento ================= */

function crearSeccion(titulo, listaProductos) {
    const claseGrid = titulo.toLowerCase() === "especialidades"
        ? "grid-tarjetas-especialidades"
        : "grid-tarjetas";

    return `
        <section class="seccion-categoria">
            <h2 class="titulo-seccion">${titulo}</h2>
            <div class="${claseGrid}">
                ${listaProductos.map(producto => crearTarjeta(producto)).join("")}
            </div>
        </section>
    `;
}

function renderClase() {
    const tituloClase = document.getElementById("titulo-clase");
    const contenedorSecciones = document.getElementById("contenedor-secciones");

    if (!CLASE_ACTUAL) {
        console.error("No se encontró ninguna clase cargada (GUERRERO o EXPLORADOR).");
        if (contenedorSecciones) {
            contenedorSecciones.innerHTML = "<p style='color:red;'>Error: no se cargó ninguna clase.</p>";
        }
        return;
    }

    if (tituloClase) {
        tituloClase.textContent = CLASE_ACTUAL.nombreClase;
    }

    if (contenedorSecciones) {
        contenedorSecciones.innerHTML = CLASE_ACTUAL.secciones.map(seccion =>
            crearSeccion(seccion.titulo, seccion.items)
        ).join("");
    }
}

renderClase();

/* ================= RECORDAR ACORDEONES ABIERTOS ================= */

document.querySelectorAll(".acordeon-card").forEach(detalle => {

    const id = detalle.dataset.id;

    // Restaurar estado
    if (localStorage.getItem("acordeon_" + id) === "abierto") {
        detalle.open = true;
    }

    // Guardar estado
    detalle.addEventListener("toggle", () => {
        if (detalle.open) {
            localStorage.setItem("acordeon_" + id, "abierto");
        } else {
            localStorage.removeItem("acordeon_" + id);
        }
    });

});

/* ================= BOTON ================= */
let btnArriba = document.getElementById("btn-arriba");

window.addEventListener("scroll", function() {
    if (window.scrollY > 200) {
        btnArriba.style.display = "block";
    } else {
        btnArriba.style.display = "none";
    }
});

btnArriba.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});