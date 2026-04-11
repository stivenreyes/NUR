let BRUJO = {
  nombreClase: "Brujo",
  secciones: [
    {
      titulo: "Especializaciones",
      items: [
        {
          nombre: "Curandero",
          descripcionGrimorio: "Especialista en sanación individual y grupal.",
          novato: "Aprendes un talento entre curar uno y curar cientos",
          experto: "Aprendes un talento entre curar uno y curar cientos",
          maestro: "...",
          hechizos: []
        },
        {
          nombre: "Botánico",
          descripcionGrimorio: "Dominio de pociones y conexión con el entorno natural.",
          novato: "Puedes conectarte a 1 caldero y péndulo. Aprendes un talento adicional",
          experto: "Puedes conectarte a 2 calderos y péndulos",
          maestro: "Conexión avanzada con el nur del entorno mediante péndulo",
          hechizos: []
        }
      ]
    },
    {
      titulo: "Talentos",
      items: [
        {
          nombre: "Curar uno",
          descripcionGrimorio: "Sanación individual.",
          novato: "Aprendes un hechizo",
          experto: "Aprendes otro hechizo",
          maestro: "...",
          hechizos: [
            {
              nombreHechizo: "Toque sanador (Druida)",
              nivelHechizo: "Novato",
              descripcion: "Cura 15 + voluntad a un objetivo",
              tipoHechizo: "Curación",
              costoMana: 2,
              dificultad: 12,
              alcanceMaximo: "1 m"
            },
            {
              nombreHechizo: "Viento sanador (Druida)",
              nivelHechizo: "Experto",
              descripcion: "Cura 7 + voluntad a un objetivo",
              tipoHechizo: "Curación",
              costoMana: 2,
              dificultad: 12,
              alcanceMaximo: "5 m"
            },
            {
              nombreHechizo: "Toque sanador (Bestia)",
              nivelHechizo: "Novato",
              descripcion: "Cura 10 a un objetivo",
              tipoHechizo: "Curación",
              costoMana: 2,
              dificultad: 12,
              alcanceMaximo: "12 m"
            },
            {
              nombreHechizo: "Proteger de herida",
              nivelHechizo: "Experto",
              descripcion: "Evita una herida una vez por combate",
              tipoHechizo: "Defensa",
              costoMana: 5,
              dificultad: 12,
              alcanceMaximo: "5 m"
            }
          ]
        },
        {
          nombre: "Curar cientos",
          descripcionGrimorio: "Sanación en grupo.",
          novato: "Aprendes un hechizo",
          experto: "Aprendes otro hechizo",
          maestro: "...",
          hechizos: [
            {
              nombreHechizo: "Silbido sanador",
              nivelHechizo: "Novato",
              descripcion: "Cura 15 a hasta 3 druidas",
              tipoHechizo: "Curación",
              costoMana: 2,
              dificultad: 12,
              alcanceMaximo: "1 m"
            },
            {
              nombreHechizo: "Gutural sanador",
              nivelHechizo: "Experto",
              descripcion: "Cura 10 repartido entre 6 objetivos",
              tipoHechizo: "Curación",
              costoMana: 2,
              dificultad: 12,
              alcanceMaximo: "5 m"
            },
            {
              nombreHechizo: "Aullido sanador",
              nivelHechizo: "Novato",
              descripcion: "Cura 10 a hasta 3 bestias",
              tipoHechizo: "Curación",
              costoMana: 2,
              dificultad: 12,
              alcanceMaximo: "1 m"
            }
          ]
        },
        {
          nombre: "Vinculación grupal de poción",
          descripcionGrimorio: "Activas pociones con pensamiento.",
          novato: "1 poción hasta 5 m",
          experto: "2 pociones hasta 15 m",
          maestro: "...",
          hechizos: []
        },
        {
          nombre: "Forrajear el lugar",
          descripcionGrimorio: "Recolección de materiales.",
          novato: "+2 a forrajear/percepción",
          experto: "Puedes relanzar búsqueda",
          maestro: "...",
          hechizos: []
        },
        {
          nombre: "Ritos de curación (Curandero)",
          descripcionGrimorio: "Mejora en cirugía y soporte.",
          novato: "+5 cirugía, +7 evitar muerte, bestia ayuda +3",
          experto: "+2 voluntad al paciente",
          maestro: "+10 vida extra y recuperación más rápida",
          hechizos: []
        },
        {
          nombre: "Ritos de curación (Botánico)",
          descripcionGrimorio: "Cirugía sin daño y mejoras con pociones.",
          novato: "+5 cirugía, sin daño al fallar",
          experto: "Reduce tiempo de recuperación y mejora resultados",
          maestro: "+5 para evitar muerte",
          hechizos: []
        },
        {
          nombre: "Lutear cadáveres",
          descripcionGrimorio: "Extracción de materiales de cadáveres.",
          novato: "Sangre como material",
          experto: "Huesos como armadura, extracción de órganos",
          maestro: "...",
          hechizos: []
        },
        {
          nombre: "Taller de cadáveres",
          descripcionGrimorio: "Uso avanzado de órganos.",
          novato: "Crear bombas con corazones",
          experto: "Mejorar pulmones (+1 destreza)",
          maestro: "...",
          hechizos: []
        },
        {
          nombre: "Puesto médico en batalla",
          descripcionGrimorio: "Teletransporte a zona segura.",
          novato: "Alcance 10 m",
          experto: "Alcance 100 m",
          maestro: "Alcance 1 km",
          hechizos: []
        }
      ]
    }
  ]
};