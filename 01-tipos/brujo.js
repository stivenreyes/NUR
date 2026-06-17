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
          descripcionGrimorio: "Dominio de pociones y conexión con el entorno natural.<br> el botanico puede consumir pociones con solo tocarlas, haciendo que no cuente como acción",
          novato: "Puedes conectarte a 1 caldero y péndulo. Aprendes un talento adicional. una vez por dia puedes crear una pocion improvisada de curación usando el propio nur del botanico, de su bestia vinculada, pocion que cura 1d6+nur gastado",
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
              descripcion: "Cura 10+1d6 + voluntad a un objetivo",
              tipoHechizo: "Curación",
              costoMana: 2,
              dificultad: 12,
              alcanceMaximo: "1 m"
            },
            {
              nombreHechizo: "Viento sanador (Druida)",
              nivelHechizo: "Novato",
              descripcion: "Cura 4+1d6 + voluntad a un objetivo",
              tipoHechizo: "Curación",
              costoMana: 2,
              dificultad: 12,
              alcanceMaximo: "5 m"
            },
            {
              nombreHechizo: "Toque sanador (Bestia)",
              nivelHechizo: "Novato",
              descripcion: "Cura 7+1d6 a un objetivo",
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
              descripcion: "Cura 10+1d6 a hasta 3 druidas",
              tipoHechizo: "Curación",
              costoMana: 2,
              dificultad: 12,
              alcanceMaximo: "1 m"
            },
            {
              nombreHechizo: "Gutural sanador",
              nivelHechizo: "Experto",
              descripcion: "Cura 7+1d6 repartido entre 6 objetivos. <br> si alguien cuenta con los vinculos: compañero de sangre o compañero leal se curara 1d6 adicionales",
              tipoHechizo: "Curación",
              costoMana: 2,
              dificultad: 12,
              alcanceMaximo: "5 m"
            },
            {
              nombreHechizo: "Aullido sanador",
              nivelHechizo: "Novato",
              descripcion: "Cura 7+1d6 a hasta 3 bestias",
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
          descripcionGrimorio: "Requisitos (Brujo botanico) <br> Activas pociones con pensamiento. <br> un caldero puede almacenar hasta una -pocion tribu- esta pocion cuando se activa afecta a todos los aliados enuna distancia de acuerdo al nivel de este talento <br> <br>",
          novato: " poción hasta 5 m. se puede hacer el ritual de pocion de tribu una vez al dia",
          experto: " pociones hasta 10 m",
          maestro: "...",
          hechizos: []
        },
        {
          nombre: "Forrajear el lugar",
          descripcionGrimorio: "Recolección de materiales.",
          novato: "+3 a forrajear/percepción",
          experto: "Puedes relanzar búsqueda",
          maestro: "...",
          hechizos: []
        },
        {
          nombre: "Pociones de dones",
          descripcionGrimorio: "Requisitos (Brujo botanico) <br> puedes tomar una pocion que da bonus en algunos atributos <br> puedes vincular a otros druidas y su bestia vinculada que tengan tipo de vinculo: compañero de sangre y compañero leal para tener el mismo bonus a la mitad redondeado para arriba. esta pociones solo pueden ser almacenadas en un caldero, y ocupan completamente el mismo.",
          novato: "+1 a cualquier atributo por un 1d6+1 turnos/minutos",
          experto: "+2 a cualquier atributo por un 1d6+2 turnos/minutos",
          maestro: "...",
          hechizos: []
        },
        {
          nombre: "Pociones de heridas pasadas",
          descripcionGrimorio: "Requisitos (Brujo botanico) <br> puedes a la hora de curar a alguien tomar una parte del origen de esa herida y tomar la mitad del daño <br> puedes almacenar hasta un maximo de 2 pociones de este tipo en cada caldero, o en tu bestia hasta maximo una vez o en vbestia que tengan tipo de vinculo: compañero de sangre y compañero leal para tener el mismo bonus a la mitad redondeado para arriba. usar una pocion cuenta como 1 acción. si tambien se llega a curar una herida, se hara mas daño. siendo para herida leve +1d6, herida grave 2d6 y herida critica 3d6 de daño",
          novato: "Puedes almacenar daño hecho por criaturas de rango de 1 a 5",
          experto: "Puedes almacenar daño hecho por criaturas  de rango de 6 a 10",
          maestro: "...",
          hechizos: []
        },
        {
          nombre: "Planta ",
          descripcionGrimorio: "Requisitos (Brujo botanico) <br> que tengan tipo de vinculo: compañero de sangre y compañero leal",
          novato: "Puedes almacenar daño hecho por criaturas de rango de 1 a 5",
          experto: "Tu bestia puede tener una tambien",
          maestro: "...",
          hechizos: []
        },
        {
          nombre: "Pociones bestiales",
          descripcionGrimorio: "Requisitos (Brujo botanico) <br> que tengan tipo de vinculo: compañero de sangre y compañero leal",
          novato: "Puedes ganar una mutacion por unos instantes, debes darle un calmante de lo contrario entrara en modo bestia",
          experto: "Puedes almacenar daño hecho por criaturas  de rango de 6 a 10",
          maestro: "...",
          hechizos: []
        },
        {
          nombre: "Caldero para bestia vinculada",
          descripcionGrimorio: "Requisitos (Brujo botanico) <br> Tu bestia puede adquirir un caldero (u otro adicional) para hacer pociones  que tengan tipo de vinculo: compañero de sangre y compañero leal ",
          novato: "Puedes almacenar daño hecho por criaturas de rango de 1 a 5",
          experto: "Puedes almacenar daño hecho por criaturas  de rango de 6 a 10",
          maestro: "Requisitos (Brujo botanico) <br> que tengan tipo de vinculo: compañero de sangre y compañero leal",
          hechizos: []
        },
        {
          nombre: "Ritos de curación (Curandero)",
          descripcionGrimorio: "Requisitos (Brujo curandero)<br> Mejora en cirugía y soporte.",
          novato: "+5 cirugía, +7 evitar muerte, bestia ayuda +3",
          experto: "+2 voluntad al paciente",
          maestro: "+10 vida extra y recuperación más rápida",
          hechizos: []
        },
        {
          nombre: "Ritos de curación (Botánico)",
          descripcionGrimorio: "Requisitos (Brujo botánico)<br> Cirugía sin daño y mejoras con pociones.",
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
          descripcionGrimorio: "La bestia del brujo podrá tocar a cualquiera y de forma voluntaria llevarlo a un puesto medico que haga el brujo el cual le tomara un turno en armar en medio del combate, solo el druida se teletransportara y quedara inconsciente por 1d6 turnos <br> la bestia puede lanzar destreza dif 14 si quiere hacer esto y que no cuente como accion y en cualquier momento. <br> El objetivo debe tener menos de la mitad de vida disponible.",
          novato: "Alcance 10 m",
          experto: "Alcance 100 m",
          maestro: "Alcance 1 km",
          hechizos: []
        },
        {
          nombre: "Conocimiento en grimorios de curandero",
          descripcionGrimorio: "Requisitos (Brujo curandero)<br> Mejora o creación de hechizos.",
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