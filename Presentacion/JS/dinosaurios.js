/** 
 * dinosaurios.js
 * Este archivo se encarga de traer todas las fichas de dinosaurios desde la base de datos
 * y guardarlas en una variable que otros scripts del juego puedan usar.
 */

// Creamos una variable global llamada 'dinosauriosDisponibles'
// Esto significa que cualquier otro script puede acceder a la lista de dinos
window.dinosauriosDisponibles = [];

// Definimos una función asíncrona para cargar los dinosaurios desde el servidor
window.cargarDinosaurios = async function() {
  try {
    // Hacemos una solicitud al archivo PHP que devuelve los dinos en formato JSON
    const respuesta = await fetch("../../Datos/obtener_fichas.php");

    // Convertimos la respuesta a JSON y la guardamos en la variable global
    window.dinosauriosDisponibles = await respuesta.json();

    // Mostramos en la consola la lista de dinos para verificar que todo salió bien
    console.log("Fichas cargadas desde la base:", window.dinosauriosDisponibles);
  } catch (error) {
    // Si hay algún error (por ejemplo, no encuentra el archivo PHP o hay un problema en el JSON)
    // se muestra un mensaje en la consola
    console.error("Error al cargar fichas:", error);
  }
};
