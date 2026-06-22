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
  titulo: "Técnicas",
  items: [
    {
      nombre: "Grimorio del fuego",
      descripcionGrimorio: "Manipulación de fuego ofensivo y potenciación de daño. Requisito: Hechicero elemental",
      novato: "Aprendes 1 hechizo",
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
          descripcion: "2D6 de daño + voluntad y el objetivo no puede hablar por 1D3 turnos",
          tipoHechizo: "Ataque",
          costoMana: "2",
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
      nombre: "Grimorio del rayo",
      descripcionGrimorio: "Control de electricidad y ataques encadenados. Requisito: Hechicero elemental",
      novato: "Aprendes 1 hechizo",
      experto: "Aprendes 2 hechizos novato o 1 experto",
      maestro: "...",
      hechizos: [
        {
          nombreHechizo: "Silbido de rayo",
          nivelHechizo: "Novato",
          descripcion: "Ataque que se encadena hasta 4 objetivos",
          tipoHechizo: "Ataque",
          costoMana: "2",
          dificultad: "Inteligencia vs esquiva",
          alcanceMaximo: "6"
        },
        {
          nombreHechizo: "Trueno aliado",
          nivelHechizo: "Novato",
          descripcion: "Daño extra a armas aliadas por una ronda",
          tipoHechizo: "Soporte",
          costoMana: "2",
          dificultad: "14",
          alcanceMaximo: "6"
        },
        {
          nombreHechizo: "Rayo en el rostro",
          nivelHechizo: "Novato",
          descripcion: "Ataque adicional de 4D6 tras otro ataque de rayo",
          tipoHechizo: "Ataque",
          costoMana: "...",
          dificultad: "...",
          alcanceMaximo: "1"
        },
        {
          nombreHechizo: "Cadena de dos",
          nivelHechizo: "Experto",
          descripcion: "Encadena ataque a otro objetivo",
          tipoHechizo: "Ataque",
          costoMana: "2",
          dificultad: "Inteligencia vs esquiva",
          alcanceMaximo: "..."
        },
        {
          nombreHechizo: "Moverte como rayo",
          nivelHechizo: "Experto",
          descripcion: "Te teletransportas usando ataques encadenados",
          tipoHechizo: "Ataque",
          costoMana: "2",
          dificultad: "12",
          alcanceMaximo: "6"
        },
        {
          nombreHechizo: "Pies de trueno",
          nivelHechizo: "Experto",
          descripcion: "Triplica la velocidad por un turno",
          tipoHechizo: "Soporte",
          costoMana: "2",
          dificultad: "12",
          alcanceMaximo: "..."
        }
      ]
    },
        {
      nombre: "Grimorio de la tierra",
      descripcionGrimorio: "Control de electricidad y ataques encadenados. Requisito: Hechicero elemental",
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
      nombre: "Grimorio del agua",
      descripcionGrimorio: "Control de electricidad y ataques encadenados. Requisito: Hechicero elemental",
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
      nombre: "Grimorio del viento",
      descripcionGrimorio: "Requisitos (Brujo curandero)<br> .",
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
        descripcionGrimorio: "Requisito: Hechicero elemental. Puedes combinar dos elementos  ",
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
