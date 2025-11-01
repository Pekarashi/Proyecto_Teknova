<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title data-trad="Selecciona el modo de juego">Draftosaurus - Selección de Modo</title>
    <link rel="stylesheet" href="../CSS/Styles_Base.css"/>
    <link rel="stylesheet" href="../CSS/SelecionarModo.css"/>
</head>
<?php
include_once '../../Negocio/autenticado.php';
include_once '../../Negocio/cabecera.php';
?>
<body>
    <div class="container">
        <h1 data-trad="Selecciona el modo de juego">Selecciona el modo de juego</h1>
        <a href="Juego.php" class="boton" data-trad="Solitario">Solitario</a>
        <button id="btnMultijugador" class="boton" data-trad="Multijugador">Multijugador</button>
        
        <!-- Botón para ir a Gestión -->
        <button id="btnGestion" class="boton" data-trad="Gestión">Gestión</button>
    </div>
    
    <section id="modalJugadores" class="modal">
        <form class="modal-contenido" onsubmit="return false;">
            <h2 data-trad="Seleccionar Jugadores">Seleccionar Jugadores</h2>
            <label for="numJugadores" data-trad="Cantidad de jugadores (2-5):">Cantidad de jugadores (2-5):</label>
            <input type="number" id="numJugadores" min="2" max="5" value="2">
            <div id="nombresJugadores"></div>
            <button type="button" id="btnIniciar" data-trad="Iniciar Juego">Iniciar Juego</button>
            <button type="button" id="btnCerrarModal" class="cerrar" data-trad="Cancelar">Cancelar</button>
        </form>
    </section>

    <script src="../JS/SelecionarModo.js"></script>
    <script src="../JS/idioma.js"></script>
</body>
</html>
