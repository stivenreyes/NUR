function crearTarjeta(producto) {
    return `
        <div class="card">
            <div class="card-header">
                <h2>${producto.nombre}</h2>
                <span class="precio">${producto.precio}</span>
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

                <!-- 🆕 NUEVOS CAMPOS -->

                ${producto.tiempoLectura ? `
                    <p>
                        <span class="label">Tiempo de lectura:</span>
                        <span class="valor tiempoLectura">${producto.tiempoLectura}</span>
                    </p>` : ""}

                ${producto.gananciaLectura ? `
                    <p>
                        <span class="label">Ganancia por lectura:</span>
                        <span class="valor gananciaLectura">${producto.gananciaLectura}</span>
                    </p>` : ""}

                ${producto.gananciaAbsorcion ? `
                    <p>
                        <span class="label">Ganancia por absorción:</span>
                        <span class="valor gananciaAbsorcion">${producto.gananciaAbsorcion}</span>
                    </p>` : ""}

                ${producto.proteccion ? `
                    <p>
                        <span class="label">Protección:</span>
                        <span class="valor proteccion">${producto.proteccion}</span>
                    </p>` : ""}

                ${producto.tipoProteccion ? `
                    <p>
                        <span class="label">Tipo de protección:</span>
                        <span class="valor tipoProteccion">${producto.tipoProteccion}</span>
                    </p>` : ""}

                ${producto.rango ? `
                    <p>
                        <span class="label">Rango:</span>
                        <span class="valor rango">${producto.rango}</span>
                    </p>` : ""}

                ${producto.contenido ? `
                    <p>
                        <span class="label">Contenido:</span>
                        <span class="valor contenido">${producto.contenido}</span>
                    </p>` : ""}

                ${producto.ingredientes ? `
                    <p>
                        <span class="label">Ingredientes:</span>
                        <span class="valor ingredientes">${producto.ingredientes}</span>
                    </p>` : ""}

                ${producto.dificultadPreparacion ? `
                    <p>
                        <span class="label">Dificultad de preparación:</span>
                        <span class="valor dificultadPreparacion">${producto.dificultadPreparacion}</span>
                    </p>` : ""}

                ${producto.duracionCoccion ? `
                    <p>
                        <span class="label">Duración de cocción:</span>
                        <span class="valor duracionCoccion">${producto.duracionCoccion}</span>
                    </p>` : ""}
                
                    
                ${producto.requisitoTamano ? `
                    <p>
                        <span class="label">Requisito de Tamano:</span>
                        <span class="valor requisitoTamano">${producto.requisitoTamano}</span>
                    </p>` : ""}


                ${producto.requisitoTipo ? `
                    <p>
                        <span class="label">Requisito tipo de bestia:</span>
                        <span class="valor requisitoTipo">${producto.requisitoTipo}</span>
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
        manos: "2",
        
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
/* ================= PERGAMINOS ================= */
let pergaminos = [
    {
        nombre: "Pergaminos de biografías de antiguos druidas",
        precio: "100 L",
        requisitos: "Rango 1 - 15",
        tiempoLectura: "2 horas",
        gananciaLectura: "40 exp",
        gananciaAbsorcion: "90 exp"
    },
    {
        nombre: "Pergaminos de técnicas de combate",
        precio: "50 L",
        requisitos: "Rango 1 - 15 (Guerrero)",
        tiempoLectura: "3 horas",
        gananciaLectura: "20 exp",
        gananciaAbsorcion: "60 exp"
    },
    {
        nombre: "Pergaminos de técnicas de exploración",
        precio: "50 L",
        requisitos: "Rango 1 - 15 (Explorador)",
        tiempoLectura: "3 horas",
        gananciaLectura: "20 exp",
        gananciaAbsorcion: "60 exp"
    },
    {
        nombre: "Pergaminos de álbum de plantas",
        precio: "50 L",
        requisitos: "Rango 1 - 15 (Botánico)",
        tiempoLectura: "3 horas",
        gananciaLectura: "20 exp",
        gananciaAbsorcion: "60 exp"
    },
    {
        nombre: "Guía de Maestro de combate - Lección 1",
        precio: "80 L",
        requisitos: "Tutor: Rango 4 - 15 (Guerrero) / Alumno: Rango 1 - 2 (Guerrero)",
        tiempoLectura: "1 hora + 2 horas de enseñanza",
        gananciaLectura: "Tutor: 20 exp / Alumno: 40 exp",
        gananciaAbsorcion: "60 exp"
    }
];
let paquetes = [
    {
        nombre: "Paquete de artesano (normal)",
        precio: "50 L",
        tipo: "Normal",
        contenido: "Cuchilla de talla, Martillo de piedra, Punzón, Funda de herramientas, Péndulo de Nur, Roca de artesano (20 de vida)"
    },
    {
        nombre: "Paquete de artesano (mágico)",
        precio: "80 L",
        tipo: "Mágico",
        contenido: "Cuchilla de talla, Martillo de piedra, Punzón, Funda de herramientas, Péndulo de Nur, Gemas de Nur, Roca de artesano (30 de vida)"
    },
    {
        nombre: "Paquete de brujo botánico (básico)",
        precio: "60 L",
        tipo: "Básico",
        contenido: "Caldero ritual (10 de vida), Mortero y mano de piedra, Bolsas de tela o cuero, Funda de herramientas, Péndulo de Nur, Roca de artesano (30 de vida)"
    },
    {
        nombre: "Paquete de brujo botánico (avanzado)",
        precio: "60 L",
        tipo: "Avanzado",
        contenido: "Ungüentos de hierbas, Mortero y mano de piedra, Aceites rituales, Vendajes de fibra natural, Cristales medicinales"
    },
    {
        nombre: "Paquete de explorador",
        precio: "40 L",
        tipo: "Exploración",
        contenido: "Cuerda de fibras resistentes (10-15 m), Ganchos o garfios de hueso/piedra, Mapa hecho con corteza o tejido, Manta camuflada de hojas o piel teñida"
    },
    {
        nombre: "Paquete de cocinero",
        precio: "20 L",
        tipo: "Cocina",
        contenido: "Caldero para cocinar, Tabla para picar y cortar, Cuchillos y cucharas de varios tamaños, Trípode para el fuego, Set de cuencas para servir la comida"
    },
    {
        nombre: "Kit de mantenimiento para bestias (reparación natural y armas naturales)",
        precio: "20 L",
        tipo: "mantenimiento",
        contenido: "Vendas de fibra vegetal, agujas de hueso, hilo de tendón, ungüentos de hierbas cicatrizantes, resina selladora, piedra para afilar garras y colmillos, limas de roca volcánica para cuernos, cepillos de cerdas, pinzas de hueso para extraer espinas, aceites naturales para pelaje, escamas y plumas, mortero de piedra para preparar remedios y amuletos protectores para calmar a la bestia durante el tratamiento."
    }
];
let armaduras = [
    {
        nombre: "Escudo de roble",
        precio: "40 L",
        requisitos: "-1 o más de Constitución",
        proteccion: "5",
        peso: "1",
        tipoProteccion: "Normal",
        rango: "1"
    },
    {
        nombre: "Pechera de rocas volcánicas",
        precio: "50 L",
        requisitos: "1 de Constitución, 0 de Voluntad y rango 1 o más de Artesano de Roca",
        proteccion: "25",
        peso: "2",
        tipoProteccion: "Normal",
        rango: "2"
    },
    {
        nombre: "Pechera de cuero",
        precio: "80 L",
        requisitos: "1 de Constitución",
        proteccion: "10",
        peso: "2",
        tipoProteccion: "Normal",
        rango: "1"
    },
    {
        nombre: "Pechera de roble",
        precio: "100 L",
        requisitos: "2 de Constitución",
        proteccion: "15",
        peso: "3",
        tipoProteccion: "Normal",
        rango: "2"
    },
    {
        nombre: "Pechera de coraza de rino",
        precio: "200 L",
        requisitos: "3 de Constitución",
        proteccion: "20",
        peso: "4",
        tipoProteccion: "Normal",
        rango: "2"
    },
    {
        nombre: "Pechera de escamas encantada",
        precio: "300 L",
        requisitos: "2 de Constitución y 2 de Voluntad",
        proteccion: "15",
        peso: "3",
        tipoProteccion: "Normal y Mágica",
        rango: "3"
    },
    {
        nombre: "Pechera de cocodrilo",
        precio: "500 L",
        requisitos: "4 de Constitución",
        proteccion: "35",
        peso: "4",
        tipoProteccion: "Normal",
        rango: "3"
    },
    {
        nombre: "Pechera de cangrejo",
        precio: "600 L",
        requisitos: "7 de Constitución",
        proteccion: "60",
        peso: "4",
        tipoProteccion: "Normal",
        rango: "4"
    }
];

let armadurasbestia = [

    {
        nombre: "Casco de calabaza",
        precio: "40L",
        proteccion: "5",
        requisitos: "Tamaño 0 a 5, Bestia terrestre",
        tipoProteccion: "Normal",
        rango: "1"
    },

    {
        nombre: "Capa de hojas gruesas encantadas",
        precio: "50L",
        proteccion: "15",
        requisitos: "Tamaño 0 a 5, Bestia terrestre",
        tipoProteccion: "Mágica",
        rango: "1"
    },

    {
        nombre: "Mini casquito de calabaza",
        precio: "60L",
        proteccion: "5",
        requisitos: "Tamaño 0 a 5, Bestia aérea",
        tipoProteccion: "Normal",
        rango: "1"
    },

    {
        nombre: "Mini pechera ligera de piel encantada",
        precio: "70L",
        proteccion: "15",
        requisitos: "Tamaño 0 a 5, Bestia aérea",
        tipoProteccion: "Mágica",
        rango: "1"
    },

    {
        nombre: "Casco de corteza de árbol",
        precio: "60L",
        proteccion: "10",
        requisitos: "Tamaño 6 a 10, Bestia terrestre",
        tipoProteccion: "Normal",
        rango: "2"
    },

    {
        nombre: "Escudo mediano de roble encantado",
        precio: "70L",
        proteccion: "15",
        requisitos: "Tamaño 6 a 10, Bestia terrestre",
        tipoProteccion: "Mágica",
        rango: "2"
    },

    {
        nombre: "Casco espinoso liviano",
        precio: "80L",
        proteccion: "10",
        requisitos: "Tamaño 6 a 10, Bestia aérea",
        tipoProteccion: "Normal",
        rango: "2"
    },

    {
        nombre: "Pechera de cucaracha encantada",
        precio: "90L",
        proteccion: "15",
        requisitos: "Tamaño 6 a 10, Bestia aérea",
        tipoProteccion: "Mágica",
        rango: "2"
    },

    {
        nombre: "Pechera de cuero de armadillo",
        precio: "80L",
        proteccion: "15",
        requisitos: "Tamaño 11 a 15, Bestia aérea",
        tipoProteccion: "Normal",
        rango: "3"
    },

    {
        nombre: "Casco espinoso encantado",
        precio: "90L",
        proteccion: "20",
        requisitos: "Tamaño 11 a 15, Bestia aérea",
        tipoProteccion: "Mágica",
        rango: "3"
    },

    {
        nombre: "Pechera de cuero de rino pesada",
        precio: "100L",
        proteccion: "15",
        requisitos: "Tamaño 11 a 15, Bestia terrestre",
        tipoProteccion: "Normal",
        rango: "3"
    },

    {
        nombre: "Gran casco de hueso encantado",
        precio: "110L",
        proteccion: "20",
        requisitos: "Tamaño 11 a 15, Bestia terrestre",
        tipoProteccion: "Mágica",
        rango: "3"
    },

    {
        nombre: "Gran casco de hueso",
        precio: "100L",
        proteccion: "20",
        requisitos: "Tamaño 16 a 20, Bestia terrestre",
        tipoProteccion: "Normal",
        rango: "4"
    },

    {
        nombre: "Gran casco de hueso aéreo",
        precio: "110L",
        proteccion: "20",
        requisitos: "Tamaño 16 a 20, Bestia aérea",
        tipoProteccion: "Normal",
        rango: "4"
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

let todosLosProductos = [...armas, ...pociones, ...bebidas, ...pergaminos, ...paquetes, ...armaduras, ...armadurasbestia];

/* ================= RENDER ================= */

let contenedorArmas = document.getElementById("contenedor-armas");
let contenedorPociones = document.getElementById("contenedor-pociones");
let contenedorBebidas = document.getElementById("contenedor-bebidas");
let contenedorPergaminos = document.getElementById("contenedor-pergaminos");
let contenedorPaquetes = document.getElementById("contenedor-paquetes");
let contenedorArmaduras = document.getElementById("contenedor-armaduras");
let contenedorArmadurasBestia = document.getElementById("contenedor-armadurasBestia");

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

if (contenedorPergaminos) {
    for (let pergamino of pergaminos) {
        contenedorPergaminos.innerHTML += crearTarjeta(pergamino);
    }
}

if (contenedorPaquetes) {
    for (let paquete of paquetes) {
        contenedorPaquetes.innerHTML += crearTarjeta(paquete);
    }
}

if (contenedorArmaduras) {
    for (let armadura of armaduras) {
        contenedorArmaduras.innerHTML += crearTarjeta(armadura);
    }
}


if (contenedorArmadurasBestia) {
    for (let armadurabestia of armadurasbestia) {
        contenedorArmadurasBestia.innerHTML += crearTarjeta(armadurabestia);
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

        if (contenedorPergaminos) {

            let resultado = pergaminos.filter(function(pergamino){
                return pergamino.nombre.toLowerCase().includes(texto);
            });

            renderProductos(resultado, contenedorPergaminos);
        }

        if (contenedorPaquetes) {

            let resultado = paquetes.filter(function(paquetes){
                return paquetes.nombre.toLowerCase().includes(texto);
            });

            renderProductos(resultado, contenedorPaquetes);
        }
        
        if (contenedorArmaduras) {

              let resultado = armaduras.filter(function(armadura) {
                return armadura.nombre.toLowerCase().includes(texto);
            });

            renderProductos(resultado, contenedorArmaduras);
        }

        if (contenedorArmadurasBestia) {

             let resultado = armadurasbestia.filter(function(armadurabestia) {
                return armadurabestia.nombre.toLowerCase().includes(texto);
            });

            renderProductos(resultado, contenedorArmadurasBestia);
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