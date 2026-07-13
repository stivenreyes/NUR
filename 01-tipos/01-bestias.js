function crearTarjeta(producto) {
    return `
    <div class="card">

        <div class="card-header">
            <h2>${producto.nombre}</h2>
            <span class="precio">Rango 2</span>
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

                    ${producto.percepcion ? `
                    <p>
                        <span class="label">Percep.:</span>
                        <span class="valor percepcion">${producto.percepcion}</span>
                    </p>` : ""}
                </div>

                <div class="card-body2">
                    ${producto.comunicacion ? `
                    <p>
                        <span class="label">Comuni.:</span>
                        <span class="valor comunica.">${producto.comunicacion}</span>
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
    Destreza: "1",Precision: "2",pelea: "0",percepcion: "2",comunicacion: "1",
    fuerza: "-1",voluntad: "3",constitucion: "-2",Instinto: "4",
    enfoques: "Curación, Trepar",
    Habilidades: `
    <strong> Hechizo baba sanadora </strong> <br>
    Puede curar a su druida vinculado 2D6 o a un aliado 1D6 + voluntad.Dificultad 12. <br><br>

    <strong> Baba para cirugias </strong> <br>
    En cirugía la babosa plateada tiene +6 a la tirada de curación. <br><br>

    <strong> Baba antidoto </strong> <br>
    Puede curar veneno de rango 1.`,
    ataque: "Baba acida +1", daño: "1D6", dureza: "1", alcance: "3"
},

{ 
    nombre: "Rana Purpura",
    bioma: "Bosque",
    terreno: "Tierra",
    tipo: "Ataque",
    tamaño: "5",
    armadura: "0",
    Destreza: "2", Precision: "5", pelea: "-1", percepcion: "3", comunicacion: "0",
    fuerza: "2", voluntad: "0", constitucion: "1", Instinto: "-2",
    enfoques: "Saltar, Esquiva", 
    Habilidades: `
    <strong> Latigazo de lengua </strong> <br>
    Ataque a 5m (2d6), puede dañar armas y armaduras con acido (1d3)<br> <br>
    Apresar criaturas de un maximo del tamaño de la rana mas 5`,
    ataque: "Latigazo +1", daño: "2D6", dureza: "2", alcance: "5"
},

{ 
    nombre: "Rata Carmesi",
    bioma: "Bosque",
    terreno: "Tierra",
    tipo: "Exploracion",
    tamaño: "3",
    armadura: "0",
    Destreza: "3", Precision: "0", pelea: "2", percepcion: "4", comunicacion: "0",
    fuerza: "-2", voluntad: "1", constitucion: "-1", Instinto: "0",
    enfoques: "Sigilo, Oler, Huir", 
    Habilidades: `
    <strong> Rastrear sangre </strong> <br>
    100m, hasta 3 tipos), poder:  <br> <br>

    <strong> Sangre en el aire </strong> <br>
    300m, detecta heridos a 50m. <br><br>

    <strong> Clon rata </strong> <br>
    Gastando 3 de nur puede crear un clon, que podra moverse hasta maximo 10 metros antes de desahacerse`,
    ataque: "mordidas +3", daño: "1D6", dureza: "2", alcance: "1"
},

{ 
    nombre: "Cuervo X2",
    bioma: "Bosque",
    terreno: "Viento",
    tipo: "Exploracion",
    tamaño: "3",
    armadura: "0",
    Destreza: "2", Precision: "0", pelea: "-2", percepcion: "4", comunicacion: "3",
    fuerza: "0", voluntad: "0", constitucion: "-1", Instinto: "4",
    enfoques: "Volar, Distraer", 
    Habilidades: `
    <strong> Pareja unida </strong> <br> 
    Pareja unida (revive en 2 dias) <br><br>

    <strong> Distracion coordinada </strong> <br>
    Una vez por dia los dos cuervos pueden coordinarsen de una forma tan excepcional que
    pueden distraer con mas 3 en comunicacion a alguien para generar hasta un -3 en su proxima accion, ya sea accion de reaccion <br><br>
    
    
        <strong> Plumas benditas </strong> <br>
        En el alba pueden dar 2 Plumas +3 a las tiradas`,
    ataque: "Picotazo +1", daño: "1D6", dureza: "2", alcance: "1"
},

{ 
    nombre: "Garza de 2 Lenguas",
    bioma: "Costa",
    terreno: "Viento",
    tipo: "Comunicacion",
    tamaño: "5",
    armadura: "0",
    Destreza: "4", Precision: "0", pelea: "-1", percepcion: "3", comunicacion: "4",
    fuerza: "0", voluntad: "1", constitucion: "-1", Instinto: "1",
    enfoques: "Distraer, Huir, Nadar", 
    Habilidades: `<strong>Comunicacion </strong> a distancia (5km), daño psicologico 1d6, mensaje global 200m`,
    ataque: "Picotazo +1", daño: "1D6", dureza: "3", alcance: "1"
},

{ 
    nombre: "Erizo de 4 Brazos",
    bioma: "Costa",
    terreno: "Tierra",
    tipo: "Ataque",
    tamaño: "5",
    armadura: "0",
    Destreza: "0", Precision: "2", pelea: "0", percepcion: "0", comunicacion: "0",
    fuerza: "0", voluntad: "1", constitucion: "-2", Instinto: "-1",
    enfoques: "Lanzar, Excavar", 
    Habilidades: `
    <strong> Explosión de puas </strong> <br>
    Explosion con fuerza +4 (area 2m, 1d6 daño, dif 13) las victimas pueden esquivar con dif 13, las puas pueden ir al subsuelo. <br><br>

    <strong> Amigo espinoso </strong> <br>
    Una vez por dia puede sin gastar accion y en cualquier momento hacer que su druida vinculado, le aparezcan puas por todo 
    su cuerpo hiriendo a los que esten cerca de 1 metro con 2d6 y dandole una armadura temporal de 10 `,
    ataque: "Mordida +1", daño: "1D6", dureza: "3", alcance: "1"
},

{ 
    nombre: "Tiburon Unicornio",
    bioma: "Costa",
    terreno: "Agua",
    tipo: "Exploracion",
    tamaño: "10",
    armadura: "0",
    Destreza: "-1", Precision: "-1", pelea: "3", percepcion: "3", comunicacion: "-1",
    fuerza: "4", voluntad: "1", constitucion: "0", Instinto: "-1",
    enfoques: "Nadar x2, Oler", 
    Habilidades: `Detector de sangre (100m). gastando 2 de nur puede aparecer al lado de su druida en aluna superficie de agua en hasta 1km. mas 5 para encontrar criaturas asustadas`,
    ataque: "mordida +1/ tope", daño: "2D6/3D6", dureza: "5", alcance: "1"
},

{ 
    nombre: "Serpiente Manchada",
    bioma: "Desierto",
    terreno: "Tierra",
    tipo: "Ataque",
    tamaño: "10",
    armadura: "10",
    Destreza: "2", Precision: "0", pelea: "3", percepcion: "0", comunicacion: "-1",
    fuerza: "2", voluntad: "-2", constitucion: "1", Instinto: "-1",
    enfoques: "Arte marcial, Escapismo", 
    Habilidades: `Relanza ataques del druida vinculado, puede tragar aliados/enemigos (3 turnos sin daño)`,
    ataque: "mordidas +4", daño: "2D6", dureza: "5", alcance: "1"
},

{ 
    nombre: "Felino Montes",
    bioma: "Montaña",
    terreno: "Tierra",
    tipo: "Exploracion",
    tamaño: "7",
    armadura: "5",
    Destreza: "0", Precision: "0", pelea: "1", percepcion: "5", comunicacion: "-2",
    fuerza: "2", voluntad: "2", constitucion: "-1", Instinto: "3",
    enfoques: "Ver, Alerta, magica (percep.) ", 
    Habilidades: `
    <strong> Robar nur </strong> <br>
    Puedes absorber el nur. voluntad vs voluntad y recargarse de nur con un 1d6, 
    nur que podra enviar a su druida o incrementar el daño de otra bestia en un 1d3 por dado ganado <br><br>

    <strong> Mirada felina </strong> <br>
    Mas 3 para agradar con comunicación<br><br>
    
    <strong> Rastreo nur</strong> <br>
    Puedes rastrear los restos de nur producidos por un hechizo, o talento o habilidad donde se uso nur
    hasta en tirada de percepcion/magica x metros 
        `,
    ataque: "Garras +4", daño: "1D6", dureza: "3", alcance: "1"
},

{ 
    nombre: "Oso Montes",
    bioma: "Montaña",
    terreno: "Tierra",
    tipo: "Tanque",
    tamaño: "15",
    armadura: "17",
    Destreza: "0", Precision: "-1", pelea: "1", percepcion: "4", comunicacion: "-1",
    fuerza: "3", voluntad: "3", constitucion: "2", Instinto: "-2",
    enfoques: "Aguante, Vida", 
    Habilidades: `
    <strong> Montura magica. </strong> 
    <br> Tamaño 15. <br><br>
    
    <strong> Resistencia magica </strong> <br>
    resistente a magia, recibe la mitad del daño <br><br>
    
    <strong> Gruñido de oso </strong> <br>
    Mas 3 para intimidar con comunicación<br><br>

    <strong> Oso camilla </strong> Rango 7. <br>
    Una vez por dia el oso podrá llevar 50 de tamaño adicionales muy heridos (solo 1 sexto de vida) o 
    inconscientes y huir o simplemente llevarlos por 20 minutos, sin importar que superen su aguante, 
    pero luego de eso el oso necesitara media hora para descansar`,

    ataque: "Garras", daño: "2D6", dureza: "5", alcance: "1"
},
{ 
    nombre: "Mono albino",
    bioma: "Bosque",
    terreno: "Tierra",
    tipo: "Ataque",
    tamaño: "5",
    armadura: "0",
    Destreza: "3", Precision: "-1", pelea: "4", percepcion: "0", comunicacion: "0",
    fuerza: "2", voluntad: "-1", constitucion: "1", Instinto: "-2",
    enfoques: "Artes marciales", 
    Habilidades: `
    <strong> Cola de mono </strong> <br>
    Una vez al dia usando su cola puede repetir un ataque fallido y hacer un ataque extra con la misma.<br><br>
    
    <strong> Puños de nur </strong> Rango 7. <br>
    Puede hacer daño magico, y gastando 2 de nur hacer que su golpe se extienda por 3 metros`,
    ataque: "puños +3", daño: "3d6", dureza: "3", alcance: "1"
  },

  { 
    nombre: "Oso hormiguero verde",
    bioma: "Bosque",
    terreno: "Tierra",
    tipo: "Rara",
    tamaño: "5",
    armadura: "15",
    Destreza: "2", Precision: "4", pelea: "-1", percepcion: "3", comunicacion: "0",
    fuerza: "1", voluntad: "1", constitucion: "-1", Instinto: "-2",
    enfoques: "Oler", 
    Habilidades: `
    <strong> Lengua excavadora </strong> <br> Puede lanzar su lengua por el suelo y atacar a alguien desde la tierra o el agua hasta una distancia de 5 metros, 
    el ataque de la lengua será oculto destreza + 2 para evitar que se descubra, <br><br>

    <strong> Lengua de nur </strong> <br>
    el oso hormiguero se podrá conectar a su druida vinculado, 
    y transferir  en su lengua cualquier hechizo donde se use nur`,

    ataque: "Garras +1 / lengua", daño: "2D6 / 1D6", dureza: "5/2", alcance: "1/5"
  },

  { 
    nombre: "Rana dorada",
    bioma: "Costa",
    terreno: "Agua",
    tipo: "Curandera",
    tamaño: "5",
    armadura: "0",
    Destreza: "3", Precision: "0", pelea: "1", percepcion: "2", comunicacion: "1",
    fuerza: "0", voluntad: "-1", constitucion: "-2", Instinto: "4",
    enfoques: "Nadar, Curación, Huir", 
    Habilidades: `
    Puedes absorber el nur. Voluntad vs voluntad y recargarse
     de nur con un 1d6.
    El nur podrá enviarse a su druida o incrementar el daño de otra bestia
    en un 1d3 por dado ganado.
  `,
    ataque: "+1", daño: "1D6", dureza: "0", alcance: "1"
  },

  { 
    nombre: "Escarabajo amarillo",
    bioma: "Costa",
    terreno: "Tierra y viento",
    tipo: "Rara",
    tamaño: "3",
    armadura: "30",
    Destreza: "0", Precision: "-1", pelea: "-1", percepcion: "1", comunicacion: "0",
    fuerza: "2", voluntad: "4", constitucion: "3", Instinto: "-2",
    enfoques: "", 
    Habilidades: `Infecta con hongos al contacto, daño 3D6 de forma inmediata, una vez por día, veneno rango 2. <br> 
    Gastando 5 de nur puede hacer una explosion de 1m haciendo 4d6 de daño dif 15 para esquivar`,
    ataque: "+1", daño: "1D6", dureza: "5", alcance: "1"
  },

  { 
    nombre: "Pulpo cíclope",
    bioma: "Costa",
    terreno: "Agua",
    tipo: "Estratégico",
    tamaño: "3",
    armadura: "0",
    Destreza: "0", Precision: "0", pelea: "-1", percepcion: "2", comunicacion: "1",
    fuerza: "1", voluntad: "3", constitucion: "-1", Instinto: "4",
    enfoques: "Conocimiento espiritual, Nadar, Sumergirse", 
    Habilidades: `Puede restaurar una poción una vez (pierde efecto original)`,
    ataque: "Latigo +1", daño: "1D6", dureza: "4", alcance: "1"
  },

  { 
    nombre: "Cangrejo jaula",
    bioma: "Costa",
    terreno: "Tierra",
    tipo: "Rara",
    tamaño: "5",
    armadura: "10",
    Destreza: "0", Precision: "-1", pelea: "1", percepcion: "1", comunicacion: "0",
    fuerza: "2", voluntad: "3", constitucion: "4", Instinto: "-2",
    enfoques: "Aguante de carga (constitución) Coraje (Voluntad)", 
    Habilidades: `<strong> Caja fuerte portátil </strong> <br> El cangrejo llevara en su espalda un caparazón donde podrá guardarse cualquier objeto, 
    asi mismo podrá duplicar su caparazón para tener una salida de emergencia si decide esconder el objeto que tenga en el otro caparazón <br> <br> 
    <strong> Reaccion acorazada </strong> <br> Gastando 5 de nur y sin contar como accion el cangrejo puede invocar y encerrar en un caparazon de tamaño 10, de 30 de vida de forma voluntaria a objetivos en 5 metros`,

    ataque: "+1", daño: "1D6", dureza: "6", alcance: "1"
  },

{ 
    nombre: "Cangrejo espinoso",
    bioma: "Costa",
    terreno: "Tierra",
    tipo: "Tanque",
    tamaño: "15",
    armadura: "20",
    Destreza: "-1", Precision: "-2", pelea: "2", percepcion: "-1", comunicacion: "-1",
    fuerza: "4", voluntad: "2", constitucion: "4", Instinto: "-2",
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
    Destreza: "3", Precision: "-1", pelea: "-1", percepcion: "2", comunicacion: "1",
    fuerza: "0", voluntad: "0", constitucion: "-2", Instinto: "5",
    enfoques: "Orientarse, Artesania, Forrajear", 
    Habilidades: `Puede crear y reparar objetos en plano físico y espiritual (+5 artesanía)`,
    ataque: "+1", daño: "1D6", dureza: "3", alcance: "1"
  },

  { 
    nombre: "Medusa eléctrica",
    bioma: "Costa",
    terreno: "Agua",
    tipo: "Ataque",
    tamaño: "3",
    armadura: "0",
    Destreza: "-1", Precision: "-1", pelea: "0", percepcion: "2", comunicacion: "-1",
    fuerza: "0", voluntad: "3", constitucion: "-2", Instinto: "4",
    enfoques: "Nadar, Rayo", 
    Habilidades: `Ataque eléctrico a 10m, daño 2D6 + Instinto, coste -2 nur El alcance del 
    rayo puede aumentar 4 metros y agregar un objetivo mas gracias al agua`,
    ataque: "+1", daño: "1D6", dureza: "2", alcance: "1"
  },
{ 
    nombre: "Lagarto de trueno",
    bioma: "Desierto",
    terreno: "Tierra",
    tipo: "Ataque",
    tamaño: "10",
    armadura: "15",
    Destreza: "4", Precision: "1", pelea: "2", percepcion: "-1", comunicacion: "-2",
    fuerza: "1", voluntad: "1", constitucion: "0", Instinto: "3",
    enfoques: "Iniciativa, Velocidad", 
    Habilidades: `Puede lanzar un rayo en una distancia de 7 metros con daño de 1D6 -2 nur encadenando hasta 2 objetivos en 2 metros. sin acción una vez por turno.`,
    ataque: "+3", daño: "1D6", dureza: "4", alcance: "1"
  },

  { 
    nombre: "Boa espinosa",
    bioma: "Desierto",
    terreno: "Tierra",
    tipo: "Rara",
    tamaño: "5",
    armadura: "0",
    Destreza: "-1", Precision: "0", pelea: "0", percepcion: "1", comunicacion: "0",
    fuerza: "2", voluntad: "3", constitucion: "3", Instinto: "0",
    enfoques: "", 
    Habilidades: `
    <strong> prision serpentina </strong> <br>
    Aprisiona enemigos y los paraliza (3D6 min). Dificultad basada en fuerza (+6 menor rango, +4 igual, +3 mayor) <br><br> 
    
    <strong> prision de hechizos </strong> <br>
    Gastando 4 de nur puede sellar en su cuerpo un hechizo de alguna victima que atrape por un 1d3 turnos lanzando instinto vs voluntad de la victima <br><br> 

    <strong> prision de bestias </strong> <br>
    Gastando 4 de nur puede sellar en su cuerpo una bestia de hasta maximo el tamaño de la bestia mas 5 por un 1d3 turnos lanzando instinto vs voluntad de la victima `,
    ataque: "+1", daño: "1D6", dureza: "4", alcance: "1"
  },

  { 
    nombre: "Camaleón triclope",
    bioma: "Desierto",
    terreno: "Tierra",
    tipo: "Sigilo",
    tamaño: "3",
    armadura: "5",
    Destreza: "4", Precision: "1", pelea: "-1", percepcion: "3", comunicacion: "1",
    fuerza: "-1", voluntad: "1", constitucion: "-2", Instinto: "2",
    enfoques: "Sigilo, Juego de manos", 
    Habilidades: `
    <strong> Invisible </strong> <br> 
    gastando 2 de nur se puede volver invisible 1D6 turnos (dif 20 detectarlo). <br><br>

    <strong> Lenguetazo </strong> <br> 
    Puede atacar con su lengua hasta 3 metros 1d6 de daño o agarrar objetos con ella.<br><br>

    <strong> Amigo invisible </strong>  Rango 7<br>
    Puede hacerse invisible con su druida vinculado (1 vez/día)`,
    ataque: "+1", daño: "1D6", dureza: "2", alcance: "1"
  },

  { 
    nombre: "Cóndor tricolor",
    bioma: "Desierto",
    terreno: "Viento",
    tipo: "Montura",
    tamaño: "15",
    armadura: "0",
    Destreza: "4", Precision: "0", pelea: "-1", percepcion: "3", comunicacion: "0",
    fuerza: "2", voluntad: "0", constitucion: "0", Instinto: "-1",
    enfoques: "Volar, Huir, Olor", 
    Habilidades: `
    <strong> Montura aérea. </strong> <br> Tamaño 15. <br><br>

    <strong> Alas de gloria </strong> <br> 
    El condor con sus alas puede generar un aura a su druida vinculado que le ayudara en tiradas sociales 
    con ambitos persuasivos con un mas 3 en comunicación.<br><br>

    <strong>Anticaidas</strong> Rango 7 <br> 
    Antes de caer al suelo desde grandes alturas la bestia podrá detenerse en el aire y aterrizar sin importar si esta inconsciente o no. 
    si cae en el agua flotara por unos minutos, si cae en la lava o algún lugar peligroso será invulnerable a ese daño por 2 minutos/ 3 turnos`,
    ataque: "Garras +1", daño: "1D6", dureza: "3", alcance: "1"
  },

  { 
    nombre: "Rana blanca",
    bioma: "Montaña",
    terreno: "Tierra",
    tipo: "Clima",
    tamaño: "3",
    armadura: "0",
    Destreza: "1", Precision: "0", pelea: "-2", percepcion: "4", comunicacion: "-1",
    fuerza: "1", voluntad: "2", constitucion: "3", Instinto: "3",
    enfoques: "Rastrear, Clima, Nadar", 
    Habilidades: `Detecta clima futuro (5h). Hace inmune a clima por 1D6 turnos (1 vez/día)`,
    ataque: "-1", daño: "1D6", dureza: "2", alcance: "1"
  },

  { 
    nombre: "Topo de 4 brazos",
    bioma: "Montaña",
    terreno: "Tierra",
    tipo: "Rara",
    tamaño: "3",
    armadura: "0",
    Destreza: "-1", Precision: "0", pelea: "-1", percepcion: "1", comunicacion: "0",
    fuerza: "2", voluntad: "3", constitucion: "4", Instinto: "-2",
    enfoques: "Excavar, Huir", 
    Habilidades: `Viaja bajo tierra, ataques sorpresa: +4D6 (desprevenido), +2D6 (alerta), +1D6 (guardia) `,
    ataque: "+1", daño: "1D6", dureza: "5", alcance: "1"
  },

  { 
    nombre: "Salamandra de dos colas",
    bioma: "Montaña",
    terreno: "Tierra",
    tipo: "Rara",
    tamaño: "5",
    armadura: "0",
    Destreza: "0", Precision: "-1", pelea: "2", percepcion: "1", comunicacion: "0",
    fuerza: "0", voluntad: "4", constitucion: "2", Instinto: "-2",
    enfoques: "Lanzar, Herbolaria", 
    Habilidades: `Escupe veneno: 4D6 inicial + 1D6 continuo (1 vez por combate). 
    Su estomago puede ser usado como caldero de espacio 3, cada vez que aumenta de tamaño aumenta su caldero en 2`,
    ataque: "+1", daño: "1D6", dureza: "2", alcance: "1"
  },

  { 
    nombre: "Lechuza de 4 alas",
    bioma: "Montaña",
    terreno: "Viento",
    tipo: "Exploración",
    tamaño: "5",
    armadura: "0",
    Destreza: "2", Precision: "-1", pelea: "0", percepcion: "2", comunicacion: "2",
    fuerza: "0", voluntad: "-1", constitucion: "0", Instinto: "3",
    enfoques: "Sigilo (Destreza), Volar (Destreza)", 
    Habilidades: ` 
    <strong> Espia nocturno </strong> <br> 
    De noche se vuelve invisible (1D3 horas). Detectarla requiere tirada dificultad 20 <br> <br> 

    <strong> Mirada de vigia </strong> <br> 
    LA bestia le puede ayudar a su druida vinculado a detectar si alguien miente o conocer sus intensiones
    con +3 a percepción <br> <br> 

    <strong> Manto del silencio </strong> <br> 
    puede colocar un manto sobre su druida vinculado para que la misma lechuza haga 
    las tiradas de sigilo por el, la lechiza debe estar con el`,
    ataque: "Garras +1", daño: "1D6", dureza: "2", alcance: "1"
  }  

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

    let texto = buscador.value.toLowerCase();

    if (contenedorBestias) {

        // 🔥 SI ESTÁ VACÍO → NO MOSTRAR NADA (solo en escenas)
        if (texto === "" && !esPaginaBestias) {
            contenedorBestias.innerHTML = "";
            return;
        }

        let resultado = bestias.filter(function(bestia){
            return bestia.nombre.toLowerCase().includes(texto);
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
