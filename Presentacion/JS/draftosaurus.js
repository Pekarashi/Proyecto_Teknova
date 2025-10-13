// Obtenemos el elemento del sidebar (la barra lateral) del HTML
const sidebar = document.getElementById("sidebar");

// Obtenemos el botón que sirve para abrir/cerrar el sidebar
const toggleBtn = document.getElementById("toggleBtn");

// Definimos qué pasa cuando hacemos clic en el botón
toggleBtn.onclick = () => {
  // Alterna la clase "active" en el sidebar
  // Si el sidebar la tiene, la quita; si no la tiene, la pone
  sidebar.classList.toggle("active");

  // Cambia el símbolo del botón según el estado del sidebar
  // Si el sidebar está activo, muestra "<" (cerrar)
  // Si no está activo, muestra ">" (abrir)
  toggleBtn.textContent = sidebar.classList.contains("active") ? "<" : ">";

  // Alterna la clase "active" también en el botón para cambiar su estilo si quieres
  toggleBtn.classList.toggle("active");
};
