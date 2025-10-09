// MAPA DE RECINTOS Y PUNTAJE BASE
var mapa = {
  //Bosque de la Igualdad
  "recinto-a": 2,
  "recinto-b": 10,
  "recinto-c": 4,
  "recinto-d": 18,
  "recinto-e": 8,
  "recinto-f": 20,

  //Trío Frondoso
  "recinto-g": 1,
  "recinto-h": 3,
  "recinto-i": 3,

  //Pradera del Amor
  "recinto-j": 2.5,
  "recinto-k": 2.5,
  "recinto-l": 2.5,
  "recinto-m": 2.5,
  "recinto-n": 2.5,
  "recinto-o": 2.5,

  //Río
  "espacio-4": 1,
  "espacio-5": 1,
  "espacio-6": 1,

  //Rey de la Selva
  "recinto-p": 7,

  //Pradera de las Diferencias
  "recinto-q": 1,
  "recinto-r": 10,
  "recinto-s": 3,
  "recinto-t": 18,
  "recinto-u": 8,
  "recinto-v": 20,

  //Isla Solitaria
  "recinto-w": 7
};

// VARIABLES GLOBALES
var puntos = 0;
var dinoSeleccionado = null;
var recintosDinos = {}; // dinos colocados
var puntosTrioFrondoso = 0;


// FUNCIONES DE PUNTAJE
function mostrarPuntos() {
  var puntosElemento = document.querySelector(".DinoPuntos");
  if (puntosElemento) {
    puntosElemento.textContent = "PUNTOS: " + puntos;
  }
}


// DADO DE IMÁGENES 
const dado = document.getElementById("dado");
const imagenesDado = [
  "https://i.imgur.com/aejOyBz.png",
  "https://i.imgur.com/J62cPcN.png",
  "https://i.imgur.com/Wv4kiqA.png",
  "https://i.imgur.com/YR2y6EB.png",
  "https://i.imgur.com/BC6AkWf.png",
  "https://i.imgur.com/3Fx3gf0.png"
];

function tirarDado() {
  const random = Math.floor(Math.random() * 6);
  dado.innerHTML = `<img src="${imagenesDado[random]}" alt="cara del dado">`;
}

if (dado) dado.addEventListener("click", tirarDado);


// DIALOG DE DINOS 
const toggleDinos = document.getElementById("toggleDinos");
const toggleDinos2 = document.getElementById("toggleDinos2");
const btnCerrar = document.getElementById("cerrar");

if (toggleDinos && toggleDinos2) {
  toggleDinos.addEventListener("click", function() {
    toggleDinos2.style.display = "flex";
    tirarDado();
  });
}

if (btnCerrar && toggleDinos2) {
  btnCerrar.addEventListener("click", function(e) {
    e.preventDefault();
    toggleDinos2.style.display = "none";
  });
}

// SELECCIONAR DINOSAURIO
var dinos = document.querySelectorAll("#listaDinos .Dinos, #listaDinos2 .Dinos");
dinos.forEach(function(dino, index) {
  dino.dataset.id = index + 1;
  dino.addEventListener("click", function() {
    dinos.forEach(d => d.classList.remove("dino-seleccionado"));
    this.classList.add("dino-seleccionado");
    dinoSeleccionado = this;
    console.log("Dinosaurio seleccionado ID:", this.dataset.id);
  });
});


// COLOCAR DINOSAURIO Y SUMAR PUNTOS
var recintos = document.querySelectorAll(".Buscarecinto");

recintos.forEach(function(recinto) {
  recinto.addEventListener("click", function() {
    if (!dinoSeleccionado) return;

    var recintoClase = Array.from(recinto.classList).find(c => c.startsWith("recinto") || c.startsWith("espacio"));
    if (!recintoClase) return;

    if (!recintosDinos[recintoClase]) recintosDinos[recintoClase] = [];

    const numeroDino = parseInt(dinoSeleccionado.dataset.id);

    // BOSQUE DE LA IGUALDAD
    const bosque = ["recinto-a","recinto-b","recinto-c","recinto-d","recinto-e","recinto-f"];
    if (bosque.includes(recintoClase)) {
      let tipoExistente = null;
      bosque.forEach(c => {
        const dinoEnRecinto = document.querySelector(`.${c} .Dinos`);
        if(dinoEnRecinto) tipoExistente = dinoEnRecinto.dataset.tipo;
      });

      if(tipoExistente && dinoSeleccionado.dataset.tipo !== tipoExistente){
        recinto.classList.add("bloqueado");
        setTimeout(()=>recinto.classList.remove("bloqueado"), 600);
        alert("Solo se permiten dinosaurios del mismo tipo en el Bosque de la Igualdad");
        return;
      }

      // Colocar dino
      recinto.appendChild(dinoSeleccionado);
      recintosDinos[recintoClase].push(numeroDino);
      dinoSeleccionado.classList.remove("dino-seleccionado");
      dinoSeleccionado = null;
      puntos += mapa[recintoClase] || 0;
      mostrarPuntos();
    }
  });
});

// Inicializa marcador al cargar
mostrarPuntos();
console.log("✅ Juego.js ");
