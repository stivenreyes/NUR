function crearTarjeta(producto) {
    return `
        <div class="card">
            <div class="card-roles">
                <h2>${producto.nombre}</h2>
                <span class="descripcion">${producto.descripcion}</span>
            </div>

            <div class="card-body">
                
                ${producto.novato ? `
                    <p>
                        <span class="label">Novato:</span>
                        <span class="valor novato">${producto.novato}</span>
                    </p>` : ""}

                ${producto.experto ? `
                    <p>
                        <span class="label">Experto:</span>
                        <span class="valor experto">${producto.experto}</span>
                    </p>` : ""}

                ${producto.maestro ? `
                    <p>
                        <span class="label">Maestro:</span>
                        <span class="valor maestro">${producto.maestro}</span>
                    </p>` : ""}

                ${producto.hechizos && producto.hechizos.length > 0 ? `
                    <div class="grimorio-hechizos">
                        <h3 class="subtitulo-hechizos">Hechizos del Grimorio</h3>

                        ${producto.hechizos.slice(0, 8).map(hechizo => `
                            <div class="subcard-hechizo">
                                
                                ${hechizo.nombreHechizo ? `
                                        <h4 class="titulo-hechizo">${hechizo.nombreHechizo}</h4>
                                        ` : ""}
                                ${hechizo.nivelHechizo ? `
                                    <p>
                                        <span class="label">Nivel de Hechizo:</span> 
                                        <span class="valor nivelHechizo">${hechizo.nivelHechizo}</span>
                                    </p>` : ""}  

                                ${hechizo.descripcion ? `
                                    <p>
                                        <span class="label">Descripción:</span> 
                                        <span class="valor descripcion">${hechizo.descripcion}</span>
                                    </p>` : ""}  

                                ${hechizo.tipoHechizo ? `
                                    <p>
                                        <span class="label">Tipo de Hechizo:</span> 
                                        <span class="valor tipoHechizo">${hechizo.tipoHechizo}</span>
                                    </p>` : ""}  

                                ${hechizo.costoMana ? `
                                    <p>
                                        <span class="label">Costo de Mana:</span> 
                                        <span class="valor costoMana">${hechizo.costoMana}</span>
                                    </p>` : ""}  

                                ${hechizo.dificultad ? `
                                    <p>
                                        <span class="label">Dificultad:</span> 
                                        <span class="valor dificultad">${hechizo.dificultad}</span>
                                    </p>` : ""}  

                                ${hechizo.alcanceMaximo ? `
                                    <p>
                                        <span class="label">Alcance Máximo:</span> 
                                        <span class="valor alcanceMaximo">${hechizo.alcanceMaximo}</span>
                                    </p>` : ""}
                            </div>
                        `).join("")}
                    </div>
                ` : ""}
            </div>
        </div>
    `;
}


/* ================= HECHIZOS / GRIMORIOS ================= */

let SECCIONES = {
    especialidades: [
        {
            nombre: "Especialidad de Fuego",
            descripcionGrimorio: "Dominio básico del elemento fuego.",
            novato: "1d4",
            experto: "2d4",
            maestro: "3d4",
            hechizos: []
        },
        {
            nombre: "Especialidad de Hielo",
            descripcionGrimorio: "Control y defensa con magia helada.",
            novato: "1d4",
            experto: "2d4",
            maestro: "3d4",
            hechizos: []
        }
    ],

    tecnicas: [
        {
            nombre: "Técnica de Corte Arcano",
            descripcionGrimorio: "Canaliza energía en un ataque preciso.",
            novato: "1d6",
            experto: "2d6",
            maestro: "3d6",
            hechizos: [{
                nombreHechizo: "Sombra Viva",
                nivelHechizo: "4",
                descripcion: "Invoca una sombra que persigue al objetivo.",
                tipoHechizo: "Invocación",
                costoMana: "35 MP",
                dificultad: "Alta",
                alcanceMaximo: "25 metros"
            },
            {
                nombreHechizo: "Niebla Maldita",
                nivelHechizo: "5",
                descripcion: "Cubre un área con energía oscura debilitante.",
                tipoHechizo: "Área",
                costoMana: "40 MP",
                dificultad: "Alta",
                alcanceMaximo: "30 metros"
            }]
        },
        {
            nombre: "Técnica de Impacto Rúnico",
            descripcionGrimorio: "Golpe mágico con runas de poder.",
            novato: "1d8",
            experto: "2d8",
            maestro: "3d8",
            hechizos: []
        }
    ]
};


/* ================= RENDER ================= */

function crearSeccion(titulo, listaProductos) {
    return `
        <section class="seccion-categoria">
            <h1 class="titulo-seccion">${titulo}</h1>
            <div class="grid-tarjetas">
                ${listaProductos.map(producto => crearTarjeta(producto)).join("")}
            </div>
        </section>
    `;
}

let contenedorSecciones = document.getElementById("contenedor-secciones");

if (contenedorSecciones) {
    contenedorSecciones.innerHTML = `
        ${crearSeccion("Especialidades", SECCIONES.especialidades)}
        ${crearSeccion("Técnicas", SECCIONES.tecnicas)}
    `;
}



