document.addEventListener("DOMContentLoaded", async () => {
  try {
    await cargarDinosaurios();

    const tableros = document.querySelectorAll(".tablero-jugador");

    if (!tableros.length) {
      console.error("No se encontraron tableros de jugadores (modo multijugador).");
      return;
    }

    tableros.forEach((tablero, index) => {
      const listaDinos = tablero.querySelector(".listaDinos");
      const listaDinos2 = tablero.querySelector(".listaDinos2");

      if (!listaDinos || !listaDinos2) {
        console.warn(`El tablero ${index + 1} no tiene listas de dinosaurios.`);
        return;
      }

      listaDinos.innerHTML = "";
      listaDinos2.innerHTML = "";

      // Seleccionamos 6 dinos aleatorios diferentes para este jugador
      const dinosAleatorios = [...window.dinosauriosDisponibles]
        .sort(() => Math.random() - 0.5)
        .slice(0, 6);

      const primeraMitad = dinosAleatorios.slice(0, 3);
      const segundaMitad = dinosAleatorios.slice(3, 6);

      primeraMitad.forEach(dino => {
        const img = document.createElement("img");
        img.src = dino.imagen;
        img.alt = dino.nombre;
        img.title = dino.nombre;
        img.dataset.nombre = dino.nombre; // agregamos dataset para la lógica
        img.classList.add("Dinos");        // agregamos clase Dinos
        listaDinos.appendChild(img);
      });

      segundaMitad.forEach(dino => {
        const img = document.createElement("img");
        img.src = dino.imagen;
        img.alt = dino.nombre;
        img.title = dino.nombre;
        img.dataset.nombre = dino.nombre; // agregamos dataset para la lógica
        img.classList.add("Dinos");        // agregamos clase Dinos
        listaDinos2.appendChild(img);
      });
    });

    console.log("Se mostraron 6 dinosaurios aleatorios por jugador");
  } catch (error) {
    console.error("Error al mostrar dinosaurios", error);
  }
});
