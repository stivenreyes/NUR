let MEDIADOR = {
  nombreClase: "Mediador",
  secciones: [
    {
      titulo: "Especializaciones",
      items: [
        {
          nombre: "Erudito mental",
          descripcionGrimorio: "Manipulación mental, percepción emocional y control psíquico.",
          novato: "Sientes emociones en 5 km y +3 para calmar druidas",
          experto: "Posees druidas (2 veces), telepatía en área y mensajes a marcados",
          maestro: "Posees druidas (4 veces) con mismas condiciones",
          hechizos: []
        },
        {
          nombre: "Orador de la verdad/mentira",
          descripcionGrimorio: "Dominio social basado en la verdad o el engaño.",
          novato: "+2 al enfoque elegido, doble influencia, acciones sociales sin costo",
          experto: "+3 al enfoque, mejoras sociales con bestia",
          maestro: "+4 al enfoque, triple influencia, dos acciones sociales gratis",
          hechizos: []
        }
      ]
    },
    {
      titulo: "Talentos",
      items: [
        {
          nombre: "Leer la línea del tiempo",
          descripcionGrimorio: "Acceso al pasado y futuro de un druida.",
          novato: "Leer pasado voluntariamente",
          experto: "Leer futuro voluntariamente",
          maestro: "Leer pasado/futuro involuntariamente (tirada enfrentada)",
          hechizos: []
        },
        {
          nombre: "Mente por el mundo",
          descripcionGrimorio: "Percepción remota a través de otros.",
          novato: "Clarividencia",
          experto: "Clariaudiencia",
          maestro: "Presencia mental en 2 objetivos",
          hechizos: []
        },
        {
          nombre: "Psicología profunda",
          descripcionGrimorio: "Manipulación de recuerdos y mente.",
          novato: "Leer mente a 1 metro",
          experto: "Implantar recuerdos simples",
          maestro: "Borrar recuerdos ligados a la bestia",
          hechizos: []
        },
        {
          nombre: "Psicología oscura",
          descripcionGrimorio: "Infligir daño psíquico mediante miedo.",
          novato: "2D6 daño psíquico",
          experto: "3D6 daño psíquico",
          maestro: "4D6 daño psíquico",
          hechizos: [
            {
              nombreHechizo: "Inducir miedo",
              nivelHechizo: "Novato",
              descripcion: "Aplica miedo y causa daño psíquico",
              tipoHechizo: "Psíquico",
              costoMana: "...",
              dificultad: "Comunicación vs voluntad",
              alcanceMaximo: "Variable"
            }
          ]
        },
        {
          nombre: "Robar identidad",
          descripcionGrimorio: "Imitación de voz, apariencia y forma.",
          novato: "Imitar voz (hasta 3 personas)",
          experto: "Transformar ropa (3 nur, 1 hora)",
          maestro: "Transformación completa (sin copiar stats)",
          hechizos: []
        },
        {
          nombre: "¿Cuál es tu rol?",
          descripcionGrimorio: "Bloqueo temporal de habilidades.",
          novato: "Olvidar una proeza o enfoque",
          experto: "Olvidar arma, talento, hechizo o bonus",
          maestro: "Olvidar especialidad y más habilidades",
          hechizos: []
        },
        {
          nombre: "Curar daño psíquico",
          descripcionGrimorio: "Recuperación de daño mental.",
          novato: "Eliminar 2 daño psíquico (1 nur)",
          experto: "Eliminar 4 daño psíquico (3 nur)",
          maestro: "...",
          hechizos: []
        },
        {
          nombre: "Manejar los miedos",
          descripcionGrimorio: "Control y resistencia al daño psíquico.",
          novato: "Causa 1D6 daño psíquico",
          experto: "Causa 2D6 daño psíquico",
          maestro: "Reduce daño recibido con tirada adicional",
          hechizos: []
        }
      ]
    }
  ]
};