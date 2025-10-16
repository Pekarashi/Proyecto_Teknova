const btnMultijugador = document.getElementById('btnMultijugador');
const modal = document.getElementById('modalJugadores');
const btnCerrarModal = document.getElementById('btnCerrarModal');
const numJugadoresInput = document.getElementById('numJugadores');
const nombresDiv = document.getElementById('nombresJugadores');
const btnIniciar = document.getElementById('btnIniciar');

// Abrir modal
btnMultijugador.addEventListener("click", function() {
    modal.style.display = "flex";
    generarInputsNombres();
});

// Cerrar modal
btnCerrarModal.addEventListener("click", function() {
    modal.style.display = "none";
});

// Cambiar cantidad de jugadores genera inputs automáticamente
numJugadoresInput.addEventListener("change", generarInputsNombres);

// Generar inputs de nombres
function generarInputsNombres() {
    let num = Math.min(+numJugadoresInput.value, 5);
    nombresDiv.innerHTML = "";
    for (let i = 1; i <= num; i++) {
        let input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Jugador " + i;
        input.id = "nombreJugador" + i;
        nombresDiv.appendChild(input);
        nombresDiv.appendChild(document.createElement("br"));
    }
}

// Iniciar partida
btnIniciar.addEventListener("click", function() {
    let num = Math.min(+numJugadoresInput.value, 5);
    if(num < 2) return alert("Debe haber entre 2 y 5 jugadores.");

    let jugadores = [];
    for (let i = 1; i <= num; i++) {
        let nombre = document.getElementById("nombreJugador" + i).value.trim();
        if(!nombre) nombre = "Jugador " + i;
        jugadores.push(nombre);
    }

    // Crear form dinámico para enviar al PHP
    const form = document.createElement("form");
    form.method = "POST";
    form.action = "../../Negocio/crear_partida.php"; // ruta al PHP que crea la partida

    const input = document.createElement("input");
    input.type = "hidden";
    input.name = "jugadores";
    input.value = JSON.stringify(jugadores);

    form.appendChild(input);
    document.body.appendChild(form);
    form.submit();
});
