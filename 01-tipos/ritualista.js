let RITUALISTA = {
    nombreClase: "Ritualista",
    secciones: [
        {
            titulo: "Especialidades",
            items: [
                {
                    nombre: "Pactador",
                    descripcionGrimorio: "Podras hacer pactos. debes dar algo, para ganar algo, pero debe tener una limitacion de tiempo, espacio o rango. Adquieres una daga espacial que puedes hacer aparecer gastando 2 de nur, esta daga solo sirve para hacerte daño en el corazón haciéndote 4d6 de daño, si llegas a O o menos puedes lanzar 2d6 y ganar eso de vida",
                    novato: "Creas un pacto en un objeto, no durara mucho tiempo el pacto excepto si te apoyas de un artesano",
                    experto: "Creas un pacto en una bestia o persona",
                    maestro: "Creas un pacto en un lugar pequeño 5m cuadrados",
                    hechizos: []
                },
                {
                    nombre: "Sellador",
                    descripcionGrimorio: "Uso de sellos y control espiritual.",
                    novato: "Aprendes un grimorio de sellado",
                    experto: "Aprendes otro grimorio o talento y puedes sellar espíritus en objetos",
                    maestro: "...",
                    hechizos: []
                }
            ]
        },
        {
            titulo: "Talentos",
            items: 
            [
                {
    nombre: "Grimorio hechizos de pactador",
    descripcionGrimorio: "Requisito: Ritualista pactador <br> Hechizos de pactos voluntarios que permiten intercambiar vida, edad, armas y partes del cuerpo.",
    novato: "Aprendes 2 hechizos que elijas",
    experto: "Aprendes 2 hechizos que elijas",
    maestro: "Aprendes 2 hechizos que elijas",
    hechizos: [
        {
            nombreHechizo: "Edad por vida",
            nivelHechizo: "...",
            descripcion: "Pacto (voluntario) <br> En vez de recibir daño a la vida lo hace a la edad del Nurita. Si llega a la edad de 1 a 8 queda inconsciente la víctima, y despierta cuando llegue a edad 12. Cada minuto regresa a la edad base. Si llega a 0 muere el Nurita. Este hechizo se puede efectuar en cualquier momento y no gasta acción. El pacto dura 1 día.",
            tipoHechizo: "Soporte",
            costoMana: "2 de Nur",
            dificultad: "12",
            alcanceMaximo: "8 m"
        },
        {
            nombreHechizo: "Arma por guardián",
            nivelHechizo: "...",
            descripcion: "Pacto (voluntario) <br> que transforma cada arma en 2 guardianes de protección. El arma regresa a su portador en forma de tatuaje a su mano después de 1D20 minutos. Cada guardián puede bloquear el camino de una bestia de tamaño 10 por dos turnos - 1 minuto. Los guardianes sirven solo para detener algo fisico, no tendrán más funciones o acciones. Los guardianes tendran fuerza 5",
            tipoHechizo: "Soporte",
            costoMana: " 1 de Nur por guardian invocado",
            dificultad: "12",
            alcanceMaximo: "12 m"
        },
        {
            nombreHechizo: "Extremidad por bestia aliada",
            nivelHechizo: "...",
            descripcion: "Pacto (voluntario)  <br> que transforma una extremidad del Veltar en vitalidad para su bestia. Sin importar la extremidad, esta vale por 30 puntos de vida o se puede intercambiar vida Veltar con la de la bestia. Para recuperar la extremidad se requiere una cirugía/ritual.",
            tipoHechizo: "Soporte",
            costoMana: "2 Nur",
            dificultad: "12",
            alcanceMaximo: "12 m"
        },
        {
            nombreHechizo: "Vida por potencial",
            nivelHechizo: "...",
            descripcion: " Pacto (voluntario)  <br>  Sacrificas 20 de vida por un +1 en algún atributo por un escena, solo se puede usar 2 veces en un individuo",
            tipoHechizo: "Soporte",
            costoMana: "2 Nur",
            dificultad: "12",
            alcanceMaximo: "-"
        },
        {
            nombreHechizo: "Sangre contaminada",
            nivelHechizo: "...",
            descripcion: ` Una vez por combate tu sangre puede obtener una vez varios tipos de daño, que serviran para algunos tipos de enemigos <br><br>
            
            Daño Magico<br>
            Daño Bestial<br>
            Daño Maldito<br>
            Daño Psiquico<br><br>
            
            Obtienes todos los 4 poderes menos tu vida disponible /10 (Excepto si tienes 5 de vida o menos)`,
            tipoHechizo: "Soporte",
            costoMana: "4 Nur",
            dificultad: "12",
            alcanceMaximo: "-"
        },
                {
            nombreHechizo: "Convertir en bestia",
            nivelHechizo: "...",
            descripcion: "Pacto (voluntario). <br> El objetivo se convertirá en una bestia salvaje teniendo una acción adicional solo una vez, con poco raciocinio y sed de sangre por 1D6 turnos/minutos. Recuperará 30 de vida, pero al acabarse el tiempo quedará inconsciente y se recuperará en 1D6 horas.",
            tipoHechizo: "Soporte",
            costoMana: "2 Nur",
            dificultad: "12",
            alcanceMaximo: "12 m"
        },
        {
            nombreHechizo: "Guardar bestia vinculada",
            nivelHechizo: "...",
            descripcion: "Pacto (voluntario). <br> Sin gastar turno y haciéndolo en cualquier momento puedes evitar que una bestia reciba daño si el amo de esta permite que quede tatuada en su cuerpo. La bestia durará guardada 1D6 horas.",
            tipoHechizo: "Soporte",
            costoMana: "2 Nur",
            dificultad: "12",
            alcanceMaximo: "12 m"
        },
        {
            nombreHechizo: "Huir a estómago de bestia",
            nivelHechizo: "...",
            descripcion: "Pacto (voluntario). <br> Puedes llevarte a ti, tu bestia y otro objetivo voluntario al estómago de una bestia lejana al azar, deberás hacer una tirada de suerte para saber si hay una bestia grande, de lo contrario, no se gastara nur y podrás volverlo a intentar en la siguiente ronda. La huida es automática y no cuenta como acción.",
            tipoHechizo: "Soporte",
            costoMana: "4 Nur",
            dificultad: "12",
            alcanceMaximo: "1 km"
        }
    ]
},

{
    nombre: "Grimorio de Sellos nocturnos",
    descripcionGrimorio: "Requisito: Ritualista sellador <br> Hechizos de sellado, encierro, invocación y control de objetivos.",
    novato: "Aprendes 1 hechizo",
    experto: "Aprendes 1 hechizo",
    maestro: "Trae cámara de tortura sencilla",
    hechizos: [
        {
            nombreHechizo: "Cámara de tortura sencilla",
            nivelHechizo: "...",
            descripcion: "Invoca una esfera de vida 50, donde dentro estarás con tu víctima, amarrada a discreción del jugador. Cada ronda la víctima debe superar una tirada de voluntad dif (inteligencia + 3D6 del atacante) para liberarse. Estará así por 1D6 turnos, mientras el atacante todo el daño que hace es psíquico, solo se puede ataques físicos, pero resistiéndolo con voluntad. Un objetivo no se puede encerrar más de una vez por día. alguien puede destruir la esfera para liberar al prisionero, y en ese caso el ritualista recibe 2d6 de daño",
            tipoHechizo: "Ataque",
            costoMana: "5 de Nur",
            dificultad: "Inteligencia vs voluntad de la víctima",
            alcanceMaximo: "1 m"
        },
        {
            nombreHechizo: "Estómago de bestia",
            nivelHechizo: "...",
            descripcion: "Invoca una esfera parecida al estómago de una bestia sapo de vida 50, donde dentro estarás con tu víctima, amarrada a discreción del jugador. La víctima debe superar una tirada de fuerza dif (inteligencia + 3D6 del atacante) para liberarse. Estará así por 1D6 turnos, mientras el atacante todo el daño que hace es normal, pero resistiéndolo con constitución. Un objetivo no se puede encerrar más de una vez por día.",
            tipoHechizo: "Ataque",
            costoMana: "4 Nur",
            dificultad: "Inteligencia vs fuerza de la víctima",
            alcanceMaximo: "12 m"
        },
        {
            nombreHechizo: "Traer bestia por Nur reunido",
            nivelHechizo: "...",
            descripcion: `Una vez por combate, gastando un acción puedes reunir el Nur que dona tu grupo que esten a un máximo de 5 metros y puedes en el otro turno invocar a una bestia a hacer daño por solo un parpadeo antes que esta vuelva a irse. El ataque es automático y cuenta como acción del ritualista puede afectar hasta 5 objetivos. <br> <br>
            Depende de cuanto Nur gastes invocara una bestia débil o poderosa<br>
                    6 - 10  : 4D6 de daño repartido<br>
                    11 - 16 : 6D6 de daño repartido  <br>
                    17 - 20 : 8D6 de daño repartido <br>`,
           
            tipoHechizo: "Ataque",
            costoMana: "-",
            dificultad: "12",
            alcanceMaximo: "5 m"
        }
    ]
},
                {
    nombre: "Grimorio hechizos de Sello diurnos",
    descripcionGrimorio: "Requisito: Ritualista sellador <br> Sellado de vida, partes y habilidades.",
    novato: "Aprendes 1 hechizo",
    experto: "Aprendes 1 hechizo",
    maestro: "Sellar vida",
    hechizos: [
        {
            nombreHechizo: "Sellar vida",
            nivelHechizo: "...",
            descripcion: "Lanzas inteligencia vs voluntad de un enemigo. La diferencia que salga la multiplicas por dos y esa es la vida que sellas de él y te la llevas tú en forma de runa en tu cuerpo. Si vas a morir con un ataque puedes utilizar las runas para evitarlo. Puedes tener hasta máximo 3 runas y deben ser de diferentes objetivos.",
            tipoHechizo: "Ataque",
            costoMana: "...",
            dificultad: "Inteligencia vs Voluntad",
            alcanceMaximo: "12 m"
        },
        {
            nombreHechizo: "Sellar extremidad",
            nivelHechizo: "...",
            descripcion: "Debes tocar la extremidad de un enemigo para sellarla. Solo se puede sellar una extremidad. En algunos le quitarás algún ataque y en otros inmovilizarás su forma de pelear (como un arquero).",
            tipoHechizo: "Ataque",
            costoMana: "...",
            dificultad: "Inteligencia vs Voluntad",
            alcanceMaximo: "..."
        },
        {
            nombreHechizo: "Sellar juguetes",
            nivelHechizo: "Novato",
            descripcion: "Puedes guardar y luego sacar alguna bestia de tamaño 5-15 con una orden simple, como por ejemplo atacar a este objetivo que este en la escena, la cual se irá en un turno. La bestia saldrá de tu cuerpo. Hay dos espacios para guardar bestias.",
            tipoHechizo: "Ataque",
            costoMana: "2 Nur",
            dificultad: "12",
            alcanceMaximo: "12 m"
        }
    ]
},
{
    nombre: "Cementerio mental",
    descripcionGrimorio: "Requisito: Ritualista sellador <br> Puedes redirir la mente de los que yacen muertos en tu mente para intentar acceder a sus recuerdos, dif 14, un fallo hace que la mente sea olvidada. Algunas mentes no querran colaborar, pero con la ayuda de un mediador podras tener mas exito, para mentes de bestias requeriras un investigador",
    novato: "Puedes guardar 2 mentes y leer mente o recuerdos hechos por otros ritualistas en objetos",
    experto: "puede guardar una mente sencilla de algún Nurita o bestia y guardala en objetos hecho por un artesano",
    maestro: "...",
    hechizos: []
},
{
    nombre: "Sellar potencial",
    descripcionGrimorio: `   Requisito: Ritualista sellador (novato) <br> Sellas en tu cuerpo parte del potencial de una victima que debes tocar. Inteligencia vs Voluntad de la víctima - 5 de Nur. <br> 
    Si ganas: <br> 
    0-10: Un enfoque. <br> 
    11-15: Lo anterior o un hechizo. <br> 
    16-20: Lo anterior o un talento. <br> 
    21 o más: Lo anterior o una especialización.`,
    novato: "Sella por 2 turnos, después de eso la victima vuelve a tener su potencial",
    experto: "Sella por 1d6 turnos, después de eso la victima vuelve a tener su potencial",
    maestro: "Sella por 2d6 turnos, después de eso la victima vuelve a tener su potencial",
    hechizos: []
},
                {
                    nombre: "Magia de sangre",
                    descripcionGrimorio: "Requisito: Ritualista pactador <br> Toda tu sangre que este fuera de tu cuerpo ayuda a potenciar un ataque mágico, puedes activarlo hasta 1 vez en un combate, ",
                    novato: "1d6 por cada 5 de vida que hayas perdido, máximo 10d6. de daño mágico en un ataque o de daño mágico en el ataque mágico de otra persona cerca tuyo",
                    experto: "1d6 por cada 5 de vida que hayas perdido, máximo 15d6. de daño mágico en un ataque o de daño mágico en el ataque mágico de otra persona cerca tuyo",
                    maestro: "...",
                    hechizos: []
                },
                {
                    nombre: "Sangre maldita",
                    descripcionGrimorio: "Requisito: Ritualista pactador <br> Una sola vez por dia, te haces daño y la sangre la usas en una ceremonia para bañar sobre un arma, tus manos o las de alguien, este daño se reflejara como daño maldito depende de cuanta vida pierdes haciendo este ritual y este daño adicional se podra aplicar solo una vez <br> Dif 13 -5 de Nur",

                    novato: "Lanzas 4d6 de daño para ti y también es el daño maldito que hará tu sangre. Podrás hacer hasta dos ceremonias  <br> Gastando un punto de Nur, puedes hacer que tu sangre sea mas fácil de rastrear por bestias con un +4 a la tirada y hasta duplicar la distancia para ser encontrada ",

                    experto: "Lanzas 6d6 de daño para ti y también es el daño maldito que hará tu sangre. Podrás hacer hasta dos ceremonias",

                    maestro: "Todo daño se vuelve maldito",
                    
                    hechizos: []
                },
                {
                    nombre: "Resistir y curar maldiciones",
                    descripcionGrimorio: "Podrás, no solo curar el daño maldito sino también heridas malditas leves y graves modificando portales espirituales en un centro de curación de maldiciones. <br> Luego de la ceremonia correspondiente al tipo de herida maldita <br> Lanza inteligencia / bendición + 3d6<br> 0 - 6 fallas, haces 1d6 de daño maldito<br> 7- 10 curas la herida maldita<br> 11 - 15 curas la herida maldita y curas 5 de daño maldito<br> 16 - 20 curas la herida maldita y curas 7 de daño maldito<br> 21 - mas curas la herida maldita y curas 10 de daño maldito",
                    novato: "+1 para curar daño maldito <br> podrás en una sesión de curación, llevar a un aliado que este a tu lado dentro de cualquier prueba por 2 turno",
                    experto: "+ 4 para curar daño maldito <br> El daño maldito se reduce a la mitad",
                    maestro: "...",
                    hechizos: []
                },
                 {
                    nombre: "Guardar cicatriz",
                    descripcionGrimorio: "Requisito: Ritualista sellador <br> Puedes guardar algunos atques que te han inflijido y expulsarlos a la mitad de su impacto original, el ataque se calcula por medio de tu inteligencia/h. sellado. este poder se prepara en 1 hora.",
                    novato: "Guardas un ataque sencillo",
                    experto: "Puedes guardar hasta 2 ataques sencillos o magicos",
                    maestro: "Puedes guardar hasta 4 ataques sencillos o magicos",
                    hechizos: []
                },
                {
                    nombre: "Buscando la inmortalidad",
                    descripcionGrimorio: "Requisito: Ritualista sellador <br> Puedes, guardar mentes en plantas que aun están naciendo, para tener un respaldo de alguien por si llegase a morir, el Nurkano o bestia que renacen aparecen con todos los recuerdos, pero con dos puntos de atributos menos. este poder solo se puede hacer una vez en el ocaso.",
                    novato: "Puedes hacer un guardado, solo de ti",
                    experto: "Puedes hacer dos guardados, de un familiar",
                    maestro: "Puedes hacer tres guardados, de un amigo",
                    hechizos: []
                }
            ]

        }
    ]
};