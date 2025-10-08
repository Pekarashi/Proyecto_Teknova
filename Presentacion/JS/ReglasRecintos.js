// Mapa de recintos 
var mapa = {};
mapa["Bosque de la Igualdad"] = "BosqueIgualdad";
mapa["Pradera de las Diferencias"] = "PraderaDiferencias";
mapa["Pradera del Amor"] = "PraderaAmor";
mapa["Trío Frondoso"] = "TrioFrondoso";
mapa["Rey de la Selva"] = "ReySelva";
mapa["Isla Solitaria"] = "IslaSolitaria";

// Catálogo de dinosaurios con número identificador
var dinosCatalogo = {
  "T-Rex": 1,
  "Triceratops": 2,
  "Velociraptor": 3,
  "Brachiosaurio": 4,
  "Stegosaurio": 5,
  "Anquilosaurio": 6
};

// Mostrar en consola 
console.log("Mapa cargado:");
console.log(mapa);

// Variable para los puntos
var puntos = 0;

// Guardar los dinosaurios colocados en cada recinto
var recintosDinos = {};

// Función para actualizar los puntos en pantalla
function mostrarPuntos() {
  var puntosElemento = document.querySelector(".DinoPuntos");
  if (puntosElemento) {
    puntosElemento.innerText = "PUNTOS: " + puntos;
  }
}

/**
 * Coloca un dinosaurio en un recinto.
 * Si el recinto es el "Bosque de la Igualdad", solo suma puntos
 * si el dinosaurio coincide con los ya colocados allí.
 */
function colocarDino(nombreRecinto, especieDino) {
  console.log("Colocando " + especieDino + " en " + nombreRecinto);

  var existe = mapa[nombreRecinto];
  if (!existe) {
    console.log("Ese recinto no está en el mapa");
    return;
  }

  // Obtener el número del dinosaurio
  var numeroDino = dinosCatalogo[especieDino];
  console.log("Número del dinosaurio:", numeroDino);

  // Crear registro del recinto si no existe
  if (!recintosDinos[nombreRecinto]) {
    recintosDinos[nombreRecinto] = [];
  }

  // Bosque de la Igualdad
  if (nombreRecinto == "Bosque de la Igualdad") {
    var dinosEnBosque = recintosDinos[nombreRecinto];

    if (dinosEnBosque.length === 0) {
      dinosEnBosque.push(numeroDino);
      puntos += 2;
      console.log("Primer dinosaurio colocado en el Bosque.");
    } else {
      var especiePermitida = dinosEnBosque[0];
      if (numeroDino === especiePermitida) {
        dinosEnBosque.push(numeroDino);
        puntos += 2;
        console.log("Dinosaurio igual al primero. Puntos +2");
      } else {
        alert("En el Bosque de la Igualdad solo puedes colocar dinosaurios de la MISMA especie.");
        console.log("Dinosaurio diferente. No se suman puntos.");
      }
    }

  } else if (nombreRecinto == "Pradera de las Diferencias") {
    puntos += 3;
  } else if (nombreRecinto == "Pradera del Amor") {
    puntos += 4;
  } else if (nombreRecinto == "Trío Frondoso") {
    puntos += 5;
  } else if (nombreRecinto == "Rey de la Selva") {
    puntos += 6;
  } else if (nombreRecinto == "Isla Solitaria") {
    puntos += 7;
  }

  mostrarPuntos();
}
// Función para probar (elige recinto y dino al azar)
function pruebaColocar() {
  var recintos = Object.keys(mapa);
  var dinos = Object.keys(dinosCatalogo);
  var recintoElegido = recintos[Math.floor(Math.random() * recintos.length)];
  var dinoElegido = dinos[Math.floor(Math.random() * dinos.length)];

  colocarDino(recintoElegido, dinoElegido);
}
// Mostrar los dinos al hacer clic en la caja
var caja = document.getElementById("toggleDinos");
if (caja) {
  caja.onclick = function() {
    var dialogo = document.getElementById("toggleDinos2");
    if (dialogo) dialogo.showModal();
  };
}
// Cerrar el cuadro de dinos
var botonCerrar = document.getElementById("cerrar");
if (botonCerrar) {
  botonCerrar.onclick = function() {
    document.getElementById("toggleDinos2").close();
  };
}
// Cuando se hace clic en un dinosaurio, se prueba colocar uno
var dinos = document.querySelectorAll(".Dinos");
for (var i = 0; i < dinos.length; i++) {
  dinos[i].addEventListener("click", function() {
    pruebaColocar();
  });
}
console.log("Juego.js");
