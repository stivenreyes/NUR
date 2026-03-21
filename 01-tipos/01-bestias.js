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
                        <span class="label">Percep.:</span>
                        <span class="valor percepcion">${producto.percepcion}</span>
                    </p>` : ""}
                </div>

                <div class="card-body2">
                    ${producto.comunicacion ? `
                    <p>
                        <span class="label">Comuni.:</span>
                        <span class="valor comunica.">${producto.comunicacion}</span>
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
                        <span class="label">Consti.:</span>
                        <span class="valor constitucion">${producto.constitucion}</span>
                    </p>` : ""}

                    ${producto.pelea ? `
                    <p>
                        <span class="label">Pelea:</span>
                        <span class="valor pelea">${producto.pelea}</span>
                    </p>` : ""}

                   
                    ${producto.Instinto ? `
                    <p>
                        <span class="label">Instinto:</span>
                        <span class="valor Instinto">${producto.Instinto}</span>
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
  fuerza: "-1",voluntad: "0",constitucion: "-2",Instinto: "2",
  enfoques: "Curación, Trepar",
  Habilidades: "Hechizo baba sanadora:Puede curar a su amo 2D6 o a un aliado 1D6 + voluntad.Dificultad 12.En cirugía la babosa plateada tiene +6 a la tirada de curación.Puede curar veneno de rango 1.",
  ataque: "Ácido +1",
  daño: "1D4",
  dureza: "1",
  alcance: "3"
},

{ 
  nombre: "Gran Rana Purpura",
  bioma: "Bosques",
  terreno: "Tierra",
  tipo: "Ataque",
  tamaño: "5",
  armadura: "0",
  Destreza: "2", Precision: "4", pelea: "-1", percepcion: "3", comunicacion: "0",
  fuerza: "-1", voluntad: "0", constitucion: "1", Instinto: "-2",
  enfoques: "Saltar, Esquiva", 
  Habilidades: "Latigazo de lengua: ataque a 5m (2d6), puede dañar armas con acido (1 daño)",
  ataque: "+1", daño: "1D4", dureza: "2", alcance: "1"
},

{ 
  nombre: "Rata Carmesi",
  bioma: "Bosques",
  terreno: "Tierra",
  tipo: "Exploracion",
  tamaño: "3",
  armadura: "0",
  Destreza: "3", Precision: "0", pelea: "2", percepcion: "4", comunicacion: "0",
  fuerza: "-2", voluntad: "0", constitucion: "-1", Instinto: "0",
  enfoques: "Sigilo, Oler, Huir", 
  Habilidades: "Rastrear sangre (100m, hasta 2 tipos), poder: Sangre en el aire (300m, detecta heridos a 50m)",
  ataque: "+3", daño: "1D4", dureza: "2", alcance: "1"
},

{ 
  nombre: "Cuervo X2",
  bioma: "Bosques",
  terreno: "Aire",
  tipo: "Exploracion",
  tamaño: "3",
  armadura: "0",
  Destreza: "2", Precision: "0", pelea: "-2", percepcion: "1", comunicacion: "4",
  fuerza: "0", voluntad: "1", constitucion: "-1", Instinto: "3",
  enfoques: "Volar, Distraer", 
  Habilidades: "Pareja unida (revive en 2 dias), Plumas +3 a tiradas",
  ataque: "+3", daño: "1D4", dureza: "2", alcance: "1"
},

{ 
  nombre: "Garza de las Lenguas",
  bioma: "Costas",
  terreno: "Aire",
  tipo: "Comunicacion",
  tamaño: "5",
  armadura: "0",
  Destreza: "0", Precision: "0", pelea: "-1", percepcion: "3", comunicacion: "4",
  fuerza: "0", voluntad: "1", constitucion: "-1", Instinto: "1",
  enfoques: "Distraer, Huir, Nadar", 
  Habilidades: "Comunicacion a distancia (5km), daño psicologico 1d6, mensaje global 200m",
  ataque: "+1", daño: "1D4", dureza: "3", alcance: "1"
},

{ 
  nombre: "Erizo de 4 Brazos",
  bioma: "Costas",
  terreno: "Tierra",
  tipo: "Ataque",
  tamaño: "5",
  armadura: "0",
  Destreza: "0", Precision: "2", pelea: "0", percepcion: "0", comunicacion: "0",
  fuerza: "-1", voluntad: "1", constitucion: "-2", Instinto: "-1",
  enfoques: "Lanzar, Excavar", 
  Habilidades: "Explosion de puas (area 2m, 1d6 daño, dif 15)",
  ataque: "+1", daño: "1D4", dureza: "3", alcance: "1"
},

{ 
  nombre: "Tiburon Unicornio",
  bioma: "Costas",
  terreno: "Agua",
  tipo: "Exploracion",
  tamaño: "10",
  armadura: "0",
  Destreza: "0", Precision: "-1", pelea: "3", percepcion: "2", comunicacion: "-1",
  fuerza: "4", voluntad: "0", constitucion: "0", Instinto: "-2",
  enfoques: "Nadar, Oler", 
  Habilidades: "Detector de sangre (100m)",
  ataque: "+1", daño: "1D4", dureza: "5", alcance: "1"
},

{ 
  nombre: "Serpiente Manchada",
  bioma: "Desierto",
  terreno: "Tierra",
  tipo: "Ataque",
  tamaño: "10",
  armadura: "10",
  Destreza: "2", Precision: "4", pelea: "3", percepcion: "0", comunicacion: "-1",
  fuerza: "2", voluntad: "3", constitucion: "1", Instinto: "0",
  enfoques: "Arte marcial, Escapismo", 
  Habilidades: "Relanza ataques del amo, puede tragar aliados/enemigos (3 turnos sin daño)",
  ataque: "+4", daño: "1D4", dureza: "5", alcance: "1"
},

{ 
  nombre: "Felino Montes",
  bioma: "Montaña",
  terreno: "Tierra",
  tipo: "Exploracion",
  tamaño: "7",
  armadura: "0",
  Destreza: "0", Precision: "0", pelea: "1", percepcion: "4", comunicacion: "-2",
  fuerza: "2", voluntad: "0", constitucion: "-1", Instinto: "3",
  enfoques: "Ver, Alerta", 
  Habilidades: "+7 para detectar en el mundo espiritual",
  ataque: "+4", daño: "1D6", dureza: "3", alcance: "1"
},

{ 
  nombre: "Oso Montes",
  bioma: "Montaña",
  terreno: "Tierra",
  tipo: "Tanque",
  tamaño: "15",
  armadura: "17",
  Destreza: "0", Precision: "1", pelea: "2", percepcion: "4", comunicacion: "-1",
  fuerza: "1", voluntad: "3", constitucion: "0", Instinto: "-2",
  enfoques: "Aguante, Carga", 
  Habilidades: "Montura resistente a magia, transporte masivo, habilidad de rescate",
  ataque: "+1", daño: "1D4", dureza: "5", alcance: "1"
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

 // agregado


let esPaginaBestias = window.location.pathname.includes("bestias.html");

// agregado

let contenedorBestias = document.getElementById("contenedor-bestias");

/*if (contenedorBestias) {
    for (let bestia of bestias) {
        contenedorBestias.innerHTML += crearTarjeta(bestia);
    }
} */

if (contenedorBestias && esPaginaBestias) {
    for (let bestia of bestias) {
        contenedorBestias.innerHTML += crearTarjeta(bestia);
    }
}
/* ================= BUSCADOR ================= */

let buscador = document.getElementById("buscador");

if (buscador) {

    /*buscador.addEventListener("input", function() {

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

    });*/
    buscador.addEventListener("input", function() {

    let texto = buscador.value.toLowerCase();

    if (contenedorBestias) {

        // 🔥 SI ESTÁ VACÍO → NO MOSTRAR NADA (solo en escenas)
        if (texto === "" && !esPaginaBestias) {
            contenedorBestias.innerHTML = "";
            return;
        }

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