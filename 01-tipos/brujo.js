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
              descripcion: "Ataque magico de daño 5d6, con el atributo pelea",
              tipoHechizo: "Ataque",
              costoMana: 4,
              dificultad: "-",
              alcanceMaximo: "1 m"
            },
            {
              nombreHechizo: "Autorecuperación",
              nivelHechizo: "Experto",
              descripcion: "Automaticamente te curas 10 de vida y 5 de vida para tu bestia, sin contar como accion",
              tipoHechizo: "Curación",
              costoMana: "-",
              dificultad: "-",
              alcanceMaximo: "-"
            },
          ]
        },
        {
          nombre: "Botánico",
          descripcionGrimorio: "Dominio de pociones y conexión con el entorno natural.<br> el botanico puede consumir pociones con solo tocarlas, haciendo que no cuente como acción. <br> Puedes crear pociones en situaciones tensas, en medio de un combate.. podras hacerlas es segundos, pero tendran la mitad del efecto (excluyendo proezas)",
          novato: "Puedes conectarte a 1 caldero y péndulo. Aprendes un talento adicional. una vez por dia puedes crear una pocion improvisada de curación usando el propio nur del botanico, de su bestia vinculada, pocion que cura 1d6+nur gastado",
          experto: "Puedes conectarte a 2 calderos y aprendes un nuevo talento",
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
              descripcion: "Cura 5+1d6 + voluntad a un objetivo",
              tipoHechizo: "Curación",
              costoMana: 2,
              dificultad: 12,
              alcanceMaximo: "7 m"
            },
            {
              nombreHechizo: "Toque sanador (Bestia)",
              nivelHechizo: "Novato",
              descripcion: "Cura 7+1d6 + voluntad a un objetivo",
              tipoHechizo: "Curación",
              costoMana: 2,
              dificultad: 12,
              alcanceMaximo: "1 m"
            },
            {
              nombreHechizo: "Proteger de herida",
              nivelHechizo: "Experto",
              descripcion: "Evita una herida una vez por combate",
              tipoHechizo: "Defensa",
              costoMana: 5,
              dificultad: 12,
              alcanceMaximo: "8 m"
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
              alcanceMaximo: "10 m"
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
              nombreHechizo: "Silbido sanador (Druida)",
              nivelHechizo: "Novato",
              descripcion: "Cura 8+1d6 + voluntad a hasta 3 druidas (decide como repartir el total de curación)",
              tipoHechizo: "Curación",
              costoMana: 2,
              dificultad: 12,
              alcanceMaximo: "3 m"
            },
            {
              nombreHechizo: "Aullido sanador (Bestia)",
              nivelHechizo: "Novato",
              descripcion: "Cura 4+1d6 + voluntad a hasta 3 bestias (decide como repartir el total de curación)",
              tipoHechizo: "Curación",
              costoMana: 2,
              dificultad: 12,
              alcanceMaximo: "3 m"
            },
            {
              nombreHechizo: "Respiracion sanadora ",
              nivelHechizo: "Novato",
              descripcion: "Cura 4+1d6 + voluntad a todos los aliados que esten alrededor del brujo en un radio de 1 metro (decide como repartir el total de curación)",
              tipoHechizo: "Curación",
              costoMana: 2,
              dificultad: 12,
              alcanceMaximo: "1 m"
            },
            {
              nombreHechizo: "Bestia sanadora (Bestia)",
              nivelHechizo: "Novato",
              descripcion: "Cura 4+1d6 + voluntad a todos las bestias que esten alrededor de tu bestia en un radio de 2 metros (decide como repartir el total de curación)",
              tipoHechizo: "Curación",
              costoMana: 2,
              dificultad: 12,
              alcanceMaximo: "2 m"
            },
            {
              nombreHechizo: "Gutural sanador",
              nivelHechizo: "Experto",
              descripcion: "Cura 7+1d6 + voluntad repartido entre 6 objetivos. (decide como repartir el total de curación) <br> si alguien cuenta con los vinculos: compañero de sangre o compañero leal se curara 1d6 adicionales",
              tipoHechizo: "Curación",
              costoMana: 2,
              dificultad: 12,
              alcanceMaximo: "5 m"
            },
            {
              nombreHechizo: "Esfera de curacion",
              nivelHechizo: "Experto",
              descripcion: "Cada turno puedes invocar una esfera de nur curativo alrededor de ti, que cura 3+1d6 a hasta 3 druidas, esta esfera durara 1d6 turnos, solamente al invocarla cuesta como accion",
              tipoHechizo: "Curación",
              costoMana: 4,
              dificultad: 15,
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
          nombre: "Vinculación grupal de poción 🌿",
          descripcionGrimorio: "Requisitos (Brujo botanico) <br> Activas pociones con pensamiento. <br> Gastando 3 de nur un caldero puede almacenar hasta una -pocion tribu- esta pocion cuando se activa afecta a todos los aliados enuna distancia de acuerdo al nivel de este talento <br> <br>",
          novato: " Poción hasta 5 m. se puede hacer el ritual de pocion de tribu una vez al dia",
          experto: " Pociones hasta 10 m <br> y mas 2d6 a la curacion",
          maestro: "...",
          hechizos: []
        },
        {
          nombre: "Forrajear el lugar 🌿",
          descripcionGrimorio: "Recolección de materiales.",
          novato: "+3 a forrajear/percepción",
          experto: "Puedes relanzar búsqueda",
          maestro: "...",
          hechizos: []
        },
        {
          nombre: "Nido de plantas 🌿",
          descripcionGrimorio: "En los costados de los calderos nacen algunas plantas que sirven como materiales para el botanico .",
          novato: " 1d3 (por cada 2 horas) materiales de pociones de curación, maximo 10 materiales",
          experto:  `1d6+ 1 (por dia) materiales de pociones de curación o 1d3+ 1 (por dia) materiales de venenos. <br> <br> 
          totem recolector: puedes dejar un totem que recolecte materiales de pociones,empezara a tener efecto luego de media dia en un sector
          2d6+ 1 (por dia) materiales de pociones de curación`,
          maestro: "...",
          hechizos: []
        },
        {
          nombre: "Pociones de dones 🌿",
          descripcionGrimorio: `Requisitos (Brujo botanico) <br> 
          Puedes crear tomar una pocion que da bonus en algunos atributos <br> 
          puedes vincular a otros druidas y su bestia vinculada que tengan tipo de vinculo: compañero de sangre
          y compañero leal para tener el mismo bonus a la mitad redondeado para arriba. 

          Esta pociones solo pueden ser almacenadas en un caldero, y ocupan completamente el mismo, pero puede compartir espacio con una pocion de heridas pasadas. <br> 
          Gastas 3 de nur, usas 2 materiales de pociones o de nur y lanzas inteligencia / herbolaria <br>
          0 - 8  No logras crear la pocion <br> 
          9 - 12  logras crear la pocion +1 al atributo elejido <br>
          13 - 16  logras crear la pocion +2 al atributo elejido <br>
          17 - 24 logras crear la pocion  +3 al atributo elejido <br> 
          25 - ... logras crear la pocion +4 al atributo elejido `,

          novato: "Duración del efecto 1 turnos/minutos",
          experto: "Duración del efecto 2 turnos/minutos",
          maestro: "...",
          hechizos: []
        },
        {
          nombre: "Pociones de heridas pasadas 🌿",
          descripcionGrimorio: `Requisitos (Brujo Botánico) <br> 
          Gastando 3 de nur Puedes, a la hora de curar a alguien, tomar una parte del origen de esa herida y absorber 
          la mitad del daño. Puedes almacenar hasta un máximo de 2 pociones de este tipo en cada caldero, o dentro 
          de tu bestia hasta un máximo de una vez. <br>  

          También puede hacerse en bestias que tengan el tipo de vínculo: Compañero de Sangre o Compañero Leal, 
          para obtener el mismo bonus reducido a la mitad, redondeado hacia arriba. <br> <br>  

          Usar una poción cuenta como 1 acción. Si además se llega a curar una herida, se 
          hará más daño, siendo para herida leve +1d6, herida grave +2d6 y herida crítica +3d6 de daño. 
          Cuando se toma esa poción o se activa en el caso de las bestias, el ataque solo puede activarse una vez, 
          y será realizado por el Brujo o la Bestia usando el atributo correspondiente.`,
          
          novato: "Puedes almacenar daño hecho por criaturas de rango de 1 a 5 mas 2d6 al daño",
          experto: "Puedes almacenar daño hecho por criaturas  de rango de 6 a 10 mas 4d6 al daño",
          maestro: "...",
          hechizos: []
        },
        {
          nombre: "Planta ",
          descripcionGrimorio: "Requisitos (Brujo botanico) <br> que tengan tipo de vinculo: compañero de sangre y compañero leal",
          novato: "....",
          experto: "Tu bestia puede tener una tambien",
          maestro: "...",
          hechizos: []
        },
        {
          nombre: "Reliquia organica 🌿 falta gasto de nur, tiradas, necesita ritualistas y la bestia",
          descripcionGrimorio: "Requisitos (Brujo botanico) <br> con solo una parte del cuerpo de otro ser, puedes guardar una habilidad que este tenia e invocarlo",
          novato: "Puedes almacenar daño hecho por criaturas de rango de 1 a 5. Una vez lo actives el recipiente y su contenido se daña",
          experto: "puedes activarlo 2 veces si el recipiente lo has mantenido por 1 mes",
          maestro: "...",
          hechizos: []
        },
        {
          nombre: "Clones botanicos  ",
          descripcionGrimorio: "Requisitos: (Brujo botanico rango 5) <br> puedes invocar dos clones de tu bestia y tuyo para que estos tengan la orden de seguir trabjando creando pociones, solo se puede pedir ordenes muy sencillas y no podran salir del sitio donde fueron invocados ",
          novato: "Puedes hacer clon de tu bestia -3 de nur",
          experto: "Puedes hacer clon de ti mismo -3 de nur",
          maestro: "...",
          hechizos: []
        },
        {
          nombre: "Pocion de guerra",
          descripcionGrimorio: "Requisitos: (Brujo botanico rango 5) <br> puedes crear una pocion de rango 3 muy poderosa que requerira tiempo y preparacion para alcanzar su punto maximo, empezara como una simple pocion, requerira horas y dias de trabajo arduo ",
          novato: "Tu bestia podra almacenar otra pocion asi (adicional si ya cuenta con una pocion asi)",
          experto: "...",
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
          novato: "Ella puede aprende el talento de: pociones de heridas pasadas o pociones de dones o vinculacion grupal de pocion",
          experto: "Ella puede obtener otro caldero",
          maestro: "Requisitos (Brujo botanico) <br> que tengan tipo de vinculo: compañero de sangre y compañero leal",
          hechizos: []
        },
        {
          nombre: "Ritos de curación (Curandero)",
          descripcionGrimorio: "Requisitos (Brujo curandero)<br> Mejora en cirugía y soporte.",
          novato: "+5 al hacer cirugía<br> +7 para no dejar morir al paciente en cirugía -3 de nur <br> Haces que tu bestia se convierta en la mejor ayudante para ti, ella podrá lanzar también instinto/curación +3 <br> Ella no podrá fallar",
          experto: "Le da al paciente +2 de voluntad para evitar el daño psicológico si se despierta",
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
              descripcion: "Lanza una rafaga en forma de flecha. haciendo 1d6 de daño",
              tipoHechizo: "Ataque",
              costoMana: "2",
              dificultad:"Inteligencia vs esquiva del objetivo",
              alcanceMaximo: "10 m"
            },
            {
              nombreHechizo: "Tunel de flechas",
              nivelHechizo: "Novato",
              descripcion: "Lanza un tunel de dos metros de diametro de aire que se transforman en flechas 2d6 de daño, maximo dos objetivos",
              tipoHechizo: "Ataque",
              costoMana: "3",
              dificultad: "Inteligencia vs esquiva de los objetivos",
              alcanceMaximo: "5"
            },
            {
              nombreHechizo: "Remolino guardian",
              nivelHechizo: "Novato",
              descripcion: "Crea un remolino alrededor tuyo en 1m gastando 2 de nur o de 2m gastando 6 de nur, este remolino no se mueve con el invocador, duracion del remolino 1d3 turnos. que evita que cualquiera entre y resiste ataques fisicos y magicos vida del remolino de 40. se puede atacar desde adentro ",
              tipoHechizo: "Soporte",
              costoMana: "2 / 6",
              dificultad: "12",
              alcanceMaximo: "0 m"
            },
            {
              nombreHechizo: "Remolino caza",
              nivelHechizo: "Novato",
              descripcion: "Crea un remolino que dura 2 turnos con una altura de hasta de 10 metros, quien toque ese remolino sera empujado o un metro o a las craituras voladoras las hara caer al suelo. puede moverse el remolino 3m en la fase de movimiento del invocador",
              tipoHechizo: "Ataque y control aereo",
              costoMana: "2",
              dificultad: "12",
              alcanceMaximo: "1 m"
            },
            {
              nombreHechizo: "Rafaga de viento",
              nivelHechizo: "Experto",
              descripcion: "Lanzas una rafaga cortante que hace daño de 2d6+inteligencia en el area de un cono.",
              tipoHechizo: "Ataque",
              costoMana: "4",
              dificultad: "15 / 15 para esquivar",
              alcanceMaximo: "3 m"
            },
            {
              nombreHechizo: "Remolino prision",
              nivelHechizo: "Experto",
              descripcion: "Crea un remolino alrededor de una victima en 1m gastando 4 de nur , este remolino no se mueve con la victima, duracion del remolino 1d3 turnos. que evita que la victima se mueva, pero aun podra esquivar entre y evita que la victima haga ataques fisicos y magicos hacia fuera del remolino. vida del remolino de 50. se puede atacar hacia adentro. si se falla aun queda el remolino ahi el cual encerrara a cualquiera que entre",
              tipoHechizo: "Ataque",
              costoMana: "4",
              dificultad: "Inteligencia vs esquiva de la victima",
              alcanceMaximo: "5 m"
            },
          ]
        },
      ]
    }
  ]
};