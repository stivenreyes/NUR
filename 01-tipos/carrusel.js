const imagenes = [
  "Imagenes/111.png",
  "Imagenes/222.png",
  "Imagenes/333.png",
  "Imagenes/444.png",
  "Imagenes/555.png",
  "Imagenes/666.png"
];

let index = 0;
const imgElement = document.getElementById("imagen");

// 👇 AQUÍ va
imgElement.onload = () => {
  imgElement.style.opacity = 1;
};

// 👇 Cargar primera imagen
imgElement.src = imagenes[0];

function cambiarImagen() {
  imgElement.style.opacity = 0;

  setTimeout(() => {
    index = (index + 1) % imagenes.length;
    imgElement.src = imagenes[index];
  }, 500);
}

// Cambia cada 2.5 segundos
setInterval(cambiarImagen, 2500);