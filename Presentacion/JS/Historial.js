document.addEventListener("DOMContentLoaded", function() {
    fetch('../HTML/historial.php')  // Ruta al archivo PHP que devuelve los datos del historial
        .then(response => response.json())
        .then(data => {
            const tabla = document.getElementById("tablaHistorial").getElementsByTagName('tbody')[0];
            
            data.forEach(partida => {
                const row = tabla.insertRow();
                row.innerHTML = `
                    <td>${partida.partida_id}</td>
                    <td>${partida.jugadores.join(", ")}</td>
                    <td>${partida.ganador}</td>
                    <td>${partida.fecha}</td>
                `;
            });
        })
        .catch(error => {
            console.error('Error al cargar el historial:', error);
        });
});
