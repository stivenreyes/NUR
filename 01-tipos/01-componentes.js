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

                
                ${producto.curacion ? `<p>Curación: ${producto.curacion}</p>` : ""}
                ${producto.objetivos ? `<p>Objetivos: ${producto.objetivos}</p>` : ""}
                ${producto.tipodeobjetivos ? `<p>Tipo de objetivos: ${producto.tipodeobjetivos}</p>` : ""}
            </div>
        </div>
    `;
}


/* ================= ARMAS ================= */

let armas = [
    { nombre: "Espada", tipo: "Arma corta", dano: "2d6", precio: "10L", alcance: "1", requisitos: "Nada", dureza: "2", manos:"1" },
    { nombre: "Hacha", tipo: "Arma corta", dano: "2d8", precio: "15L", alcance: "1", requisitos: "Nada", dureza: "2", manos:"2" },
    { nombre: "Daga", tipo: "Arma corta", dano: "1d6", precio: "5L", alcance: "1", requisitos: "Nada", dureza: "2", manos:"1" },
    { nombre: "Nudillos", tipo: "Arma corta", dano: "1d6", precio: "100L", alcance: "1", requisitos: "Nada", dureza: "2", manos:"1" },
    { nombre: "Cerbatana", tipo: "Arma larga", dano: "1d3", precio: "80L", alcance: "3", requisitos: "Nada", dureza: "2", manos:"2" },
    { nombre: "Mazo", tipo: "Arma corta", dano: "4d6", precio: "120L", alcance: "1", requisitos: "Fuerza 3", dureza: "2", manos:"2" },
    { nombre: "Arco", tipo: "Arma larga", dano: "1d8", precio: "12L", alcance: "1", requisitos: "Nada", dureza: "2", manos:"2" }
];


/* ================= POCIONES ================= */

let pociones = [
    { nombre: "Poción de Vida", precio: "25L", curacion: "2d4", objetivos: "1", tipodeobjetivos: "0.gfhgfhfghf" },
    { nombre: "Poción de Fuerza poderosa", precio: "40L", curacion: "0", objetivos: "1", tipodeobjetivos: "0.yhfghgfh" },
    { nombre: "Poción de Vida", precio: "25L", curacion: "2d4", objetivos: "1", tipodeobjetivos: "0.gfhgfhfghf" },
    { nombre: "Poción de Fuerza", precio: "40L", curacion: "0", objetivos: "1", tipodeobjetivos: "0.yhfghgfh" },
    { nombre: "Poción de Vida", precio: "25L", curacion: "2d4", objetivos: "1", tipodeobjetivos: "0.gfhgfhfghf" },
    { nombre: "Poción de Fuerza", precio: "40L", curacion: "0", objetivos: "1", tipodeobjetivos: "0.yhfghgfh" },
    { nombre: "Poción de Fuerza", precio: "40L", curacion: "0", objetivos: "1", tipodeobjetivos: "0.yhfghgfh" },
    { nombre: "Poción de Vida", precio: "25L", curacion: "2d4", objetivos: "1", tipodeobjetivos: "0.gfhgfhfghf" },
    { nombre: "Poción de Fuerza", precio: "40L", curacion: "0", objetivos: "1", tipodeobjetivos: "0.yhfghgfh" }
];

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

/* ================= RENDER ================= */

let contenedorArmas = document.getElementById("contenedor-armas");
let contenedorPociones = document.getElementById("contenedor-pociones");

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