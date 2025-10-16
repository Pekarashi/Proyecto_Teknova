// DEFINIMOS EL MAPA Y LOS PUNTOS POR RECINTO
var mapa = {
  // Bosque de la Igualdad: cada recinto tiene su puntaje
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

  // Río
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

// VARIABLES GLOBALES
var puntos = 0;                // Guarda los puntos totales del jugador
var dinoSeleccionado = null;   // Guarda qué dinosaurio está seleccionado
var recintosDinos = {};        // Guarda qué dinos hay en cada recinto
var puntosTrioFrondoso = 0;    // Para que el Trío Frondoso no sume dos veces
var parejasAmorActuales = 0;   // Para contar las parejas en Pradera del Amor

// FUNCIONES DE PUNTAJE
function mostrarPuntos() {
  var puntosElemento = document.querySelector(".DinoPuntos"); // Busca el elemento del puntaje
  if (puntosElemento) {
    puntosElemento.textContent = "PUNTOS: " + puntos; // Actualiza el puntaje en pantalla
  }
}

// DADO DE IMÁGENES
const dado = document.getElementById("dado"); // Busca el dado en el HTML
const imagenesDado = [                        // URLs de cada cara del dado
  "https://i.imgur.com/aejOyBz.png",
  "https://i.imgur.com/J62cPcN.png",
  "https://i.imgur.com/Wv4kiqA.png",
  "https://i.imgur.com/YR2y6EB.png",
  "https://i.imgur.com/BC6AkWf.png",
  "https://i.imgur.com/3Fx3gf0.png"
];

// Función para tirar el dado (elige una imagen al azar)
function tirarDado() {
  const random = Math.floor(Math.random() * 6); 
  dado.innerHTML = `<img src="${imagenesDado[random]}" alt="cara del dado">`; // Muestra la imagen
}

// Si el dado existe, agregamos el evento click
if (dado) dado.addEventListener("click", tirarDado);

// DIALOG DE DINOS (ventana para seleccionar dinos)
const toggleDinos = document.getElementById("toggleDinos");   // Botón para abrir ventana
const toggleDinos2 = document.getElementById("toggleDinos2"); // Ventana de dinos
const btnCerrar = document.getElementById("cerrar");          // Botón para cerrar ventana

// Abrir ventana de dinos
if (toggleDinos && toggleDinos2) {
  toggleDinos.addEventListener("click", function() {
    toggleDinos2.style.display = "flex"; // Muestra la ventana
  });
}

// Cerrar ventana de dinos
if (btnCerrar && toggleDinos2) {
  btnCerrar.addEventListener("click", function(e) {
    e.preventDefault();                   // Evita comportamientos por defecto
    toggleDinos2.style.display = "none";  // Oculta la ventana
  });
}

// SELECCIONAR DINOSAURIO
var dinos = document.querySelectorAll("#listaDinos .Dinos, #listaDinos2 .Dinos"); // Todos los dinos

dinos.forEach(function(dino) {
  dino.addEventListener("click", function() {
    dinos.forEach(d => d.classList.remove("dino-seleccionado")); // Quita selección de todos
    this.classList.add("dino-seleccionado");                     // Marca el dino clickeado
    dinoSeleccionado = this;                                     // Guarda cuál está seleccionado
    console.log("Dinosaurio seleccionado");                     // Solo para depurar
  });
});

// COLOCAR DINOSAURIO EN UN RECINTO Y SUMAR PUNTOS
var recintos = document.querySelectorAll(".Buscarecinto"); // Todos los recintos del tablero

recintos.forEach(function(recinto) {
  recinto.addEventListener("click", function() {
    if (!dinoSeleccionado) return; // Si no hay dino seleccionado, no hace nada

    // Busca la clase que identifica el recinto
    var recintoClase = Array.from(recinto.classList)
      .find(c => c.startsWith("recinto") || c.startsWith("espacio"));
    if (!recintoClase) return;

    // Inicializa el arreglo si no existe para este recinto
    if (!recintosDinos[recintoClase]) recintosDinos[recintoClase] = [];

    // BOSQUE DE LA IGUALDAD
    const bosque = ["recinto-a","recinto-b","recinto-c","recinto-d","recinto-e","recinto-f"];
    if (bosque.includes(recintoClase)) {
      let tipoExistente = null;
      bosque.forEach(c => {
        const dinoEnRecinto = document.querySelector(`.${c} .Dinos`);
        if (dinoEnRecinto) tipoExistente = dinoEnRecinto.dataset.tipo; // Toma tipo del dino ya puesto
      });

      // Solo dinos del mismo tipo
      if (tipoExistente && dinoSeleccionado.dataset.tipo !== tipoExistente) return;

      recinto.appendChild(dinoSeleccionado); // Mueve dino al recinto
      recintosDinos[recintoClase].push(dinoSeleccionado); 
      dinoSeleccionado.classList.remove("dino-seleccionado");
      dinoSeleccionado = null;
      puntos += mapa[recintoClase] || 0; // Suma puntos según mapa
      mostrarPuntos();
      return;
    }

    // TRÍO FRONDOSO
    const trioFrondoso = ["recinto-g", "recinto-h", "recinto-i"];
    if (trioFrondoso.includes(recintoClase)) {
      recinto.appendChild(dinoSeleccionado);
      recintosDinos[recintoClase].push(dinoSeleccionado);
      dinoSeleccionado.classList.remove("dino-seleccionado");
      dinoSeleccionado = null;

      // Cuenta cuantos dinos hay en los 3 recintos
      let totalTrio = 0;
      trioFrondoso.forEach(c => {
        totalTrio += document.querySelectorAll(`.${c} .Dinos`).length;
      });

      // Suma puntos solo la primera vez que hay 3 dinos
      if (totalTrio === 3 && puntosTrioFrondoso === 0) {
        puntosTrioFrondoso = trioFrondoso.reduce((acc, c) => acc + (mapa[c] || 0), 0);
        puntos += puntosTrioFrondoso;
      }

      mostrarPuntos();
      return;
    }

    // PRADERA DEL AMOR
    const praderaAmor = ["recinto-j", "recinto-k", "recinto-l", "recinto-m", "recinto-n", "recinto-o"];
    if (praderaAmor.includes(recintoClase)) {
      let dinosPradera = [];
      praderaAmor.forEach(c => {
        const dinoEnRecinto = document.querySelector(`.${c} .Dinos`);
        if (dinoEnRecinto) dinosPradera.push(dinoEnRecinto.dataset.tipo);
      });

      let parejas = {};
      dinosPradera.forEach(tipo => {
        parejas[tipo] = (parejas[tipo] || 0) + 1; // Cuenta cuántos de cada tipo
      });

      let cantidadParejas = Object.values(parejas).filter(v => v === 2).length;

      // Restricciones: máximo 3 parejas y máximo 2 del mismo tipo
      if (cantidadParejas >= 3) return;
      if (parejas[dinoSeleccionado.dataset.tipo] >= 2) return;

      recinto.appendChild(dinoSeleccionado);
      recintosDinos[recintoClase].push(dinoSeleccionado);
      dinoSeleccionado.classList.remove("dino-seleccionado");
      dinoSeleccionado = null;

      // Recalcula parejas y suma 5 puntos si se formó una nueva pareja
      dinosPradera = [];
      praderaAmor.forEach(c => {
        const dinoEnRecinto = document.querySelector(`.${c} .Dinos`);
        if (dinoEnRecinto) dinosPradera.push(dinoEnRecinto.dataset.tipo);
      });

      parejas = {};
      dinosPradera.forEach(tipo => {
        parejas[tipo] = (parejas[tipo] || 0) + 1;
      });

      let nuevasParejas = Object.values(parejas).filter(v => v === 2).length;
      if (nuevasParejas > cantidadParejas) {
        puntos += 5;
      }

      mostrarPuntos();
      return;
    }

    // PRADERA DE LAS DIFERENCIAS
    const praderaDiferencias = ["recinto-q", "recinto-r", "recinto-s", "recinto-t", "recinto-u", "recinto-v"];
    if (praderaDiferencias.includes(recintoClase)) {
      let tiposColocados = [];
      praderaDiferencias.forEach(c => {
        const dinoEnRecinto = document.querySelector(`.${c} .Dinos`);
        if (dinoEnRecinto) tiposColocados.push(dinoEnRecinto.dataset.tipo);
      });

      if (tiposColocados.includes(dinoSeleccionado.dataset.tipo)) return; // No repetir tipo

      recinto.appendChild(dinoSeleccionado);
      recintosDinos[recintoClase].push(dinoSeleccionado);
      dinoSeleccionado.classList.remove("dino-seleccionado");
      dinoSeleccionado = null;
      puntos += mapa[recintoClase] || 0;
      mostrarPuntos();
      return;
    }

        // REY DE LA SELVA
    const recintoRey = ["recinto-p"];
    if (recintoRey.includes(recintoClase)) {
      const yaTiene = document.querySelector(`.${recintoClase} .Dinos`);
      if (yaTiene) return; // Solo permite un dino en este recinto

      recinto.appendChild(dinoSeleccionado);
      recintosDinos[recintoClase].push(dinoSeleccionado);
      const tipoRey = dinoSeleccionado.dataset.tipo;
      dinoSeleccionado.classList.remove("dino-seleccionado");
      dinoSeleccionado = null;

      // Cuenta cuántos dinos hay de cada especie en todos los recintos
      let conteoPorEspecie = {};
      Object.values(recintosDinos).forEach(arr => {
        arr.forEach(d => {
          const tipo = d.dataset.tipo;
          conteoPorEspecie[tipo] = (conteoPorEspecie[tipo] || 0) + 1;
        });
      });

      // Suma puntos si el dino es el más numeroso
      const maxCantidad = Math.max(...Object.values(conteoPorEspecie));
      if (conteoPorEspecie[tipoRey] === maxCantidad) {
        puntos += 7;
      }

      mostrarPuntos();
      return;
    }

    // ISLA SOLITARIA
    const recintoIsla = ["recinto-w"];
    if (recintoIsla.includes(recintoClase)) {
      const yaTiene = document.querySelector(`.${recintoClase} .Dinos`);
      if (yaTiene) return; // Solo un dino permitido

      recinto.appendChild(dinoSeleccionado);
      recintosDinos[recintoClase].push(dinoSeleccionado);
      const tipoIsla = dinoSeleccionado.dataset.tipo;
      dinoSeleccionado.classList.remove("dino-seleccionado");
      dinoSeleccionado = null;

      // Cuenta cuántos dinos hay de cada especie en todos los recintos
      let conteoPorEspecie = {};
      Object.values(recintosDinos).forEach(arr => {
        arr.forEach(d => {
          const tipo = d.dataset.tipo;
          conteoPorEspecie[tipo] = (conteoPorEspecie[tipo] || 0) + 1;
        });
      });

      // Suma 7 puntos si el dino es el único de su especie
      if (conteoPorEspecie[tipoIsla] === 1) {
        puntos += 7;
      }

      mostrarPuntos();
      return;
    }

    // CUALQUIER OTRO RECINTO NORMAL
    recinto.appendChild(dinoSeleccionado);
    recintosDinos[recintoClase].push(dinoSeleccionado);
    dinoSeleccionado.classList.remove("dino-seleccionado");
    dinoSeleccionado = null;
    puntos += mapa[recintoClase] || 0;
    mostrarPuntos();
  });
});

// Mostrar el puntaje inicial al cargar la página
mostrarPuntos();
console.log("Juego.js cargado correctamente");

