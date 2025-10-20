/**
 * Juego.js
 * Controla la lógica principal del modo solitario de Draftosaurus.
 * Maneja el tablero, recintos, puntajes y colocación de dinosaurios.
 * Usa window.dinoSeleccionado para mantener compatibilidad con mostrar_dinosaurios_solitario.js.
 */

/** ==========================
 * MAPA DE RECINTOS Y PUNTAJES
 * Cada recinto tiene un valor base de puntos.
========================== */
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

/** ==========================
 * VARIABLES GLOBALES
========================== */
var puntos = 0;                /** Puntos totales del jugador */
window.dinoSeleccionado = null;/** Dino seleccionado (compartido con mostrar_dinosaurios_solitario.js) */
var recintosDinos = {};        /** Guarda qué dinos hay en cada recinto */
var puntosTrioFrondoso = 0;    /** Controla que el Trío Frondoso no sume doble */
var parejasAmorActuales = 0;   /** Controla las parejas actuales de la Pradera del Amor */

/** ==========================
 * FUNCIÓN: mostrarPuntos()
 * Actualiza el puntaje en pantalla.
========================== */
function mostrarPuntos() {
  var puntosElemento = document.querySelector(".DinoPuntos");
  if (puntosElemento) {
    puntosElemento.textContent = "PUNTOS: " + puntos;
  }
}

/** ==========================
 * DADO DE IMÁGENES
 * Genera una cara aleatoria al hacer clic.
========================== */
const dado = document.getElementById("dado");
const imagenesDado = [
  "https://i.imgur.com/aejOyBz.png",
  "https://i.imgur.com/J62cPcN.png",
  "https://i.imgur.com/Wv4kiqA.png",
  "https://i.imgur.com/YR2y6EB.png",
  "https://i.imgur.com/BC6AkWf.png",
  "https://i.imgur.com/3Fx3gf0.png"
];

/** Función para tirar el dado */
function tirarDado() {
  const random = Math.floor(Math.random() * 6);
  dado.innerHTML = `<img src="${imagenesDado[random]}" alt="cara del dado">`;
}

/** Evento click del dado */
if (dado) dado.addEventListener("click", tirarDado);

/** ==========================
 * DIALOG DE DINOSAURIOS
 * Permite abrir y cerrar la ventana de selección.
========================== */
const toggleDinos = document.getElementById("toggleDinos");
const toggleDinos2 = document.getElementById("toggleDinos2");
const btnCerrar = document.getElementById("cerrar");

/** Abrir ventana de dinos */
if (toggleDinos && toggleDinos2) {
  toggleDinos.addEventListener("click", function() {
    toggleDinos2.style.display = "flex";
  });
}

/** Cerrar ventana de dinos */
if (btnCerrar && toggleDinos2) {
  btnCerrar.addEventListener("click", function(e) {
    e.preventDefault();
    toggleDinos2.style.display = "none";
  });
}

/** ==========================
 * SELECCIÓN DE DINOSAURIOS
 * Marca cuál fue clickeado para colocar.
========================== */
var dinos = document.querySelectorAll("#listaDinos .Dinos, #listaDinos2 .Dinos");

dinos.forEach(function(dino) {
  dino.addEventListener("click", function() {
    dinos.forEach(d => d.classList.remove("dino-seleccionado"));
    this.classList.add("dino-seleccionado");
    window.dinoSeleccionado = this;
    console.log("Dinosaurio seleccionado:", this.dataset.nombre);
  });
});

/** ==========================
 * COLOCACIÓN DE DINOSAURIOS EN RECINTOS
 * Aplica las reglas de cada zona del tablero.
========================== */
var recintos = document.querySelectorAll(".Buscarecinto");

recintos.forEach(function(recinto) {
  recinto.addEventListener("click", function() {
    /** Si no hay dino seleccionado, no hace nada */
    if (!window.dinoSeleccionado) return;

    /** Detecta la clase del recinto (recinto-x o espacio-x) */
    var recintoClase = Array.from(recinto.classList)
      .find(c => c.startsWith("recinto") || c.startsWith("espacio"));
    if (!recintoClase) return;

    if (!recintosDinos[recintoClase]) recintosDinos[recintoClase] = [];

    const nombreDino = window.dinoSeleccionado.dataset.nombre;

    // Definir recintos por zonas
    const bosque = ["recinto-a","recinto-b","recinto-c","recinto-d","recinto-e","recinto-f"];
    const trioFrondoso = ["recinto-g", "recinto-h", "recinto-i"];
    const praderaAmor = ["recinto-j","recinto-k","recinto-l","recinto-m","recinto-n","recinto-o"];
    const praderaDiferencias = ["recinto-q","recinto-r","recinto-s","recinto-t","recinto-u","recinto-v"];
    const recintoRey = ["recinto-p"];
    const recintoIsla = ["recinto-w"];

    /** ---------------- BOSQUE DE LA IGUALDAD ---------------- */
    if (bosque.includes(recintoClase)) {
      let tipoExistente = null;
      bosque.forEach(c => {
        const dinoEnRecinto = document.querySelector(`.${c} .Dinos`);
        if (dinoEnRecinto) tipoExistente = dinoEnRecinto.dataset.nombre;
      });
      if (tipoExistente && nombreDino !== tipoExistente) {
        alert("En el Bosque de la Igualdad solo puedes colocar dinosaurios del mismo tipo que los ya colocados.");
        return;
      }

      recinto.appendChild(window.dinoSeleccionado);
      recintosDinos[recintoClase].push(window.dinoSeleccionado);
      window.dinoSeleccionado.classList.remove("dino-seleccionado");
      window.dinoSeleccionado = null;
      puntos += mapa[recintoClase] || 0;
      mostrarPuntos();
      return;
    }

    /** ---------------- TRÍO FRONDOSO ---------------- */
    if (trioFrondoso.includes(recintoClase)) {
      recinto.appendChild(window.dinoSeleccionado);
      recintosDinos[recintoClase].push(window.dinoSeleccionado);
      window.dinoSeleccionado.classList.remove("dino-seleccionado");
      window.dinoSeleccionado = null;

      let totalTrio = 0;
      trioFrondoso.forEach(c => totalTrio += document.querySelectorAll(`.${c} .Dinos`).length);

      if (totalTrio === 3 && puntosTrioFrondoso === 0) {
        puntosTrioFrondoso = trioFrondoso.reduce((acc, c) => acc + (mapa[c] || 0), 0);
        puntos += puntosTrioFrondoso;
      }

      mostrarPuntos();
      return;
    }

    /** ---------------- PRADERA DEL AMOR ---------------- */
    if (praderaAmor.includes(recintoClase)) {
      let dinosPradera = [];
      praderaAmor.forEach(c => {
        const dinoEnRecinto = document.querySelector(`.${c} .Dinos`);
        if (dinoEnRecinto) dinosPradera.push(dinoEnRecinto.dataset.nombre);
      });

      let parejas = {};
      dinosPradera.forEach(n => parejas[n] = (parejas[n] || 0) + 1);
      let cantidadParejas = Object.values(parejas).filter(v => v === 2).length;

      if (cantidadParejas >= 3) {
        alert("Ya hay 3 parejas completas en la Pradera del Amor. No puedes colocar más dinosaurios de este tipo.");
        return;
      }
      if ((parejas[nombreDino] || 0) >= 2) {
        alert("Solo puedes tener máximo 2 dinosaurios del mismo tipo por pareja en la Pradera del Amor.");
        return;
      }

      recinto.appendChild(window.dinoSeleccionado);
      recintosDinos[recintoClase].push(window.dinoSeleccionado);
      window.dinoSeleccionado.classList.remove("dino-seleccionado");
      window.dinoSeleccionado = null;

      // Recalcular parejas
      dinosPradera = [];
      praderaAmor.forEach(c => {
        const dinoEnRecinto = document.querySelector(`.${c} .Dinos`);
        if (dinoEnRecinto) dinosPradera.push(dinoEnRecinto.dataset.nombre);
      });

      parejas = {};
      dinosPradera.forEach(n => parejas[n] = (parejas[n] || 0) + 1);
      let nuevasParejas = Object.values(parejas).filter(v => v === 2).length;
      if (nuevasParejas > cantidadParejas) puntos += 5;

      mostrarPuntos();
      return;
    }

    /** ---------------- PRADERA DE LAS DIFERENCIAS ---------------- */
    if (praderaDiferencias.includes(recintoClase)) {
      let tiposColocados = [];
      praderaDiferencias.forEach(c => {
        const dinoEnRecinto = document.querySelector(`.${c} .Dinos`);
        if (dinoEnRecinto) tiposColocados.push(dinoEnRecinto.dataset.nombre);
      });

      if (tiposColocados.includes(nombreDino)) {
        alert("En la Pradera de las Diferencias no puedes repetir el mismo tipo de dinosaurio.");
        return;
      }

      recinto.appendChild(window.dinoSeleccionado);
      recintosDinos[recintoClase].push(window.dinoSeleccionado);
      window.dinoSeleccionado.classList.remove("dino-seleccionado");
      window.dinoSeleccionado = null;
      puntos += mapa[recintoClase] || 0;
      mostrarPuntos();
      return;
    }

    /** ---------------- REY DE LA SELVA ---------------- */
    if (recintoRey.includes(recintoClase)) {
      const yaTiene = document.querySelector(`.${recintoClase} .Dinos`);
      if (yaTiene) {
        alert("El Rey de la Selva ya tiene un dinosaurio. No puedes colocar otro.");
        return;
      }

      recinto.appendChild(window.dinoSeleccionado);
      recintosDinos[recintoClase].push(window.dinoSeleccionado);
      const tipoRey = nombreDino;
      window.dinoSeleccionado.classList.remove("dino-seleccionado");
      window.dinoSeleccionado = null;

      let conteoPorEspecie = {};
      Object.values(recintosDinos).forEach(arr => arr.forEach(d => {
        const n = d.dataset.nombre;
        conteoPorEspecie[n] = (conteoPorEspecie[n] || 0) + 1;
      }));

      const maxCantidad = Math.max(...Object.values(conteoPorEspecie));
      if (conteoPorEspecie[tipoRey] === maxCantidad) puntos += 7;

      mostrarPuntos();
      return;
    }

    /** ---------------- ISLA SOLITARIA ---------------- */
    if (recintoIsla.includes(recintoClase)) {
      const yaTiene = document.querySelector(`.${recintoClase} .Dinos`);
      if (yaTiene) {
        alert("La Isla Solitaria ya tiene un dinosaurio. No puedes colocar otro.");
        return;
      }

      recinto.appendChild(window.dinoSeleccionado);
      recintosDinos[recintoClase].push(window.dinoSeleccionado);
      const tipoIsla = nombreDino;
      window.dinoSeleccionado.classList.remove("dino-seleccionado");
      window.dinoSeleccionado = null;

      let conteoPorEspecie = {};
      Object.values(recintosDinos).forEach(arr => arr.forEach(d => {
        const n = d.dataset.nombre;
        conteoPorEspecie[n] = (conteoPorEspecie[n] || 0) + 1;
      }));

      if (conteoPorEspecie[tipoIsla] === 1) puntos += 7;

      mostrarPuntos();
      return;
    }

    /** ---------------- RECINTOS NORMALES ---------------- */
    recinto.appendChild(window.dinoSeleccionado);
    recintosDinos[recintoClase].push(window.dinoSeleccionado);
    window.dinoSeleccionado.classList.remove("dino-seleccionado");
    window.dinoSeleccionado = null;
    puntos += mapa[recintoClase] || 0;
    mostrarPuntos();
  });
});

/** ==========================
 * MOSTRAR PUNTAJE INICIAL
========================== */
mostrarPuntos();
console.log("Juego.js cargado correctamente");
