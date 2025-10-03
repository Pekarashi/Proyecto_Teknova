
// Tablero como array de recintos // 
let tablero = [
{
    nombre: "Pradera del Amor",
    dinos: [],
    puedeColocar: function(dino) {
    if (this.dinos.length % 2 === 0) {
        return true;
    } else {
        let ultimo = this.dinos[this.dinos.length - 1];
        return ultimo === dino; // necesita ser pareja //
    }
    }
},
    {
    nombre: "Bosque de la Similitud",
    dinos: [],
    puedeColocar: function(dino) {
    if (this.dinos.length === 0) return true;
      return this.dinos[0] === dino; // todos iguales //
    }
},
    {
    nombre: "Prado de las Diferencias",
    dinos: [],
    puedeColocar: function(dino) {
      return !this.dinos.includes(dino); // todos distintos //
    }
},
    {
    nombre: "El Trío Leñoso",
    dinos: [],
    puedeColocar: function(dino) {
      return this.dinos.length < 3; // máximo 3 //
    }
},
    {
    nombre: "Rey de la Jungla",
    dinos: [],
    puedeColocar: function(dino) {
      return this.dinos.length === 0; // solo 1 //
    }
},
    {
    nombre: "Isla Solitaria",
    dinos: [],
    puedeColocar: function(dino) {
      return this.dinos.length === 0; // solo 1 //
    }
},
    {
    nombre: "Río",
    dinos: [],
    puedeColocar: function(dino) {
      return true; // sin reglas //
    }
}
];
// --- FUNCIONES DE LA PARTIDA ---
function colocarDinoEnRecinto(indiceRecinto, dino) {
  const recinto = tablero[indiceRecinto];
  if (recinto.puedeColocar(dino)) {
    recinto.dinos.push(dino);
    actualizarTablero();
    return true;
  }
  return false;
}

function actualizarTablero() {
  tablero.forEach((recinto, index) => {
    const contenedor = document.querySelector(`.recinto-${String.fromCharCode(97 + index)}`);
    if (contenedor) {
      contenedor.innerHTML = ""; // limpia antes de actualizar
      recinto.dinos.forEach(dino => {
        const img = document.createElement("img");
        img.src = dino.url;       // dino.url contiene la imagen real
        img.alt = dino.nombre;    // nombre del dino
        img.classList.add("Dinos");
        contenedor.appendChild(img);
      });
    }
  });
}

// --- LISTA DE DINOS DEL TOGGLE ---
let dinosDisponibles = [
  { nombre: "Dino-1", url: "https://i.imgur.com/hYrkrlG.png" },
  { nombre: "Dino-2", url: "https://i.imgur.com/VimMp4W.png" },
  { nombre: "Dino-3", url: "https://i.imgur.com/tumUHHf.png" },
  { nombre: "Dino-4", url: "https://i.imgur.com/6akD1K2.png" },
  { nombre: "Dino-5", url: "https://i.imgur.com/YR61Aub.png" },
  { nombre: "Dino-6", url: "https://i.imgur.com/z1WjVCw.png" }
];

// --- EVENTO CLICK EN DINOS ---
function inicializarDinosToggle() {
  const listaDinos = document.querySelectorAll("#listaDinos img, #listaDinos2 img");
  listaDinos.forEach((img, index) => {
    img.addEventListener("click", () => {
      const dino = dinosDisponibles[index];
      // intenta colocar en el primer recinto válido
      let colocado = false;
      for (let i = 0; i < tablero.length; i++) {
        if (colocarDinoEnRecinto(i, dino)) {
          colocado = true;
          break;
        }
      }
      if (!colocado) alert(`No se puede colocar ${dino.nombre} en ningún recinto`);
    });
  });
}

// --- INICIALIZAR PARTIDA ---
document.addEventListener("DOMContentLoaded", () => {
  inicializarDinosToggle();
  actualizarTablero();
});