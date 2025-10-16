document.addEventListener("DOMContentLoaded", async () => {
  await cargarDinosaurios(); // Cargar dinos desde la base de datos

  const tableros = document.querySelectorAll(".tablero-jugador");

  const mapa = {
    "recinto-a": 2, "recinto-b": 10, "recinto-c": 4, "recinto-d": 18, "recinto-e": 8, "recinto-f": 20,
    "recinto-g": 1, "recinto-h": 3, "recinto-i": 3,
    "recinto-j": 2.5, "recinto-k": 2.5, "recinto-l": 2.5, "recinto-m": 2.5, "recinto-n": 2.5, "recinto-o": 2.5,
    "espacio-4": 1, "espacio-5": 1, "espacio-6": 1,
    "recinto-p": 7,
    "recinto-q": 1, "recinto-r": 10, "recinto-s": 3, "recinto-t": 18, "recinto-u": 8, "recinto-v": 20,
    "recinto-w": 7
  };

  tableros.forEach(tablero => {
    const listaDinos = tablero.querySelector(".listaDinos");
    const listaDinos2 = tablero.querySelector(".listaDinos2");

    if (!listaDinos || !listaDinos2) return;

    listaDinos.innerHTML = "";
    listaDinos2.innerHTML = "";

    // Crear dinosaurios aleatorios
    const jugadorDinos1 = Array.from({ length: 3 }, () =>
      dinosauriosDisponibles[Math.floor(Math.random() * dinosauriosDisponibles.length)]
    );
    const jugadorDinos2 = Array.from({ length: 3 }, () =>
      dinosauriosDisponibles[Math.floor(Math.random() * dinosauriosDisponibles.length)]
    );

    const crearDino = (dino, contenedor) => {
      const img = document.createElement("img");
      img.src = dino.imagen;
      img.alt = dino.tipo_dinosaurio;
      img.dataset.tipo = dino.tipo_dinosaurio;
      img.classList.add("Dinos");
      contenedor.appendChild(img);
    };

    jugadorDinos1.forEach(d => crearDino(d, listaDinos));
    jugadorDinos2.forEach(d => crearDino(d, listaDinos2));

    // Variables del juego
    let puntos = 0;
    let dinoSeleccionado = null;
    let recintosDinos = {};

    const puntosElemento = tablero.querySelector(".puntos");
    const dado = tablero.querySelector(".DinoDado");
    const toggleDinos = tablero.querySelector(".toggleDinos");
    const toggleDinos2 = tablero.querySelector(".toggleDinos2");
    const btnCerrar = tablero.querySelector(".cerrar");

    const imagenesDado = [
      "https://i.imgur.com/aejOyBz.png",
      "https://i.imgur.com/J62cPcN.png",
      "https://i.imgur.com/Wv4kiqA.png",
      "https://i.imgur.com/YR2y6EB.png",
      "https://i.imgur.com/BC6AkWf.png",
      "https://i.imgur.com/3Fx3gf0.png"
    ];

    function mostrarPuntos() {
      if (puntosElemento) puntosElemento.textContent = "PUNTOS: " + puntos;
    }

    function tirarDado() {
      const random = Math.floor(Math.random() * 6);
      if (dado) dado.innerHTML = `<img src="${imagenesDado[random]}" alt="cara del dado">`;
    }

    if (dado) dado.addEventListener("click", tirarDado);

    if (toggleDinos && toggleDinos2) {
      toggleDinos.addEventListener("click", () => (toggleDinos2.style.display = "flex"));
    }

    if (btnCerrar && toggleDinos2) {
      btnCerrar.addEventListener("click", e => {
        e.preventDefault();
        toggleDinos2.style.display = "none";
      });
    }

    // Seleccionar dinosaurio
    const dinos = tablero.querySelectorAll(".listaDinos .Dinos, .listaDinos2 .Dinos");
    dinos.forEach(dino => {
      dino.addEventListener("click", function () {
        dinos.forEach(d => d.classList.remove("dino-seleccionado"));
        this.classList.add("dino-seleccionado");
        dinoSeleccionado = this;
      });
    });

    // Colocar dinosaurio en recinto y sumar puntos
    const recintos = tablero.querySelectorAll(".Buscarecinto");
    recintos.forEach(recinto => {
      recinto.addEventListener("click", function () {
        if (!dinoSeleccionado) return;

        const recintoClase = Array.from(recinto.classList).find(c =>
          c.startsWith("recinto") || c.startsWith("espacio")
        );
        if (!recintoClase) return;

        recintosDinos[recintoClase] = recintosDinos[recintoClase] || [];

        // Colocar dinosaurio
        recinto.appendChild(dinoSeleccionado);
        recintosDinos[recintoClase].push(dinoSeleccionado);

        // Quitar selección
        dinoSeleccionado.classList.remove("dino-seleccionado");
        dinoSeleccionado = null;

        // Sumar puntos básicos del mapa
        puntos += mapa[recintoClase] || 0;
        mostrarPuntos();
      });
    });

    mostrarPuntos();
  });
});
