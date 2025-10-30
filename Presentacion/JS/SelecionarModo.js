document.addEventListener("DOMContentLoaded", function() {

    const btnMultijugador = document.getElementById('btnMultijugador');
    const btnGestion = document.getElementById('btnGestion'); // Nuevo botón para gestión
    const modal = document.getElementById('modalJugadores');
    const btnCerrarModal = document.getElementById('btnCerrarModal');
    const numJugadoresInput = document.getElementById('numJugadores');
    const nombresDiv = document.getElementById('nombresJugadores');
    const btnIniciar = document.getElementById('btnIniciar');

    let modo = ''; // Modo seleccionado: 'multijugador' o 'gestion'

    // ABRIR MODAL MULTIJUGADOR
    btnMultijugador.addEventListener("click", function() {
        modo = 'multijugador';
        modal.style.display = "flex";
        generarInputsNombres();
    });

    // ABRIR MODAL GESTIÓN
    btnGestion.addEventListener("click", function() {
        modo = 'gestion';
        modal.style.display = "flex";
        generarInputsNombres();
    });

    // CERRAR MODAL
    btnCerrarModal.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // CAMBIO DE CANTIDAD DE JUGADORES
    numJugadoresInput.addEventListener("change", generarInputsNombres);

    // GENERAR INPUTS DE NOMBRES
    function generarInputsNombres() {
        let num = Math.min(Math.max(+numJugadoresInput.value, 2), 5); // mínimo 2, máximo 5
        nombresDiv.innerHTML = "";
        for (let i = 1; i <= num; i++) {
            const input = document.createElement("input");
            input.type = "text";
            input.placeholder = "Jugador " + i;
            input.id = "nombreJugador" + i;
            nombresDiv.appendChild(input);
            nombresDiv.appendChild(document.createElement("br"));
        }
    }

    // INICIAR PARTIDA
    btnIniciar.addEventListener("click", function() {
        let num = Math.min(Math.max(+numJugadoresInput.value, 2), 5);
        if(num < 2) return alert("Debe haber entre 2 y 5 jugadores.");

        let jugadores = [];
        for (let i = 1; i <= num; i++) {
            let nombre = document.getElementById("nombreJugador" + i).value.trim();
            if(!nombre) nombre = "Jugador " + i;
            jugadores.push(nombre);
        }

        // Crear formulario dinámico para enviar al PHP
        const form = document.createElement("form");
        form.method = "POST";
        if (modo === 'multijugador') {
            form.action = "../../Negocio/crear_partida.php"; // ruta al PHP que crea la partida
        } else if (modo === 'gestion') {
            form.action = "../../Negocio/crear_partida_gestion.php"; // ruta al PHP para la gestión
        }

        const input = document.createElement("input");
        input.type = "hidden";
        input.name = "jugadores";
        input.value = JSON.stringify(jugadores); // Enviar los nombres de los jugadores

        form.appendChild(input);
        document.body.appendChild(form);
        form.submit();
    });

});
