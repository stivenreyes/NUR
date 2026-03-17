let GUERRERO = {
    nombreClase: "Guerrero",
    secciones: [
        {
            titulo: "Especialidades",
            items: [
                {
                    nombre: "Guia de combate",
                    descripcionGrimorio: "Dominio de técnicas con espada.",
                    novato: "1d6",
                    experto: "2d6",
                    maestro: "3d6",
                    hechizos: []
                },
                {
                    nombre: "golpeador",
                    descripcionGrimorio: "Ataques pesados y brutales.",
                    novato: "Relanzar y quedar con el otro resultado al atacar, +2 de ataque con armas cortas",
                    experto: "+ 4 de ataque",
                    maestro: "Nueva proeza: Noquear (6 puntos) Se lanza una tirada enfrentada de ataque del atacante vs constitución de la victima, si gana el atacante podrá noquear al enemigo por 1d3 turnos ",
                    hechizos: []
                }
            ]
        },
        {
            titulo: "Técnicas",
            items: 
            [
                {                 
                    nombre: "Estilo desarmado",
                    descripcionGrimorio: "Requisitos (Golpeador)",
                    novato: "mas 3 al daño nueva proeza= 5 = lanzas al objetivo el numero de metros igual al dado especial +1d6. recibirá +1d6 de daño por obstáculos en el camino o hacerlo rebotar hacia ti.",
                    experto: "mas 1 daño Relanza y escoje el mejor resultado",
                    maestro: "Mas 2 al daño Relanza el daño y escoje el mejor resultado",
                    hechizos: [                    
                    ]                   
                },

                {                 
                    nombre: "Corte ",
                    descripcionGrimorio: "Ataque potenciado con energía interna.",
                    novato: "1d8",
                    experto: "2d8",
                    maestro: "3d8",
                    hechizos: [
                        {
                            nombreHechizo: "roky kun",
                            nivelHechizo: "2",
                            descripcion: "Rompe la guardia del enemigo.",
                            tipoHechizo: "Ataque",
                            costoMana: "10 MP",
                            dificultad: "Media",
                            alcanceMaximo: "2 metros"
                        },
                        {
                nombreHechizo: "Sombra Viva",
                nivelHechizo: "4",
                descripcion: "Invoca una sombra que persigue al objetivo.",
                tipoHechizo: "Invocación",
                costoMana: "35 MP",
                dificultad: "Alta",
                alcanceMaximo: "25 metros"
            },
            {
                nombreHechizo: "Niebla Maldita",
                nivelHechizo: "5",
                descripcion: "Cubre un área con energía oscura debilitante.",
                tipoHechizo: "Área",
                costoMana: "40 MP",
                dificultad: "Alta",
                alcanceMaximo: "30 metros"
            }                    
                    ]                   
                },
                {                 
                    nombre: "Estilo desarmado",
                    descripcionGrimorio: "Ataque potenciado con energía interna.",
                    novato: "1d8",
                    experto: "2d8",
                    maestro: "3d8",
                    hechizos: [                    
                    ]                   
                },
                {                 
                    nombre: "Estilo desarmado",
                    descripcionGrimorio: "Ataque potenciado con energía interna.",
                    novato: "1d8",
                    experto: "2d8",
                    maestro: "3d8",
                    hechizos: [                                      
                    ]                   
                },
                {                 
                    nombre: "Estilo desarmado",
                    descripcionGrimorio: "Ataque potenciado con energía interna.",
                    novato: "1d8",
                    experto: "2d8",
                    maestro: "3d8",
                    hechizos: [                                      
                    ]                   
                },
                {                 
                    nombre: "Estilo desarmado",
                    descripcionGrimorio: "Ataque potenciado con energía interna.",
                    novato: "1d8",
                    experto: "2d8",
                    maestro: "3d8",
                    hechizos: [                                      
                    ]                   
                },
                {                 
                    nombre: "Corte ",
                    descripcionGrimorio: "Ataque potenciado con energía interna.",
                    novato: "1d8",
                    experto: "2d8",
                    maestro: "3d8",
                    hechizos: [
                        {
                            nombreHechizo: "roky kun",
                            nivelHechizo: "2",
                            descripcion: "Rompe la guardia del enemigo.",
                            tipoHechizo: "Ataque",
                            costoMana: "10 MP",
                            dificultad: "Media",
                            alcanceMaximo: "2 metros"
                        },
                        {
                nombreHechizo: "Sombra Viva",
                nivelHechizo: "4",
                descripcion: "Invoca una sombra que persigue al objetivo.",
                tipoHechizo: "Invocación",
                costoMana: "35 MP",
                dificultad: "Alta",
                alcanceMaximo: "25 metros"
            },
            {
                nombreHechizo: "Niebla Maldita",
                nivelHechizo: "5",
                descripcion: "Cubre un área con energía oscura debilitante.",
                tipoHechizo: "Área",
                costoMana: "40 MP",
                dificultad: "Alta",
                alcanceMaximo: "30 metros"
            }                    
                    ]                   
                },
            ]

        }
    ]
};