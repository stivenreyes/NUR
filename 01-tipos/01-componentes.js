function crearTarjeta(producto) {
    return `
        <div class="card">
            <div class="card-header">
                <h2>${producto.nombre}</h2>
                <span class="precio"> 
                ${producto.precio}</span>
            </div>

            <div class="card-body">
                
                ${producto.dano ? `
                    <p>
                        <span class="label">Daño:</span>
                        <span class="valor daño">${producto.dano}</span>
                    </p>` : ""}

                ${producto.tipo ? `
                    <p>
                        <span class="label">Tipo:</span>
                        <span class="valor tipo">${producto.tipo}</span>
                    </p>` : ""}

                ${producto.alcance ? `
                    <p>
                        <span class="label">Alcance:</span>
                        <span class="valor alcance">${producto.alcance}</span>
                    </p>` : ""}

                ${producto.requisitos ? `
                    <p>
                        <span class="label">Requisitos:</span> 
                        <span class="valor requisitos">${producto.requisitos}</span>
                     </p>` : ""}   
                     
                ${producto.dureza ? `
                    <p>
                        <span class="label">Dureza:</span> 
                        <span class="valor dureza">${producto.dureza}</span>
                     </p>` : ""}  

                ${producto.manos ? `
                    <p>
                        <span class="label">Manos:</span> 
                        <span class="valor manos">${producto.manos}</span>
                     </p>` : ""}       

                ${producto.curacion ? `
                    <p>
                        <span class="label">Curación:</span> 
                        <span class="valor curacion">${producto.curacion}</span>
                    </p>` : ""}

                ${producto.restablecimiento ? `
                    <p>
                        <span class="label">Restablecimiento:</span> 
                        <span class="valor restablecimiento">${producto.restablecimiento}</span>
                    </p>` : ""}

                ${producto.ganancia ? `
                    <p>
                        <span class="label">Ganancia:</span> 
                        <span class="valor ganancia">${producto.ganancia}</span>
                    </p>` : ""}

                ${producto.objetivos ? `
                    <p>
                        <span class="label">Objetivos:</span> 
                        <span class="valor objetivos">${producto.objetivos}</span>
                    </p>` : ""}

                ${producto.tipoObjetivos ? `
                    <p>
                        <span class="label">Tipo de objetivos:</span> 
                        <span class="valor tipoObjetivos">${producto.tipoObjetivos}</span>
                    </p>` : ""}
                ${producto.tradicion ? `
                    <p>
                        <span class="label">Tradición:</span> 
                        <span class="valor tradicion">${producto.tradicion}</span>
                    </p>` : ""}

                ${producto.potencia ? `
                    <p>
                        <span class="label">Potencia:</span> 
                        <span class="valor potencia">${producto.potencia}</span>
                    </p>` : ""}

                ${producto.efectos ? `
                    <p>
                        <span class="label">Efectos:</span> 
                        <span class="valor efectos">${producto.efectos}</span>
                    </p>` : ""}

                ${producto.curiosidad ? `
                    <p>
                        <span class="label">Curiosidad:</span> 
                        <span class="valor curiosidad">${producto.curiosidad}</span>
                    </p>` : ""}

                ${producto.dificultadIntoxicacion ? `
                    <p>
                        <span class="label">Dificultad para intoxicación:</span> 
                        <span class="valor dificultadIntoxicacion">${producto.dificultadIntoxicacion}</span>
                    </p>` : ""}

                ${producto.duracion ? `
                    <p>
                        <span class="label">Duración:</span> 
                        <span class="valor duracion">${producto.duracion}</span>
                    </p>` : ""}
            </div>
        </div>
    `;
}
/* ================= BUSCADOR ================= */
function renderProductos(lista, contenedor) {

    contenedor.innerHTML = "";

    for (let producto of lista) {
        contenedor.innerHTML += crearTarjeta(producto);
    }

}




/* ================= ARMAS ================= */

let armas = [
    {
        nombre: "Daga",
        tipo: "Arma compleja (pelea / fuerza)",
        dano: "1d3+1",
        precio: "25L",
        alcance: "1",
        requisitos: "Ninguno",
        dureza: "1",
        manos: "1"
    },
    {
        nombre: "Espada corta",
        tipo: "Arma compleja (pelea / fuerza)",
        dano: "1d6",
        precio: "50L",
        alcance: "1",
        requisitos: "Ninguno",
        dureza: "1",
        manos: "1"
    },
    {
        nombre: "Arco corto",
        tipo: "Arma larga (precisión / percepción)",
        dano: "1d6",
        precio: "80L",
        alcance: "6",
        requisitos: "Ninguno",
        dureza: "1",
        manos: "2"
    },
    {
        nombre: "Hacha",
        tipo: "Arma pesada (pelea / fuerza)",
        dano: "3d6",
        precio: "100L",
        alcance: "1",
        requisitos: "Fuerza",
        dureza: "2",
        manos: "2"
    },
    {
        nombre: "Nudillos",
        tipo: "Arma pesada (pelea / fuerza) Si usas ambos, relanzas daño y eliges el mejor",
        dano: "1d6",
        precio: "100L",
        alcance: "1",
        requisitos: "Ninguno",
        dureza: "1",
        manos: "1",
        
    },
    {
        nombre: "Arco largo",
        tipo: "Arma corta y larga (precisión / percepción)",
        dano: "1d6+2",
        precio: "100L",
        alcance: "7",
        requisitos: "Ninguno",
        dureza: "2",
        manos: "2"
    },
    {
        nombre: "Cerbatana",
        tipo: "Arma corta y larga (precisión / percepción)+3 sigilo para evitar ser visto" ,
        dano: "1d3",
        precio: "80L",
        alcance: "3",
        requisitos: "Ninguno",
        dureza: "1",
        manos: "1",
        especial: ""
    },
    {
        nombre: "Mazo",
        tipo: "Arma pesada (pelea / fuerza) Proeza (5): lanzar objetivo dado especial x2",
        dano: "4d6",
        precio: "120L",
        alcance: "1",
        requisitos: "Fuerza 3",
        dureza: "3",
        manos: "1",
        
    },
    {
        nombre: "Espadón",
        tipo: "Arma pesada (pelea / fuerza)",
        dano: "3d6+4",
        precio: "120L",
        alcance: "1",
        requisitos: "Fuerza 3",
        dureza: "4",
        manos: "2"
    },
    {
        nombre: "Espadón de tiburón de 2 colas",
        tipo: "Arma pesada (pelea / fuerza) Proeza (4): lanza enemigo +2d6 daño y daño por obstáculos",
        dano: "5d6",
        precio: "150L",
        alcance: "1",
        requisitos: "Fuerza 3 + Talento Portador de armas NUR (novato)",
        dureza: "6",
        manos: "2",
    },
    {
        nombre: "Mazo mágico",
        tipo: "Arma pesada (pelea / fuerza) Daño directo a vida",
        dano: "2d6",
        precio: "180L",
        alcance: "1",
        requisitos: "Fuerza 3 + Voluntad 2",
        dureza: "3",
        manos: "2",
    },
    {
        nombre: "Porra (palo)",
        tipo: "Arma compleja (pelea / fuerza)",
        dano: "1d3",
        precio: "—",
        alcance: "1",
        requisitos: "Ninguno",
        dureza: "1",
        manos: "1"
    },
    {
        nombre: "Piedra",
        tipo: "Arma compleja (pelea / fuerza o precisión / percepción)",
        dano: "1d2",
        precio: "0L",
        alcance: "4",
        requisitos: "Ninguno",
        dureza: "—",
        manos: "1"
    }

];


/* ================= POCIONES ================= */

let pociones = [
    { 
        nombre: "Poción de salud básica", 
        precio: "25L", 
        curacion: "1D6", 
        objetivos: "1", 
        tipoObjetivos: "Druidas" 
    },
    { 
        nombre: "Poción de salud mejorada", 
        precio: "30L", 
        curacion: "1D6+2", 
        objetivos: "1", 
        tipoObjetivos: "Druidas" 
    },
    { 
        nombre: "Poción de salud avanzada", 
        precio: "35L", 
        curacion: "1D6+4", 
        objetivos: "1", 
        tipoObjetivos: "Druidas" 
    },
    { 
        nombre: "Poción de salud amplia básica", 
        precio: "35L", 
        curacion: "1D6", 
        objetivos: "1", 
        tipoObjetivos: "Druidas y bestias" 
    },
    { 
        nombre: "Poción de salud bestias terrestres básica", 
        precio: "35L", 
        curacion: "1D6+2", 
        objetivos: "1", 
        tipoObjetivos: "Bestias" 
    },
    { 
        nombre: "Poción de salud bestias aéreas básica", 
        precio: "40L", 
        curacion: "1D6+2", 
        objetivos: "1", 
        tipoObjetivos: "Bestias" 
    },
    { 
        nombre: "Poción de nur básica", 
        precio: "25L", 
        restablecimiento: "1D6+4", 
        objetivos: "1", 
        tipoObjetivos: "Druidas" 
    },
    { 
        nombre: "Poción de nur mejorada", 
        precio: "30L", 
        restablecimiento: "2D6", 
        objetivos: "1", 
        tipoObjetivos: "Druidas" 
    },
    { 
        nombre: "Pociones de seres vinculados (x2)", 
        precio: "60L", 
        ganancia: "Experiencia = 5 x nivel de vínculo (1 vez por semana)", 
        objetivos: "2", 
        tipoObjetivos: "Druidas y bestias" 
    }
];

/* ================= BEBIDAS ================= */

let bebidas = [
    {
        nombre: "Hierba Cantora",
        precio: "30L",
        tradicion: "Para estar con amigos o parejas",
        potencia: "(# de tragos) x 10",
        efectos: "Cantar a toda voz",
        curiosidad: "Si la bestia está ebria se une al canto",
        dificultadIntoxicacion: "...",
        duracion: "1D3 horas"
    },
    {
        nombre: "Agua de Trueno",
        precio: "30L",
        tradicion: "Para brindar por una derrota",
        potencia: "(# de tragos) x 5",
        efectos: "Violencia contra cualquiera cercano",
        curiosidad: "Si la bestia está ebria retará a su amo",
        dificultadIntoxicacion: "10",
        duracion: "1D3 horas"
    },
    {
        nombre: "Colmillo Ardiente",
        precio: "30L",
        tradicion: "Para brindar por una victoria",
        potencia: "(# de tragos) x 5",
        efectos: "Querer retar a cualquiera",
        curiosidad: "...",
        dificultadIntoxicacion: "10",
        duracion: "1D3 horas"
    },
    {
        nombre: "Pluma de Zarpa",
        precio: "30L",
        tradicion: "Para aliviar frustración",
        potencia: "(# de tragos) x 12",
        efectos: "Llorar desconsoladamente",
        curiosidad: "Si la bestia está ebria se unirá al llanto (+5 confianza)",
        dificultadIntoxicacion: "10",
        duracion: "1D3 horas"
    },
    {
        nombre: "Espina risueña",
        precio: "30L",
        tradicion: "Solo para socializar y conocer",
        potencia: "(# de tragos) x 4",
        efectos: "Risa descontrolada y +3 a seducir/comunicación",
        curiosidad: "La bestia ebria buscará otra de su especie para seducir",
        dificultadIntoxicacion: "14",
        duracion: "1D3 horas"
    },
    {
        nombre: "Néctar de celebración musical",
        precio: "30L",
        tradicion: "Para estar con amigos o parejas",
        potencia: "(# de tragos) x 4",
        efectos: "Cantar y bailar sin parar",
        curiosidad: "Si la bestia está ebria te buscará para bailar",
        dificultadIntoxicacion: "10",
        duracion: "1D3 horas"
    },
    {
        nombre: "Sábila fermentada",
        precio: "30L",
        tradicion: "Solo para socializar",
        potencia: "(# de tragos) x 2",
        efectos: "Dormir",
        curiosidad: "Si te duermes, la bestia cuidará de ti",
        dificultadIntoxicacion: "10",
        duracion: "1D3 horas"
    }
];

/* ================= BOTON ================= */
const btnArriba = document.getElementById("btn-arriba");

if (btnArriba) {
    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            btnArriba.style.display = "block";
        } else {
            btnArriba.style.display = "none";
        }
    });

    btnArriba.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        btnArriba.blur(); // 🔥 evita que quede "gris" en móvil
    });
}

/* ================= BUSCADOR GENERAL DE LA TIENDA ================= */

let todosLosProductos = [...armas, ...pociones, ...bebidas];

/* ================= RENDER ================= */

let contenedorArmas = document.getElementById("contenedor-armas");
let contenedorPociones = document.getElementById("contenedor-pociones");
let contenedorBebidas = document.getElementById("contenedor-bebidas");

if (contenedorArmas) {
    for (let arma of armas) {
        contenedorArmas.innerHTML += crearTarjeta(arma);
    }
}

if (contenedorPociones) {
    for (let pocion of pociones) {
        contenedorPociones.innerHTML += crearTarjeta(pocion);
    }
}

if (contenedorBebidas) {
    for (let bebida of bebidas) {
        contenedorBebidas.innerHTML += crearTarjeta(bebida);
    }
}

/* ================= BUSCADOR ================= */

let buscador = document.getElementById("buscador");

if (buscador) {

    buscador.addEventListener("input", function() {

        let texto = buscador.value.toLowerCase();

        if (contenedorArmas) {

            let resultado = armas.filter(function(arma){
                return (
                    arma.nombre.toLowerCase().includes(texto) ||
                    arma.tipo.toLowerCase().includes(texto)
                );
            });

            renderProductos(resultado, contenedorArmas);
        }

        if (contenedorPociones) {

            let resultado = pociones.filter(function(pocion){
                return pocion.nombre.toLowerCase().includes(texto);
            });

            renderProductos(resultado, contenedorPociones);
        }

        if (contenedorBebidas) {

            let resultado = bebidas.filter(function(bebida){
                return bebida.nombre.toLowerCase().includes(texto);
            });

            renderProductos(resultado, contenedorBebidas);
        }

    });

}

/* ================= BUSCADOR GENERAL DE LA TIENDA ================= */

let buscadorGeneral = document.getElementById("buscador-general");
let contenedorResultados = document.getElementById("contenedor-resultados");

if (buscadorGeneral && contenedorResultados) {

    buscadorGeneral.addEventListener("input", function() {

        let texto = buscadorGeneral.value.toLowerCase();
        
        // 👇 si no hay texto
        if (texto === "") {
            contenedorResultados.innerHTML = "";
            return;
        }

        let resultado = todosLosProductos.filter(function(producto){

            return producto.nombre.toLowerCase().includes(texto);

        });

        renderProductos(resultado, contenedorResultados);

    });

}