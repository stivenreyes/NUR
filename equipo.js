
const informacion1 = `
    <h2>Guerrero</h2>
    <p>Este es el equipo estándar, pero puedes cambiar cualquier objeto por el dinero que cuesta. Puedes elegir empezar con el objeto o con su valor en luxorios, como quieras.</p>

    <h3>Espada corta</h3>
    <p><strong>Tipo:</strong> Arma compleja (pelea / fuerza)</p>
    <p><strong>Daño:</strong> 1d6</p>
    <p><strong>Precio:</strong> 50L</p>
    <p><strong>Alcance:</strong> 1</p>
    <p><strong>Requisitos:</strong> Ninguno</p>
    <p><strong>Dureza:</strong> 1</p>
    <p><strong>Manos:</strong> 1</p>

    <h3>Poción de salud básica</h3>
    <p><strong>Precio:</strong> 25L</p>
    <p><strong>Curación:</strong> 1D6</p>
    <p><strong>Objetivos:</strong> 1</p>
    <p><strong>Tipo de objetivos:</strong> Druidas</p>

    <h3>Dinero inicial</h3>
    <p><strong>Luxorios:</strong> 125L</p>
`;

const informacion2 = `
    <h2>Explorador</h2>
    <p>Este es el equipo estándar, pero puedes cambiar cualquier objeto por el dinero que cuesta. Puedes elegir empezar con el objeto o con su valor en luxorios, como quieras.</p>

    <h3>Elige una de estas dos armas</h3>

    <h3>Arco corto</h3>
    <p><strong>Tipo:</strong> Arma larga (precisión / percepción)</p>
    <p><strong>Daño:</strong> 1d6</p>
    <p><strong>Precio:</strong> 80L</p>
    <p><strong>Alcance:</strong> 6</p>
    <p><strong>Requisitos:</strong> Ninguno</p>
    <p><strong>Dureza:</strong> 1</p>
    <p><strong>Manos:</strong> 2</p>

    <h3>O bien, daga</h3>
    <p><strong>Tipo:</strong> Arma compleja (pelea / fuerza)</p>
    <p><strong>Daño:</strong> 1d3+1</p>
    <p><strong>Precio:</strong> 25L</p>
    <p><strong>Alcance:</strong> 1</p>
    <p><strong>Requisitos:</strong> Ninguno</p>
    <p><strong>Dureza:</strong> 1</p>
    <p><strong>Manos:</strong> 1</p>

    <h3>Poción de salud básica</h3>
    <p><strong>Precio:</strong> 25L</p>
    <p><strong>Curación:</strong> 1D6</p>
    <p><strong>Objetivos:</strong> 1</p>
    <p><strong>Tipo de objetivos:</strong> Druidas</p>

    <h3>Paquete de explorador</h3>
    <p><strong>Precio:</strong> 40L</p>
    <p><strong>Tipo:</strong> Exploración</p>
    <p><strong>Contenido:</strong> Cuerda de fibras resistentes (10-15 m), ganchos o garfios de hueso/piedra, mapa hecho con corteza o tejido y manta camuflada de hojas o piel teñida.</p>

    <h3>Dinero inicial</h3>
    <p><strong>Con arco:</strong> 55L</p>
    <p><strong>Con daga:</strong> 110L</p>
`;

const informacion3 = `
    <h2>Hechicero elemental</h2>
    <p>Este es el equipo estándar, pero puedes cambiar cualquier objeto por el dinero que cuesta. Puedes elegir empezar con el objeto o con su valor en luxorios, como quieras.</p>

    <h3>Poción de Nur básica</h3>
    <p><strong>Precio:</strong> 25L</p>
    <p><strong>Restablecimiento:</strong> 1D6+4</p>
    <p><strong>Objetivos:</strong> 1</p>
    <p><strong>Tipo de objetivos:</strong> Druidas</p>

    <h3>Dinero inicial</h3>
    <p><strong>Luxorios:</strong> 175L</p>
`;

const informacion4 = `
    <h2>Investigador</h2>
    <p>Este es el equipo estándar, pero puedes cambiar cualquier objeto por el dinero que cuesta. Puedes elegir empezar con el objeto o con su valor en luxorios, como quieras.</p>

    <h3>Arco corto</h3>
    <p><strong>Tipo:</strong> Arma larga (precisión / percepción)</p>
    <p><strong>Daño:</strong> 1d6</p>
    <p><strong>Precio:</strong> 80L</p>
    <p><strong>Alcance:</strong> 6</p>
    <p><strong>Requisitos:</strong> Ninguno</p>
    <p><strong>Dureza:</strong> 1</p>
    <p><strong>Manos:</strong> 2</p>

    <h3>Poción de Nur básica</h3>
    <p><strong>Precio:</strong> 25L</p>
    <p><strong>Restablecimiento:</strong> 1D6+4</p>
    <p><strong>Objetivos:</strong> 1</p>
    <p><strong>Tipo de objetivos:</strong> Druidas</p>

    <h3>Espada corta</h3>
    <p><strong>Tipo:</strong> Arma compleja (pelea / fuerza)</p>
    <p><strong>Daño:</strong> 1d6</p>
    <p><strong>Precio:</strong> 50L</p>
    <p><strong>Alcance:</strong> 1</p>
    <p><strong>Requisitos:</strong> Ninguno</p>
    <p><strong>Dureza:</strong> 1</p>
    <p><strong>Manos:</strong> 1</p>

    <h3>Crema de mocos de cerdo violeta con hongos cocidos</h3>
    <p><strong>Precio:</strong> 50L</p>
    <p><strong>Tipo:</strong> Para bestias</p>
    <p><strong>Efectos:</strong> +2 de esquiva y 2 unidades de confianza</p>
    <p><strong>Ingredientes:</strong> 5 materiales de comida</p>
    <p><strong>Requisitos:</strong> Inteligencia/cocina, dificultad 18</p>

    <h3>Dinero inicial</h3>
    <p><strong>Luxorios:</strong> 50L</p>
`;

const informacion5 = `
    <h2>Mediador</h2>
    <p>Este es el equipo estándar, pero puedes cambiar cualquier objeto por el dinero que cuesta. Puedes elegir empezar con el objeto o con su valor en luxorios, como quieras.</p>

    <h3>Daga</h3>
    <p><strong>Tipo:</strong> Arma compleja (pelea / fuerza)</p>
    <p><strong>Daño:</strong> 1d3+1</p>
    <p><strong>Precio:</strong> 25L</p>
    <p><strong>Alcance:</strong> 1</p>
    <p><strong>Requisitos:</strong> Ninguno</p>
    <p><strong>Dureza:</strong> 1</p>
    <p><strong>Manos:</strong> 1</p>

    <h3>Pergaminos de biografías de antiguos druidas</h3>
    <p><strong>Precio:</strong> 100L</p>
    <p><strong>Requisitos:</strong> Rango 1 - 15</p>
    <p><strong>Tiempo de lectura:</strong> 2 horas</p>
    <p><strong>Experiencia por lectura:</strong> 40 EXP</p>
    <p><strong>Experiencia por absorción:</strong> 90 EXP</p>

    <h3>Dinero inicial</h3>
    <p><strong>Luxorios:</strong> 75L</p>
`;

const informacion6 = `
    <h2>Brujo</h2>
    <p>Este es el equipo estándar, pero puedes cambiar cualquier objeto por el dinero que cuesta. Puedes elegir empezar con el objeto o con su valor en luxorios, como quieras.</p>

    <h3>Paquete de brujo botánico (básico)</h3>
    <p><strong>Precio:</strong> 60L</p>
    <p><strong>Tipo:</strong> Básico</p>
    <p><strong>Contenido:</strong> Caldero ritual (10 de vida), mortero y mano de piedra, bolsas de tela o cuero, funda de herramientas, péndulo de Nur y roca de artesano (30 de vida).</p>

    <h3>Material para herbolaria (x10)</h3>
    <p><strong>Precio por unidad:</strong> 20L</p>
    <p><strong>Cantidad:</strong> 10</p>
    <p><strong>Valor total:</strong> 200L</p>
    <p><strong>Tipo:</strong> Normal</p>
    <p><strong>Descripción:</strong> Material para crear pociones, venenos y antídotos.</p>
    <p><strong>Contenido:</strong> Plantas, frutas secas, flores secas...</p>

    <h3>Dinero inicial</h3>
    <p><strong>Luxorios:</strong> 40L</p>
`;

const informacion7 = `
    <h2>Bardo</h2>
    <p>Este es el equipo estándar, pero puedes cambiar cualquier objeto por el dinero que cuesta. Puedes elegir empezar con el objeto o con su valor en luxorios, como quieras.</p>

    <h3>Instrumento musical</h3>
    <p><strong>Precio:</strong> 50L</p>

    <h3>Arco corto</h3>
    <p><strong>Tipo:</strong> Arma larga (precisión / percepción)</p>
    <p><strong>Daño:</strong> 1d6</p>
    <p><strong>Precio:</strong> 80L</p>
    <p><strong>Alcance:</strong> 6</p>
    <p><strong>Requisitos:</strong> Ninguno</p>
    <p><strong>Dureza:</strong> 1</p>
    <p><strong>Manos:</strong> 2</p>

    <h3>Dinero inicial</h3>
    <p><strong>Luxorios:</strong> 70L</p>
`;

const informacion8 = `
    <h2>Ritualista</h2>
    <p>Este es el equipo estándar, pero puedes cambiar cualquier objeto por el dinero que cuesta. Puedes elegir empezar con el objeto o con su valor en luxorios, como quieras.</p>

    <h3>Daga</h3>
    <p><strong>Tipo:</strong> Arma compleja (pelea / fuerza)</p>
    <p><strong>Daño:</strong> 1d3+1</p>
    <p><strong>Precio:</strong> 25L</p>
    <p><strong>Alcance:</strong> 1</p>
    <p><strong>Requisitos:</strong> Ninguno</p>
    <p><strong>Dureza:</strong> 1</p>
    <p><strong>Manos:</strong> 1</p>

    <h3>Poción de Nur básica</h3>
    <p><strong>Precio:</strong> 25L</p>
    <p><strong>Restablecimiento:</strong> 1D6+4</p>
    <p><strong>Objetivos:</strong> 1</p>
    <p><strong>Tipo de objetivos:</strong> Druidas</p>

    <h3>Dinero inicial</h3>
    <p><strong>Luxorios:</strong> 150L</p>
`;

const informacion9 = `
    <h2>Artesano</h2>
    <p>Este es el equipo estándar, pero puedes cambiar cualquier objeto por el dinero que cuesta. Puedes elegir empezar con el objeto o con su valor en luxorios, como quieras.</p>

    <h3>Paquete de artesano (normal)</h3>
    <p><strong>Precio:</strong> 50L</p>
    <p><strong>Tipo:</strong> Normal</p>
    <p><strong>Contenido:</strong> Cuchilla de talla, martillo de piedra, punzón, funda de herramientas, péndulo de Nur y roca de artesano (20 de vida).</p>

    <h3>Material para artesanía (x10)</h3>
    <p><strong>Precio por unidad:</strong> 20L</p>
    <p><strong>Cantidad:</strong> 10</p>
    <p><strong>Valor total:</strong> 200L</p>
    <p><strong>Tipo:</strong> Normal</p>
    <p><strong>Descripción:</strong> Material para construir, mejorar y reparar objetos.</p>
    <p><strong>Contenido:</strong> Huesos de bestias, pieles de criaturas...</p>

    <h3>Dinero inicial</h3>
    <p><strong>Luxorios:</strong> 50L</p>
`;

const informacion10 = `
    <h2>Hechicero caótico</h2>
    <p>Este es el equipo estándar, pero puedes cambiar cualquier objeto por el dinero que cuesta. Puedes elegir empezar con el objeto o con su valor en luxorios, como quieras.</p>

    <h3>Escudo de roble</h3>
    <p><strong>Precio:</strong> 40L</p>
    <p><strong>Requisitos:</strong> -1 o más de Constitución</p>
    <p><strong>Protección:</strong> 5</p>
    <p><strong>Peso:</strong> 1</p>
    <p><strong>Tipo de protección:</strong> Normal</p>
    <p><strong>Rango:</strong> 1</p>

    <h3>Poción de Nur básica</h3>
    <p><strong>Precio:</strong> 25L</p>
    <p><strong>Restablecimiento:</strong> 1D6+4</p>
    <p><strong>Objetivos:</strong> 1</p>
    <p><strong>Tipo de objetivos:</strong> Druidas</p>

    <h3>Dinero inicial</h3>
    <p><strong>Luxorios:</strong> 135L</p>
`;
