document.addEventListener("DOMContentLoaded", () => {
    const btnFinalizar = document.getElementById("btnFinalizarPartida");
    if (!btnFinalizar) return;

    btnFinalizar.addEventListener("click", () => {
        const id_partida = btnFinalizar.dataset.idPartida;
        const jugadores = document.querySelectorAll(".tablero-jugador");
        const puntajes = [];

        jugadores.forEach(jugador => {
            // Obtén el valor de puntos
            const puntosElem = jugador.querySelector(".puntos");
            let puntos = 0; // Valor por defecto

            if (puntosElem) {
                const puntosText = puntosElem.textContent.trim();
                if (puntosText && !isNaN(puntosText)) {
                    puntos = parseInt(puntosText);
                }
            }

            // Obtén el nombre del jugador
            const nombreElem = jugador.querySelector(".DinoPuntos");
            const nombre = nombreElem ? nombreElem.textContent.split('-')[0].trim() : "Desconocido";

            puntajes.push({ nombre, puntos });
        });

        // Verifica los puntajes antes de enviarlos
        console.log("Puntajes a enviar:", puntajes);

        fetch('../../Negocio/guardar_partida_gestion.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `id_partida=${id_partida}&puntajes=${encodeURIComponent(JSON.stringify(puntajes))}`
        })
        .then(res => res.json())
        .then(data => {
            console.log("Respuesta del servidor:", data);

            if (data.success) {
                alert("Partida finalizada y guardada correctamente.");
                window.location.href = "../HTML/SelecionarModo.php"; // Redirige a Seleccionar Modo
            } else {
                alert("Error al guardar la partida: " + (data.error || "desconocido"));
            }
        })
        .catch(err => {
            console.error(err);
            alert("Error al guardar la partida");
        });
    });
});
