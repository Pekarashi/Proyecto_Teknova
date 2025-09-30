<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Draftosaurus - Selección de Modo</title>
    <link rel="stylesheet" href="../CSS/Styles_Base.css"/>
    <link rel="stylesheet" href="../CSS/SelecionarModo.css"/>
</head>
<?php
include_once 'autenticado.php';
include_once 'cabecera.php';
?>
<body>
    <div class="container">
        <h1>Selecciona el modo de juego</h1>
        <a href="Juego.php" class="boton">Solitario</a>
        <button id="btnMultijugador" class="boton">Multijugador</button>
    </div>
    
    <section id="modalJugadores" class="modal">
        <form class="modal-contenido">
            <h2>Multijugador</h2>
            <label for="numJugadores">Cantidad de jugadores (2-5):</label>
            <input type="number" id="numJugadores" min="2" max="5" value="2">
            <p id="nombresJugadores"></p>
            <button id="btnIniciar">Iniciar Juego</button>
            <button id="btnCerrarModal" class="cerrar">Cancelar</button>
        </form>
    </section>

    <script src="../JS/SelecionarModo.js"></script>
</body>
</html>
