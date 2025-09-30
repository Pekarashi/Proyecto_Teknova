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