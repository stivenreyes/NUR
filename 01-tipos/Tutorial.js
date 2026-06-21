let pasoActual = 1;

function mostrarPaso() {

    let pasos = document.querySelectorAll(".paso");

    pasos.forEach(function(paso){
        paso.classList.remove("activo");
    });

    let pasoVisible = document.getElementById("paso" + pasoActual);

    if (pasoVisible) {
        pasoVisible.classList.add("activo");
    }

    /* ================= BARRA DE PROGRESO ================= */

    let progreso = document.getElementById("progreso");

    let porcentaje = (pasoActual / 7) * 100;

    progreso.style.width = porcentaje + "%";

    /* ================= OCULTAR BOTON ================= */

    let btnSiguiente = document.getElementById("btn-siguiente");

    if (pasoActual === 7) {
        btnSiguiente.style.display = "none";
    } else {
        btnSiguiente.style.display = "inline-block";
    }

}

function siguiente() {

    if (pasoActual < 7) {
        pasoActual++;
        mostrarPaso();
    }

}

function anterior() {

    if (pasoActual > 1) {
        pasoActual--;
        mostrarPaso();
    }

}

/* iniciar */

mostrarPaso();