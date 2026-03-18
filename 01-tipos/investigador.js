let INVESTIGADOR = {
    nombreClase: "Investigador",
    secciones: [
        {
            titulo: "Especialidades",
            items: [
                {
                    nombre: "Salvaje",
                    descripcionGrimorio: "Empatía y conexión natural con las bestias.",
                    novato: "+1 vínculo. Dif 14 entender (zoología/inteligencia), Dif 11 empatizar (trato animales/comunicación). Aprendes un talento",
                    experto: "+3 vínculo. Dif 12 entender tipo de bestias, Dif 9 empatizar tipo de bestias",
                    maestro: "+4 vínculo",
                    hechizos: []
                },
                {
                    nombre: "Zoólogo",
                    descripcionGrimorio: "Estudio y análisis de las bestias.",
                    novato: "Dif 11 entender, Dif 14 empatizar. Aprendes un talento",
                    experto: "Aprendes un talento. Dif 9 entender tipo, Dif 12 empatizar tipo",
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
                    nombre: "Combate montado bestias mejorado",
                    descripcionGrimorio: "Requisitos (Investigador Salvaje)",
                    novato: "Ataque normal +7 daño y +3 esquiva",
                    experto: "Si matas enemigo, bestia ataca otro sin acción y gana +5 coraje",
                    maestro: "...",
                    hechizos: []                   
                },
                {                 
                    nombre: "Rastrear bestias",
                    descripcionGrimorio: "Especialización por terreno",
                    novato: "Rastreo hasta 50m",
                    experto: "Rastreo hasta 100m",
                    maestro: "...",
                    hechizos: []                   
                },
                {                 
                    nombre: "Grimorio curación de bestias",
                    descripcionGrimorio: "Requisitos (Investigador Zoólogo)",
                    novato: "Aprendes un hechizo",
                    experto: "Aprendes otro hechizo",
                    maestro: "...",
                    hechizos: [
    {
        nombreHechizo: "Toque Sanador",
        nivelHechizo: "...",
        descripcion: "Cura 15 a un objetivo",
        tipoHechizo: "Ataque",
        costoMana: "2 nur",
        dificultad: "12",
        alcanceMaximo: "12"
    },
    {
        nombreHechizo: "Viento Sanador",
        nivelHechizo: "...",
        descripcion: "Cura 7 a un objetivo hasta 5 metros",
        tipoHechizo: "Ataque",
        costoMana: "2 nur",
        dificultad: "12",
        alcanceMaximo: "12"
    },
    {
        nombreHechizo: "Silbido Sanador",
        nivelHechizo: "...",
        descripcion: "Cura 10 a un objetivo, hasta 3 bestias a 1 metro",
        tipoHechizo: "Ataque",
        costoMana: "2 nur",
        dificultad: "12",
        alcanceMaximo: "12"
    },

                    ]                   
                },
                {                 
                    nombre: "Imitar bestias",
                    descripcionGrimorio: "Transformación parcial en bestias.",
                    novato: "Transformación tamaño 3-10 por 1d6 turnos (2 nur)",
                    experto: "Transformación tamaño 3-15 por 1d6 turnos (5 nur)",
                    maestro: "...",
                    hechizos: []                   
                },
                {                 
                    nombre: "Debilidades salvajes",
                    descripcionGrimorio: "Identificación de puntos débiles.",
                    novato: "+3 encontrar debilidad (zoología/inteligencia)",
                    experto: "+5 encontrar debilidad",
                    maestro: "...",
                    hechizos: []                   
                },
                {                 
                    nombre: "Hablar con bestias desconocidas",
                    descripcionGrimorio: "Especialización por terreno",
                    novato: "+3 hablar con bestias",
                    experto: "+5 hablar con bestias",
                    maestro: "Elige otro terreno y +7 hablar con bestias",
                    hechizos: []                   
                },
                {                 
                    nombre: "Entrenar bestias",
                    descripcionGrimorio: "Entrenamiento y mejora de bestias vinculadas.",
                    novato: "Entrenas 1h, experiencia = rango x5 (bestias rango 1-4)",
                    experto: "Entrenas 2h, experiencia = rango x10 (rango 5-7)",
                    maestro: "Entrenas 3h, experiencia = rango x15 (rango 8-10)",
                    hechizos: []                   
                },
                {                 
                    nombre: "Rituales de bestias vinculadas",
                    descripcionGrimorio: "Control de mutación y evolución.",
                    novato: "Aprendes ritual de vinculación y cambio de vínculo",
                    experto: "Aprendes ritual de rechazo y nuevo ataque",
                    maestro: "Reduce tiempo de hibernación a la mitad",
                    hechizos: []                   
                },
                {                 
                    nombre: "Mantenimiento y curación de bestias",
                    descripcionGrimorio: "Requiere kit. Reparación y mejora de bestias.",
                    novato: "Curación +2 daño psíquico. Mejora armas naturales y bonuses básicos",
                    experto: "Curación +3 daño psíquico. Mejora superior y más bonus",
                    maestro: "Curación +5 daño psíquico. Mejora máxima y mayores bonus",
                    hechizos: []                   
                },
                {                 
                    nombre: "Talento",
                    descripcionGrimorio: "...",
                    novato: "...",
                    experto: "...",
                    maestro: "...",
                    hechizos: []                   
                }
            ]

        }
    ]
};