let CAOTICO = {
  nombreClase: "Caótico",
  secciones: [
    {
      titulo: "Especialidades",
      items: [
        {
          nombre: "Loco del caos",
          descripcionGrimorio: "Especialista en destrucción mágica caótica y manipulación del Nur.",
          novato: "Todo el daño que haces es mágico ",
          experto: `Tus explosiones de Nur ya no afectaran no solo a tu bestia sino hasta dos bestias vinculadas de tu elección<br> <br> 
          Aprendes 2 hechizos uno novato y otro experto del grimorio loco del caos y si no tienes aprendida el talento, lo adquieres <br> <br> 
          Tus hechizos evolucionaran en: 
          <br>Daño: +1d6 al daño 
          <br> Distancia: +2 de distancia 
          <br> Objetivos: +2 objetivos 
          <br> Solo puedes elegir 1.`,
          maestro: "Mejora avanzada de control de explosiones (eliges un efecto)",
          hechizos: []
        },
        {
          nombre: "Roca del caos",
          descripcionGrimorio: "Todo el daño mágico que recibes lo resistes y lo reduces a la mitad. APrendes otro talento",
          novato: "Resistes daño mágico (mitad) y lo transformas en Nur con tu bestia",
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
          nombre: "Grimorio de loco caótico",
          descripcionGrimorio: " Requisito: loco del caos (novato) <br> Control total de explosiones sin daño propio.",
          novato: "Aprendes 1 hechizo novato",
          experto: "Aprendes 2 novatos o 1 experto",
          maestro: "Aprendes 1 experto o 1 maestro",
          hechizos: [
            {
              nombreHechizo: "Explosión de Nur",
              nivelHechizo: "Novato",
              descripcion: "Explosión que afecta 3 objetivos en área. haces 1d6 de daño mas inteligencia",
              tipoHechizo: "Ataque",
              costoMana: 2,
              dificultad: `16, 14 para esquivar `,
              alcanceMaximo: "8 m"
            },
            {
              nombreHechizo: "Catapulta de Nur",
              nivelHechizo: "Novato",
              descripcion: "Debes poder mirar a tu objetivo para marcarlo con dos puntos de Nur, luego puedes lanzarle un bola de Nur desde donde quieras hasta un máximo de 15 metros, la bola explotara y afectara 3 objetivos druidas y bestias (solo terrestres) en un rango de 1 metro a la redonda del objetivo marcado con 1D6 de daño por punto gastado + inteligencia , una vez hecho el hechizo la marca de Nur se desaparece",
              tipoHechizo: "Ataque",
              costoMana: "2-3",
              dificultad: 16,
              alcanceMaximo: "15 m"
            },
            {
              nombreHechizo: "Columna de Nur",
              nivelHechizo: "Novato",
              descripcion: "Columna vertical de daño en área",
              tipoHechizo: "Ataque",
              costoMana: "1-3",
              dificultad: "16",
              alcanceMaximo: "-"
            },
            {
              nombreHechizo: "Quemar Nur",
              nivelHechizo: "Experto",
              descripcion: "Drena Nur y causa daño duplicado",
              tipoHechizo: "Ataque",
              costoMana: 4,
              dificultad: 16,
              alcanceMaximo: "Contacto"
            },
            {
              nombreHechizo: "Clon bomba",
              nivelHechizo: "Experto",
              descripcion: "Creas un clon de ti mismo el cual no podrá hablar solo moverse hasta un máximo de 10 metros y explotar haciendo 4d6 + inteligencia de daño, una vez que explote, tu conciencia vuelve al cuerpo original el cual queda inconsciente y le tomara 1 turno/1 minuto en despertar",
              tipoHechizo: "Ataque",
              costoMana: "4",
              dificultad: "16",   
              alcanceMaximo: "12 m"
            },
            {
              nombreHechizo: "Salto explosivo",
              nivelHechizo: "Experto",
              descripcion: "Podrás saltar hasta 5 metros hacia arriba tuyo y explotar en el aire ",
              tipoHechizo: "Ataque",
              costoMana: 2,
              dificultad: "10. Las victimas esquivan dif 13",
              alcanceMaximo: "12 m"
            },
            {
              nombreHechizo: "Explosión en cruz",
              nivelHechizo: "Experto",
              descripcion: "Explosión en forma de cruz",
              tipoHechizo: "Ataque",
              costoMana: 2,
              dificultad: "10. Las victimas esquivan dif 13 " ,
              alcanceMaximo: "12 m"
            },
            {
              nombreHechizo: "Recta de Nur",
              nivelHechizo: "Experto",
              descripcion: "Podrás hacer una recta frente a ti de 8 metros donde todos los objetivos terrestres sean afectados",
              tipoHechizo: "Ataque",
              costoMana: 2,
              dificultad: 10,
              alcanceMaximo: "12 m"
            },
            {
              nombreHechizo: "Rayo de Nur",
              nivelHechizo: "Maestro",
              descripcion: "Reúnes Nur del lugar máximo de 8 y Nur de aliados máximo 10, eso te tomara dos turnos, la reserva que hayas reunido divídela en 2 y ese es el numero de dados d6 de daño que haces a un objetivo, al haber expulsado de tu boca un gran rayo de Nur que quema y llegado el caso desintegra el objetivo que se cruce ",
              tipoHechizo: "Ataque",
              costoMana: "6",
              dificultad: "18",
              alcanceMaximo: "5 m"
            },
            {
              nombreHechizo: "Mata hechiceros",
              nivelHechizo: "Maestro",
              descripcion: "Todo el daño mágico que recibes de un hechicero puedes guardarlo gastando dos turnos puedes de<i class="fa-solid fa-circle-chevron-left"></i> volver un hechizo de ese mismo hechicero pero con el daño que te ah hecho multiplicado por 2",
              tipoHechizo: "Ataque",
              costoMana: "6",
              dificultad: "18",
              alcanceMaximo: "12 m"
            },
            {
              nombreHechizo: "Viaje caótico de Nur",
              nivelHechizo: "Novato",
              descripcion: "Podrás sentir todas las cosas que tengan Nur en su interior en un rango de 50 metros, podrás dividirte tantas veces como seres de Nur encontrados, podrás hacer que uno de esos clones explote hacia el objetivo con un daño de 2d6 mas inteligencia y podrás materializarte en uno de tus clones, los demás clones se desharán  ",
              tipoHechizo: "Ataque",
              costoMana: "2",
              dificultad: "12",
              alcanceMaximo: "12 m"
            }
          ]
        },
        {
          nombre: "Conocimiento en grimorios",
          descripcionGrimorio: "Requisito: loco del caos (novato) <br> Mejora o creación de hechizos.",
          novato: "Mejora hechizo (discutelo con tu master)",
          experto: "Crea hechizo (discutelo con tu master)",
          maestro: "...",
          hechizos: []
        },
        {
          nombre: "Imán de seres del Nur",
          descripcionGrimorio: "Requisito: loco del caos (novato) <br> Atrae enemigos cercanos.",
          novato: "Atrae hasta 2 objetivos en 5 m",
          experto: "...",
          maestro: "...",
          hechizos: []
        },
        {
          nombre : "Cargar con Nur 🛡️", 
          descripcionGrimorio: "Requisito: Roca del caos (novato) <br> Puedes tomar del ambiente, objeto, Nurita o bestia y de forma involuntaria, teniendo una tirada de voluntad vs voluntad solo si el objetivo se resiste. <br> Si lo logras robaras Nur, tanto como tu nivel de Nur - 1D6<br>  Nur que debes expulsar si o si para evitar recibir esa cantidad x2 de daño <br>       Puedes expulsarla tocando a alguien para cargarlo y generar uno de estos efectos segun el nivel que tengas esta habilidad",
          novato: "La persona cargada podrá hacer daño mágico pero recibir la mitad de daño del ataque que haga, ya que el Nur no esta del todo bien pulido<br> este efecto solo se puede hacer una vez al dia, y la carga debe expulsarla en máximo 1 turno o media minuto",
          experto: "La persona cargada podrá hacer daño mágico <br> este efecto solo se puede hacer una vez al dia, y la carga debe expulsarla en máximo 1 turno o media minuto",
          maestro: "...",
          hechizos: []
        },
        {
          nombre: "Reutilizar el Nur 🛡️",
          descripcionGrimorio: "Requisito: Roca del caos (novato) <br> Las explosiones de un hechicero caótico/loco del caos, un druida muerto, una bestia muerta o un hechizo fallido dejan Nur en el aire que con una acción se puede reutilizar ese Nur depende del nivel que tengas esta habilidad",
          novato: "Sumar 1d3 de Nur para tu bestia o para ti <br> Hacer que tu bestia sume 1D6 a cualquier tirada usando el Nur que este en el aire, solo se puede hacer una vez por una fuente de Nur <br> Si es una bestia o druida muerto que hagan una ultima acción con el Nur que aun tienen, la acción solo puede ser física",
          experto: "Gastando 3 de Nur puedes <i class="fa-solid fa-circle-chevron-left"></i> volver a invocar hechizos donde se deshicieron y movrlos hasta donde estes",
          maestro: "...",
          hechizos: []
        },
        {
          nombre: "Transformar daño en Nur 🛡️",
          descripcionGrimorio: "Requisito: Roca del caos (novato) <br> Convierte daño mágico en energía.",
          novato: "La mitad del daño magico que recibes lo puedes repartir entre mínimo dos aliados cercanos como Nur",
          experto: "...",
          maestro: "...",
          hechizos: []
        },
        {
          nombre: "Entrar en locura 🛡️",
          descripcionGrimorio: "Requisito: Roca del caos (novato) <br> Cambio temporal a loco del caos.",
          novato: "1 hechizo novato",
          experto: "2 hechizos de novato o 1 experto",
          maestro: "Hasta hechizos de nivel maestro",
          hechizos: []
        },
        {
          nombre: "Ladrón de Nur",
          descripcionGrimorio: "Robo de energía mágica.",
          novato: "Robas 1d6 de Nur de hasta 2 aliados o bestias",
          experto: "...",
          maestro: "...",
          hechizos: []
        },
        {
          nombre: "Quitar Nur o energía 🛡️",
          descripcionGrimorio: "Requisito: Roca del caos (novato) <br> Drena energía o vida del enemigo.",
          novato: "Una vez por ronda si algún hechizo te toca donde este en contacto con el hechicero puedes quitarle un 1d6 de Nur y si recibes un golpe melé puedes quitarle energías a la victima y hacerle 2d6 de daño o quitarle -1d6 de Nur y dándole un -1 a su siguiente acción física",
          experto: "...",
          maestro: "...",
          hechizos: []
        },
        {
          nombre: "Iman de Nur violento 🛡️",
          descripcionGrimorio: "Requisito: Roca del caos (novato) <br> Drena energía o vida del enemigo.",
          novato: "En un area de 3 metros puedes desviar ataques magicos hacia ti  gastando 2 de Nur",
          experto: "puedes desviar ataques magicos hacia otros en un area de 3 metros gastando 3 de Nur, ese hechizo se dirije con una tirada de intelencia vs esquiva de la victima",
          maestro: "...",
          hechizos: []
        },
        {
          nombre: "Escudo de Nur del caos 🛡️",
          descripcionGrimorio: "Requisito: Roca del caos (novato) <br> Escudo que puedes invocar para intentar absorber y regresar el mismo ataque.",
          novato: "gastando 3 de Nur puedes invocar este escudo por una escena de combate con vida de 20, y que puede de<i class="fa-solid fa-circle-chevron-left"></i> volver el mismo ataque hasta en un metro al instante, haciendo un cuarto del daño",
          experto: "puedes desviar ataques magicos hacia otros en un area de 3 metros gastando 3 de Nur, ese hechizo se dirije con una tirada de intelencia vs esquiva de la victima",
          maestro: "...",
          hechizos: []
        }
      ]
    }
  ]
};