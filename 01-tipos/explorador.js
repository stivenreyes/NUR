let EXPLORADOR = {
    nombreClase: "Guerrero",
    secciones: [
        {
            titulo: "Especialidades",
            items: [
                {
                    nombre: "Asesino",
                    descripcionGrimorio: "Dominio de técnicas con espada.",
                    novato: "YOLO",
                    experto: "YOTAS",
                    maestro: "YOGO",
                    hechizos: []
                },
                {
                    nombre: "Guia del silencio",
                    descripcionGrimorio: "Ataques pesados y brutales.",
                    novato: "1d8",
                    experto: "2d8",
                    maestro: "3d8",
                    hechizos: []
                }
            ]
        },
        {
            titulo: "Técnicas",
            items: 
            [
                {                 
                    nombre: "Corte Arcano",
                    descripcionGrimorio: "Ataque potenciado con energía interna.",
                    novato: "1d8",
                    experto: "2d8",
                    maestro: "3d8",
                    hechizos: [
                        {
                            nombreHechizo: "atangana!",
                            nivelHechizo: "2",
                            descripcion: "Rompe la guardia del enemigo.",
                            tipoHechizo: "Ataque",
                            costoMana: "10 MP",
                            dificultad: "Media",
                            alcanceMaximo: "2 metros"
                        }                    
                    ]                   
                },

                {                 
                    nombre: "Arco mejorado ",
                    descripcionGrimorio: "Ataque potenciado con energía interna.",
                    novato: "1d8",
                    experto: "2d8",
                    maestro: "3d8",
                    hechizos: [
                        {
                            nombreHechizo: "Golpe Roto",
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
                }
            ]
        }
    ]
};