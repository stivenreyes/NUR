/* ================= UTILIDADES ================= */

// Escapa HTML para evitar inyección de código al usar innerHTML
function esc(texto) {
    return String(texto ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

// Minúsculas, sin tildes y sin espacios sobrantes
function normalizar(texto) {
    return String(texto ?? "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();
}

// true si el valor existe (acepta 0 como valor válido)
function tieneValor(valor) {
    return valor !== undefined && valor !== null && valor !== "";
}

// Devuelve <p><strong>Etiqueta:</strong> valor</p> o "" si no hay valor
function campo(etiqueta, valor) {
    return tieneValor(valor)
        ? `<p><strong>${etiqueta}:</strong> ${esc(valor)}</p>`
        : "";
}

/* ================= BUSCAR ESPECIALIDADES ================= */

function buscarEspecialidades(texto) {
    const resultados = [];
    const busqueda = normalizar(texto);

    TODAS_LAS_CLASES.forEach(clase => {
        clase.secciones.forEach(seccion => {
            if (normalizar(seccion.titulo) === "especialidades") {
                seccion.items.forEach(item => {
                    if (item.nombre && normalizar(item.nombre).includes(busqueda)) {
                        resultados.push({
                            clase: clase.nombreClase,
                            seccion: seccion.titulo,
                            item: item
                        });
                    }
                });
            }
        });
    });

    return resultados;
}

/* ================= BUSCAR TALENTOS ================= */

// Agrega aquí otras variantes de título si las necesitas
const TITULOS_TALENTOS = ["talentos", "talento"];

function buscarTalentos(texto) {
    const resultados = [];
    const busqueda = normalizar(texto);

    TODAS_LAS_CLASES.forEach(clase => {
        clase.secciones.forEach(seccion => {
            if (TITULOS_TALENTOS.includes(normalizar(seccion.titulo))) {
                seccion.items.forEach(item => {
                    if (item.nombre && normalizar(item.nombre).includes(busqueda)) {
                        resultados.push({
                            clase: clase.nombreClase,
                            seccion: seccion.titulo,
                            item: item
                        });
                    }
                });
            }
        });
    });

    return resultados;
}

/* ================= BUSCAR HECHIZOS ================= */

function buscarHechizos(texto) {
    const resultados = [];
    const busqueda = normalizar(texto);

    TODAS_LAS_CLASES.forEach(clase => {
        clase.secciones.forEach(seccion => {
            seccion.items.forEach(item => {
                (item.hechizos ?? []).forEach(hechizo => {
                    if (hechizo.nombreHechizo && normalizar(hechizo.nombreHechizo).includes(busqueda)) {
                        resultados.push({
                            clase: clase.nombreClase,
                            seccion: seccion.titulo,
                            talento: item.nombre,
                            hechizo: hechizo
                        });
                    }
                });
            });
        });
    });

    return resultados;
}

/* ================= TARJETAS ================= */

function tarjetaItem(r, mostrarSeccion = false) {
    const item = r.item;
    const hechizos = item.hechizos ?? [];
    const niveles = [
        ["Novato", item.novato],
        ["Experto", item.experto],
        ["Maestro", item.maestro],
        ["Legendario", item.legendario]
    ];

    return `
        <div class="resultado-card">
            <h3>${esc(item.nombre)}</h3>
            <p><strong>Senda:</strong> ${esc(r.clase)}</p>
            ${mostrarSeccion ? campo("Sección", r.seccion) : ""}
            ${campo("Descripción", item.descripcionGrimorio)}
            ${niveles.map(([etiqueta, valor]) => campo(etiqueta, valor)).join("")}
            <p><strong>Hechizos:</strong> ${hechizos.length}</p>
            ${hechizos.length > 0 ? `
                <div class="mini-hechizos">
                    <ul>${hechizos.map(h => `<li>${esc(h.nombreHechizo)}</li>`).join("")}</ul>
                </div>` : ""}
        </div>
    `;
}

function tarjetaHechizo(r) {
    const h = r.hechizo;

    return `
        <div class="resultado-card">
            <h3>${esc(h.nombreHechizo)}</h3>
            <p><strong>Senda:</strong> ${esc(r.clase)}</p>
            <p><strong>Sección:</strong> ${esc(r.seccion)}</p>
            <p><strong>Pertenece a:</strong> ${esc(r.talento)}</p>
            ${campo("Nivel", h.nivelHechizo)}
            ${campo("Descripción", h.descripcion)}
            ${campo("Tipo", h.tipoHechizo)}
            ${campo("Costo de Nur", h.costoMana)}
            ${campo("Dificultad", h.dificultad)}
            ${campo("Alcance Máximo", h.alcanceMaximo)}
        </div>
    `;
}

/* ================= MOSTRAR RESULTADOS ================= */

function mostrarResultadosEspecialidades(resultados) {
    const contenedor = document.getElementById("resultados-especialidades");

    if (resultados.length === 0) {
        contenedor.innerHTML = "<p>No se encontraron especialidades.</p>";
        return;
    }

    contenedor.innerHTML = resultados.map(r => tarjetaItem(r)).join("");
}

function mostrarResultadosTalentos(resultados) {
    const contenedor = document.getElementById("resultados-talentos");

    if (resultados.length === 0) {
        contenedor.innerHTML = "<p>No se encontraron talentos.</p>";
        return;
    }

    contenedor.innerHTML = resultados.map(r => tarjetaItem(r, true)).join("");
}

function mostrarResultadosHechizos(resultados) {
    const contenedor = document.getElementById("resultados-hechizos");

    if (resultados.length === 0) {
        contenedor.innerHTML = "<p>No se encontraron hechizos.</p>";
        return;
    }

    contenedor.innerHTML = resultados.map(tarjetaHechizo).join("");
}

/* ================= EVENTOS INPUT ================= */

// Espera unos milisegundos tras dejar de escribir antes de buscar
function debounce(fn, espera = 200) {
    let temporizador;
    return function (...args) {
        clearTimeout(temporizador);
        temporizador = setTimeout(() => fn.apply(this, args), espera);
    };
}

function conectarBuscador(idInput, idResultados, buscar, mostrar) {
    const input = document.getElementById(idInput);
    const contenedor = document.getElementById(idResultados);

    input.addEventListener("input", debounce(function () {
        const texto = input.value.trim();

        if (!texto) {
            contenedor.innerHTML = "";
            return;
        }

        mostrar(buscar(texto));
    }));
}

conectarBuscador("buscar-especialidad", "resultados-especialidades", buscarEspecialidades, mostrarResultadosEspecialidades);
conectarBuscador("buscar-talento", "resultados-talentos", buscarTalentos, mostrarResultadosTalentos);
conectarBuscador("buscar-hechizo", "resultados-hechizos", buscarHechizos, mostrarResultadosHechizos);