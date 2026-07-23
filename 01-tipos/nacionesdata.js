function crearTarjeta(nacion) {
    return `
    <div class="cardNacion">

        <div class="cardNacion-header">
            <h2>${nacion.nombreTribal}</h2>
            <h3>${nacion.bioma}</h3>
        </div>

        <div class="cardNacion-contenido">

            ${nacion.bonus ? `
            <p>
                <span class="cardNacion-label">Bonus:</span>
                <span class="cardNacion-valor">${nacion.bonus}</span>
            </p>` : ""}

            ${nacion.granBestiaLegendaria ? `
            <p>
                <span class="cardNacion-label">Gran Bestia legendaria:</span>
                <span class="cardNacion-valor">${nacion.granBestiaLegendaria}</span>
            </p>` : ""}

            ${nacion.granPlantaLegendaria ? `
            <p>
                <span class="cardNacion-label">Gran Planta legendaria:</span>
                <span class="cardNacion-valor">${nacion.granPlantaLegendaria}</span>
            </p>` : ""}

            ${nacion.lider ? `
            <p>
                <span class="cardNacion-label">Líder:</span>
                <span class="cardNacion-valor">${nacion.lider}</span>
            </p>` : ""}

            ${nacion.descripcionGeneral ? `
            <p>
                <span class="cardNacion-label">Descripción general:</span>
                <span class="cardNacion-valor">${nacion.descripcionGeneral}</span>
            </p>` : ""}

            ${nacion.druidasYBestiasImportantes ? `
            <p>
                <span class="cardNacion-label">Druidas y bestias importantes:</span>
                <span class="cardNacion-valor">${nacion.druidasYBestiasImportantes}</span>
            </p>` : ""}

            ${nacion.simbolo ? `
            <p>
                <span class="cardNacion-label">Símbolo:</span>
                <span class="cardNacion-valor">${nacion.simbolo}</span>
            </p>` : ""}

            ${nacion.aldeaPrincipal ? `
            <p>
                <span class="cardNacion-label">Aldea principal:</span>
                <span class="cardNacion-valor">${nacion.aldeaPrincipal}</span>
            </p>` : ""}

            ${nacion.cita ? `
            <p>
                <span class="cardNacion-label">Cita:</span>
                <span class="cardNacion-valor">${nacion.cita}</span>
            </p>` : ""}

            ${nacion.bestiasMasImportantes ? `
            <p>
                <span class="cardNacion-label">Bestias más importantes:</span>
                <span class="cardNacion-valor">${nacion.bestiasMasImportantes}</span>
            </p>` : ""}

            ${nacion.faunaFlora ? `
            <p>
                <span class="cardNacion-label">Fauna y flora:</span>
                <span class="cardNacion-valor">${nacion.faunaFlora}</span>
            </p>` : ""}

            ${nacion.filosofiasTipicas ? `
            <p>
                <span class="cardNacion-label">Filosofías típicas:</span>
                <span class="cardNacion-valor">${nacion.filosofiasTipicas}</span>
            </p>` : ""}

            ${nacion.costumbresSociales ? `
            <p>
                <span class="cardNacion-label">Costumbres sociales:</span>
                <span class="cardNacion-valor">${nacion.costumbresSociales}</span>
            </p>` : ""}

            ${nacion.unDiaCualquiera ? `
            <p>
                <span class="cardNacion-label">Un día cualquiera:</span>
                <span class="cardNacion-valor">${nacion.unDiaCualquiera}</span>
            </p>` : ""}

            ${nacion.curiosidades ? `
            <p>
                <span class="cardNacion-label">Curiosidades:</span>
                <span class="cardNacion-valor">${nacion.curiosidades}</span>
            </p>` : ""}

            ${nacion.gruposRebeldes ? `
            <p>
                <span class="cardNacion-label">Grupos rebeldes:</span>
                <span class="cardNacion-valor">${nacion.gruposRebeldes}</span>
            </p>` : ""}

            ${nacion.peligros ? `
            <p>
                <span class="cardNacion-label">Peligros:</span>
                <span class="cardNacion-valor">${nacion.peligros}</span>
            </p>` : ""}

            ${nacion.queSeConsigue ? `
            <p>
                <span class="cardNacion-label">¿Qué se consigue aquí?</span>
                <span class="cardNacion-valor">${nacion.queSeConsigue}</span>
            </p>` : ""}

            ${nacion.comidaTipica ? `
            <p>
                <span class="cardNacion-label">Comida típica:</span>
                <span class="cardNacion-valor">${nacion.comidaTipica}</span>
            </p>` : ""}

            ${nacion.vestuarioTipico ? `
            <p>
                <span class="cardNacion-label">Vestuario típico:</span>
                <span class="cardNacion-valor">${nacion.vestuarioTipico}</span>
            </p>` : ""}

            ${nacion.lugaresImportantes ? `
            <p>
                <span class="cardNacion-label">Lugares importantes:</span>
                <span class="cardNacion-valor">${nacion.lugaresImportantes}</span>
            </p>` : ""}

            ${nacion.ceremoniasImportantes ? `
            <p>
                <span class="cardNacion-label">Ceremonias importantes:</span>
                <span class="cardNacion-valor">${nacion.ceremoniasImportantes}</span>
            </p>` : ""}

            ${nacion.lexicoUnico ? `
            <p>
                <span class="cardNacion-label">Léxico único:</span>
                <span class="cardNacion-valor">${nacion.lexicoUnico}</span>
            </p>` : ""}

            ${nacion.actividadesLocales ? `
            <p>
                <span class="cardNacion-label">Actividades locales:</span>
                <span class="cardNacion-valor">${nacion.actividadesLocales}</span>
            </p>` : ""}

            ${nacion.mitoLeyendaLocal ? `
            <p>
                <span class="cardNacion-label">Mito o leyenda local:</span>
                <span class="cardNacion-valor">${nacion.mitoLeyendaLocal}</span>
            </p>` : ""}

            ${nacion.seDistinguen ? `
            <p>
                <span class="cardNacion-label">¿En qué se distinguen?</span>
                <span class="cardNacion-valor">${nacion.seDistinguen}</span>
            </p>` : ""}

            ${nacion.celebracionUnica ? `
            <p>
                <span class="cardNacion-label">Celebración más importante:</span>
                <span class="cardNacion-valor">${nacion.celebracionUnica}</span>
            </p>` : ""}

            ${nacion.leyUnica ? `
            <p>
                <span class="cardNacion-label">Ley única:</span>
                <span class="cardNacion-valor">${nacion.leyUnica}</span>
            </p>` : ""}

            ${nacion.prohibicionesRaras ? `
            <p>
                <span class="cardNacion-label">Prohibiciones raras:</span>
                <span class="cardNacion-valor">${nacion.prohibicionesRaras}</span>
            </p>` : ""}

            ${nacion.castigo ? `
            <p>
                <span class="cardNacion-label">Castigos:</span>
                <span class="cardNacion-valor">${nacion.castigo}</span>
            </p>` : ""}

            ${nacion.novedades ? `
            <p>
                <span class="cardNacion-label">Novedades:</span>
                <span class="cardNacion-valor">${nacion.novedades}</span>
            </p>` : ""}

            ${nacion.guerraActual ? `
            <p>
                <span class="cardNacion-label">Guerra actual:</span>
                <span class="cardNacion-valor">${nacion.guerraActual}</span>
            </p>` : ""}

            ${nacion.queCelebran ? `
            <p>
                <span class="cardNacion-label">¿Qué celebran?</span>
                <span class="cardNacion-valor">${nacion.queCelebran}</span>
            </p>` : ""}

            ${nacion.queOlvidar ? `
            <p>
                <span class="cardNacion-label">¿Qué prefieren olvidar?</span>
                <span class="cardNacion-valor">${nacion.queOlvidar}</span>
            </p>` : ""}

            ${nacion.afectadaPorBioma ? `
            <p>
                <span class="cardNacion-label">Influencia del bioma:</span>
                <span class="cardNacion-valor">${nacion.afectadaPorBioma}</span>
            </p>` : ""}

            ${nacion.sensacionesOlorSonidos ? `
            <p>
                <span class="cardNacion-label">Sensaciones, olores y sonidos:</span>
                <span class="cardNacion-valor">${nacion.sensacionesOlorSonidos}</span>
            </p>` : ""}

            ${nacion.relacionConNaciones ? `
            <p>
                <span class="cardNacion-label">Relación con otras naciones:</span>
                <span class="cardNacion-valor">${nacion.relacionConNaciones}</span>
            </p>` : ""}

            ${nacion.opinionGranAlianza ? `
            <p>
                <span class="cardNacion-label">Opinión sobre la Gran Alianza:</span>
                <span class="cardNacion-valor">${nacion.opinionGranAlianza}</span>
            </p>` : ""}

            ${nacion.reglaDePaz ? `
            <p>
                <span class="cardNacion-label">Regla de paz:</span>
                <span class="cardNacion-valor">${nacion.reglaDePaz}</span>
            </p>` : ""}

        </div>

    </div>
    `;
}


/* ================= LISTADO DE NACIONES ================= */

let naciones = [

{
    nombreTribal: `Tara-sa`,

    bioma: `Costas e islas`,


    granBestiaLegendaria: `Cangrejo Espinoso Mordur, la Isla Espinosa.`,
    granPlantaLegendaria: `………`,

    lider: `Talori, mor bardo de los Mil Lamentos y Olas.
Lorimar, gran pulpo de los Cuatro Instrumentos Musicales.`,

    descripcionGeneral: `
Una nación marinera profundamente unida al océano.

Sus habitantes viven entre costas e islas, valoran la comunidad, las historias, la exploración y las celebraciones.

Consideran que el mar no separa, sino que une a todos los pueblos de Moreek.
`,

    druidasYBestiasImportantes: `Exploradores y bardos.`,

    simbolo: `Conchas de colmillo.`,

    aldeaPrincipal: `Tara-Mar`,

    cita: `
"No nacimos para hundirnos con el continente. Nacimos para seguir el viento."

"Las olas recuerdan y perdonan."

"Ninguna palabra se pierde si se lanza al viento correcto."
`,

    bestiasMasImportantes: `
• Cangrejos
• Medusas
• Tiburones
`,

    faunaFlora: `
La fauna marina de Moreek es la más grande y salvaje de Amara.

Abundan enormes crustáceos, medusas, tiburones y otras criaturas desconocidas de las profundidades.

En sus costas crecen extensos bosques de algas, plantas salinas y una flora adaptada al viento y la marea.
`,

    filosofiasTipicas: `
• Son sociables, bromistas y no temen al conflicto verbal.
• Creen que toda historia merece ser contada.
• Se adaptan con facilidad a los cambios.
• Consideran las emociones como olas: algunas se afrontan y otras se dejan pasar.
• Valoran profundamente la comunidad y las tradiciones orales.
`,

    costumbresSociales: `
• Hablan constantemente entre ellos y disfrutan las conversaciones largas.
• Cantar y contar historias forma parte de la vida cotidiana.
• Las fiestas son frecuentes y reúnen a toda la comunidad.
• Ven la introversión extrema y guardar secretos como actitudes poco saludables.
• Antes de una conversación importante realizan una ofrenda al mar.
`,

    unDiaCualquiera: `
Amanecen observando cómo el cielo se fusiona con el mar.

Saludan a las olas.

Se reúnen para conversar y comer.

Exploran.

Construyen embarcaciones y viviendas.

Celebran festividades.

Finalmente descansan.
`,

    curiosidades: `
1. Toda conversación importante comienza lanzando una piedra o una concha al agua.

2. Se pintan la piel con tintes de algas antes de viajar. Los colores representan sus intenciones.

3. Ninguna comida comunitaria está completa sin historias. Comer en silencio es un mal augurio.

4. El Gran Mordur es visto como una isla viviente que nunca deja de moverse ni de celebrar.

5. El Gran Mordur Doble está dividido en dos: su cuerpo recorre el mar mientras su nur permanece en las profundidades.

6. En sus playas suelen aparecer restos de antiguas tribus y civilizaciones arrastrados por el océano, convirtiéndose en un lugar muy apreciado por exploradores e historiadores.
`,

    gruposRebeldes: `
Habitantes de las islas enfrentados con algunos pueblos de las costas.
`,

    peligros: `
La fauna y flora más salvajes y desconocidas de Amara.

Criaturas marinas gigantes.

Las profundidades del océano.

Tormentas y remolinos.
`,

    queSeConsigue: `
Algas.

Moluscos.

Peces.

Crustáceos.

Frutos de plantas costeras.
`,

    comidaTipica: `
Peces.

Mariscos.

Algas.

Moluscos.

Frutos de plantas costeras.

moluscos

crustáceos .
`,

    vestuarioTipico: `
Se decoran el cuerpo con tintes obtenidos de algas antes de emprender un viaje.

Cada color representa una intención distinta.
`,

    lugaresImportantes: `
Tara-Mar.

Las numerosas islas de Moreek.

Las costas del Ta.
`,

    ceremoniasImportantes: `
La Ceremonia de Vinculación.

Los jóvenes viajan a una isla sagrada donde deben superar diversas pruebas para encontrar y vincularse con su bestia.

También existen islas apartadas destinadas al exilio temporal de los druidas que rompen las leyes de la nación.
`,

    lexicoUnico: `
Ta: nombre con el que se refieren al mar, símbolo de unión entre todas las islas.
`,

    actividadesLocales: `
Exploración marítima.

Construcción de embarcaciones.

Narración de historias.

Música.

Fiestas.

Navegación.

Expediciones.
`,

    mitoLeyendaLocal: `
La profecía del Gran Mordur Doble anuncia que cuando el cuerpo y el nur del gran cangrejo vuelvan a unirse llegará una inmensa ola capaz de cubrir hasta las dos lunas.

Entonces surgirán criaturas ancestrales del océano para hundir Amara bajo el mar.
`,

    seDistinguen: `
Son los mejores bardos, mediadores y exploradores del continente.

Es la nación con más celebraciones durante el año.

Poseen la fauna marina más gigantesca de Amara.

Son quienes más desean abandonar el continente para explorar otros mares.
`,

    celebracionUnica: `
Tatalo.

La Gran Fiesta de las Catorce Lunas.

Se realizan rituales, concursos de relatos y grandes celebraciones.

Ocurre tres veces por cada Nuevo Sol.
`,

    leyUnica: `………`,

    prohibicionesRaras: `………`,

    castigo: `
Los druidas que rompen leyes o prohibiciones son enviados a islas apartadas para cumplir su condena.
`,

    novedades: `
Los mayores avances del continente en exploración de aguas profundas.

Embarcaciones capaces de resistir enormes presiones.

Investigaciones para dominar el nur de los remolinos marinos.
`,

    guerraActual: `
Existe un conflicto entre algunos habitantes de las islas y los de las costas.
`,

    queCelebran: `
Los últimos Tatalos de cada Bestia Legendaria.
`,

    queOlvidar: `
Los días más silenciosos marcados por guerras y conflictos internos.
`,

    afectadaPorBioma: `
Las numerosas islas hicieron que algunas comunidades se volvieran más territoriales.

Sin embargo, el mar (Ta) les recuerda constantemente que no los separa, sino que los une.

Toda su cultura gira alrededor de la navegación, las mareas y la vida marina.
`,

    sensacionesOlorSonidos: `
El aire huele y sabe a sal.

Siempre se escucha la marea golpeando las rocas.

Gaviotas sobrevuelan las costas.

Una brisa constante recorre la nación.

La arena permanece en pies y patas durante gran parte del día.
`,

    relacionConNaciones: `
Discuten frecuentemente con la nación de la Montaña debido a su deseo de abandonar Amara para explorar otros mares.
`,

    opinionGranAlianza: `………`,

    reglaDePaz: `………`
},
{
    nombreTribal: "Moreek",

    bioma: "Costas",

    bonus: "Costas",


    granBestiaLegendaria: "………",
    granPlantaLegendaria: "………",
    lider: "………",

    descripcionGeneral: "………",


    
    druidasYBestiasImportantes: "………",
    simbolo: "………",
    aldeaPrincipal: "………",
    cita: "………",
    bestiasMasImportantes: "………",
    filosofiasTipicas: "………",
    unDiaCualquiera: "………",
    curiosidades: "………",

    gruposRebeldes: "………",
    peligros: "………",


    queSeConsigue: "………",

    comidaTipica: "………",

    vestuarioTipico: "………",

    lugaresImportantes: "………",

    lexicoUnico: "………",

    actividadesLocales: "………",   
    
    mitoLeyendaLocal: "………",  

    
    seDistinguen: "………",
    celebracionUnica: "………",
    leyUnica: "………",
    prohibicionesRaras: "………",


    castigo: "………",
    novedades: "………",
    guerraActual: "………",

    queCelebran: "………",
    queOlvidar: "………",
    afectadaPorBioma: "………",
    sensacionesOlorSonidos: "………",
    relacionConNaciones: "………",
    opinionGranAlianza: "………",
    reglaDePaz: "………"
},
{
    nombreTribal: "Grokker",

    Bioma: "Montaña",
    granBestiaLegendaria: "………",
    lider: "………",
    druidasYBestiasImportantes: "………",
    simbolo: "………",
    aldeaPrincipal: "………",
    cita: "………",
    bestiasMasImportantes: "………",
    filosofiasTipicas: "………",
    unMartesCualquiera: "………",
    curiosidades: "………",

    seDistinguen: "………",
    celebracionUnica: "………",
    leyUnica: "………",
    castigo: "………",
    novedades: "………",
    guerraActual: "………",

    queCelebran: "………",
    queOlvidar: "………",
    afectadaPorBioma: "………",
    olor: "………",
    relacionConNaciones: "………",
    opinionGranAlianza: "………",
    reglaDePaz: "………"
},
];


/* ================= BOTÓN ================= */

let btnArriba = document.getElementById("btn-arriba");

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
});


/* ================= RENDER ================= */

let esPaginaNaciones = window.location.pathname.includes("naciones.html");

let contenedorNaciones = document.getElementById("contenedor-naciones");

if (contenedorNaciones && esPaginaNaciones) {
    for (let nacion of naciones) {
        contenedorNaciones.innerHTML += crearTarjeta(nacion);
    }
}