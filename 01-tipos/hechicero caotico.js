let CAOTICO = {
  nombreClase: "Caótico",
  secciones: [
    {
      titulo: "Especialidades",
      items: [
        {
          nombre: "Loco del caos",
          descripcionGrimorio: "Especialista en destrucción mágica caótica y manipulación del nur.",
          novato: "Todo el daño que haces es mágico",
          experto: "No dañas a bestias aliadas, mejoras en hechizos (+1d6 daño, +2 distancia, +2 objetivos)",
          maestro: "Mejora avanzada de control de explosiones (eliges un efecto)",
          hechizos: []
        },
        {
          nombre: "Roca del caos",
          descripcionGrimorio: "Resistencia y control del daño mágico recibido.",
          novato: "Resistes daño mágico (mitad)",
          experto: "Puedes repartir daño mágico entre tú y tu bestia",
          maestro: "...",
          hechizos: []
        }
      ]
    },
    {
      titulo: "Talentos",
      items: [
        {
          nombre: "Ladrón de nur",
          descripcionGrimorio: "Robo de energía mágica.",
          novato: "Robas 1d6 de nur de hasta 2 aliados o bestias",
          experto: "...",
          maestro: "...",
          hechizos: []
        },
        {
          nombre: "Grimorio de loco caótico",
          descripcionGrimorio: "Control total de explosiones sin daño propio.",
          novato: "Aprendes 1 hechizo novato",
          experto: "Aprendes 2 novatos o 1 experto",
          maestro: "Aprendes 1 experto o 1 maestro",
          hechizos: [
            {
              nombreHechizo: "Explosión de nur",
              nivelHechizo: "Novato",
              descripcion: "Explosión que afecta 3 objetivos en área",
              tipoHechizo: "Ataque",
              costoMana: 2,
              dificultad: 16,
              alcanceMaximo: "8 m"
            },
            {
              nombreHechizo: "Catapulta de nur",
              nivelHechizo: "Novato",
              descripcion: "Lanza una bola de nur que explota",
              tipoHechizo: "Ataque",
              costoMana: "2-3",
              dificultad: 16,
              alcanceMaximo: "15 m"
            },
            {
              nombreHechizo: "Columna de nur",
              nivelHechizo: "Novato",
              descripcion: "Columna vertical de daño en área",
              tipoHechizo: "Ataque",
              costoMana: "1-3",
              dificultad: 16,
              alcanceMaximo: "-"
            },
            {
              nombreHechizo: "Quemar nur",
              nivelHechizo: "Experto",
              descripcion: "Drena nur y causa daño duplicado",
              tipoHechizo: "Ataque",
              costoMana: 4,
              dificultad: 16,
              alcanceMaximo: "Contacto"
            },
            {
              nombreHechizo: "Clon bomba",
              nivelHechizo: "Experto",
              descripcion: "Clon que explota causando gran daño",
              tipoHechizo: "Ataque",
              costoMana: 4,
              dificultad: 16,
              alcanceMaximo: "12 m"
            },
            {
              nombreHechizo: "Salto explosivo",
              nivelHechizo: "Experto",
              descripcion: "Salto y explosión aérea",
              tipoHechizo: "Ataque",
              costoMana: 2,
              dificultad: 10,
              alcanceMaximo: "12 m"
            },
            {
              nombreHechizo: "Explosión en cruz",
              nivelHechizo: "Experto",
              descripcion: "Explosión en forma de cruz",
              tipoHechizo: "Ataque",
              costoMana: 2,
              dificultad: 10,
              alcanceMaximo: "12 m"
            },
            {
              nombreHechizo: "Recta de nur",
              nivelHechizo: "Experto",
              descripcion: "Ataque en línea frontal",
              tipoHechizo: "Ataque",
              costoMana: 2,
              dificultad: 10,
              alcanceMaximo: "12 m"
            },
            {
              nombreHechizo: "Rayo de nur",
              nivelHechizo: "Maestro",
              descripcion: "Rayo masivo acumulando nur",
              tipoHechizo: "Ataque",
              costoMana: 6,
              dificultad: 18,
              alcanceMaximo: "5 m"
            },
            {
              nombreHechizo: "Mata hechiceros",
              nivelHechizo: "Maestro",
              descripcion: "Devuelve daño mágico duplicado",
              tipoHechizo: "Ataque",
              costoMana: 6,
              dificultad: 18,
              alcanceMaximo: "12 m"
            },
            {
              nombreHechizo: "Viaje caótico de nur",
              nivelHechizo: "Novato",
              descripcion: "Clones explosivos y teletransporte",
              tipoHechizo: "Ataque",
              costoMana: 2,
              dificultad: 12,
              alcanceMaximo: "12 m"
            }
          ]
        },
        {
          nombre: "Transformar daño en nur",
          descripcionGrimorio: "Convierte daño mágico en energía.",
          novato: "Convierte daño en nur para aliados",
          experto: "...",
          maestro: "...",
          hechizos: []
        },
        {
          nombre: "Imán de seres del nur",
          descripcionGrimorio: "Atrae enemigos cercanos.",
          novato: "Atrae hasta 2 objetivos en 5 m",
          experto: "...",
          maestro: "...",
          hechizos: []
        },
        {
          nombre: "Cargar con nur",
          descripcionGrimorio: "Carga de energía con efectos secundarios.",
          novato: "Otorga daño mágico con penalización",
          experto: "Otorga daño mágico sin penalización",
          maestro: "...",
          hechizos: []
        },
        {
          nombre: "Reutilizar el nur",
          descripcionGrimorio: "Aprovecha energía residual.",
          novato: "Recupera nur o mejora tiradas",
          experto: "Mejoras adicionales y acciones extra",
          maestro: "...",
          hechizos: []
        },
        {
          nombre: "Entrar en locura",
          descripcionGrimorio: "Cambio temporal a loco del caos.",
          novato: "1 hechizo novato",
          experto: "2 novatos o 1 experto",
          maestro: "Hasta hechizos de nivel maestro",
          hechizos: []
        },
        {
          nombre: "Quitar nur o energía",
          descripcionGrimorio: "Drena energía o vida del enemigo.",
          novato: "Roba nur o inflige daño/melee",
          experto: "...",
          maestro: "...",
          hechizos: []
        },
        {
          nombre: "Conocimiento en grimorios",
          descripcionGrimorio: "Mejora o creación de hechizos.",
          novato: "Mejora hechizo (discutelo con tu master)",
          experto: "Crea hechizo (discutelo con tu master)",
          maestro: "...",
          hechizos: []
        }
      ]
    }
  ]
};