let HECHICERO = {
    nombreClase: "Hechicero",
    secciones: [
        {
            titulo: "Especialidades",
            items: [ 
    {
      nombre: "Elemental",
      descripcionGrimorio: "Dominio de elementos naturales y potenciación de hechizos elementales.",
      novato: "Eliges un elemento. +3 daño a fuego, +1 daño a trueno",
      experto: "Eliges un nuevo elemento y aprendes un hechizo experto o creas uno nuevo (consultar con el master)",
      maestro: "Eliges un nuevo elemento y aprendes un hechizo maestro o creas uno nuevo (consultar con el master)",
      legendario: "Eliges un hechizo de un elemento que domines de nivel legendario de los siguientes:",
      hechizos: [
        {
          nombreHechizo: "Fenix de fuego legendarios",
          nivelHechizo: "Legendario",
          descripcion: "Una vez por dia, puedes encender una llama interna con tu bestia, sin gastar accion. luego de usar 3 hechizos de fuego, podras por una accion tu y tu bestia convertirsen en dos grandes fenix de fuego (30 de tamaño), quien toque cada uno de esos fenix puede recibir 7d6+ inteligencia o instinto de curación o daño magico. dura solo un turno",
          tipoHechizo: "Ataque",
          costoMana: "0",
          dificultad: "Inteligencia + 5 vs esquiva",
          alcanceMaximo: "20 m"
        },
      ]
    },
    {
      nombre: "Espiritual",
      descripcionGrimorio: "Experto en el plano espiritual y en la curación de daño maldito.",
      novato: "Puedes permanecer más tiempo en el plano espiritual (mitad del tiempo adicional, solo en tu prueba)",
      experto: "Ganas el doble de experiencia en pruebas espirituales propias",
      maestro: "...",
      hechizos: []
    }
  ]
},
{
  titulo: "Técnicas",
  items: [
    {
      nombre: "Elemento fuego",
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
          nombreHechizo: "Fuego corrosivo",
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
      nombre: "Elemento rayo",
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
      nombre: "Ataque espiritual",
      descripcionGrimorio: "Manipulación de energía espiritual. Requisito: Hechicero espiritual",
      novato: "Aprendes 1 hechizo",
      experto: "Aprendes 1 hechizo",
      maestro: "...",
      hechizos: [
        {
          nombreHechizo: "Ráfaga de viento",
          nivelHechizo: "...",
          descripcion: "Daño mayor en plano espiritual",
          tipoHechizo: "Ataque",
          costoMana: "2",
          dificultad: "12",
          alcanceMaximo: "12"
        },
        {
          nombreHechizo: "Armadura de tierra",
          nivelHechizo: "...",
          descripcion: "Aumenta defensa, más en plano espiritual",
          tipoHechizo: "Defensa",
          costoMana: "...",
          dificultad: "12",
          alcanceMaximo: "..."
        },
        {
          nombreHechizo: "Curar espíritu",
          nivelHechizo: "...",
          descripcion: "Cura hasta 15 puntos",
          tipoHechizo: "Curación",
          costoMana: "2",
          dificultad: "12",
          alcanceMaximo: "12"
        }
      ]
    },
    {
        nombre: "Roca espiritual",
        descripcionGrimorio: "Defensa en el plano espiritual. Requisito: Hechicero espiritual",
        novato: "Reduce el daño en el plano espiritual en 5",
        experto: "Reduce el daño en el plano espiritual a la mitad",
        maestro: "...",
        hechizos: []
        },
        {
        nombre: "Apoyo espiritual",
        descripcionGrimorio: "Intervención en pruebas espirituales sin ocupar cupo. Requisito: Hechicero espiritual",
        novato: "Puedes entrar a una prueba espiritual (si haces parte del ritual) después de la mitad del tiempo. Puedes identificar el tipo de prueba de un orbe y ganar 1/4 de experiencia",
        experto: "Puedes entrar con tu bestia a dos pruebas espirituales y conocer en qué consiste la prueba de un orbe",
        maestro: "...",
        hechizos: []
        },
        {
        nombre: "Mejorar hechizo",
        descripcionGrimorio: "Modificas un hechizo con daño adicional una vez por escena. Requisito: Hechicero elemental",
        novato: "El hechizo puede hacer daño espiritual o animal",
        experto: "Puedes elegir otro hechizo o duplicar el efecto",
        maestro: "Eliges otro hechizo adicional",
        hechizos: []
        },
        {
        nombre: "Tomar poder elemental del entorno",
        descripcionGrimorio: "Obtienes poder de elementos cercanos como fuego o tormentas. Requisito: Hechicero elemental",
        novato: "+2 ataque o +3 daño",
        experto: "Puedes relanzar ataque o daño",
        maestro: "...",
        hechizos: []
        },
{
  nombre: "Anular curar daño maldito",
  descripcionGrimorio: "Requisito: Hechicero espiritual. Permite curar daño y heridas malditas modificando portales espirituales en centros de curación. Puedes relanzar para esquivar o resistir ataques de daño maldito.",
  novato: "+4 para curar daño maldito y puedes llevar un aliado a una prueba espiritual por 2 turnos",
  experto: "+6 para curar daño maldito y el daño maldito recibido se convierte en daño normal",
  maestro: "No puedes recibir heridas malditas, se convierten en heridas normales o psíquicas",
  hechizos: []
}
    ]

    }
    ]
};
