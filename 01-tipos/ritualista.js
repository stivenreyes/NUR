let RITUALISTA = {
    nombreClase: "Ritualista",
    secciones: [
        {
            titulo: "Especialidades",
            items: [
                {
                    nombre: "Pactador",
                    descripcionGrimorio: "Podras hacer pactos. debes dar algo, para ganar algo, pero debe tener una limitacion de tiempo, espacio o rango.",
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
            titulo: "Técnicas",
            items: 
            [
                {
                    nombre: "Grimorio de pactador",
                    descripcionGrimorio: "Requisito: Ritualista pactador <br> Hechizos de intercambio de vida y recursos.",
                    novato: "Aprendes 2 hechizos",
                    experto: "Aprendes 2 hechizos",
                    maestro: "Aprendes 2 hechizos",
                    hechizos: [
                        {
                            nombreHechizo: "Edad por vida",
                            nivelHechizo: "...",
                            descripcion: "El daño se convierte en edad. Si llega a 1-8 queda inconsciente; a 0 muere",
                            tipoHechizo: "Soporte",
                            costoMana: "2 nur",
                            dificultad: "12",
                            alcanceMaximo: "12"
                        },
                        {
                            nombreHechizo: "Arma por guardián",
                            nivelHechizo: "...",
                            descripcion: "Transforma arma en 2 guardianes que bloquean enemigos",
                            tipoHechizo: "Soporte",
                            costoMana: "2 nur",
                            dificultad: "12",
                            alcanceMaximo: "..."
                        },
                        {
                            nombreHechizo: "Extremidad por bestia aliada",
                            nivelHechizo: "...",
                            descripcion: "Convierte extremidad en 30 de vida para bestia o intercambia vida",
                            tipoHechizo: "Soporte",
                            costoMana: "2 nur",
                            dificultad: "12",
                            alcanceMaximo: "12"
                        },
                        {
                            nombreHechizo: "Vida por potencial",
                            nivelHechizo: "...",
                            descripcion: "...",
                            tipoHechizo: "Ataque",
                            costoMana: "2 nur",
                            dificultad: "12",
                            alcanceMaximo: "12"
                        },
                        {
                            nombreHechizo: "Convertir en bestia",
                            nivelHechizo: "...",
                            descripcion: "Convierte objetivo en bestia, gana 40 vida, luego queda inconsciente",
                            tipoHechizo: "Soporte",
                            costoMana: "2 nur",
                            dificultad: "12",
                            alcanceMaximo: "12"
                        },
                        {
                            nombreHechizo: "Guardar bestia vinculada",
                            nivelHechizo: "...",
                            descripcion: "Evita daño guardando bestia como tatuaje por 1d6 horas",
                            tipoHechizo: "Soporte",
                            costoMana: "2 nur",
                            dificultad: "12",
                            alcanceMaximo: "12"
                        },
                        {
                            nombreHechizo: "Huir a estómago de bestia",
                            nivelHechizo: "...",
                            descripcion: "Teletransporta a una bestia aleatoria, huida automática",
                            tipoHechizo: "Soporte",
                            costoMana: "2 nur",
                            dificultad: "12",
                            alcanceMaximo: "12"
                        }
                    ]
                },
                {
                    nombre: "Grimorio sello A",
                    descripcionGrimorio: "Requisito: Ritualista sellador <br> Encierro y tortura mágica.",
                    novato: "Aprendes 1 hechizo",
                    experto: "Aprendes 1 hechizo",
                    maestro: "...",
                    hechizos: [
                        {
                            nombreHechizo: "Cámara de tortura",
                            nivelHechizo: "...",
                            descripcion: "Encierra objetivo en esfera; daño psíquico mientras esté dentro",
                            tipoHechizo: "Ataque",
                            costoMana: "2 nur",
                            dificultad: "Int vs Voluntad",
                            alcanceMaximo: "12"
                        },
                        {
                            nombreHechizo: "Estómago de bestia",
                            nivelHechizo: "...",
                            descripcion: "Encierra objetivo en esfera tipo estómago; daño normal",
                            tipoHechizo: "Ataque",
                            costoMana: "2 nur",
                            dificultad: "Int vs Fuerza",
                            alcanceMaximo: "12"
                        },
                        {
                            nombreHechizo: "Traer bestia por nur",
                            nivelHechizo: "...",
                            descripcion: "Invoca ataque de bestia según nur acumulado (hasta 10d6)",
                            tipoHechizo: "Ataque",
                            costoMana: "2 nur",
                            dificultad: "12",
                            alcanceMaximo: "12"
                        }
                    ]
                },
                {
                    nombre: "Grimorio sello B",
                    descripcionGrimorio: "Requisito: Ritualista sellador <br> Sellado de vida, partes y habilidades.",
                    novato: "Aprendes 1 hechizo",
                    experto: "Aprendes 1 hechizo",
                    maestro: "...",
                    hechizos: [
                        {
                            nombreHechizo: "Sellar vida",
                            nivelHechizo: "...",
                            descripcion: "Robas vida en forma de runas para evitar muerte",
                            tipoHechizo: "Ataque",
                            costoMana: "2 nur",
                            dificultad: "...",
                            alcanceMaximo: "12"
                        },
                        {
                            nombreHechizo: "Sellar extremidad",
                            nivelHechizo: "...",
                            descripcion: "Sella una extremidad afectando habilidades",
                            tipoHechizo: "Soporte",
                            costoMana: "2 nur",
                            dificultad: "Int vs Voluntad",
                            alcanceMaximo: "12"
                        },
                        {
                            nombreHechizo: "Sellar bestias",
                            nivelHechizo: "...",
                            descripcion: "Guarda bestias dentro del cuerpo (2 espacios)",
                            tipoHechizo: "Ataque",
                            costoMana: "2 nur",
                            dificultad: "12",
                            alcanceMaximo: "12"
                        }
                    ]
                },
                {
                    nombre: "Cementerio mental",
                    descripcionGrimorio: "Requisito: Ritualista sellador <br> Puedes redirir la mente de los que yacen muertos en tu mente para intentar acceder a sus recuerdos, dif 14, un fallo hace que la mente sea olvidada.",
                    novato: "Puedes guardar 2 mentes",
                    experto: "puede guardar una mente sencilla de algun druida o bestia y guardala en objetos hecho por un artesano",
                    maestro: "...",
                    hechizos: []
                },
                {
                    nombre: "Sellar potencial",
                    descripcionGrimorio: "Requisito: Ritualista sellador <br>",
                    novato: "Sella por 2 turnos",
                    experto: "Sella por 1d6 turnos",
                    maestro: "Sella por 2d6 turnos",
                    hechizos: []
                },
                {
                    nombre: "Magia de sangre",
                    descripcionGrimorio: "Requisito: Ritualista pactador <br> Toda tu sangre que este fuera de tu cuerpo ayuda a potenciar un ataque magico, puedes activarlo hasta 1 vez en un combate, ",
                    novato: "Puedes hacer 10d6 menos la vida disponible que tengas de daño mágico en un ataque o 10d6 menos la vida disponible que tengas de daño mágico en el ataque magico de otra persona cerca tuyo",
                    experto: "...",
                    maestro: "...",
                    hechizos: []
                },
                {
                    nombre: "Sangre maldita",
                    descripcionGrimorio: "Requisito: Ritualista pactador <br> Una sola vez por dia, te haces daño y la sangre la usas en una ceremonia para bañar sobre un arma, tus manos o las de alguien, este daño se reflejara como daño maldito depende de cuanta vida pierdes haciendo este ritual y este daño adicional se podra aplicar solo una vez <br> Dif 13 -5 de nur",
                    novato: "Lanzas 4d6 de daño para ti y tambien es el daño maldito que hara tu sangre. Podras hacer hasta dos ceremonias",
                    experto: "Lanzas 6d6 de daño para ti y tambien es el daño maldito que hara tu sangre. Podras hacer hasta dos ceremonias",
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
                    descripcionGrimorio: "Requisito: Ritualista sellador <br> Puedes, guardar mentes en plantas que aun estan naciendo, para tener un respaldo de alguien por si llegase a morir, el druida o bestia que renacen aparecen con todos los recuerdos este poder solo se puede hacer una vez en el ocaso.",
                    novato: "Puedes hacer un guardado",
                    experto: "Puedes hacer dos guardados",
                    maestro: "Puedes hacer tres guardados",
                    hechizos: []
                }
            ]

        }
    ]
};