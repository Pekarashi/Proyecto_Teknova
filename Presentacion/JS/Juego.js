// MAPA DE RECINTOS Y PUNTAJE
// Aquí definimos cada recinto del tablero y los puntos que vale al colocar un dinosaurio.
var mapa = {
  // Bosque de la Igualdad
  "recinto-a": 2,
  "recinto-b": 10,
  "recinto-c": 4,
  "recinto-d": 18,
  "recinto-e": 8,
  "recinto-f": 20,

  // Trío Frondoso
  "recinto-g": 1,
  "recinto-h": 3,
  "recinto-i": 3,

  // Pradera del Amor
  "recinto-j": 2.5,
  "recinto-k": 2.5,
  "recinto-l": 2.5,
  "recinto-m": 2.5,
  "recinto-n": 2.5,
  "recinto-o": 2.5,

  // Río (se permiten múltiples dinosaurios)
  "espacio-4": 1,
  "espacio-5": 1,
  "espacio-6": 1,

  // Rey de la Selva
  "recinto-p": 7,

  // Pradera de las Diferencias
  "recinto-q": 1,
  "recinto-r": 10,
  "recinto-s": 3,
  "recinto-t": 18,
  "recinto-u": 8,
  "recinto-v": 20,

  // Isla Solitaria
  "recinto-w": 7
};

// Variable global de puntos del jugador
var puntos = 0;

// Variable para almacenar el dinosaurio actualmente seleccionado
var dinoSeleccionado = null;

// FUNCIÓN PARA MOSTRAR LOS PUNTOS EN PANTALLA
function mostrarPuntos() {
  var puntosElemento = document.querySelector(".DinoPuntos");
  if (puntosElemento) {
    puntosElemento.textContent = "PUNTOS: " + puntos; // Actualiza el texto con los puntos actuales
  }
}

// SELECCIONAR TODOS LOS RECINTOS DEL TABLERO
var recintos = document.querySelectorAll(".Buscarecinto");

// AGREGAR EVENTO A CADA RECINTO PARA COLOCAR UN DINOSAURIO
recintos.forEach(function(recinto) {
  recinto.addEventListener("click", function() {
    // Si no hay dinosaurio seleccionado, no hace nada
    if (!dinoSeleccionado) return;

    const tieneDino = recinto.children.length > 0; // ¿Ya hay un dinosaurio?
    const recintosMultiples = ["espacio-4", "espacio-5", "espacio-6"]; // Recintos que permiten varios dinos
    const esMultiple = recintosMultiples.some(clase => recinto.classList.contains(clase));

    // Solo se coloca si no hay dino o es un recinto múltiple
    if (!tieneDino || esMultiple) {
      recinto.appendChild(dinoSeleccionado); // Mueve el dinosaurio al recinto
      dinoSeleccionado.classList.remove("dino-seleccionado"); // Quita la selección visual

      // Sumar puntos según el recinto
      for (const key in mapa) {
        if (recinto.classList.contains(key)) {
          puntos += mapa[key];
          break;
        }
      }

      mostrarPuntos(); // Actualiza los puntos en pantalla
      dinoSeleccionado = null; // Resetea el dino seleccionado
    } else {
      alert("Este recinto ya tiene un dinosaurio"); 
    }
  });
});

// DADO DE IMÁGENES
const dado = document.getElementById("dado"); // Elemento del dado
const imagenesDado = [
  "https://i.imgur.com/aejOyBz.png",
  "https://i.imgur.com/J62cPcN.png",
  "https://i.imgur.com/Wv4kiqA.png",
  "https://i.imgur.com/YR2y6EB.png",
  "https://i.imgur.com/BC6AkWf.png",
  "https://i.imgur.com/3Fx3gf0.png"
];

// FUNCIÓN PARA TIRAR EL DADO (elige aleatoriamente una imagen)
function tirarDado() {
  const random = Math.floor(Math.random() * 6); 
  dado.innerHTML = `<img src="${imagenesDado[random]}" alt="cara del dado">`;
}

// AGREGAR EVENTO PARA EL DADO
if (dado) {
  dado.addEventListener("click", tirarDado);
}

// Mostrar puntos al cargar la página
mostrarPuntos();

console.log("Juego.js cargado correctamente");

// 🔹 ABRIR / CERRAR EL DIALOG DE DINOSAURIOS
const toggleDinos = document.getElementById("toggleDinos"); // Imagen o botón para abrir el dialog
const toggleDinos2 = document.getElementById("toggleDinos2"); // Dialog con lista de dinos
const btnCerrar = document.getElementById("cerrar"); // Botón de cerrar

// ABRIR EL DIALOG AL HACER CLIC
if (toggleDinos && toggleDinos2) {
  toggleDinos.addEventListener("click", function() {
    toggleDinos2.style.display = "flex"; // Mostrar dialog como flex
  });
}

// CERRAR EL DIALOG AL HACER CLIC EN "X"
if (btnCerrar && toggleDinos2) {
  btnCerrar.addEventListener("click", function(e) {
    e.preventDefault();
    toggleDinos2.style.display = "none"; // Ocultar dialog
  });
}

// 🔹 SELECCIONAR UN DINOSAURIO
var dinos = document.querySelectorAll(".Dinos"); // Todos los dinos disponibles
dinos.forEach(function(dino) {
  dino.addEventListener("click", function() {
    dinos.forEach(d => d.classList.remove("dino-seleccionado")); // Quitar selección previa
    this.classList.add("dino-seleccionado"); // Agregar selección al clic
    dinoSeleccionado = this; // Guardar dino seleccionado
    console.log("Dinosaurio seleccionado con ID:", this.dataset.id);
  });
});
