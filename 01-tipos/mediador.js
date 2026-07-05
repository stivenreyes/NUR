let MEDIADOR = {
  nombreClase: "Mediador",
  secciones: [
    {
      titulo: "Especialidades",
      items: [
        {
          nombre: "Erudito mental",
          descripcionGrimorio: "Manipulación mental, percepción emocional y control psíquico.",
          novato: "Logras sentir las emociones de cualquier persona que sepas su nombre y la hayas visto al menos una vez en un radio de 5 km <br> Logras un +3 para calmar a cualquier druida que este a vista <br> Puedes poseer druidas de un rango inferior al tuyo, puedes hacer solo 2 veces por combate, poseerlos un turno, y quedar luego desmayado un turno, la victima no quedara inconsiente <br> Aprendes un nuevo talento",
          experto: "Puedes hacer que todos a tu alrededor hablen telepáticamente en un radio de 5 metros <br> Puedes enviarle mensajes solo a alguien que hayas marcado (solo se puede un druida) en un radio de 2 km",
          maestro: "Puedes poseer druidas de un rango inferior al tuyo, puedes hacer solo 4 veces por combate, poseerlos un turno, y quedar luego desmayado un turno, la victima no quedara inconsciente",
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
          nombre: "Leer la línea del tiempo ",
          descripcionGrimorio: "Requisito: Erudito mental <br> Con una palabra puedes buscar en el registro de vida de un druida lo que necesites saber, la información no será del todo precisa y para lecturas al futuro pueden haber cambios pero se podrá cambiar el futuro o reforzar la visión.<br> solo 1 ves al mes se puede hacer lectura a una persona.<br> se dice que para que la lectura al futuro sea 100% exacta el druida debe no contarle a nadie la información ni dejarse leer la mente y morir al instante, o eso dicen algunos escritos",
          novato: "De forma voluntaria puedes leer el pasado de alguien",
          experto: "De forma voluntaria puedes leer el futuro de alguien",
          maestro: "De forma involuntaria puedes leer el futuro y el pasado de alguien, la tirada será de comunicación vs voluntad d ela victima para lograrlo, fallar hará que la victima quede inconsciente 1d6 horas, para luego haciendo mas difícil la tarea sumando +2 ala tirada de voluntad de la victima",
          hechizos: []
        },
        {
          nombre: "Mente por el mundo",
          descripcionGrimorio: "Requisito: Erudito mental <br> Puedes conectarte a los ojos u oídos de solo a alguien que hayas marcado (solo se puede un druida por dia) en un radio de 2 km <br>tu bestia podrá hacer lo mismo con tu guía pero ella podrá conectarse a un bestia marcada o que este cerca del druida conectado <br> Se puede una vez por dia",
          novato: "Clarividencia",
          experto: "Clariaudiencia",
          maestro: "Hacerse presente en la mente de 2 victimas del lugar",
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
          descripcionGrimorio: "Con una acción puedes preguntarle a alguien de un rango mas bajo que el tuyo acerca de un poder que tenga para hacerle olvidar  del potencial que tiene y hacerle olvidar por unos minutos algo del conocimiento que tiene <br> Con una tirada de comunicación vs voluntad del objetivo<br> Se puede recordar matando o derrotando al mediador o su bestia, que alguien lo haga recordar de su potencial, deberá superar la tirada del mediador con comunicación ambos o el mismo con una tirada de inteligencia -4 <br>La victima es consiente del poder y su victimario <br>Solo se puede una vez al dia, alguien de nivel novato podrá hacerle olvidar 1 cosa, en nivel experto 2 cosas y en nivel maestro su especialidad y dos cosas mas ",
          novato: "Olvidar una proeza o enfoque",
          experto: "Olvidar arma, talento, hechizo o bonus",
          maestro: "Olvidar especialidad y más habilidades",
          hechizos: []
        },
        {
          nombre: "Curar daño psíquico",
          descripcionGrimorio: "Requisito: Erudito mental.<br> Puedes enfocarte en el daño psicologico, y ayudar a hacer mas sesiones de terapia al dia",
          novato: "+2 para tratar a alguien.<br>  Puedes eliminar 2 de daño psíquico gastando 1 de nur. <br> Proeza (4) avanzando con el trauma. Puedes hacer que tome 2 sesiones al dia (esta proeza la puede activar el paciente momentos antes del inicio de la terapia). <br> Reduces en 1d6 el daño psicologico en medio de una terapia que falles",
          experto: "+4 para tratar a alguien.<br> Puedes eliminar 4 de daño psíquico gastando 1 de nur. <br> Proeza (3) avanzando con el trauma. Puedes hacer que tome 2 sesiones al dia (esta proeza la puede activar el paciente momentos antes del inicio de la terapia). <br> Reduces en 2d6 el daño psicologico en medio de una terapia que falles",
          maestro: "...",
          hechizos: []
        },
        {
          nombre: "Manejar los miedos",
          descripcionGrimorio: "Requisito: Erudito mental <br> Reduce el daño psíquico a la mitad y puede elegir recibir el doble de daño psíquico para no recibir una herida psíquico",
          novato: "Causa 1D6 daño psíquico",
          experto: "Causa 2D6 daño psíquico",
          maestro: "Reduce daño recibido con tirada adicional",
          hechizos: []
        }
      ]
    }
  ]
};