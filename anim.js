// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "¿Que cómo supe que eras tú?", time: 18 },
  { text: "Fue al cruzar nuestras miradas", time: 23 },
  { text: "Algo especial, causaste en mí", time: 28 },
  { text: "No te lo puedo describir", time: 30 },
  { text: "Pero sé que se me notaba", time: 32 },
  { text: "Y sin buscarte, te encontré", time: 37 },
  { text: "Supe que eras mi destino", time: 41 },
  { text: "No sé ni cómo me acerqué", time: 46 },
  { text: "Fuiste un imán y a ti llegué", time: 48 },
  { text: "Y me sentí correspondido", time: 51 },
  { text: "Y es que eres tú", time: 56 },
  { text: "La mujer que yo soñaba", time: 60 },
  { text: "Que algún día me acompañara", time: 64 },
  { text: "Y poderla presumir", time: 67 },
  { text: "Sí, sí eres tú", time: 72 },
  { text: "La mitad que me faltaba", time: 76 },
  { text: "Mi alma, traes enamorada", time: 81 },
  { text: "No pienso dejarte ir", time: 84 },
  { text: "Acompáñame en mi viaje", time: 88 },
  { text: "Aquí, amor no va a faltarte", time: 90 },
  { text: "Yo, contigo, soy feliz", time: 94 },
  { text: "Ahí te va, mi chula", time: 100 },
  { text: "Los Parras", time: 104 },
  { text: "Y es que eres tú", time: 117 },
  { text: "La mujer que yo soñaba", time: 121 },
  { text: "Que algún día me acompañara", time: 125 },
  { text: "Y poderla presumir", time: 128 },
  { text: "Sí, sí eres tú", time: 132 },
  { text: "La mitad que me faltaba", time: 137 },
  { text: "Mi alma, traes enamorada", time: 142 },
  { text: "No pienso dejarte ir", time: 144 },
  { text: "Acompáñame en mi viaje", time: 149 },
  { text: "Aquí, amor no va a faltarte", time: 152 },
  { text: "Yo, contigo, soy feliz", time: 154 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 3
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);