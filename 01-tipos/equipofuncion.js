
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

botones.forEach(([id, informacion]) => {
    const boton = document.getElementById(id);

    boton.addEventListener("click", () => {
        info.innerHTML = informacion;
    });
});

// Mostrar el Guerrero al cargar la página
info.innerHTML = informacion1;
