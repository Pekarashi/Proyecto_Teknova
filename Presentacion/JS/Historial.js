         //  Cargar historial desde localStorage si existe //
        const historial = JSON.parse(localStorage.getItem("historialPartidas")) || [];

        const tabla = document.querySelector("#tablaHistorial tbody");

        historial.forEach((partida, index) => {
            const fila = document.createElement("tr");

            fila.innerHTML = `
                <td>${index + 1}</td>
                <td>${partida.jugadores.join(", ")}</td>
                <td>${partida.puntuaciones.join(" - ")}</td>
                <td>${partida.fecha}</td>
            `;

            tabla.appendChild(fila);
        });