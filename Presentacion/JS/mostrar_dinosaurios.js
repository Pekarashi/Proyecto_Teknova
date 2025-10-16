// Espera a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", async () => {
  try {
    // Llama a la función para cargar los dinosaurios desde la base de datos
    await cargarDinosaurios();

    // Selecciona todos los tableros de los jugadores
    const tableros = document.querySelectorAll(".tablero-jugador");

    // Recorre cada tablero individualmente
    tableros.forEach(tablero => {
        // Busca dentro del tablero las listas de dinosaurios de cada jugador
        const listaDinos = tablero.querySelector(".listaDinos");
        const listaDinos2 = tablero.querySelector(".listaDinos2");

        // Limpia cualquier contenido previo en esas listas
        listaDinos.innerHTML = "";
        listaDinos2.innerHTML = "";

        // Crea 3 dinosaurios aleatorios para el jugador 1
        const jugadorDinos1 = Array.from({length: 3}, () => {
            return dinosauriosDisponibles[Math.floor(Math.random() * dinosauriosDisponibles.length)];
        });

        // Crea 3 dinosaurios aleatorios para el jugador 2
        const jugadorDinos2 = Array.from({length: 3}, () => {
            return dinosauriosDisponibles[Math.floor(Math.random() * dinosauriosDisponibles.length)];
        });

        // Recorre los dinosaurios del jugador 1 para agregarlos al tablero
        jugadorDinos1.forEach(dino => {
            const img = document.createElement("img"); // Crea un elemento <img>
            img.src = dino.imagen;                     // Le asigna la imagen del dino
            img.alt = dino.tipo_dinosaurio;           // Texto alternativo
            img.classList.add("Dinos");               // Clase CSS para estilos
            img.dataset.tipo = dino.ficha_id;         // Guarda un identificador único en dataset

            // Evento click para seleccionar el dinosaurio
            img.addEventListener("click", () => {
                // Quita la selección de todos los demás dinos en la lista
                listaDinos.querySelectorAll(".Dinos").forEach(d => d.classList.remove("dino-seleccionado"));
                img.classList.add("dino-seleccionado"); // Marca este dino como seleccionado
                tablero.dinoSeleccionado = img;        // Guarda el dino seleccionado en el tablero
            });

            // Agrega la imagen al DOM dentro de la lista del jugador 1
            listaDinos.appendChild(img);
        });

        // Recorre los dinosaurios del jugador 2 para agregarlos al tablero
        jugadorDinos2.forEach(dino => {
            const img = document.createElement("img"); // Crea un elemento <img>
            img.src = dino.imagen;
            img.alt = dino.tipo_dinosaurio;
            img.classList.add("Dinos");
            img.dataset.tipo = dino.ficha_id;

            // Evento click para seleccionar el dinosaurio
            img.addEventListener("click", () => {
                // Quita la selección de todos los demás dinos en la lista del jugador 2
                listaDinos2.querySelectorAll(".Dinos").forEach(d => d.classList.remove("dino-seleccionado"));
                img.classList.add("dino-seleccionado");
                tablero.dinoSeleccionado = img; // Guarda el dino seleccionado en el tablero
            });

            // Agrega la imagen al DOM dentro de la lista del jugador 2
            listaDinos2.appendChild(img);
        });
    });

    // Mensaje de confirmación en la consola
    console.log("Dinosaurios cargados en todos los tableros correctamente.");

  } catch (error) {
    // Captura y muestra cualquier error que ocurra al cargar o mostrar los dinos
    console.error("Error al mostrar dinosaurios:", error);
  }
});
