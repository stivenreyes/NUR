function crearTarjeta(producto) {
    return `
    <div class="card">

        <div class="card-header">
            <h2>${producto.nombre}</h2>
            <span class="precio">Rango 2</span>
        </div>

        <div class="cardEtiquetas">

            <div class="card-header">
                <h4>${producto.bioma}</h4>
                <h4>${producto.tipo}</h4>
                <h4>${producto.terreno}</h4>
            </div>

            <div class="card-header">
                ${producto.armadura ? `
                <p>
                    <span class="label">Armadura N:</span>
                    <span class="valor armadura">${producto.armadura}</span>
                </p>` : ""}

                ${producto.tamaño ? `
                <p>
                    <span class="label">Tamaño:</span>
                    <span class="valor Tamaño">${producto.tamaño}</span>
                </p>` : ""}
            </div>

            <div class="card-body">

                <div class="card-body2">
                    ${producto.Precision ? `
                    <p>
                        <span class="label">Precision:</span>
                        <span class="valor Precision">${producto.Precision}</span>
                    </p>` : ""}

                    ${producto.Destreza ? `
                    <p>
                        <span class="label">Destreza:</span>
                        <span class="valor Destreza">${producto.Destreza}</span>
                    </p>` : ""}

                    ${producto.percepcion ? `
                    <p>
                        <span class="label">Percepción:</span>
                        <span class="valor percepcion">${producto.percepcion}</span>
                    </p>` : ""}
                </div>

                <div class="card-body2">
                    ${producto.comunicacion ? `
                    <p>
                        <span class="label">Comunicación:</span>
                        <span class="valor comunicacion">${producto.comunicacion}</span>
                    </p>` : ""}

                    ${producto.fuerza ? `
                    <p>
                        <span class="label">Fuerza:</span>
                        <span class="valor fuerza">${producto.fuerza}</span>
                    </p>` : ""}

                     ${producto.voluntad ? `
                    <p>
                        <span class="label">Voluntad:</span>
                        <span class="valor voluntad">${producto.voluntad}</span>
                    </p>` : ""}


                    
                </div>

                <div class="card-body2">
                    ${producto.constitucion ? `
                    <p>
                        <span class="label">Constitución:</span>
                        <span class="valor constitucion">${producto.constitucion}</span>
                    </p>` : ""}

                    ${producto.pelea ? `
                    <p>
                        <span class="label">Pelea:</span>
                        <span class="valor pelea">${producto.pelea}</span>
                    </p>` : ""}

                   
                    ${producto.inteligencia ? `
                    <p>
                        <span class="label">Inteligencia:</span>
                        <span class="valor inteligencia">${producto.inteligencia}</span>
                    </p>` : ""}
                </div>

            </div>

            <div class="enfoques">
                <h5>Enfoques:</h5>
                <h6>${producto.enfoques}</h6>
            </div>

            <div class="Habilidad">
                <h5>Habilidad:</h5>
                <h6>${producto.Habilidades}</h6>
            </div>

        </div>

        <div class="cardCombate">
            <div class="card-header">

                ${producto.ataque ? `
                <p>
                    <span class="label">Ataque:</span>
                    <span class="valor ataque">${producto.ataque}</span>
                </p>` : ""}

                ${producto.daño ? `
                <p>
                    <span class="label">Daño:</span>
                    <span class="valor daño">${producto.daño}</span>
                </p>` : ""}

                ${producto.dureza ? `
                <p>
                    <span class="label">Dureza:</span>
                    <span class="valor dureza">${producto.dureza}</span>
                </p>` : ""}

                ${producto.alcance ? `
                <p>
                    <span class="label">Alcance:</span>
                    <span class="valor alcance">${producto.alcance}</span>
                </p>` : ""}

            </div>
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



/* ================= FILTRO ================= */
function filtrarBestias() {

    let bioma = filtroBioma.value;
    let tipo = filtroTipo.value;
    let terreno = filtroTerreno.value;

    let resultado = bestias.filter(function(bestia){

        return (
            (bioma === "" || bestia.bioma === bioma) &&
            (tipo === "" || bestia.tipo === tipo) &&
            (terreno === "" || bestia.terreno === terreno)
        );

    });

    renderProductos(resultado, contenedorBestias);

}

/* ================= LISTADO DE BESTIAS  ================= */

let bestias = [
{
  nombre: "Babosa Plateada",
  bioma: "Bosques",
  terreno: "Tierra",
  tipo: "Soporte",
  tamaño: "5",
  armadura: "0",
  Destreza: "1",Precision: "0",pelea: "0",percepcion: "3",comunicacion: "0",
  fuerza: "-1",voluntad: "0",constitucion: "-2",inteligencia: "2",
  enfoques: "Curación, Trepar",
  Habilidades: "Hechizo baba sanadora:Puede curar a su amo 2D6 o a un aliado 1D6 + voluntad.Dificultad 12.En cirugía la babosa plateada tiene +6 a la tirada de curación.Puede curar veneno de rango 1.",
  ataque: "Ácido +1",
  daño: "1D4",
  dureza: "1",
  alcance: "3"
},

{ 
  nombre: "Serpiente",
  bioma: "nada",
  terreno: "nada",
  tipo: "nada",
  tamaño: "nada",
  armadura: "nada",
  Destreza: "0", Precision: "0", pelea: "0", percepcion: "0", comunicacion: "0",
  fuerza: "0", voluntad: "0", constitucion: "0", inteligencia: "0",
  enfoques: "nada", 
  Habilidades: "nada",
  ataque: "1", daño: "1", dureza: "1", alcance: "1"
},

 { 
  nombre: "Topo",
  bioma: "Bosque",
  terreno: "nada",
  tipo: "nada",
  tamaño: "nada",
  armadura: "nada",
  Destreza: "0", Precision: "0", pelea: "0", percepcion: "0", comunicacion: "0",
  fuerza: "0", voluntad: "0", constitucion: "0", inteligencia: "0",
  enfoques: "nada", 
  Habilidades: "nada",
  ataque: "1", daño: "1", dureza: "1", alcance: "1"
 },

 { 
  nombre: "Medusa",
  bioma: "Montaña",
  terreno: "nada",
  tipo: "nada",
  tamaño: "nada",
  armadura: "nada",
  Destreza: "0", Precision: "0", pelea: "0", percepcion: "0", comunicacion: "0",
  fuerza: "0", voluntad: "0", constitucion: "0", inteligencia: "0",
  enfoques: "nada", 
  Habilidades: "nada",
  ataque: "1", daño: "1", dureza: "1", alcance: "1"
 },

 { 
  nombre: "Cangrejo",
  bioma: "nada",
  terreno: "nada",
  tipo: "nada",
  tamaño: "nada",
  armadura: "nada",
  Destreza: "0", Precision: "0", pelea: "0", percepcion: "0", comunicacion: "0",
  fuerza: "0", voluntad: "0", constitucion: "0", inteligencia: "0",
  enfoques: "nada", 
  Habilidades: "nada",
  ataque: "1", daño: "1", dureza: "1", alcance: "1"
 },

 { 
  nombre: "Oso montes",
  bioma: "nada",
  terreno: "nada",
  tipo: "nada",
  tamaño: "nada",
  armadura: "nada",
  Destreza: "0", Precision: "0", pelea: "0", percepcion: "0", comunicacion: "0",
  fuerza: "0", voluntad: "0", constitucion: "0", inteligencia: "0",
  enfoques: "nada", 
  Habilidades: "Bestia montura, puede cargar hasta un maximo de 15 de tamaño osea un druida y una bestia o 3 bestias de tamaño 5",
  ataque: "1", daño: "1", dureza: "1", alcance: "1"
 },

 { 
  nombre: "Pavo real",
  bioma: "nada",
  terreno: "nada",
  tipo: "nada",
  tamaño: "nada",
  armadura: "nada",
  Destreza: "0", Precision: "0", pelea: "0", percepcion: "0", comunicacion: "0",
  fuerza: "0", voluntad: "0", constitucion: "0", inteligencia: "0",
  enfoques: "nada", 
  Habilidades: "nada",
  ataque: "1", daño: "1", dureza: "1", alcance: "1"
 }
]

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

/* ================= FILTRO ================= */
let filtroBioma = document.getElementById("filtro-bioma");
let filtroTipo = document.getElementById("filtro-tipo");
let filtroTerreno = document.getElementById("filtro-terreno");

/* ================= RENDER ================= */

let contenedorBestias = document.getElementById("contenedor-bestias");

if (contenedorBestias) {
    for (let bestia of bestias) {
        contenedorBestias.innerHTML += crearTarjeta(bestia);
    }
}
/* ================= BUSCADOR ================= */

let buscador = document.getElementById("buscador");

if (buscador) {

    buscador.addEventListener("input", function() {

        let texto = buscador.value.toLowerCase();

        if (contenedorBestias) {

            let resultado = bestias.filter(function(bestia){
                return bestia.nombre.toLowerCase().includes(texto);
            });

            contenedorBestias.innerHTML = "";

            for (let bestia of resultado) {
                contenedorBestias.innerHTML += crearTarjeta(bestia);
            }

        }

    });

}

/* ================= FILTRO ================= */
filtroBioma.addEventListener("change", filtrarBestias);
filtroTipo.addEventListener("change", filtrarBestias);
filtroTerreno.addEventListener("change", filtrarBestias);