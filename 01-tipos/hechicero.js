let HECHICERO = {
    nombreClase: "Hechicero",
    secciones: [
        {
            titulo: "Especialidades",
            items: [ 
    {
      nombre: "Domador del fuego",
      descripcionGrimorio: "Especializado en domar el elemento de la destrucción.",
      novato: "Aprendes el talento de Grimorio de Fuego.",
      experto: "Eliges un nuevo grimorio de otro elemento y aprendes un hechizo experto de fuego o creas uno nuevo de nivel experto (consultar con el master).",
      maestro: "Eliges un nuevo grimorio de otro elemento y aprendes un hechizo maestro de fuego o creas uno nuevo de nivel maestro (consultar con el master).",
      hechizos: [         {
          nombreHechizo: "Fenix de fuego legendarios",
          nivelHechizo: "Legendario",
          descripcion: "Una vez por dia, puedes encender una llama interna con tu bestia, sin gastar accion. luego de usar 3 hechizos de fuego, podras por una accion tu y tu bestia convertirsen en dos grandes fenix de fuego (30 de tamaño), quien toque cada uno de esos fenix puede recibir 7d6+ inteligencia o instinto de curación o daño magico. dura solo un turno",
          tipoHechizo: "Ataque",
          costoMana: "0",
          dificultad: "Inteligencia + 5 vs esquiva",
          alcanceMaximo: "20 m"
        },]
    },
    {
      nombre: "Domador del viento",
      descripcionGrimorio: "Especializado en domar el elemento de las corrientes de aire.",
      novato: "Aprendes el talento de Grimorio de Viento.",
      experto: "Eliges un nuevo grimorio de otro elemento y aprendes un hechizo experto de viento o creas uno nuevo de nivel experto (consultar con el master).",
      maestro: "Eliges un nuevo grimorio de otro elemento y aprendes un hechizo maestro de viento o creas uno nuevo de nivel maestro (consultar con el master).",
      hechizos: []
    },
    {
      nombre: "Domador del agua",
      descripcionGrimorio: "Especializado en domar el elemento de los mares y las mareas.",
      novato: "Aprendes el talento de Grimorio de Agua.",
      experto: "Eliges un nuevo grimorio de otro elemento y aprendes un hechizo experto de agua o creas uno nuevo de nivel experto (consultar con el master).",
      maestro: "Eliges un nuevo grimorio de otro elemento y aprendes un hechizo maestro de agua o creas uno nuevo de nivel maestro (consultar con el master).",
      hechizos: []
    },
    {
      nombre: "Domador de la tierra",
      descripcionGrimorio: "Especializado en domar el elemento de la roca y la montaña.",
      novato: "Aprendes el talento de Grimorio de Tierra.",
      experto: "Eliges un nuevo grimorio de otro elemento y aprendes un hechizo experto de tierra o creas uno nuevo de nivel experto (consultar con el master).",
      maestro: "Eliges un nuevo grimorio de otro elemento y aprendes un hechizo maestro de tierra o creas uno nuevo de nivel maestro (consultar con el master).",
      hechizos: []
    },
    {
      nombre: "Domador del rayo",
      descripcionGrimorio: "Especializado en domar el elemento de las tormentas celestiales.",
      novato: "Aprendes el talento de Grimorio de Rayo.",
      experto: "Eliges un nuevo grimorio de otro elemento y aprendes un hechizo experto de rayo o creas uno nuevo de nivel experto (consultar con el master).",
      maestro: "Eliges un nuevo grimorio de otro elemento y aprendes un hechizo maestro de rayo o creas uno nuevo de nivel maestro (consultar con el master).",
      hechizos: []
    },
  ]
},
{
  titulo: "Talentos",
  items: [
    {
      nombre: "Grimorio del fuego 🔥",
      descripcionGrimorio: "Requisitos: hechicero domador del fuego)<br> Manipulación de fuego ofensivo y potenciación de daño. ",
      novato: "Aprendes 1 hechizo 😁",
      experto: "Aprendes 2 hechizos novato o 1 experto",
      maestro: "Aprendes un hechizo experto o maestro",
      hechizos: [
        {
          nombreHechizo: "Lanzallamas a una mano",
          nivelHechizo: "Novato",
          descripcion: "3D6 de daño + voluntad",
          tipoHechizo: "Ataque",
          costoMana: "...",
          dificultad: "Inteligencia vs esquiva",
          alcanceMaximo: "..."
        },
        {
          nombreHechizo: "Lanza de fuego",
          nivelHechizo: "Novato",
          descripcion: "2D6 de daño + voluntad. Puede impactar a otro enemigo detrás",
          tipoHechizo: "Ataque",
          costoMana: "2",
          dificultad: "Inteligencia vs esquiva",
          alcanceMaximo: "2"
        },
        {
          nombreHechizo: "Pulmones de fuego",
          nivelHechizo: "Novato",
          descripcion: "1D6 de daño + voluntad y el objetivo no puede hablar por 1D3 turnos",
          tipoHechizo: "Ataque",
          costoMana: "4",
          dificultad: "Inteligencia vs esquiva",
          alcanceMaximo: "6"
        },
        {
          nombreHechizo: "Fuego que daña",
          nivelHechizo: "Experto",
          descripcion: "Tus hechizos de fuego dañan armaduras (5) o armas (1)",
          tipoHechizo: "Ataque",
          costoMana: "3",
          dificultad: "15",
          alcanceMaximo: "2"
        },
        {
          nombreHechizo: "Lanzallamas a dos manos",
          nivelHechizo: "Experto",
          descripcion: "5D6 de daño + voluntad",
          tipoHechizo: "Ataque",
          costoMana: "2",
          dificultad: "Inteligencia vs esquiva",
          alcanceMaximo: "2"
        },
        {
          nombreHechizo: "Espada de fuego",
          nivelHechizo: "Maestro",
          descripcion: "Imbuyes un arma con +2D6 de daño de fuego",
          tipoHechizo: "Ataque",
          costoMana: "3",
          dificultad: "18",
          alcanceMaximo: "3"
        },
        {
          nombreHechizo: "Armadura de fuego",
          nivelHechizo: "Maestro",
          descripcion: "Daño a enemigos cuerpo a cuerpo y a sus armas durante toda la escena",
          tipoHechizo: "Protección",
          costoMana: "2",
          dificultad: "18",
          alcanceMaximo: "0"
        },
        {
          nombreHechizo: "Consumirse en fuego",
          nivelHechizo: "Maestro",
          descripcion: "Inflige 12D6 daño y te vuelve invulnerable temporalmente",
          tipoHechizo: "Ataque",
          costoMana: "5",
          dificultad: "Inteligencia vs destreza",
          alcanceMaximo: "1"
        }
      ]
    },
    {
      nombre: "Grimorio del rayo ⚡",
      descripcionGrimorio: "Requisitos: hechicero domador del rayo)<br> Control de electricidad y ataques encadenados. <br> El alcance del rayo puede aumentar 4 metros y agregar un objetivo mas gracias al agua ",
      novato: "Aprendes 1 hechizo",
      experto: "Aprendes 2 hechizos novato o 1 experto",
      maestro: "...",
      hechizos: [
        {
          nombreHechizo: "Silbido de rayo",
          nivelHechizo: "Novato",
          descripcion: "Observas a tu victima y lo atacas con un trueno, puedes encadenar tu ataque a otros objetivos hasta max 4 solo si los puedes ver y que estén cerca de min 2 metros unos de los otros, solo se lanza para acertar al primer objetivo, las cadenas son automáticas <br> El daño será de 2D6 de daño + inteligencia repartidos entre los objetivos",
          tipoHechizo: "Ataque",
          costoMana: "2",
          dificultad: "Inteligencia vs esquiva",
          alcanceMaximo: "6"
        },
        {
          nombreHechizo: "Trueno aliado",
          nivelHechizo: "Novato",
          descripcion: "Todas las armas de los aliados tendrán 1D6 de daño en sus armas, solo por esta ronda",
          tipoHechizo: "Soporte",
          costoMana: "2",
          dificultad: "14",
          alcanceMaximo: "6"
        },
        {
          nombreHechizo: "Rayo en el rostro",
          nivelHechizo: "Novato",
          descripcion: "En vez de la proeza doble ataque puede usar este hechizo, luego de atacarlo con un hechizo de rayo tu objetivo debe estar a un metro para hacerlo ver al cielo donde caerá un rayo en su rostro haciéndole 4D6 +  inteligencia de daño ",
          tipoHechizo: "Ataque",
          costoMana: "...",
          dificultad: "...",
          alcanceMaximo: "1"
        },
        {
          nombreHechizo: "Amigo de rayo",
          nivelHechizo: "Novato",
          descripcion: "Puedes brindarle a un aliado tu electricidad por toda una escena. para ayudarte a encadenar ataques o negar el daño de los tuyos, el aliado puede gastar 1 de nur para eliminar este efecto en el. ",
          tipoHechizo: "Estrategico",
          costoMana: "2 - 0 para bestias",
          dificultad: "12",
          alcanceMaximo: "5"
        },
        {
          nombreHechizo: "Cadena de dos",
          nivelHechizo: "Experto",
          descripcion: "Una vez ataques a un objetivo puedes encadenar tu ataque a otro objetivo solo si lo puedes ver y que esté cerca de min 8 metros de la primera victima, solo se lanza para acertar al primer objetivo, las cadenas son automáticas <br> El daño será de 4D6 de daño + inteligencia repartidos entre los objetivos",
          tipoHechizo: "Ataque",
          costoMana: "2",
          dificultad: "Inteligencia vs esquiva",
          alcanceMaximo: "..."
        },
        {
          nombreHechizo: "Deslizarte en el rayo",
          nivelHechizo: "Experto",
          descripcion: "Una vez puedas encadenar un ataque hasta min 3 objetivos podrás teletransportarte con tu mismo ataque, al lado de las victimas de ese ataque",
          tipoHechizo: "Ataque",
          costoMana: "2",
          dificultad: "12",
          alcanceMaximo: "-"
        },
        {
          nombreHechizo: "Moverte como rayo",
          nivelHechizo: "Experto",
          descripcion: "En un radio de 7 metros puedes moverte al instante. <br> gastando 5 de nur puedes activar este hechizo tan rapido que no contara como acción ",
          tipoHechizo: "Ataque",
          costoMana: "3 o 5",
          dificultad: "12",
          alcanceMaximo: "7"
        },
        {
          nombreHechizo: "Pies de rayo",
          nivelHechizo: "Experto",
          descripcion: "Tu bestia y tu, una vez por dia. podrán malversen al triple de su velocidad en solo un turno excepto en el agua",
          tipoHechizo: "Soporte",
          costoMana: "2",
          dificultad: "12",
          alcanceMaximo: "-"
        },
        {
          nombreHechizo: "area y rayo no se",
          nivelHechizo: "Experto",
          descripcion: "Puedes hacer un atauqe en area de 3 metros, todos recibiendo 1d6 de daño. si estas al lado de tu bestia podran hacer 3d6 de daño",
          tipoHechizo: "Soporte",
          costoMana: "2",
          dificultad: "12",
          alcanceMaximo: "-"
        },
        {
          nombreHechizo: "Bestia y druida unidos",
          nivelHechizo: "Experto",
          descripcion: "Tu bestia y tu, podran teletransportarsen en el sitio del otro o intercambiar sus lugares <br> gastando 5 de nur puedes activar este hechizo tan rapido que no contara como acción ",
          tipoHechizo: "Estrategico",
          costoMana: "3 - 5",
          dificultad: "12",
          alcanceMaximo: "-"
        },
        {
          nombreHechizo: "Zona de tormentas",
          nivelHechizo: "Experto",
          descripcion: "Una vez por dia, hasta 3 aliados tuyos y sus bestias vinculadas de forma voluntaria pueden intercambiar lugares de forma voluntaria ",
          tipoHechizo: "Estrategico",
          costoMana: "3",
          dificultad: "12",
          alcanceMaximo: "-"
        }
      ]
    },
        {
      nombre: "Grimorio de la tierra ⛰️",
      descripcionGrimorio: "Requisitos: hechicero domador de la tierra)<br> Control de la tierra y hechizos para empujar y resistir daño. ",
      novato: "Aprendes 1 hechizo",
      experto: "Aprendes 2 hechizos novato o 1 experto",
      maestro: "...",
      hechizos: [
        {
          nombreHechizo: "muro viviente",
          nivelHechizo: "Novato",
          descripcion: "Con este hechizo puedes hacer que tu atacante lance su fuerza contra tu inteligencia para evitar moverte.",
          tipoHechizo: "hechizo pasivo",
          costoMana: "2",
          dificultad: "Inteligencia vs esquiva",
          alcanceMaximo: "3"
        },
        {
          nombreHechizo: "Brindar peso",
          nivelHechizo: "Novato",
          descripcion: "Reduce la velocidad a la mitad y la esquiva en un -1",
          tipoHechizo: "Soporte",
          costoMana: "2",
          dificultad: "inteligencia vs inteligencia",
          alcanceMaximo: "6"
        },
        {
          nombreHechizo: "Puños de golem de tierra",
          nivelHechizo: "Novato",
          descripcion: "Ataque pelea, y daño de 3d6 mas fuerza",
          tipoHechizo: "Ataque",
          costoMana: "1",
          dificultad: "-",
          alcanceMaximo: "1"
        },
        {
          nombreHechizo: "Muro protector",
          nivelHechizo: "Experto",
          descripcion: "Cuando te ataquen, y falles la esquiva, puedes activar este hechizo para intentar detener un ataque haciendo una tirada de inteligencia vs el ataque del enemigo. si lo logras puedes usar la siguiente proeza: (4) -muro que atrapa- para poder contratacar al atacante, (3) -Polvo que oculta- Puedes moverte de acuerdo a tu velocidad e intentar esconderte con un +2 ",
          tipoHechizo: "Hechizo de reaccion",
          costoMana: "1",
          dificultad: "-",
          alcanceMaximo: "1"
        },
        {
          nombreHechizo: "Vuelo",
          nivelHechizo: "Experto",
          descripcion: "Puedes liberar todo tu peso que llegas a volar hasta 3 metros de altura por 1d3 turnos, te mueves de acuerdo a tu velocidad",
          tipoHechizo: "Especial",
          costoMana: "2",
          dificultad: "13",
          alcanceMaximo: "-"
        },
        {
          nombreHechizo: "Montaña naciente",
          nivelHechizo: "Experto",
          descripcion: "Encadena ataque a otro objetivo",
          tipoHechizo: "Ataque",
          costoMana: "2",
          dificultad: "Inteligencia vs esquiva",
          alcanceMaximo: "5"
        },
        {
          nombreHechizo: "Armadura de piedra",
          nivelHechizo: "Experto",
          descripcion: "Encadena ataque a otro objetivo",
          tipoHechizo: "Ataque",
          costoMana: "2",
          dificultad: "Inteligencia vs esquiva",
          alcanceMaximo: "-"
        }
      ]
    },
    {
      nombre: "Grimorio del agua 🌊",
      descripcionGrimorio: "Requisitos: hechicero domador del agua)<br> Control de electricidad y ataques encadenados. Requisito: Hechicero elemental",
      novato: "Aprendes 1 hechizo",
      experto: "Aprendes 2 hechizos novato o 1 experto",
      maestro: "...",
      hechizos: [
        {
          nombreHechizo: "Latigo de agua",
          nivelHechizo: "Novato",
          descripcion: "Ataque de alcance 3 metros, para hacer 1d6 de daño",
          tipoHechizo: "Ataque",
          costoMana: "2",
          dificultad: "Inteligencia vs esquiva",
          alcanceMaximo: "3"
        },
        {
          nombreHechizo: "Cuerpo de agua",
          nivelHechizo: "Novato",
          descripcion: "Daño extra a armas aliadas por una ronda",
          tipoHechizo: "Soporte",
          costoMana: "2",
          dificultad: "14",
          alcanceMaximo: "6"
        },
        {
          nombreHechizo: "Esfera de mar eterno",
          nivelHechizo: "Novato",
          descripcion: "Ataque adicional de 4D6 tras otro ataque de rayo",
          tipoHechizo: "Ataque",
          costoMana: "...",
          dificultad: "...",
          alcanceMaximo: "1"
        },
        {
          nombreHechizo: "Control de lo vivo",
          nivelHechizo: "Experto",
          descripcion: "Encadena ataque a otro objetivo",
          tipoHechizo: "Ataque",
          costoMana: "2",
          dificultad: "Inteligencia vs esquiva",
          alcanceMaximo: "..."
        }
      ]
    },
    {
      nombre: "Grimorio del viento 🌪️",
      descripcionGrimorio: "Requisitos: hechicero domador del viento)<br> .",
      novato: "Aprendes dos hechizo de nivel novato",
      experto: "Aprendes un hechizo de nivel experto",
      maestro: "Aprendes un hechizo de nivel maestro",
      hechizos: [
        {
          nombreHechizo: "Silbido flecha",
          nivelHechizo: "Novato",
          descripcion: "Lanza una rafaga en forma de flecha",
          tipoHechizo: "Ataque",
          costoMana: 2,
          dificultad:"Inteligencia vs esquiva del objetivo",
          alcanceMaximo: "1 m"
        },
        {
          nombreHechizo: "Remolino guardian",
          nivelHechizo: "Novato",
          descripcion: "Crea un remolino alrededor tuyo en 1m. que evita que cualquiera entre  ",
          tipoHechizo: "Soporte",
          costoMana: 2,
          dificultad: 12,
          alcanceMaximo: "0 m"
        },
        {
          nombreHechizo: "Remolino caza",
          nivelHechizo: "Novato",
          descripcion: "Crea un remolino que dura 2 turnos con una altura de hasta de 10 metros, quien toque ese remolino sera empujado o un metro o a las craituras voladoras las hara caer al suelo",
          tipoHechizo: "Ataque",
          costoMana: 2,
          dificultad: 12,
          alcanceMaximo: "1 m"
        },
        {
          nombreHechizo: "Rafaga de viento",
          nivelHechizo: "Novato",
          descripcion: "Lanzas una rafaga cortante que hace daño de 1d6+inteligencia en el area de un cono",
          tipoHechizo: "Ataque",
          costoMana: 2,
          dificultad: 15,
          alcanceMaximo: "3 m"
        },
        {
          nombreHechizo: "Remolino prision",
          nivelHechizo: "Novato",
          descripcion: "Lanza una rafaga en forma de flecha",
          tipoHechizo: "Curación",
          costoMana: 2,
          dificultad: 12,
          alcanceMaximo: "1 m"
        },
        {
          nombreHechizo: "Tunel de flechas",
          nivelHechizo: "Novato",
          descripcion: "Lanza una rafaga en forma de flecha",
          tipoHechizo: "Curación",
          costoMana: 2,
          dificultad: 12,
          alcanceMaximo: "1 m"
        },
      ]
    },
    
        {
        nombre: "Mejorar hechizo 🔮",
        descripcionGrimorio: "Modificas un hechizo con daño adicional una vez por escena. Requisito: Hechicero elemental",
        novato: "El hechizo puede hacer daño espiritual o animal",
        experto: "Puedes elegir otro hechizo o duplicar el efecto",
        maestro: "Eliges otro hechizo adicional",
        hechizos: []
        },
        {
        nombre: "Combinar elementos 🔮",
        descripcionGrimorio: "Requisito: Rango 5. Puedes combinar dos elementos. <br> Cada elemento tiene una ventaja y desventaja <br>Fuego Ventaja: Mucho daño. Desventaja: Menos area<br><br><br><br>",
        novato: "Puedes combinar tu elemento que dominas con otro, puedes crear un nuevo hechizo y elejir un nuevo hechizo de ese elemento",
        experto: "Puedes elegir otro hechizo o duplicar el efecto",
        maestro: "Eliges otro hechizo adicional",
        hechizos: []
        },
        {
        nombre: "Bestia vinculada elemental 🔮",
        descripcionGrimorio: "Requisito: Hechicero elemental, tu bestia ahora podra lanzar un hechizo que elijas que ya uses, se puede solo elejir uno, se puede cambiar cada alba",
        novato: "Puedes prestarle un hechizo del elemento que dominas",
        experto: "Puedes prestarle un hechizo de tu segundo elemento que usas o que tu bestia adquiera el un hechizo quel elemento que domines",
        maestro: "Eliges otro hechizo adicional",
        hechizos: []
        },
        {
        nombre: "Tomar poder elemental del entorno 🔮",
        descripcionGrimorio: "Requisito: Hechicero elemental Obtienes poder de elementos cercanos como fuego o tormentas, tiene que ser acorde al elemento principal que domines ",
        novato: "+2 ataque o +3 daño",
        experto: "Puedes relanzar ataque o daño",
        maestro: "...",
        hechizos: []
        },

    ]

    }
    ]
};
