const info = document.getElementById("info");

const botones = [
    ["btn1", informacion1],
    ["btn2", informacion2],
    ["btn3", informacion3],
    ["btn4", informacion4],
    ["btn5", informacion5],
    ["btn6", informacion6],
    ["btn7", informacion7],
    ["btn8", informacion8],
    ["btn9", informacion9],
    ["btn10", informacion10]
];

// Función para mostrar la información y activar el botón
function mostrarInfo(id, informacion) {

    // Mostrar información
    info.innerHTML = informacion;

    // Quitar active de todos los botones
    botones.forEach(([otroId]) => {
        document.getElementById(otroId).classList.remove("active");
    });

    // Activar el botón seleccionado
    const botonActivo = document.getElementById(id);

    if (botonActivo) {
        botonActivo.classList.add("active");
    }
}

// Eventos de los botones
botones.forEach(([id, informacion]) => {
    const boton = document.getElementById(id);

    boton.addEventListener("click", () => {
        mostrarInfo(id, informacion);
    });
});

// Iniciar con el Guerrero seleccionado
mostrarInfo("btn1", informacion1);