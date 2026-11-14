function crearTarjeta(producto) {
    return `
    <div class="card">

        <div class="card-header">
            <h2>${producto.nombre}</h2>
        </div>

        <div class="cardEtiquetas">

            <div class="card-header">
                <h4>${producto.bioma}</h4>
                <h4>${producto.tipo}</h4>
                <h4>${producto.terreno}</h4>
            </div>

            <div class="card-header">
                ${producto.armadura ? `
                <p>
                    <span class="label">Armadura N:</span>
                    <span class="valor armadura">${producto.armadura}</span>
                </p>` : ""}

                ${producto.tamaño ? `
                <p>
                    <span class="label">Tamaño:</span>
                    <span class="valor Tamaño">${producto.tamaño}</span>
                </p>` : ""}
            </div>

            <div class="card-body">

                <div class="card-body2">
                    ${producto.Precision ? `
                    <p>
                        <span class="label">Precision:</span>
                        <span class="valor Precision">${producto.Precision}</span>
                    </p>` : ""}

                    ${producto.Destreza ? `
                    <p>
                        <span class="label">Destreza:</span>
                        <span class="valor Destreza">${producto.Destreza}</span>
                    </p>` : ""}

                    ${producto.percepción ? `
                    <p>
                        <span class="label">Percep.:</span>
                        <span class="valor percepción">${producto.percepción}</span>
                    </p>` : ""}
                </div>

                <div class="card-body2">
                    ${producto.comunicación ? `
                    <p>
                        <span class="label">Comuni.:</span>
                        <span class="valor comunica.">${producto.comunicación}</span>
                    </p>` : ""}

                    ${producto.fuerza ? `
                    <p>
                        <span class="label">Fuerza:</span>
                        <span class="valor fuerza">${producto.fuerza}</span>
                    </p>` : ""}

                     ${producto.voluntad ? `
                    <p>
                        <span class="label">Voluntad:</span>
                        <span class="valor voluntad">${producto.voluntad}</span>
                    </p>` : ""}
                 
                </div>

                <div class="card-body2">
                    ${producto.constitucion ? `
                    <p>
                        <span class="label">Consti.:</span>
                        <span class="valor constitucion">${producto.constitucion}</span>
                    </p>` : ""}

                    ${producto.pelea ? `
                    <p>
                        <span class="label">Pelea:</span>
                        <span class="valor pelea">${producto.pelea}</span>
                    </p>` : ""}

                   
                    ${producto.Instinto ? `
                    <p>
                        <span class="label">Instinto:</span>
                        <span class="valor Instinto">${producto.Instinto}</span>
                    </p>` : ""}
                </div>

            </div>

            <div class="enfoques">
                <h5>Enfoques:</h5>
                <h6>${producto.enfoques}</h6>
            </div>

            <div class="Habilidad">
                <h5>Habilidades:</h5>
                <h6>${producto.Habilidades}</h6>
            </div>

        </div>

        <div class="cardCombate">
            <div class="card-header">

                ${producto.ataque ? `
                <p>
                    <span class="label">Ataque:</span>
                    <span class="valor ataque">${producto.ataque}</span>
                </p>` : ""}

                ${producto.daño ? `
                <p>
                    <span class="label">Daño:</span>
                    <span class="valor daño">${producto.daño}</span>
                </p>` : ""}

                ${producto.dureza ? `
                <p>
                    <span class="label">Dureza:</span>
                    <span class="valor dureza">${producto.dureza}</span>
                </p>` : ""}

                ${producto.alcance ? `
                <p>
                    <span class="label">Alcance:</span>
                    <span class="valor alcance">${producto.alcance}</span>
                </p>` : ""}

            </div>
        </div>

    </div>
    `;
}

/* ================= BUSCADOR ================= */
function renderProductos(lista, contenedor) {

    contenedor.innerHTML = "";

    for (let producto of lista) {
        contenedor.innerHTML += crearTarjeta(producto);
    }

}



/* ================= FILTRO ================= */
function filtrarBestias() {

    let bioma = filtroBioma.value;
    let tipo = filtroTipo.value;
    let terreno = filtroTerreno.value;

    let resultado = bestias.filter(function(bestia){

        return (
            (bioma === "" || bestia.bioma === bioma) &&
            (tipo === "" || bestia.tipo === tipo) &&
            (terreno === "" || bestia.terreno === terreno)
        );

    });

    renderProductos(resultado, contenedorBestias);

}

/* ================= LISTADO DE BESTIAS  ================= */

let bestias = [
{
    nombre: "Babosa Plateada",
    bioma: "Bosque",
    terreno: "Tierra",
    tipo: "Soporte",
    tamaño: "5",
    armadura: "0",
    Destreza: "1",Precision: "2",pelea: "0",percepción: "0",comunicación: "1",
    fuerza: "-1",voluntad: "3",constitución: "-2",Instinto: "4",
    enfoques: "Curación, Trepar",
    Habilidades: `
    <strong> Hechizo baba sanadora </strong> <br>
    Puede curar a su Nurkano vinculado 2D6 o a un aliado 1D6 + voluntad Dificultad 12 -2 de Nur<br><br>

    <strong> Baba para cirugias </strong> <br>
    En cirugía la babosa plateada tiene +6 a la tirada de curación. <br><br>

    <strong> Baba antídoto </strong> <br>
    Puede curar veneno de rango 1.`,
    ataque: "Baba ácida +1", daño: "1D6", dureza: "1", alcance: "3"
},

{ 
    nombre: "Rana Purpura",
    bioma: "Bosque",
    terreno: "Tierra",
    tipo: "Ataque",
    tamaño: "5",
    armadura: "0",
    Destreza: "2", Precision: "3", pelea: "-1", percepción: "3", comunicación: "0",
    fuerza: "2", voluntad: "0", constitucion: "1", Instinto: "-2",
    enfoques: "Saltar, Esquiva", 
    Habilidades: `
    <strong> Latigazo de lengua </strong> <br>
    Ataque a 5m (2d6), puede dañar armas y armaduras con ácido (1d3)<br> <br>
    Apresar criaturas de un máximo del tamaño de la rana mas 5`,
    ataque: "Latigazo +1", daño: "2D6", dureza: "2", alcance: "5"
},

{ 
    nombre: "Rata Carmesi",
    bioma: "Bosque",
    terreno: "Tierra",
    tipo: "Exploracion",
    tamaño: "3",
    armadura: "0",
    Destreza: "3", Precision: "0", pelea: "2", percepción: "4", comunicación: "0",
    fuerza: "-2", voluntad: "1", constitucion: "-1", Instinto: "0",
    enfoques: "Sigilo, Oler, Huir", 
    Habilidades: `
    <strong> Rastrear sangre </strong> <br>
    100m, hasta 3 tipos), poder:  <br> <br>

    <strong> Sangre en el aire </strong> <br>
    300m, detecta heridos a 50m. <br><br>

    <strong> Clon rata </strong> <br>
    Gastando 3 de Nur puede crear un clon, que podrá moverse hasta máximo 10 metros antes de desahacerse`,
    ataque: "mordidas +3", daño: "1D6", dureza: "2", alcance: "1"
},

{ 
    nombre: "Cuervo X2",
    bioma: "Bosque",
    terreno: "Viento",
    tipo: "Exploracion",
    tamaño: "3",
    armadura: "0",
    Destreza: "2", Precision: "0", pelea: "-2", percepción: "3", comunicación: "3",
    fuerza: "-1", voluntad: "0", constitucion: "-1", Instinto: "4",
    enfoques: "Volar, Distraer", 
    Habilidades: `
    <strong> Pareja unida </strong> <br> 
    Pareja unida (revive en 2 días) <br><br>

    <strong> Distracción coordinada </strong> <br>
    Una vez por dia los dos cuervos pueden coordinasen de una forma tan excepcional que
    pueden distraer con mas 3 en comunicación a alguien para generar hasta un -3 en su próxima acción, 
    ya sea acción de reacción <br><br>
    
    
    <strong> Plumas benditas </strong> <br>
    En el alba pueden dar 2 Plumas +3 a las tiradas`,
    ataque: "Picotazo +1 <br> garras", daño: "1D6 <br> 1d3", dureza: "2 <br> 2", alcance: "1 <br> 1"
},

{ 
    nombre: "Garza de 2 Lenguas",
    bioma: "Costa",
    terreno: "Viento",
    tipo: "comunicación",
    tamaño: "5",
    armadura: "0",
    Destreza: "3", Precision: "0", pelea: "-1", percepción: "2", comunicación: "4",
    fuerza: "-2", voluntad: "0", constitucion: "-1", Instinto: "1",
    enfoques: "Distraer, Huir, Nadar", 
    Habilidades: `
    <strong>Mensajes lejanos</strong><br> 
    Se puede comunicar a la distancia a 1km con su Veltar y otra  bestia elegida (se puede cambiar cada dia)
    las bestias voladoras pueden de volver la comunicación <br><br> 

    <strong>Cantos de terror</strong><br>
    Daño psicológico 1d6, comunicación vs voluntad de la victima<br><br>

    <strong>Mensajes a Amara</strong><br>
    Una vez por dia puedes enviar un mensaje global para todas las bestias en 20 km`,
    ataque: "Picotazo +1", daño: "1D6", dureza: "3", alcance: "1"
},

{ 
    nombre: "Erizo de 4 Brazos",
    bioma: "Costa",
    terreno: "Tierra",
    tipo: "Ataque",
    tamaño: "5",
    armadura: "0",
    Destreza: "3", Precision: "2", pelea: "1", percepción: "1", comunicación: "1",
    fuerza: "0", voluntad: "1", constitucion: "-2", Instinto: "1",
    enfoques: "Lanzar, Excavar", 
    Habilidades: `
    <strong> Explosión de púas </strong> <br>
    Explosión con voluntad +3 (area 2m, 1d6 daño, dif 13) las victimas pueden esquivar con dif 13, las púas pueden ir al subsuelo. <br><br>

    <strong> Amigo espinoso </strong> <br>
    Una vez por dia puede sin gastar acción y en cualquier momento hacer que su Nurkano vinculado, le aparezcan púas por todo 
    su cuerpo hiriendo a los que estén cerca de 1 metro con 2d6 y dandole una armadura temporal de 10 `,
    ataque: "Mordida +1", daño: "1D6", dureza: "3", alcance: "1"
},

{ 
    nombre: "Tiburón Unicornio",
    bioma: "Costa",
    terreno: "Agua",
    tipo: "Exploracion",
    tamaño: "10",
    armadura: "0",
    Destreza: "-1", Precision: "-1", pelea: "3", percepción: "3", comunicación: "-1",
    fuerza: "4", voluntad: "1", constitucion: "0", Instinto: "-1",
    enfoques: "Nadar x2, Oler", 
    Habilidades: `
    <strong>Detector de sangre </strong> <br>
    Puede detectar sangre en agua a (100m). gastando 2 de Nur puede aparecer al lado de su Nurkano en alguna superficie de agua en hasta 1km. <br><br>

    <strong>Miedo y culpa </strong> <br>
    Mas 5 para encontrar criaturas asustadas`
    ,
    ataque: "mordida +1 <br> tope", daño: "2D6 <br> 3D6", dureza: "5<br> 5", alcance: "1 <br> 1"
},

{ 
    nombre: "Serpiente Manchada",
    bioma: "Desierto",
    terreno: "Tierra",
    tipo: "Ataque",
    tamaño: "10",
    armadura: "10",
    Destreza: "2", Precision: "0", pelea: "3", percepción: "1", comunicación: "-1",
    fuerza: "2", voluntad: "-1", constitucion: "1", Instinto: "-1",
    enfoques: "Arte marcial, Escapismo", 
    Habilidades: `
        <strong> Guía de combate </strong> <br> 
    Gastando acción puede relanzar ataques del Nurkano vinculado<br><br>

        <strong> Escondite serpentino </strong> <br> 
    Puede esconder voluntariamente a Nurkanos o bestias del mismo tamaño del Nurkano<br><br>

        <strong> Mirada directa </strong> <br> 
    Mas 3 para intimidar con pelea <br><br>`,
    ataque: "mordidas +4", daño: "2D6", dureza: "5", alcance: "1"
},

{ 
    nombre: "Felino Montes",
    bioma: "Montaña",
    terreno: "Tierra",
    tipo: "Exploracion",
    tamaño: "7",
    armadura: "5",
    Destreza: "0", Precision: "-1", pelea: "1", percepción: "5", comunicación: "-2",
    fuerza: "1", voluntad: "2", constitucion: "-1", Instinto: "3",
    enfoques: "Ver, Alerta, mágica (percep.) ", 
    Habilidades: `
    <strong> Robar Nur </strong> <br>
    Puedes absorber el Nur. voluntad vs voluntad y recargarse de Nur con un 1d6, 
    Nur que podrá enviar a su Nurkano o incrementar el daño de otra bestia en un 1d3 por dado ganado <br><br>

    <strong> Mirada felina </strong> <br>
    Mas 3 para agradar con comunicación<br><br>
    
    <strong> Rastreo Nur</strong> <br>
    Puedes rastrear los restos de Nur producidos por un hechizo, o talento o habilidad donde se uso Nur
    hasta en tirada de percepción/mágica x metros 
        `,
    ataque: "Garras +4 <br> Mordida +1 ", daño: "1D6 <br> 1D6 ", dureza: "3 <br> 2", alcance: "1 <br> 1"
},

{ 
    nombre: "Oso Montes",
    bioma: "Montaña",
    terreno: "Tierra",
    tipo: "Tanque",
    tamaño: "15",
    armadura: "17",
    Destreza: "0", Precision: "-1", pelea: "1", percepción: "4", comunicación: "-1",
    fuerza: "3", voluntad: "3", constitucion: "2", Instinto: "-2",
    enfoques: "Aguante, Vida", 
    Habilidades: `
    <strong> Montura mágica. </strong> 
    <br> Tamaño 15. <br><br>
    
    <strong> Resistencia mágica </strong> <br>
    resistente a magia, recibe la mitad del daño <br><br>
    
    <strong> Gruñido de oso </strong> <br>
    Mas 3 para intimidar con comunicación<br><br>

    <strong> Oso camilla </strong> Rango 7. <br>
    Una vez por dia el oso podrá llevar 50 de tamaño adicionales muy heridos (solo 1 sexto de vida) o 
    inconscientes y huir o simplemente llevarlos por 20 minutos, sin importar que superen su aguante, 
    pero luego de eso el oso necesitara media hora para descansar`,

    ataque: "Garras <br> Mordidas +1 ", daño: "2D6 <br> 1D6", dureza: "5 <br> 3", alcance: "1 <br> 1"
},
{ 
    nombre: "Mono albino",
    bioma: "Bosque",
    terreno: "Tierra",
    tipo: "Ataque",
    tamaño: "5",
    armadura: "0",
    Destreza: "3", Precision: "-1", pelea: "4", percepción: "0", comunicación: "0",
    fuerza: "2", voluntad: "1", constitucion: "1", Instinto: "-2",
    enfoques: "Artes marciales", 
    Habilidades: `
    <strong> Cola de mono </strong> <br>
    Una vez al dia usando su cola puede repetir un ataque fallido y hacer un ataque extra con la misma.<br><br>
    
    <strong> Puños de Nur </strong> Rango 7. <br>
    Puede hacer daño mágico, y gastando 2 de Nur hacer que su golpe se extienda por 3 metros`,
    ataque: "puños +3", daño: "3d6", dureza: "3", alcance: "1"
  },

  { 
    nombre: "Oso hormiguero verde",
    bioma: "Bosque",
    terreno: "Tierra",
    tipo: "Especial",
    tamaño: "5",
    armadura: "15",
    Destreza: "2", Precision: "4", pelea: "-1", percepción: "3", comunicación: "0",
    fuerza: "1", voluntad: "1", constitucion: "-1", Instinto: "-2",
    enfoques: "Oler", 
    Habilidades: `
    <strong> Lengua excavadora </strong> <br> 
    Puede lanzar su lengua por el suelo y atacar a alguien desde la tierra o el agua hasta una distancia de 5 metros, 
    el ataque de la lengua será oculto destreza + 2 para evitar que se descubra, <br><br>

    <strong> Lengua de Nur </strong> <br>
    el oso hormiguero se podrá conectar a su Nurkano vinculado, 
    y transferir  en su lengua cualquier hechizo donde se use Nur`,

    ataque: "Garras +1 <br> lengua", daño: "2D6 <br> 1D6", dureza: "5<br>2", alcance: "1<br>5"
  },

  { 
    nombre: "Rana dorada",
    bioma: "Costa",
    terreno: "Agua",
    tipo: "Soporte",
    tamaño: "5",
    armadura: "0",
    Destreza: "2", Precision: "0", pelea: "0", percepción: "1", comunicación: "1",
    fuerza: "-2", voluntad: "2", constitucion: "-2", Instinto: "4",
    enfoques: "Nadar, Curación, Huir", 
    Habilidades: `
    <strong> Lengua sanadora </strong> <br> 
    Cura 2D6 (Veltar) o 1D6+ 2 (aliado) distancia: 5 metros -3 de Nur<br> <br> 
     
    <strong> Experta en cirugias</strong> <br>
    bonus cirugía +6 y podrá relanzar el dado especial si primero obtiene éxito<br> <br> 
    
    <strong> Estomago sanador</strong> <br> 
    puede almacenar criaturas de su tamaño menos 5 (mínimo bestias de 5 a 1)y curar aliados en estómago por 5d6 por turno`,
    ataque: "Tope+1", daño: "1D6", dureza: "0", alcance: "1"
  },

  { 
    nombre: "Escarabajo amarillo",
    bioma: "Costa",
    terreno: "Viento",
    tipo: "Especial",
    tamaño: "3",
    armadura: "30",
    Destreza: "1", Precision: "-1", pelea: "-1", percepción: "1", comunicación: "-1",
    fuerza: "2", voluntad: "4", constitucion: "3", Instinto: "-1",
    enfoques: "orientarse (percep), volar (destreza) ", 
    Habilidades: `
    <strong> Coraza envenenada </strong> <br>
    Infecta con hongos al contacto, daño 3D6 de forma inmediata, una vez por día, veneno rango 2. <br> <br> 

    <strong> Bombardero </strong> <br>
    Gastando 5 de Nur puede hacer una explosión de 1m haciendo 4d6 de daño dif 15 para esquivar<br> <br>
    
    <strong> Mirar a las estrellas </strong> <br>
    Describe como el escarabajo de noche puede ayudar a su Nurkano vinculado a orientarse y a buscar recursos 
    con un mas 3 en percepción`,

    ataque: "Tope +1", daño: "1D6", dureza: "5", alcance: "1"
  },

  { 
    nombre: "Pulpo cíclope",
    bioma: "Costa",
    terreno: "Agua",
    tipo: "Especial",
    tamaño: "3",
    armadura: "0",
    Destreza: "0", Precision: "0", pelea: "-1", percepción: "2", comunicación: "1",
    fuerza: "1", voluntad: "3", constitucion: "-1", Instinto: "4",
    enfoques: "Conocimiento espiritual, Nadar, Sumergirse", 
    Habilidades: `
    <strong> Revivir poción </strong> <br>
    Puede restaurar una poción una sola vez. <br> <br>
    
    <strong> múltiples cerebros </strong> <br>
    Describe como puede ayudar a su Nurkano vinculado a resolver algún problema, o tratando de entender o 
    recordar algo con mas 2 a inteligencia (no funciona para lanzar hechizos).`,
    ataque: "Latigo +1", daño: "1D6", dureza: "4", alcance: "1"
  },

  { 
    nombre: "Cangrejo jaula",
    bioma: "Costa",
    terreno: "Tierra",
    tipo: "Especial",
    tamaño: "5",
    armadura: "10",
    Destreza: "0", Precision: "-1", pelea: "1", percepción: "1", comunicación: "0",
    fuerza: "2", voluntad: "3", constitucion: "4", Instinto: "-2",
    enfoques: "Aguante de carga (constitución) Coraje (Voluntad)", 
    Habilidades: `
    <strong> Caja fuerte portátil </strong> <br> 
    El cangrejo llevara en su espalda un caparazón donde podrá guardarse cualquier objeto, 
    asi mismo podrá duplicar su caparazón para tener una salida de emergencia si decide esconder el objeto que tenga en el otro caparazón <br> <br> 

    <strong> Reaccion acorazada </strong> <br> Gastando 5 de Nur y sin contar como acción el cangrejo puede invocar y encerrar en un caparazon de 
    tamaño 10, de 30 de vida de forma voluntaria a objetivos en 5 metros`,

    ataque: "Tenazas +1", daño: "1D6", dureza: "6", alcance: "1"
  },

  {
    nombre: "Cangrejo espinoso",
    bioma: "Costa",
    terreno: "Tierra",
    tipo: "Tanque",
    tamaño: "15",
    armadura: "20",
    Destreza: "-1", Precision: "-2", pelea: "2", percepción: "-1", comunicación: "-1",
    fuerza: "5", voluntad: "2", constitucion: "4", Instinto: "-2",
    enfoques: "Aguante de carga, Respiración, Sumergirse", 
    Habilidades: `
    <strong> Montura </strong> <br> 
    Tamaño 15. <br><br>

    <strong> Montura acuatica </strong> <br> 
    Da oxígeno bajo el agua y transporta aliados según tamaño`,
    ataque: "Tenazas +1", daño: "3D6", dureza: "6", alcance: "1"
  },

  { 
    nombre: "Cacatúa morada",
    bioma: "Costa",
    terreno: "Viento",
    tipo: "Artesana",
    tamaño: "5",
    armadura: "0",
    Destreza: "3", Precision: "-1", pelea: "-1", percepción: "2", comunicación: "1",
    fuerza: "0", voluntad: "1", constitucion: "-2", Instinto: "5",
    enfoques: "Orientarse, Artesania (elije entre instinto, destreza, precision, fuerza), Forrajear", 
    Habilidades: `
    <strong> Artesania morada </strong> <br>
    Mas 5 en instinto, precision y destreza para artesanía.<br><br>

    <strong> Mejora de artesano </strong> <br>
    Mas 4 a las tiradas y dificultades para mejorar creaciones <br>
    <div><a href="escenas/taller.html" class="btn">Ir a taller <i class="fa-solid fa-hammer"></i> </a></div> 

    <strong> Arma temporalmente bendecida </strong> <br>
    En dos turnos en medio de un combate un arma se puede volver mas fuerte mas 2d6 de daño
    se requiere 2 de Nur y un material de artesano, la mejora solo dura 2 turnos o 2 minutos.<br><br>`,
    ataque: "Picotazo +1", daño: "1D6", dureza: "3", alcance: "1"
  },
  { 
    nombre: "Medusa eléctrica",
    bioma: "Costa",
    terreno: "Agua",
    tipo: "Ataque",
    tamaño: "3",
    armadura: "0",
    Destreza: "0", Precision: "-1", pelea: "1", percepción: "2", comunicación: "-1",
    fuerza: "0", voluntad: "3", constitucion: "-2", Instinto: "4",
    enfoques: "Nadar, Rayo", 
    Habilidades: `
    <strong> chispazo </strong> <br>
    Ataque eléctrico a 10m, daño 2D6 + Instinto, coste -2 Nur El alcance del 
    rayo puede aumentar 4 metros y agregar un objetivo mas gracias al agua.<br><br>
    
        <strong> Lengua electrica </strong> <br> 
    Describe como tu bestia te dará un +2 para engañar con comunicación <br><br>
    `,
    ataque: "Latigazo +1", daño: "1D6", dureza: "2", alcance: "2"
  },
{ 
    nombre: "Lagarto de trueno",
    bioma: "Desierto",
    terreno: "Tierra",
    tipo: "Ataque",
    tamaño: "10",
    armadura: "15",
    Destreza: "4", Precision: "1", pelea: "2", percepción: "-1", comunicación: "-2",
    fuerza: "1", voluntad: "1", constitucion: "0", Instinto: "3",
    enfoques: "Iniciativa, Velocidad", 
    Habilidades: `    <strong> Rugido electrico </strong> <br> 
    Puede lanzar un rayo en una distancia de 7 metros con daño de 1D6 -2 Nur encadenando hasta 2 objetivos en 2 metros. sin acción una vez por turno. <br><br>

        <strong> Mente electrica </strong> <br> 
    Describe como tu bestia por medio de electricidad te dará un +2 en inteligencia cuando quieras entender algo <br><br>
    `,
    ataque: "Mordida +3", daño: "1D6", dureza: "4", alcance: "1"
  },

  { 
    nombre: "Boa espinosa",
    bioma: "Desierto",
    terreno: "Tierra",
    tipo: "Especial",
    tamaño: "5",
    armadura: "0",
    Destreza: "-1", Precision: "0", pelea: "0", percepción: "0", comunicación: "0",
    fuerza: "2", voluntad: "3", constitucion: "3", Instinto: "2",
    enfoques: "Hechizos de sello (instinto) ", 
    Habilidades: `
    <strong> Prisión serpentina </strong> <br>
    Aprisiona enemigos y los paraliza (3D6 min). Dificultad basada en fuerza (+6 menor rango, +4 igual, +3 mayor) <br><br> 
    
    <strong> Prisión de hechizos </strong> <br>
    Gastando 4 de Nur puede sellar en su cuerpo un hechizo de alguna victima que atrape por un 1d3 turnos lanzando instinto vs voluntad de la victima <br><br> 

    <strong> Prisión de bestias </strong> <br>
    Gastando 4 de Nur puede sellar en su cuerpo una bestia de hasta máximo el tamaño de la bestia mas 5 por un 1d3 turnos lanzando instinto vs voluntad de la victima `,

    ataque: "Mordida +1", daño: "1D6", dureza: "3", alcance: "1"
  },

  { 
    nombre: "Camaleón triclope",
    bioma: "Desierto",
    terreno: "Tierra",
    tipo: "Sigilo",
    tamaño: "3",
    armadura: "5",
    Destreza: "4", Precision: "1", pelea: "-1", percepción: "3", comunicación: "1",
    fuerza: "-1", voluntad: "1", constitucion: "-2", Instinto: "2",
    enfoques: "Sigilo, Juego de manos", 
    Habilidades: `
    <strong> Invisible </strong> <br> 
    gastando 2 de Nur se puede volver invisible 1D6 turnos (dif 20 detectarlo). <br><br>

    <strong> Lenguetazo </strong> <br> 
    Puede atacar con su lengua hasta 3 metros 1d6 de daño o agarrar objetos con ella.<br><br>

    <strong> Amigo invisible </strong>  Rango 7<br>
    Puede hacerse invisible con su Nurkano vinculado (1 vez/día)`,

    ataque: "Garrazo +1", daño: "1D6", dureza: "2", alcance: "1"
  },

  { 
    nombre: "Cóndor tricolor",
    bioma: "Desierto",
    terreno: "Viento",
    tipo: "Montura",
    tamaño: "15",
    armadura: "0",
    Destreza: "4", Precision: "0", pelea: "-1", percepción: "3", comunicación: "0",
    fuerza: "2", voluntad: "0", constitucion: "0", Instinto: "-1",
    enfoques: "Volar, Huir, Olor", 
    Habilidades: `
    <strong> Montura aérea. </strong> <br> Tamaño 15. <br><br>

    <strong> Alas de gloria </strong> <br> 
    Describe como el cóndor con sus alas puede generar un aura a su Nurkano vinculado que le ayudara en tiradas sociales 
    con ambitos persuasivos con un mas 3 en comunicación.<br><br>

    <strong>Anti caídas</strong> Rango 7 <br> 
    Antes de caer al suelo desde grandes alturas la bestia podrá detenerse en el aire y aterrizar sin importar si esta inconsciente o no. 
    si cae en el agua flotara por unos minutos, si cae en la lava o algún lugar peligroso será invulnerable a ese daño por 2 minutos/ 3 turnos`,

    ataque: "Garras +1 <br> Picotazo", daño: "1D6 <br> 2D6", dureza: "3 <br> 2", alcance: "1 <br> 1"
  },

  { 
    nombre: "Rana blanca",
    bioma: "Montaña",
    terreno: "Tierra",
    tipo: "Especial",
    tamaño: "3",
    armadura: "0",
    Destreza: "1", Precision: "0", pelea: "-2", percepción: "4", comunicación: "-1",
    fuerza: "-2", voluntad: "3", constitucion: "0", Instinto: "3",
    enfoques: "Rastrear, Clima, Nadar", 
    Habilidades: `Sensor climático Detecta clima futuro (5h). Hace inmune a clima por 1D6 turnos (1 vez/día)`,

    ataque: "-1", daño: "1D6", dureza: "2", alcance: "1"
  },

  { 
    nombre: "Topo de 4 brazos",
    bioma: "Montaña",
    terreno: "Tierra",
    tipo: "Especial",
    tamaño: "3",
    armadura: "0",
    Destreza: "-1", Precision: "0", pelea: "-1", percepción: "1", comunicación: "0",
    fuerza: "2", voluntad: "3", constitucion: "4", Instinto: "-2",
    enfoques: "Excavar, Huir", 
    Habilidades: `
    
        <strong> Topo asesino </strong> <br> 
    Viaja bajo tierra, ataques sorpresa: +4D6 (desprevenido), +2D6 (alerta), +1D6 (guardia)  <br><br>
    
        <strong> Topo sensor </strong> <br> 
    Este topo puede detectar a cualquiera que este en modo sigilo sobre la tierra, con percepción mas 3 <br><br>
    `,
    ataque: "Garrazo +1", daño: "1D6", dureza: "5", alcance: "1"
  },

  { 
    nombre: "Pez arquero verde",
    bioma: "Costa",
    terreno: "Agua",
    tipo: "Ataque",
    tamaño: "5",
    armadura: "0",
    Destreza: "1", Precision: "2", pelea: "-2", percepción: "1", comunicación: "-1",
    fuerza: "-1", voluntad: "2", constitucion: "0", Instinto: "5",
    enfoques: "Canto (Comunicación), Nadar (Destreza)", 
    Habilidades: ` 
    <strong> Flecha de agua </strong> <br> 
    Gastando 2 de Nur puede lanzar una flecha de agua a 5 metros haciendo 2d6 de daño mas percepción.
    debe lanzar instinto vs esquiva de la victima <br> <br> 

    <strong> prisión de agua </strong> <br> 
    Puede hacer crecer su esfera de agua gastando 4 de Nur y encerrar a una victima de tu mismo tamaño o menos en la misma 1d6 turnos. 
    la cual  no podrá salir de ahi,  puede salir de ahi con una tirada de fuerza/nadar vs tu instinto, cada 
    turno ahi la victima si no es de agua recibe 1d6 de daño<br> <br> 

    <strong> Maestro de la puntería </strong> <br> 
    Describe como este pez puede ayudar a su Nurkano a lanzar con precision con un mas 3 `,
    ataque: "Mordidas", daño: "1D6", dureza: "1", alcance: "1"
  },

  { 
    nombre: "Salamandra de dos colas",
    bioma: "Montaña",
    terreno: "Tierra",
    tipo: "Soporte",
    tamaño: "5",
    armadura: "0",
    Destreza: "0", Precision: "-1", pelea: "2", percepción: "1", comunicación: "0",
    fuerza: "0", voluntad: "4", constitucion: "2", Instinto: "-2",
    enfoques: "Lanzar, Herbolaria", 
    Habilidades: `    <strong> Baba venenosa </strong> <br> 
    4D6 inicial + 1D6 continuo (1 vez por combate) <br><br>
    
        <strong> Buche caldero  </strong> <br> 
    Su estomago puede ser usado como caldero de espacio 3, cada vez que aumenta de tamaño aumenta su caldero en 2 <br><br>
     
    `,
    ataque: "Garrazo +1", daño: "1D6", dureza: "2", alcance: "1"
  },

  { 
    nombre: "delfín nariz de flauta",
    bioma: "Costa",
    terreno: "Agua",
    tipo: "Soporte",
    tamaño: "5",
    armadura: "0",
    Destreza: "2", Precision: "-1", pelea: "-2", percepción: "2", comunicación: "5",
    fuerza: "-1", voluntad: "-1", constitucion: "0", Instinto: "5",
    enfoques: "Canto (Comunicación), Nadar (Destreza)", 
    Habilidades: ` 
    <strong> Cánticos sanadores </strong> <br> 
    Mas 4 para curar daño psicológico, y cura 5 de daño adicional <br> <br> 

    <strong> Cánticos de guerra </strong> <br> 
    Puede inspirar a su Nurkano vinculado y a un Nurkano con su bestia, para que en combate hagan 1d6 de daño adicional<br> <br> 

    <strong> Cánticos románticos </strong> <br> 
    Describe como el delfin da mas 4 a su Nurkano vinculado o mas 2 a algún Nurkano o bestia por medio de Cánticos
    para escenas de seducción `,
    ataque: "Mordidas", daño: "1D6", dureza: "2", alcance: "1"
  },

  { 
    nombre: "Lechuza de 4 alas",
    bioma: "Montaña",
    terreno: "Viento",
    tipo: "Exploración",
    tamaño: "5",
    armadura: "0",
    Destreza: "2", Precision: "-1", pelea: "0", percepción: "2", comunicación: "2",
    fuerza: "0", voluntad: "-1", constitucion: "0", Instinto: "3",
    enfoques: "Sigilo (Destreza), Volar (Destreza)", 
    Habilidades: ` 
    <strong> Espia nocturno </strong> <br> 
    De noche se vuelve invisible (1D3 horas). Detectarla requiere tirada dificultad 20 <br> <br> 

    <strong> Mirada de vigía </strong> <br> 
    Describe como la bestia le puede ayudar a su Nurkano vinculado a detectar si alguien miente o conocer sus intensiones
    con +3 a percepción <br> <br> 

    <strong> Manto del silencio </strong> <br> 
    Puede colocar un manto sobre su Nurkano vinculado para que la misma lechuza haga 
    las tiradas de sigilo por el, la lechuza debe estar con el`,
    ataque: "Garras +1 <br> Picotazo", daño: "1D6 <br> 1D6", dureza: "2 <br> 2", alcance: "1 <br> 1"
  },
  
  {
    nombre: "Pug azul",
    bioma: "Bosque",
    terreno: "Tierra",
    tipo: "Especial",
    tamaño: "5",
    armadura: "0",
    Destreza: "1", Precision: "-1", pelea: "2", percepción: "4", comunicación: "2",
    fuerza: "-1", voluntad: "1", constitucion: "-2", Instinto: "1",

    enfoques: "Oler, Nadar",

    Habilidades: `
    <strong>Baba trampa</strong><br>
    Hechizo: -2 de Nur para producir una baba tipo trampa que puede detener a alguien y reducir su esquiva en -2 durante el combate. 
    Se realiza con una tirada de Instinto con dificultad 12. El dado especial representa cuántos metros de baba deja.<br>

    Para liberarse de la baba, la víctima debe superar una tirada enfrentada de Fuerza contra la resistencia de la baba, determinada 
    por la primera tirada.<br><br>`,

    ataque: "Mordidas +5",
    daño: "1D6",
    dureza: "3",
    alcance: "1"
  },

  {
    nombre: "Pavo real de dos cabezas",
    bioma: "Bosque",
    terreno: "Tierra",
    tipo: "Social",
    tamaño: "3",
    armadura: "0",
    Destreza: "1", Precision: "0", pelea: "0", percepción: "1", comunicación: "4",
    fuerza: "-2", voluntad: "2", constitucion: "-1", Instinto: "3",

    enfoques: "Engañar, Persuadir, Trato con Nurkanos, intimidar o seducción (elije dos)",

    Habilidades: `
    <strong>Bestia social</strong><br>
    Puede utilizar las habilidades de engañar, Persuadir, Trato con Nurkanos, trato con bestias, intimidar o seducción y Distraer (Elije 3) Puede  volver a lanzar todas las acciones sociales que realice su Veltar, siempre que el pavo real pueda actuar.<br><br>

    <strong>Vida adicional</strong><br>
    El pavo real obtiene +1 de vida. cada vez que sube de rango max 3<br><br>

    <strong>Resistencia psíquica</strong><br>
    Reduce su daño psíquico a la mitad.<br><br>

    <strong>Resistencia psíquica x2</strong> Rango 7<br>
    El pavo real puede duplicarse, quedando una cabeza en cada cuerpo, hasta un máximo de dos cuerpos. También puede ayudar a un Nurkano que le permita colocarse sobre su hombro, reduciendo todo el daño psíquico a la mitad. Esta habilidad solo puede utilizarse una vez al día y dura una hora.<br><br>

    `,

    ataque: "Aletazo +1",
    daño: "1D6",
    dureza: "2",
    alcance: "1"
  },

  {
    nombre: "Cernícalo rayado",
    bioma: "Desierto",
    terreno: "Viento",
    tipo: "Especial",
    tamaño: "5",
    armadura: "17M",
    Destreza: "1", Precision: "0", pelea: "2", percepción: "1", comunicación: "0",
    fuerza: "0", voluntad: "1", constitucion: "2", Instinto: "0",

    enfoques: "Volar, Aletazos",

    Habilidades: `
    <strong>Ataque de parásitos</strong><br>
    Cuando el cernícalo ataca a alguien con sus alas, gastando 2 de Nur le transmite unos parásitos que transporta en ellas. Estos afectan a la víctima con 2D6 de daño cada ronda, ignorando la armadura.<br>
    Para deshacerse de los parásitos, la víctima debe utilizar agua o sacudirse con fuerza la ropa y todo lo que lleve puesto.<br><br>

    `,

    ataque: "Garrazo <br> Aletazo", daño: "1d6 <br> 1d6", dureza: "2 <br> 2", alcance: "1 <br> 1"
  },
  {
    nombre: "Hormiga lanza",
    bioma: "Bosque",
    terreno: "Tierra",
    tipo: "Ataque",
    tamaño: "5",
    armadura: "10",
    Destreza: "1", Precision: "-1", pelea: "0", percepción: "0", comunicación: "0",
    fuerza: "7", voluntad: "0", constitucion: "-1", Instinto: "1",
    enfoques: "Empujar (fuerza)",
    Habilidades: `
    <strong> Mandibulas titánicas </strong> <br> 
    Con sus mandibulas pueden cargar hasta 15 de tamaño <br><br>

    <strong> Sacrificio valido </strong> <br> 
    La hormiga explota en un radio de 1 metro causando 4d6 mas voluntad de daño a todos los que estén alrededor, a su Nurkano le aparecerá
    una runa en su cuerpo para revivirla hasta después de 2 horas <br><br>

    <strong> Hormiguita o Hormiga de imperio (Elije una) </strong> <br> 
    +2 para encantar con comunicación o +2 para intimidar con fuerza
    `,
    ataque: "Mordida <br> ...", daño: "3d6 <br> ..", dureza: "3 <br> ..", alcance: "1 <br> .."

},
    {
    nombre: "Elefante de dos trompas",
    bioma: "Bosque",
    terreno: "Tierra",
    tipo: "Soporte",
    tamaño: "10",
    armadura: "20",
    Destreza: "-2", Precision: "-2", pelea: "-1", percepción: "-1", comunicación: "3",
    fuerza: "4", voluntad: "1", constitucion: "2", Instinto: "2",
    enfoques: "primeros auxilios (Instinto)",
    Habilidades: `
    <strong> Soplo sanador para bestias </strong> <br> 
    mas 5 para curar bestias y curas 10 de vida adicional <br><br>

    <strong> Entrenar bestias </strong> <br> 
                    Entrena bestias vinculadas de otros Nurkanos, esta deberá estar con el Veltar<br>
                    Lanzas comunicación/trato con animales <br><br>
                    Puedes entrenar a las bestias una vez por semana, o solo una vez adicional si llega a rango 5 o 8.<br><br>
                    Entrenas 1h, experiencia = rango x5 (bestias rango 1-4)<br><br>
                    0 - 8  No logras enseñar a la bestia vinculada.<br>
                    9 - 12  Le logras enseñar.<br>
                    13 - 16  Le logras enseñar y además le das mas experiencia a la bestia tu rango x 1 <br>
                    17 - 20 Le logras enseñar y además le das mas experiencia a la bestia tu rango x 3<br>
                    21 - ... Le logras enseñar y además le das mas experiencia a la bestia tu rango x 5 y experiencia para el Nurkano del vínculo tu rango x 3 <br><br>

    <strong> Presencia confiable </strong> <br> 
    Explica como el elefante ayuda a su veltar dandole un +2 en persuasión/comunicación <br><br>


    `,
    ataque: "Trompazo <br> ...", daño: "3d6 <br> ..", dureza: "4 <br> ..", alcance: "2 <br> .."

},


    {
    nombre: "Murciélago carmesi",
    bioma: "Montaña",
    terreno: "Aire",
    tipo: "Soporte",
    tamaño: "10",
    armadura: "0",
    Destreza: "0", Precision: "0", pelea: "0", percepción: "2", comunicación: "0",
    fuerza: "-2", voluntad: "3", constitucion: "0", Instinto: "3",
    enfoques: "Volar (Destreza)",
    Habilidades: `
    <strong> Sangre anti maldiciones </strong> <br> 
    La bestia y su Nurkano pueden reducir el daño maldito a la mitad <br><br>

    <strong> Sangre maldita </strong> <br> 
     Una sola vez por dia, te haces daño y la sangre la usas en una ceremonia 
     para bañar sobre un arma, tus manos o las de alguien, este daño se reflejara 
     como daño maldito depende de cuanta vida pierdes haciendo este ritual y este 
     daño adicional se podrá aplicar solo una vez <br> Dif 13 -5 de Nur 
     Lanzas 4d6 de daño para ti y también es el daño maldito que hará tu sangre. Podrás hacer hasta dos ceremonias<br><br>

    <strong> Alas siniestras </strong><br> 
    La bestia puede colocarse sobre su Veltar y generar un aura siniestra para intimidar +2
    `,
    ataque: "Mordida <br> ...", daño: "1d6 <br> ..", dureza: "2 <br> ..", alcance: "1 <br> .."

},
    {
    nombre: "Dragon de komodo de 6 patas",
    bioma: "Desierto",
    terreno: "Tierra",
    tipo: "Ataque",
    tamaño: "5",
    armadura: "20",
    Destreza: "1", Precision: "-1", pelea: "0", percepción: "0", comunicación: "0",
    fuerza: "1", voluntad: "3", constitucion: "1", Instinto: "3",
    enfoques: "Hechizo elemental (instinto), Garras (pelea)",
    Habilidades: `
    <strong> lanza de fuego </strong> <br> 
    2d6 2 metros -2 de Nur <br><br>

    <strong> mordida de fuego </strong> <br> 
    3d6 1 metro -2 de Nur <br><br>

    <strong> colmillos envenenados </strong> <br> 
    Veneno rango 1 1d6 de daño instantáneo
    `,
    ataque: "Garras <br> ...", daño: "1d6 <br> ..", dureza: "2 <br> ..", alcance: "1 <br> .."

},


{
    nombre: "Castor naranja",
    bioma: "Bosque",
    terreno: "Tierra",
    tipo: "Artesana",
    tamaño: "5",
    armadura: "0",
    Destreza: "3", Precision: "-1", pelea: "-1", percepción: "0", comunicación: "1",
    fuerza: "2", voluntad: "1", constitucion: "-1", Instinto: "5",
    enfoques: "Nadar (Fuerza), Artesanía (elije entre instinto, destreza, precision, fuerza), Forrajear",
    Habilidades: `
    <strong> Artesanía naranja</strong> <br>
    Mas 5 en instinto, fuerza y destreza para artesanía.<br><br>

<strong> Creaciones de artesano </strong> <br>
    Mas 4 a las tiradas y dificultades para mejorar creaciones <br>
    <div><a href="escenas/taller.html" class="btn">Ir a taller <i class="fa-solid fa-hammer"></i> </a></div> 

    <strong> Armadura temporalmente bendecida </strong> <br>
    En dos turnos en medio de un combate una armadura se puede volver mas resistente mas 3d6 de resistencia del arma
    se requiere 2 de Nur y un material de artesano, la mejora solo dura 2 turnos o 2 minutos.<br><br>
    `,
    ataque: "Mordida <br> ...", daño: "2d6 <br> ..", dureza: "3 <br> ..", alcance: "1 <br> .."

},

]

/* ================= BOTON ================= */
let btnArriba = document.getElementById("btn-arriba");

window.addEventListener("scroll", function() {
    if (window.scrollY > 200) {
        btnArriba.style.display = "block";
    } else {
        btnArriba.style.display = "none";
    }
});

btnArriba.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

/* ================= FILTRO ================= */
let filtroBioma = document.getElementById("filtro-bioma");
let filtroTipo = document.getElementById("filtro-tipo");
let filtroTerreno = document.getElementById("filtro-terreno");

/* ================= RENDER ================= */

 // agregado


let esPaginaBestias = window.location.pathname.includes("bestias.html");

// agregado

let contenedorBestias = document.getElementById("contenedor-bestias");

/*if (contenedorBestias) {
    for (let bestia of bestias) {
        contenedorBestias.innerHTML += crearTarjeta(bestia);
    }
} */

if (contenedorBestias && esPaginaBestias) {
    for (let bestia of bestias) {
        contenedorBestias.innerHTML += crearTarjeta(bestia);
    }
}
/* ================= BUSCADOR ================= */

function quitarTildes(texto) {
    return texto
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

let buscador = document.getElementById("buscador");

if (buscador) {

    /*buscador.addEventListener("input", function() {

        let texto = buscador.value.toLowerCase();

        if (contenedorBestias) {

            let resultado = bestias.filter(function(bestia){
                return bestia.nombre.toLowerCase().includes(texto);
            });

            contenedorBestias.innerHTML = "";

            for (let bestia of resultado) {
                contenedorBestias.innerHTML += crearTarjeta(bestia);
            }

        }

    });*/

    buscador.addEventListener("input", function() {

        let texto = quitarTildes(buscador.value.toLowerCase());

        if (contenedorBestias) {

            // 🔥 SI ESTÁ VACÍO → NO MOSTRAR NADA (solo en escenas)
            if (texto === "" && !esPaginaBestias) {
                contenedorBestias.innerHTML = "";
                return;
            }

            let resultado = bestias.filter(function(bestia){

                let nombre = quitarTildes(bestia.nombre.toLowerCase());

                return nombre.includes(texto);
            });

            contenedorBestias.innerHTML = "";

            for (let bestia of resultado) {
                contenedorBestias.innerHTML += crearTarjeta(bestia);
            }

        }

    });

}


/* ================= FILTRO ================= */
filtroBioma.addEventListener("change", filtrarBestias);
filtroTipo.addEventListener("change", filtrarBestias);
filtroTerreno.addEventListener("change", filtrarBestias);
