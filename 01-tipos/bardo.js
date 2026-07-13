let BARDO = {
  nombreClase: "Bardo",
  secciones: [
    {
      titulo: "Especialidades",
      items: [
        {
          nombre: "Artista de las criaturas",
          descripcionGrimorio: "Manipulación de bestias mediante música, combate conjunto y vínculo artístico.",
          novato: "Antes o durante un combate (no cuenta como acción pero solo se puede una vez cada combate) el bardo puede inspirar a una criatura (el bardo la elije) esta podrá relanzar alguna tirada en medio del combate por medio de canticos, solo una vez por turno <br> Y aprendes un talento adicional",
          experto: "Sincronización con druida y bestia, mejora ataques conjuntos y resistencia climática",
          maestro: "Gana influencia sobre bestias legendarias y puede obtener bendiciones",
          hechizos: []
        },
        {
          nombre: "Artista del mundo",
          descripcionGrimorio: "Uso de música para proteger, curar y potenciar aliados.",
          novato: "+1 en voluntad a todos sus aliados mientras toques una canción<br> En las hogueras curas a todos que estén en tratamiento con 2 de daño psíquico <br>Y aprendes un talento adicional",
          experto: "+2 voluntad, mejor curación y apoyo en rituales",
          maestro: "...",
          hechizos: []
        }
      ]
    },
    {
      titulo: "Talentos",
      items: [
        {
          nombre: "Canción perfecta para la guerra",
          descripcionGrimorio: "Requisito: (Artistas de las criaturas)<br> Potencia bestias aliadas en combate.",
          novato: "Afecta hasta 2 bestias",
          experto: "Afecta hasta 4 bestias",
          maestro: "Afecta hasta 6 bestias",
          hechizos: []
        },
        {
          nombre: "Cánticos de la naturaleza",
          descripcionGrimorio: "Requisito: (Artistas del mundo)<br> Manipulación del clima.",
          novato: "Intensifica clima por 1d3 horas",
          experto: "Intensifica clima por 1d6 horas",
          maestro: "...",
          hechizos: []
        },
        {
          nombre: "Canción de muerte",
          descripcionGrimorio: "Requisito: (Artistas del mundo)<br> Cuando un enemigo o aliado es derrotado, el bardo puede tocar su canción de mayor victoria o mas triste para que los aliados del fallecido se sientan peor o quieran tomar venganza. <br> Los aliados del bardo pueden hacer un ataque que será automático y los enemigos recibirán 1d6 de daño psicológico <br> la bestia vinculo podrá también atacar sin contarlo como acción <br> Este efecto no es acumulativo",
          novato: "Daño normal + 1d6 psíquico",
          experto: "Daño x2 + 1d6+3 psíquico",
          maestro: "Daño x3 + 2d6 psíquico",
          hechizos: []
        },
        {
          nombre: "Solo de las tormentas de nur",
          descripcionGrimorio: "Requisito: (Artistas del mundo)<br> Resistencia mental y revelación de la verdad.",
          novato: "Relanzar coraje o caracter /voluntad",
          experto: "Revela la verdad a otro objetivo. será automático si este no se resiste",
          maestro: "...",
          hechizos: []
        },
        {
          nombre: "Distraer para tu bestia",
          descripcionGrimorio: "Requisito: (Artistas de las criaturas)<br> Potencia acciones de la bestia mediante distracción.",
          novato: "+4 a acciones de la bestia",
          experto: "+6 a acciones de la bestia",
          maestro: "...",
          hechizos: []
        },
        {
          nombre: "El arte de amar",
          descripcionGrimorio: "Influencia social y emocional.",
          novato: "+4 para generar ambientes de seducción, coqueteo en parejas con posibilidad de enamorarsen. Doble influencia al seducir",
          experto: "Aumenta confianza con bestia",
          maestro: "Influencia grupal en ambiente romántico",
          hechizos: []
        },
        {
          nombre: "Dúo con la bestia",
          descripcionGrimorio: "En Amara no hay muchas cosas poderosas entre ellas el vinculo de un druida y una bestia, y su combinación y enfoque en el arte musical puede generar un gran impacto en ellos y quien los oye,<br> Para este poder tanto el druida y la bestia deben tener ambos instrumentos (en cualquier caso un artesano podrá hacer algunos ajustes para que la bestia pueda usar cualquier instrumento)<br>El druida y la bestia podrán tocar varias canciones pero habrá una especial entre ellos dos, una que hará quien la oiga puede tener unos efectos poderosos <br>La canción especial debe sonar una vez máximo al dia, repetirla perderá su poder",
          novato: "Un objetivo elegido al escuchar la canción puede traerle recuerdos de su vida, una tirada conjunta entre el druida y la bestia para ver hasta donde viaja el recuerdo.<br> haciendo que el objetivo gane influencia de +7",
          experto: "Composición del alma",
          maestro: "Composición de almas conectadas",
          hechizos: []
        },
        {
          nombre: "Volumen",
          descripcionGrimorio: `Requisito: (Artistas de las criaturas)<br> 
          Este poder ayuda a expandir el rango de influencia de un bardo, que normalmente seria de unos 3 metros
           a la redonda a todos los sujetos, aliados y enemigos. <br>
          Todos dentro de ese rango deberán lanzar voluntad vs destreza si es para distraer, 
           llamar la atención y comunicación para una manipulación mas especifica y verbal para evitar el 
           ataque social del bardo`,
          novato: "Alcance 8 m",
          experto: "Alcance 15 m",
          maestro: "Alcance 20 m",
          hechizos: []
        },
        {
          nombre: "Mezclas de canciones",
          descripcionGrimorio: `Requisito: (Artistas del mundo)<br> 
          Tu forma de mezclar tus canciones no solo hace que esa combinación hace que si tu bestia también te acompaña 
          con un instrumento, pueda estar a un máximo de 5 metros pueda seguir la melodía <br>

          Si no que también tu rango aumenta con respecto al volumen que tengas a la mitad por ser ayudado de tu bestia. <br>
          Y además algunos de los presentes pueden quedar hipnotizados por tu música y la única forma de que rompas eso es 
          que falles una tirada de destreza con tu bestia dif 15, que alguien haga un movimiento brusco o se termine la 
          lista de música <br>Alguien hipnotizado dejara de reconocer aliados y atacara a todos lo que vea presente <br>
          Se podrá hipnotizar a alguien por 1d3 turnos solo una vez al dia. lanza comunicacion dif 10+rango de la victima 
          mas poderosa`,

          novato: "Podrás hipnotizar a la gente de 3 rangos inferior al tuyo, mínimo rango 1",
          experto: "Podrás hipnotizar a la gente de 2 rangos inferior al tuyo, mínimo rango 3",
          maestro: "Podrás hipnotizar a la gente de 2 rangos inferior al tuyo, mínimo rango 5",
          hechizos: []
        },
        {
          nombre: "Instrumento musical",
          descripcionGrimorio: "Los druidas bardos y las bestias que tengan vinculo con este ultimo rol son los únicos en poder usar estos poderes al usar instrumentos <br> cuerdas: <br> cura daño psíquico, cura bestias, calma bestias  en 2 por (depende el nivel en el que tengas esta habilidad) <br> viento: <br> engaña, distrae + 3 por (depende el nivel en el que tengas esta habilidad) <br> Percusión: <br>relanzar 1 dado de todo el que use pelea y hechizos de caótico  tantas veces en un turno como nivel tenga en esta habilidad",
          novato: "Nivel 1 efectos",
          experto: "Nivel 2 efectos",
          maestro: "Nivel 3 efectos",
          hechizos: []
        },
        {
          nombre: "Música para curar el alma",
          descripcionGrimorio: "Requisito: (Artistas de las criaturas)<br> Curación en hogueras y tras combates.",
          novato: "+3 para curar en hogueras <br> cuando el grupo gane una victoria en batalla una canción ayudara que todos los druidas se recuperen 3 puntos de daño psíquico las bestia recuperan 6 puntos de daño. <br> cuando estén en hoguera y tratan a alguien este no recibirá herida por parte tuya aun si fallaras",
          experto: "...",
          maestro: "...",
          hechizos: []
        }
      ]
    }
  ]
};