function crearTarjeta(nombre, dano, precio) {
    return `
        <div class="card">
            <div class="card-header">
                <h2>${nombre}</h2>
                <span class="precio">${precio}</span>
            </div>

            <div class="card-body">
                <p>Daño: ${dano}</p>
            </div>
        </div>
    `;
}



let armas = [
    { nombre: "Espada", dano: "2d6", precio: "10 l" },
    { nombre: "Hacha", dano: "2d8", precio: "15 l" },
    { nombre: "Daga", dano: "1d6", precio: "5 l" },
    { nombre: "Arco", dano: "1d8", precio: "12 l" }
];

let contenedor = document.getElementById("contenedor-armas");

for (let arma of armas) {
    contenedor.innerHTML += crearTarjeta(
        arma.nombre,
        arma.dano,
        arma.precio
    );
}

