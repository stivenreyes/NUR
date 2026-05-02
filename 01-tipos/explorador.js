let EXPLORADOR = {
    nombreClase: "Explorador",
    secciones: [
        {
            titulo: "especialidades",
            items: [
                {
                    nombre: "Asesino",
                    descripcionGrimorio: "Especialista en ataques sigilosos y letales según el estado del objetivo (desprevenido, alerta o en combate).",
                    novato: "Desprevenido: 4d6 daño, Alerta: 2d6 daño, Guardia: 1d6 daño",
                    experto: "Desprevenido: 5d6 daño, Alerta: 3d6 daño, Guardia: 2d6 daño",
                    maestro: "Desprevenido: 6d6 daño, Alerta: 4d6 daño, Guardia: 3d6 daño",
                    hechizos: []
                },
                {
                    nombre: "Guía del silencio",
                    descripcionGrimorio: "Dominio del sigilo en grupo y movilidad.",
                    novato: "Relanza ataque con arco (1 vez por turno), +1 velocidad, puedes llevar 1 druida y su bestia en sigilo",
                    experto: "Puedes llevar hasta 2 druidas y bestias, +2 velocidad",
                    maestro: "Puedes llevar hasta 4 druidas y bestias, +4 velocidad",
                    hechizos: []
                }
            ]
        },
        {
            titulo: "Técnicas",
            items: [
                {                 
                    nombre: "Exploración",
                    descripcionGrimorio: "Habilidades de rastreo y saqueo.",
                    novato: "Relanza sigilo. Puedes relanzar hasta 2 veces el loot y tomar el último resultado",
                    experto: "Relanza percepción, +3 a percibir (visual, olor o sonido) y enfoque gratis",
                    maestro: "Crea un clon por 1d6 minutos que transfiere información",
                    hechizos: []                   
                },
                {                 
                    nombre: "Robo",
                    descripcionGrimorio: "Acciones sigilosas con destreza.",
                    novato: "+2 a tiradas de robo con destreza",
                    experto: "Si fallas robo con testigos, tiras engaño 2 veces y eliges mejor (máx 2 personas)",
                    maestro: "...",
                    hechizos: []                   
                },
                {                 
                    nombre: "Estilo arco",
                    descripcionGrimorio: "Requisitos (Explorador guía del silencio)",
                    novato: "+2 ataque con arcos. Flechas con hilo (10m) gastando nur para activar bomba",
                    experto: "+4 ataque. Dispara 2 flechas (+3 daño), no combinar tipos",
                    maestro: "...",
                    hechizos: []                   
                },
                {                 
                    nombre: "Huir",
                    descripcionGrimorio: "Capacidad de escape.",
                    novato: "+5 al huir",
                    experto: "Puedes huir con otro usando la misma tirada",
                    maestro: "...",
                    hechizos: []                   
                },
                {                 
                    nombre: "Estilo dagas",
                    descripcionGrimorio: "Requisitos (Explorador asesino)",
                    novato: "+2d6 daño en ataques sigilosos a 1m",
                    experto: "+3d6 daño en ataques sigilosos",
                    maestro: "+4d6 daño. Si eliminas desprevenido, relanzas daño 2 veces contra otro cercano",
                    hechizos: []                   
                },
                {                 
                    nombre: "Super velocidad",
                    descripcionGrimorio: "Movilidad extrema.",
                    novato: "+2 velocidad. 1 vez/día corres el doble sin detenerte",
                    experto: "Proeza: esquivar y moverte 1m",
                    maestro: "Proeza: esquivar y moverte 3m",
                    hechizos: []                   
                },
                {                 
                    nombre: "Ir en contra del tiempo",
                    descripcionGrimorio: "Manipulación del tiempo en combate.",
                    novato: "1 vez/día acción extra",
                    experto: "Puedes salvar a alguien en el último momento",
                    maestro: "Evitas fuego amigo gastando 5 nur",
                    hechizos: []                   
                },
                {                 
                    nombre: "Nur en los pies",
                    descripcionGrimorio: "Movilidad mejorada con energía nur.",
                    novato: "Caminar sobre agua (1d6 turnos) o evitar caídas gastando nur",
                    experto: "Saltar hasta 3 veces tu tamaño",
                    maestro: "Evitar empujones (-1 nur). Caídas sin daño (-7 nur o -12 con aliado)",
                    hechizos: []                   
                },
                {                 
                    nombre: "Brazo de arquero de nur",
                    descripcionGrimorio: "Requisitos (Explorador guía del silencio)",
                    novato: "Flechas mágicas +2, daño 2d6 + precisión, alcance 10m",
                    experto: "Alcance hasta 100m, daño 3d6 + precisión, +3 ataque, bestia puede canalizar habilidades",
                    maestro: "Hace daño y quema nur del objetivo (máx 10)",
                    hechizos: []                   
                },
                {                 
                    nombre: "Rastreo y estudio de huellas",
                    descripcionGrimorio: "Puedes encontrar y seguir huellas, descubrir informacion con ellas.",
                    novato: "+3 percepcion para rastrear huellas frescas (de hace horas) y un rastreo hasta 1 zona. <br> +1 con inteligencia para descubrir hasta una informacion de la criatura.",
                    experto: "+5 percepcion para rastrear huellas (de hace dias) y un rastreo hasta 2 zonas, o eventos <br> +3 con inteligencia para descubrir hasta dos informaciones de la criatura.",
                    maestro: "+7 percepcion para rastrear huellas antiguas (de hace semanas) y un rastreo hasta 3 zonas o eventos <br> +5 con inteligencia para descubrir hasta tres informaciones de la criatura.",
                    hechizos: []                   
                },
                {                 
                    nombre: "La sombra - espectro",
                    descripcionGrimorio: "Requisitos (Explorador asesino)",
                    novato: "+3 sigilo",
                    experto: "+5 sigilo, puedes ocultar tu olor",
                    maestro: "...",
                    hechizos: []                   
                }
                           
                                     
                
            ]
        }
    ]
};