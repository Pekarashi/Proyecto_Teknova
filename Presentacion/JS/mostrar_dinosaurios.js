// Espera a que todo el contenido HTML esté cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", async () => {
  try {
    // Llama a la función cargarDinosaurios() de dinosaurios.js
    // Esto carga las fichas desde la base de datos y las guarda en dinosauriosDisponibles
    await cargarDinosaurios();

    const totalDinos = dinosauriosDisponibles.length; // Cantidad total de dinosaurios cargados

    // Función que devuelve un dinosaurio aleatorio de la lista
    // Puede repetirse porque no eliminamos el elegido
    function dinoAleatorio() {
      const index = Math.floor(Math.random() * totalDinos); // Número aleatorio entre 0 y totalDinos-1
      return dinosauriosDisponibles[index]; // Retorna el dinosaurio elegido
    }

    // Creamos los grupos de cada jugador
    // Cada jugador recibe 3 dinosaurios aleatorios (pueden repetirse)
    const jugador1 = Array.from({ length: 3 }, dinoAleatorio);
    const jugador2 = Array.from({ length: 3 }, dinoAleatorio);

    // Obtenemos los contenedores HTML donde se mostrarán los dinosaurios
    const listaDinos1 = document.querySelector("#listaDinos");   // Para jugador 1
    const listaDinos2 = document.querySelector("#listaDinos2");  // Para jugador 2

    // Limpiamos cualquier contenido previo
    listaDinos1.innerHTML = "";
    listaDinos2.innerHTML = "";

    // ===== MOSTRAR LOS DINOSAURIOS DEL JUGADOR 1 =====
    jugador1.forEach(dino => {
      const img = document.createElement("img"); // Creamos un elemento <img> para cada dinosaurio
      img.src = dino.imagen;                      // La imagen del dinosaurio
      img.alt = dino.especie;                     // Texto alternativo (nombre del dinosaurio)
      img.classList.add("Dinos");                 // Clase CSS para estilo
      img.dataset.tipo = dino.id;                 // Guardamos el id del dinosaurio para usarlo después

      // Evento que se dispara al hacer clic en el dinosaurio
      img.addEventListener("click", () => {
        // Quita la selección de todos los demás dinosaurios del mismo jugador
        document.querySelectorAll("#listaDinos .Dinos").forEach(d => d.classList.remove("dino-seleccionado"));
        img.classList.add("dino-seleccionado"); // Marca este dinosaurio como seleccionado
        dinoSeleccionado = img;                 // Guardamos el dinosaurio seleccionado en la variable global
      });

      listaDinos1.appendChild(img); // Agregamos la imagen al contenedor del jugador 1
    });

    // ===== MOSTRAR LOS DINOSAURIOS DEL JUGADOR 2 =====
    jugador2.forEach(dino => {
      const img = document.createElement("img");
      img.src = dino.imagen;
      img.alt = dino.especie;
      img.classList.add("Dinos");
      img.dataset.tipo = dino.id;

      img.addEventListener("click", () => {
        // Quita la selección de todos los demás dinosaurios del jugador 2
        document.querySelectorAll("#listaDinos2 .Dinos").forEach(d => d.classList.remove("dino-seleccionado"));
        img.classList.add("dino-seleccionado"); // Marca este dinosaurio como seleccionado
        dinoSeleccionado = img;                 // Guardamos el dinosaurio seleccionado
      });

      listaDinos2.appendChild(img); // Agregamos la imagen al contenedor del jugador 2
    });

    // Mensaje en consola para confirmar que todo se cargó bien
    console.log("Dinosaurios aleatorios (con repeticiones) mostrados correctamente.");
  } catch (error) {
    // Captura cualquier error y lo muestra en la consola
    console.error("Error al mostrar dinosaurios:", error);
  }
});
