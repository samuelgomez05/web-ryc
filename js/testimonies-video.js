/* SCRIPT QUE ACTIVA EL VIDEO */
// Obtenemos tanto el boton y el video
const play = document.querySelector("#btn-video-testimonies");
const video = document.querySelector("#video-testimonies");

// Cuando pulsemos el boton
play.addEventListener("click", function() {
  // Reproducimos el video
  video.play();

  // Ocultamos el boton play
  play.style.display = "none";

  // Le damos al video el atributo controls
  video.setAttribute("controls", true);
});