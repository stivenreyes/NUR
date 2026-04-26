const imagenes = [
  "Imagenes/111.png",
  "Imagenes/222.png",
  "Imagenes/333.png",
  "Imagenes/444.png",
  "Imagenes/555.png",
  "Imagenes/666.png",
  "Imagenes/777.png",
  "Imagenes/888.png",
  "Imagenes/999.png",
  "Imagenes/001.png",
  "Imagenes/002.png"
];

// Función para mezclar (shuffle)
    function mezclarArray(array) {
      return array.sort(() => Math.random() - 0.5);
    }

    let imagenesMezcladas = mezclarArray([...imagenes]);
    let index = 0;

    const imgElement = document.getElementById("imagen");

    // Cuando carga la imagen → fade in
    imgElement.onload = () => {
      imgElement.style.opacity = 1;
    };

    // Cargar primera imagen
    imgElement.src = imagenesMezcladas[0];

    function cambiarImagen() {
      imgElement.style.opacity = 0;

      setTimeout(() => {
        index++;

        // Si se acaban, se vuelven a mezclar
        if (index >= imagenesMezcladas.length) {
          imagenesMezcladas = mezclarArray([...imagenes]);
          index = 0;
        }

        imgElement.src = imagenesMezcladas[index];
      }, 500);
    }

    // Cambia cada 2.5 segundos
    setInterval(cambiarImagen, 2500);





