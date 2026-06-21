let GUERRERO = {
    nombreClase: "Guerrero",
    secciones: [
        {
            titulo: "Especialidades",
            items: [
                {
                    nombre: "Golpeador",
                    descripcionGrimorio: "Especialista en combate directo y contundente.",
                    novato: "Relanzar y quedar con el otro resultado al atacar, +2 de ataque con armas cortas",
                    experto: "+4 de ataque",
                    maestro: "Nueva proeza: Noquear (6 puntos). Tirada enfrentada de ataque vs constitución; si gana, noquea 1d3 turnos. <br> Puedes entrar una vez por dia en modo Berserker, donde tener una accion adicional de combate para ti y tu bestia, pero solo podras activar la proeza doble ataque una vez, despues de eso debes descansar un turno.",
                    hechizos: []
                },
                {
                    nombre: "Guía del combate",
                    descripcionGrimorio: "Coordinación táctica con aliados en combate.",
                    novato: "Tú y un aliado obtienen +1D6 daño; el bonus puede cambiar cada turno",
                    experto: "Tú y un aliado obtienen +2D6 daño; puedes cambiar el bonus cada turno. Acción extra: detener enemigo, lanzar daño 2 veces y elegir el mejor",
                    maestro: "Tú y un aliado obtienen +3D6 daño; puedes cambiar el bonus cada turno. Acción extra igual. Aliado puede repetir hasta 2 ataques fallidos",
                    hechizos: []
                }
            ]
        },
        {
            titulo: "Técnicas",
            items: 
            [
                
                {                 
                    nombre: "Armas duales",
                    descripcionGrimorio: "Combate con dos armas.",
                    novato: "+2 ataque",
                    experto: "Relanza el daño y escoge el mejor resultado",
                    maestro: "Una vez por día ataca hasta 3 objetivos con daño automático",
                    hechizos: []
                },
                {                 
                    nombre: "Armas pesadas",
                    descripcionGrimorio: "Uso de armas a dos manos.",
                    novato: "+2 daño. Si estás cerca (mínimo 3m), puedes correr y golpear añadiendo 1d6 daño y activar empuje",
                    experto: "Relanza el daño y escoge el mejor resultado",
                    maestro: "Una vez por día: salto de 3m y ataque con daño automático +5d6",
                    hechizos: []
                },
                {                 
                    nombre: "Estilo desarmado",
                    descripcionGrimorio: "Requisitos (Golpeador)",
                    novato: "+3 daño. Proeza: lanzar objetivo metros según dado especial +1d6, daño extra por obstáculos",
                    experto: "+1 daño. Relanza ataque y escoge el mejor resultado",
                    maestro: "+2 daño. Relanza daño y escoge el mejor resultado",
                    hechizos: []                   
                },
                {                 
                    nombre: "Golpe Nur",
                    descripcionGrimorio: "Requisitos (Golpeador)",
                    novato: "Daño desarmado + (nur/2). Alcance 2m, +1m por punto de nur",
                    experto: "Hace daño mágico gastando 3 nur",
                    maestro: "Absorbe nur: 10d6 en 2 turnos, 1 vez por día",
                    hechizos: []                   
                },
                {                 
                    nombre: "Combate montado bestias mejorado",
                    descripcionGrimorio: "Requisitos (Guía del combate)",
                    novato: "Ataque normal +2d6 daño, +3 esquiva, -2 ataque. Proeza: empuja según dado especial + daño por obstáculos",
                    experto: "Si matas enemigo, la bestia ataca otro sin acción y gana +5 valentía",
                    maestro: "...",
                    hechizos: []                   
                },
                {                 
                    nombre: "Extremidad de nur",
                    descripcionGrimorio: "Requisitos (Golpeador)",
                    novato: "Sacrificas brazo para proteger automáticamente; se regenera en la siguiente escena",
                    experto: "Sacrificas brazo para lanzar enemigo hasta 10m causando daño por impacto",
                    maestro: "...",
                    hechizos: []                   
                },
                {                 
                    nombre: "Guardar golpe",
                    descripcionGrimorio: "Requisitos (Golpeador)",
                    novato: "+3 a la acción",
                    experto: "+5 a la acción",
                    maestro: "+7 a la acción",
                    hechizos: []                   
                },
                {                 
                    nombre: "Escudo de druida",
                    descripcionGrimorio: "Uso de cuerpos como defensa.",
                    novato: "Usa cadáver (tamaño 10) como escudo vida 10, sin penalizador con arma 1 mano",
                    experto: "Cadáver tamaño 15 vida 20; con druida vivo puedes relanzar fuerza",
                    maestro: "...",
                    hechizos: []                   
                },
                {                 
                    nombre: "Portador de armas de nur",
                    descripcionGrimorio: "Requisitos (Golpeador)",
                    novato: "Armas no se destruyen totalmente; se reparan o regresan a la bestia",
                    experto: "Puede usar dos armas de 1 mano o +2 ataque",
                    maestro: "...",
                    hechizos: []                   
                },
                                {                 
                    nombre: "Grito de gloria",
                    descripcionGrimorio: "Requisitos (Guía del combate) <br> Una vez por escena de combate, el guerrero hara un ataque muy fuerte acompañado de un grito de batalla y motivara a sus aliados para que su siguiente ataque sea igual de poderoso",
                    novato: "+5 en el ataque, mas 3d6 de daño y +2 para el siguiente ataque de un aliado",
                    experto: "+7 en el ataque y +3 para el siguiente ataque de hasta 2 aliados",
                    maestro: "+10 en el ataque y +5 para el siguiente ataque de hasta 3 aliados",
                    hechizos: []                   
                }
            ]

        }
    ]
};