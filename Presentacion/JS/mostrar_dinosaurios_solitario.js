/**
 * mostrar_dinosaurios_solitario.js
 * Muestra 6 dinosaurios aleatorios en el modo solitario y permite seleccionar uno.
 */

document.addEventListener("DOMContentLoaded", async () => {
  try {
    /** Espera a que se carguen los dinosaurios desde la base */
    await cargarDinosaurios();

    /** 🔍 Muestra en consola qué datos se cargaron desde la base */
    console.log("Fichas cargadas desde la base:", window.dinosauriosDisponibles);

    const listaDinos = document.getElementById("listaDinos");
    const listaDinos2 = document.getElementById("listaDinos2");

    /** Verifica que existan los contenedores donde se mostrarán los dinos */
    if (!listaDinos || !listaDinos2) {
      console.error("No se encontraron las listas de dinosaurios en el modo solitario.");
      return;
    }

    listaDinos.innerHTML = "";
    listaDinos2.innerHTML = "";

    /** Elegimos 6 dinosaurios aleatorios */
    const dinosAleatorios = [...window.dinosauriosDisponibles]
      .sort(() => Math.random() - 0.5)
      .slice(0, 6);

    const primeraMitad = dinosAleatorios.slice(0, 3);
    const segundaMitad = dinosAleatorios.slice(3, 6);

    window.dinoSeleccionado = null;

    /**
     * Crea la imagen del dinosaurio y configura su evento de selección
     */
    function crearImgDino(dino) {
      const img = document.createElement("img");
      img.src = dino.imagen;
      img.alt = dino.especie;
      img.title = dino.especie;
      img.classList.add("Dinos");

      /** ✅ Asegura que siempre haya un nombre válido en data-nombre */
      img.dataset.nombre = dino.especie;

      /** Evento al hacer clic: selecciona el dinosaurio */
      img.addEventListener("click", () => {
        const anterior = document.querySelector(".Dinos.seleccionado");
        if (anterior) anterior.classList.remove("seleccionado");

        img.classList.add("seleccionado");
        window.dinoSeleccionado = img;

        console.log("Dinosaurio seleccionado:", img.dataset.nombre);
      });

      return img;
    }

    /** Muestra los 6 dinos en pantalla (3 y 3) */
    primeraMitad.forEach(dino => listaDinos.appendChild(crearImgDino(dino)));
    segundaMitad.forEach(dino => listaDinos2.appendChild(crearImgDino(dino)));

    console.log("Se mostraron 6 dinosaurios aleatorios.");
  } catch (error) {
    console.error("Error al mostrar dinosaurios:", error);
  }
});
