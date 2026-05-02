let BRUJO = {
  nombreClase: "Brujo",
  secciones: [
    {
      titulo: "Especialidades",
      items: [
        {
          nombre: "Curandero",
          descripcionGrimorio: "Especialista en sanación individual y grupal.",
          novato: "Aprendes un talento entre curar uno y curar cientos",
          experto: "Mejoras un hechizo de nivel novato de un grimorio de curación, discutelo con tu master. Elije uno de los siguientes hechizos de nivel experto",
          maestro: "Mejoras o creas un hechizo de nivel experto de un grimorio de curación, discutelo con tu master",
          hechizos: [            
            {
              nombreHechizo: "Daga de cirugias",
              nivelHechizo: "Experto",
              descripcion: "Cura 15 + voluntad a un objetivo",
              tipoHechizo: "Curación",
              costoMana: 2,
              dificultad: 12,
              alcanceMaximo: "1 m"
            },
            {
              nombreHechizo: "Autorecuperación",
              nivelHechizo: "Experto",
              descripcion: "Cura 15 + voluntad a un objetivo",
              tipoHechizo: "Curación",
              costoMana: 2,
              dificultad: 12,
              alcanceMaximo: "1 m"
            },
          ]
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
          descripcionGrimorio: "Requisitos (Brujo curandero)<br> Sanación individual.",
          novato: "Aprendes dos hechizo de nivel novato",
          experto: "Aprendes un hechizo de nivel experto",
          maestro: "Aprendes un hechizo de nivel maestro",
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
              nivelHechizo: "Novato",
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
            },
            {
              nombreHechizo: "Clones sanadores",
              nivelHechizo: "Experto",
              descripcion: "Puedes hacer una relejo de ti y tu bestia, si alguno de esos dos clones toca a alguien este se Curara 10+1d6 luego de eso el clon se deshace",
              tipoHechizo: "Curación",
              costoMana: 2,
              dificultad: 12,
              alcanceMaximo: "1 m"
            },  
            {
              nombreHechizo: "Circulo de sanación",
              nivelHechizo: "Experto",
              descripcion: "Puedes hacer hasta 2 circulos y lanzarlos a algun lugar visible en un rango de 10 metros, criatura no hostil que toque alguno de esos circulos se curara con 10+1d6, despues de eso el circulo se deshace",
              tipoHechizo: "Curación",
              costoMana: 2,
              dificultad: 12,
              alcanceMaximo: "1 m"
            },  
          ]
        },
        {
          nombre: "Curar cientos",
          descripcionGrimorio: "Requisitos (Brujo curandero)<br> Sanación en grupo.",
          novato: "Aprendes dos hechizo de nivel novato",
          experto: "Aprendes un hechizo de nivel experto",
          maestro: "Aprendes un hechizo de nivel maestro",
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
              descripcion: "Cura 10 repartido entre 6 objetivos. <br> si alguien cuenta con los vinculos: compañero de sangre o compañero leal se curara 1d6 adicionales",
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
            },
            {
              nombreHechizo: "Esfera de curacion",
              nivelHechizo: "Experto",
              descripcion: "Cada turno puedes invocar una esfera d enur curativo alrededor de ti, que cura 3+1d6 a hasta 3 druidas, esta esfera durara 1d6 turnos, solamente al invocarla cuesta como accion",
              tipoHechizo: "Curación",
              costoMana: 2,
              dificultad: 12,
              alcanceMaximo: "1 m"
            },            
            {
              nombreHechizo: "Vinculo curativo",
              nivelHechizo: "Experto",
              descripcion: "Tu y tu bestia deben estar cerca y activar este hechizo, que se activa gracias a los vinculos que tu elijas en un rango de hasta 20 metros, tanto bestias como druidas se curan el nivel de vinculo que tienen mas 1d6. <br> si alguien cuenta con los vinculos: compañero de sangre o compañero leal se curara 2d6 adicionales",
              tipoHechizo: "Curación",
              costoMana: 4,
              dificultad: 15,
              alcanceMaximo: "20 m"
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
        },
        {
          nombre: "Conocimiento en grimorios de curandero",
          descripcionGrimorio: "Mejora o creación de hechizos.",
          novato: "Mejora hechizo de nivel novato (discutelo con tu master)",
          experto: "Mejora hechizo de nivel experto, Crea hechizo de nivel experto (discutelo con tu master)",
          maestro: "...",
          hechizos: []
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
      ]
    }
  ]
};