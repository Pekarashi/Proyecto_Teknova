// SELECCIÓN DE MULTIJUGADOR //
var btnMultijugador = document.getElementById('btnMultijugador');
var modal = document.getElementById('modalJugadores');
var btnCerrarModal = document.getElementById('btnCerrarModal');
var numJugadoresInput = document.getElementById('numJugadores');
var nombresDiv = document.getElementById('nombresJugadores');
var btnIniciar = document.getElementById('btnIniciar');

// Abrir modal al hacer click en Multijugador //
btnMultijugador.addEventListener("click", function() {
    modal.style.display = "flex";
    generarInputsNombres();
});
// Cerrar modal //
btnCerrarModal.addEventListener("click", function() {
    modal.style.display = "none";
});
// Cambiar cantidad de jugadores genera inputs automáticamente //
numJugadoresInput.addEventListener("change", function() {
    generarInputsNombres();
});
// GENERAR INPUTS DE NOMBRES //
function generarInputsNombres() {
    var num = Math.min(+numJugadoresInput.value, 5); // máximo 5 jugadores //
    nombresDiv.innerHTML = "";
    for(var i=1; i<=num; i++) {
        var input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Jugador " + i;
        input.id = "nombreJugador" + i;
        nombresDiv.appendChild(input);
        nombresDiv.appendChild(document.createElement("br"));
    }
}
// INICIAR PARTIDA MULTIJUGADOR //
btnIniciar.addEventListener("click", function() {
    var num = Math.min(+numJugadoresInput.value, 5); 
    if(num < 2) return alert("Debe haber entre 2 y 5 jugadores.");
    
    var jugadores = [];
    for(var i=1; i<=num; i++)
        jugadores.push(document.getElementById("nombreJugador"+i).value || "Jugador "+i);
    // Redirigir a la página multijugador //
    window.location.href = "MultiJugador.html";
});