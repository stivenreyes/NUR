let INVESTIGADOR = {
    nombreClase: "Investigador",
    secciones: [
        {
            titulo: "Especialidades",
            items: [
                {
                    nombre: "Salvaje",
                    descripcionGrimorio: "Empatía y conexión natural con las bestias.",
                    novato: "+1 vínculo. +3 entender (zoología/inteligencia), +5 empatizar (trato animales/comunicación). Aprendes un talento",
                    experto: "+3 vínculo. +5 entender tipo de bestias, +7 empatizar tipo de bestias",
                    maestro: "+4 vínculo y aprendes un hechizo de nivel experto de los siguientes",
                    hechizos: [
                            {
        nombreHechizo: "Extremidad bestial",
        nivelHechizo: "Experto",
        descripcion: "Cada dia al alba, puedes dibujar una runa de bestia en alguna extremidad, podras transformar una parte de esa extremidad por una extremidad de una bestia y tomar una habilidad correspondiente. tendras esa modificacion por un 1d6 turnos o minutos ",
        tipoHechizo: "Ataque",
        costoMana: "4 nur",
        dificultad: "14",
        alcanceMaximo: "1"
    },
                    ]
                },
                {
                    nombre: "Zoólogo",
                    descripcionGrimorio: "Estudio y análisis de las bestias.",
                    novato: "+5 entender, +3 empatizar. Aprendes un talento",
                    experto: "Aprendes un talento. +7 entender tipo, +5 empatizar tipo",
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
                    nombre: "Combate montado bestias mejorado",
                    descripcionGrimorio: "Requisitos (Investigador Salvaje)",
                    novato: "Ataque normal +7 daño y +3 esquiva",
                    experto: "Si matas enemigo, bestia ataca otro sin gastar acción y gana +5 unidades de coraje",
                    maestro: "Ataque normal +10 daño y +5 esquiva",
                    hechizos: []                   
                },
                {                 
                    nombre: "Rastreo y estudio de huellas",
                    descripcionGrimorio: "Puedes encontrar y seguir huellas, descubrir informacion con ellas.",
                    novato: "+3 percepcion para rastrear huellas frescas (de hace horas) y un rastreo hasta 1 zona. <br> +3 con inteligencia/zoologia para descubrir hasta una informacion de la bestia.",
                    experto: "+5 percepcion para rastrear huellas (de hace dias) y un rastreo hasta 2 zonas, o eventos <br> +5 con inteligencia/zoologia para descubrir hasta dos informaciones de la bestia.",
                    maestro: "+7 percepcion para rastrear huellas antiguas (de hace semanas) y un rastreo hasta 3 zonas o eventos <br> +7 con inteligencia/zoologia para descubrir hasta tres informaciones de la bestia.",
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
                    descripcionGrimorio: "Requisitos (Investigador salvaje)<br>Cuando tomas la forma de una bestia, no quiere decir que podrás entender su lenguaje ya que solo estas cambiando tu físico no toda tu mentalidad para eso, eso si, tendrás +3 con especies similares a tu forma y +1 a especies diferentes con tirada de trato con animales/comunicación<br>y no tendrás mas vida que tu en estado druida, si llegas a tener en tu estado animal 0 de vida te destranformas restando la vida que perdiste, si también llegas a 0 tu personaje muere",
                    novato: "Transformación tamaño 3-10 por 1d6 turnos (2 nur)",
                    experto: "Transformación tamaño 3-15 por 1d6 turnos (5 nur)",
                    maestro: "Transformación tamaño 3-20 por 1d6 turnos (8 nur)",
                    hechizos: []                   
                },
                {                 
                    nombre: "Debilidades salvajes",
                    descripcionGrimorio: "Identificación de puntos débiles y hacer mas daño a las bestias.",
                    novato: "+3 encontrar debilidad con (zoología/inteligencia) mas 1d6 de daño",
                    experto: "+5 encontrar debilidad con (zoología/inteligencia) mas 2d6 de daño",
                    maestro: "mas 5d6 de daño",
                    hechizos: []                   
                },
                {                 
                    nombre: "Hablar con bestias desconocidas",
                    descripcionGrimorio: "Habilidad para hablar con las bestias mas facilmente de acuerdo a su tipo: <br> Mamiferos <br> Anfibios <br> Aves <br> Reptibles <br> Moluscos <br> Crustaceos <br> Peces <br> Cefalópodos",
                    novato: "+3 hablar con bestias y elije dos tipos",
                    experto: "+5 hablar con bestias y elije dos tipos",
                    maestro: "+7 hablar con bestias y elije dos tipos",
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
                    descripcionGrimorio: "Requiere kit de mantenimiento a bestias <br> Reparación de su armadura natural y armas naturales <br> lanzas destreza / artesanía<br>0 - 8  No logras arreglar las armas naturales de una bestia<br>9 - 12  logras arreglar las armas naturales de una bestia en 1<br>13 - 16  logras arreglar las armas naturales de una bestia y ganas un bonus<br>17 - 20 logras arreglar las armas naturales de una bestia y ganas 2 bonus<br></br>21 - ... logras arreglar las armas naturales de una bestia y ganas 3 bonus",
                    novato: "Curación +2 daño psíquico. Mejora armas naturales y bonus básicos",
                    experto: "Curación +3 daño psíquico. Mejora superior y más bonus",
                    maestro: "Curación +5 daño psíquico. Mejora máxima y mayores bonus",
                    hechizos: []                   
                },
                {                 
                    nombre: "Calmar e inspirar bestias",
                    descripcionGrimorio: "Puedes inspirar y calmar a tu bestia u otras bestias.<br> algunas bestias hambrientas o asustadas pueden perder el control",
                    novato: "+4 para calmar a tu bestia, +2 para calmar otras bestias vinculadas y +1 para calmar otras bestias.<br> <br>bonus por inspirarlas: +3 a tu bestia, +2 a bestias vinculadas y +1 a otras bestias",
                    experto: "...",
                    maestro: "...",
                    hechizos: []                   
                },    
                {                 
                    nombre: "Clones del vinculo",
                    descripcionGrimorio: "Puedes convertirte tu y otros druidas depende del tipo de vinculo en su bestia. o viceversa con la bestia. por 1 d6 turnos o minutos, dif 12 -2 de nur",
                    novato: "Quienes tengan los vinculos: compañeros de juegos y compañeros estrategicos",
                    experto: "...",
                    maestro: "...",
                    hechizos: []                   
                } 
            ]

        }
    ]
};