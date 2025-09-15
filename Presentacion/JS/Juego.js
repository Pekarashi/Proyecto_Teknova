// ABRIR y CERRAR DIALOG DE DINOS //
const toggleDinos = document.getElementById("toggleDinos"); 
const btnCerrar = document.getElementById("cerrar");       
const toggleDinos2 = document.getElementById("toggleDinos2"); 

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

// SELECCIÓN Y COLOCACIÓN DE DINOS //
var dinos = document.querySelectorAll("#listaDinos .Dinos, #listaDinos2 .Dinos");
var recintos = document.querySelectorAll(".Buscarecinto");
var dinoSeleccionado = null;
dinos.forEach(function(dino) {
    dino.addEventListener("click", function() {
        dinos.forEach(d => d.classList.remove("dino-seleccionado"));
        this.classList.add("dino-seleccionado");
        dinoSeleccionado = this;
    });
});

// Colocar dinosaurio //
recintos.forEach(function(recinto) {
    recinto.addEventListener("click", function() {
        if (!dinoSeleccionado) return;
        const recintosMultiples = ["recinto-4", "recinto-5", "recinto-6"];
        const esMultiple = recintosMultiples.some(clase => recinto.classList.contains(clase));
        if (esMultiple || recinto.children.length === 0) {
            recinto.appendChild(dinoSeleccionado);
            dinoSeleccionado.classList.remove("dino-seleccionado");
            dinoSeleccionado = null;
        } else {
            alert("Este recinto ya tiene un dinosaurio");
        }
    });
});

// DADO DE IMÁGENES // 
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
if (dado) {
  dado.addEventListener("click", tirarDado);
}