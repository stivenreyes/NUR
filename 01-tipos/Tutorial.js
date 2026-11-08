
/* ================= RECUPERAR DATOS ================= */

let pasoActual = Number(localStorage.getItem("pasoTutorialNurkano")) || 1;

// Recuperar el scroll guardado
let scrollGuardado = Number(localStorage.getItem("scrollTutorialNurkano")) || 0;


/* ================= MOSTRAR PASO ================= */

function mostrarPaso() {

    let pasos = document.querySelectorAll(".paso");

    pasos.forEach(function(paso){
        paso.classList.remove("activo");
    });

    let pasoVisible = document.getElementById("paso" + pasoActual);

    if (pasoVisible) {
        pasoVisible.classList.add("activo");
    }

    // Guardar el paso actual
    localStorage.setItem("pasoTutorialNurkano", pasoActual);


    /* ================= BARRA DE PROGRESO ================= */

    let progreso = document.getElementById("progreso");

    let porcentaje = (pasoActual / 8) * 100;

    progreso.style.width = porcentaje + "%";


    /* ================= CONTADOR ================= */

    let contador = document.getElementById("contador-paso");

    if (contador) {
        contador.textContent = pasoActual + " de 8";
    }


    /* ================= OCULTAR BOTON ================= */

    let btnSiguiente = document.getElementById("btn-siguiente");

    if (btnSiguiente) {
        btnSiguiente.style.display = pasoActual === 8 ? "none" : "inline-block";
    }

}


/* ================= GUARDAR SCROLL ================= */

window.addEventListener("scroll", function() {

    localStorage.setItem("scrollTutorialNurkano", window.scrollY);

});


/* ================= SIGUIENTE ================= */

function siguiente() {

    if (pasoActual < 8) {

        pasoActual++;

        localStorage.setItem("scrollTutorialNurkano", 0);

        mostrarPaso();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

}


/* ================= ANTERIOR ================= */

function anterior() {

    if (pasoActual > 1) {

        pasoActual--;

        localStorage.setItem("scrollTutorialNurkano", 0);

        mostrarPaso();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

}


/* ================= INICIAR ================= */

mostrarPaso();


// Recuperar posición al cargar la página
window.addEventListener("load", function() {

    window.scrollTo({
        top: scrollGuardado,
        behavior: "instant"
    });

});
