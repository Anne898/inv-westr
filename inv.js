let sound = true;
let fondo = document.getElementById("musicButton");
function musicButton() {
    fondo.src = "images/cancion.mp3";
    if (sound) {
        fondo.volume = 0.7;
        fondo.play();
        sound = false;
    }
    else {
        fondo.pause();
        sound = true;
    }
}


// Función para mantener el botón de música flotando y visible mientras se desplaza
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("musicButton").style.bottom = "10px"; /* Ajusta la posición al desplazarse hacia abajo */
    } else {
        document.getElementById("musicButton").style.bottom = "20px"; /* Restaura la posición original al volver arriba */
    }
}
