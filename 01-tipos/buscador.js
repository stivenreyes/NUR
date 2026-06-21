/* ================= BUSCAR ESPECIALIDADES ================= */

function buscarEspecialidades(texto) {
    let resultados = [];

    TODAS_LAS_CLASES.forEach(clase => {
        clase.secciones.forEach(seccion => {
            // Ignorar espacios y mayúsculas
            if (seccion.titulo.trim().toLowerCase() === "especialidades") {
                seccion.items.forEach(item => {
                    if (item.nombre && item.nombre.toLowerCase().includes(texto.trim().toLowerCase())) {
                        resultados.push({
                            clase: clase.nombreClase,
                            item: item
                        });
                    }
                });
            }
        });
    });

    return resultados;
}

/* ================= BUSCAR TÉCNICAS / TALENTOS ================= */

function buscarTecnicas(texto) {
    let resultados = [];

    TODAS_LAS_CLASES.forEach(clase => {
        clase.secciones.forEach(seccion => {
            let titulo = seccion.titulo.trim().toLowerCase();

            if (titulo === "técnicas" || titulo === "tecnicas" || titulo === "talentos") {
                seccion.items.forEach(item => {
                    if (item.nombre && item.nombre.toLowerCase().includes(texto.trim().toLowerCase())) {
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
    let resultados = [];

    TODAS_LAS_CLASES.forEach(clase => {
        clase.secciones.forEach(seccion => {
            seccion.items.forEach(item => {
                if (item.hechizos && item.hechizos.length > 0) {
                    item.hechizos.forEach(hechizo => {
                        if (hechizo.nombreHechizo && hechizo.nombreHechizo.toLowerCase().includes(texto.trim().toLowerCase())) {
                            resultados.push({
                                clase: clase.nombreClase,
                                seccion: seccion.titulo,
                                tecnica: item.nombre,
                                hechizo: hechizo
                            });
                        }
                    });
                }
            });
        });
    });

    return resultados;
}

/* ================= MOSTRAR RESULTADOS ================= */

function mostrarResultadosEspecialidades(resultados) {
    let contenedor = document.getElementById("resultados-especialidades");

    if (resultados.length === 0) {
        contenedor.innerHTML = "<p>No se encontraron especialidades.</p>";
        return;
    }

    contenedor.innerHTML = resultados.map(r => `
        <div class="resultado-card">
            <h3>${r.item.nombre}</h3>
            <p><strong>Clase:</strong> ${r.clase}</p>

            ${r.item.descripcionGrimorio ? `<p><strong>Descripción:</strong> ${r.item.descripcionGrimorio}</p>` : ""}
            ${r.item.novato ? `<p><strong>Novato:</strong> ${r.item.novato}</p>` : ""}
            ${r.item.experto ? `<p><strong>Experto:</strong> ${r.item.experto}</p>` : ""}
            ${r.item.maestro ? `<p><strong>Maestro:</strong> ${r.item.maestro}</p>` : ""}
            ${r.item.legendario ? `<p><strong>Legendario:</strong> ${r.item.legendario}</p>` : ""}
            ${r.item.hechizos && r.item.hechizos.length > 0 ? `
                <p><strong>Hechizos:</strong> ${r.item.hechizos.length}</p>
                <div class="mini-hechizos">
                    <ul>
                        ${r.item.hechizos.map(h => `<li>${h.nombreHechizo}</li>`).join("")}
                    </ul>
                </div>` : `<p><strong>Hechizos:</strong> 0</p>`}
        </div>
    `).join("");
}

function mostrarResultadosTecnicas(resultados) {
    let contenedor = document.getElementById("resultados-tecnicas");

    if (resultados.length === 0) {
        contenedor.innerHTML = "<p>No se encontraron técnicas o talentos.</p>";
        return;
    }

    contenedor.innerHTML = resultados.map(r => `
        <div class="resultado-card">
            <h3>${r.item.nombre}</h3>
            <p><strong>Clase:</strong> ${r.clase}</p>
            <p><strong>Sección:</strong> ${r.seccion}</p>

            ${r.item.descripcionGrimorio ? `<p><strong>Descripción:</strong> ${r.item.descripcionGrimorio}</p>` : ""}
            ${r.item.novato ? `<p><strong>Novato:</strong> ${r.item.novato}</p>` : ""}
            ${r.item.experto ? `<p><strong>Experto:</strong> ${r.item.experto}</p>` : ""}
            ${r.item.maestro ? `<p><strong>Maestro:</strong> ${r.item.maestro}</p>` : ""}
            ${r.item.legendario ? `<p><strong>Legendario:</strong> ${r.item.legendario}</p>` : ""}
            ${r.item.hechizos && r.item.hechizos.length > 0 ? `
                <p><strong>Hechizos:</strong> ${r.item.hechizos.length}</p>
                <div class="mini-hechizos">
                    <ul>
                        ${r.item.hechizos.map(h => `<li>${h.nombreHechizo}</li>`).join("")}
                    </ul>
                </div>` : `<p><strong>Hechizos:</strong> 0</p>`}
        </div>
    `).join("");
}

function mostrarResultadosHechizos(resultados) {
    let contenedor = document.getElementById("resultados-hechizos");

    if (resultados.length === 0) {
        contenedor.innerHTML = "<p>No se encontraron hechizos.</p>";
        return;
    }

    contenedor.innerHTML = resultados.map(r => `
        <div class="resultado-card">
            <h3>${r.hechizo.nombreHechizo}</h3>
            <p><strong>Clase:</strong> ${r.clase}</p>
            <p><strong>Sección:</strong> ${r.seccion}</p>
            <p><strong>Pertenece a:</strong> ${r.tecnica}</p>

            ${r.hechizo.nivelHechizo ? `<p><strong>Nivel:</strong> ${r.hechizo.nivelHechizo}</p>` : ""}
            ${r.hechizo.descripcion ? `<p><strong>Descripción:</strong> ${r.hechizo.descripcion}</p>` : ""}
            ${r.hechizo.tipoHechizo ? `<p><strong>Tipo:</strong> ${r.hechizo.tipoHechizo}</p>` : ""}
            ${r.hechizo.costoMana ? `<p><strong>Costo de Nur:</strong> ${r.hechizo.costoMana}</p>` : ""}
            ${r.hechizo.dificultad ? `<p><strong>Dificultad:</strong> ${r.hechizo.dificultad}</p>` : ""}
            ${r.hechizo.alcanceMaximo ? `<p><strong>Alcance Máximo:</strong> ${r.hechizo.alcanceMaximo}</p>` : ""}
        </div>
    `).join("");
}

/* ================= EVENTOS INPUT ================= */

document.getElementById("buscar-especialidad").addEventListener("input", function () {
    let texto = this.value.trim();
    if (!texto) return document.getElementById("resultados-especialidades").innerHTML = "";
    mostrarResultadosEspecialidades(buscarEspecialidades(texto));
});

document.getElementById("buscar-tecnica").addEventListener("input", function () {
    let texto = this.value.trim();
    if (!texto) return document.getElementById("resultados-tecnicas").innerHTML = "";
    mostrarResultadosTecnicas(buscarTecnicas(texto));
});

document.getElementById("buscar-hechizo").addEventListener("input", function () {
    let texto = this.value.trim();
    if (!texto) return document.getElementById("resultados-hechizos").innerHTML = "";
    mostrarResultadosHechizos(buscarHechizos(texto));
});