let RITUALISTA = {
    nombreClase: "Ritualista",
    secciones: [
        {
            titulo: "Especialidades",
            items: [
                {
                    nombre: "Pactador",
                    descripcionGrimorio: "Uso de pactos con sacrificio y beneficios mágicos.",
                    novato: "Aprendes un grimorio de pactos",
                    experto: "Aprendes otro grimorio o talento",
                    maestro: "Marcas 2 hechizos; si fallan puedes relanzarlos",
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
                    nombre: "Grimorio pacto de intercambio",
                    descripcionGrimorio: "Hechizos de intercambio de vida y recursos. Requisito: Pactador",
                    novato: "Aprendes 1 hechizo",
                    experto: "Aprendes 1 hechizo",
                    maestro: "Aprendes cualquier hechizo",
                    hechizos: [
                        {
                            nombreHechizo: "Edad por vida",
                            nivelHechizo: "...",
                            descripcion: "El daño se convierte en edad. Si llega a 1-8 queda inconsciente; a 0 muere",
                            tipoHechizo: "Ataque",
                            costoMana: "2 nur",
                            dificultad: "12",
                            alcanceMaximo: "12"
                        },
                        {
                            nombreHechizo: "Arma por guardián",
                            nivelHechizo: "...",
                            descripcion: "Transforma arma en 2 guardianes que bloquean enemigos",
                            tipoHechizo: "Ataque",
                            costoMana: "...",
                            dificultad: "12",
                            alcanceMaximo: "..."
                        },
                        {
                            nombreHechizo: "Extremidad por bestia aliada",
                            nivelHechizo: "...",
                            descripcion: "Convierte extremidad en 30 de vida para bestia o intercambia vida",
                            tipoHechizo: "Ataque",
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
                        }
                    ]
                },
                {
                    nombre: "Grimorio pactos salvajes",
                    descripcionGrimorio: "Transformaciones y supervivencia. Requisito: Pactador",
                    novato: "Aprendes 1 hechizo",
                    experto: "Aprendes 1 hechizo",
                    maestro: "...",
                    hechizos: [
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
                    descripcionGrimorio: "Encierro y tortura mágica. Requisito: Sellador",
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
                    descripcionGrimorio: "Sellado de vida, partes y habilidades. Requisito: Sellador",
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
                            tipoHechizo: "Ataque",
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
                    descripcionGrimorio: "Puedes redirir la mente de los que yacen muertos en tu mente para intentar acceder a sus recuerdos, dif 14, un fallo hace que la mente sea olvidada. Requisito: Sellador (novato)",
                    novato: "Puedes guardar 2 mentes",
                    experto: "puede guardar una mente sencilla de algun druida o bestia y guardala en objetos hecho por un artesano",
                    maestro: "...",
                    hechizos: []
                },
                {
                    nombre: "Sellar potencial",
                    descripcionGrimorio: "Requisito: Sellador (novato)",
                    novato: "Sella por 2 turnos",
                    experto: "Sella por 1d6 turnos",
                    maestro: "Sella por 2d6 turnos",
                    hechizos: []
                },
                {
                    nombre: "Crear pactos",
                    descripcionGrimorio: "Requisito: Pactador (novato)",
                    novato: "Pactos en objetos",
                    experto: "Pactos en seres",
                    maestro: "Pactos en área",
                    hechizos: []
                },
                {
                    nombre: "Magia de sangre",
                    descripcionGrimorio: "Requisito: Pactador (novato)",
                    novato: "Ataque de 10d6 menos tu vida",
                    experto: "...",
                    maestro: "...",
                    hechizos: []
                },
                {
                    nombre: "Sangre maldita",
                    descripcionGrimorio: "Requisito: Pactador (novato)",
                    novato: "Pierdes 4d6 vida para daño maldito",
                    experto: "Pierdes 6d6 vida",
                    maestro: "Todo daño se vuelve maldito",
                    hechizos: []
                },
                {
                    nombre: "Vida por potencial",
                    descripcionGrimorio: "Requisito: Pactador (novato)",
                    novato: "1 vez/día obtienes poderes de daño",
                    experto: "...",
                    maestro: "...",
                    hechizos: []
                },
                {
                    nombre: "Resistir y curar maldiciones",
                    descripcionGrimorio: "Curación de daño maldito.",
                    novato: "+1 curación y apoyo a aliados",
                    experto: "+4 curación y reduce daño a la mitad",
                    maestro: "Inmune a daño maldito (se vuelve normal)",
                    hechizos: []
                },
                 {
                    nombre: "Guardar cicatriz",
                    descripcionGrimorio: "Puedes guardar algunos atques que te han inflijido y expulsarlos a la mitad de su impacto original, el ataque se calcula por medio de tu inteligencia/h. sellado. este poder se prepara en 1 hora. Requisito: Sellador (novato)",
                    novato: "Guardas un ataque sencillo",
                    experto: "Puedes guardar hasta 2 ataques sencillos o magicos",
                    maestro: "Puedes guardar hasta 4 ataques sencillos o magicos",
                    hechizos: []
                },
                {
                    nombre: "Buscando la inmortalidad",
                    descripcionGrimorio: "Puedes, guardar mentes en plantas que aun estan naciendo, para tener un respaldo de alguien por si llegase a morir, el druida o bestia que renacen aparecen con todos los recuerdos este poder solo se puede hacer una vez en el ocaso. Requisito: Sellador (novato)",
                    novato: "Puedes hacer un guardado",
                    experto: "Puedes hacer dos guardados",
                    maestro: "Puedes hacer tres guardados",
                    hechizos: []
                }
            ]

        }
    ]
};