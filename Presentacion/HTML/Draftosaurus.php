<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Draftosaurus - Inicio</title>
    <link rel="stylesheet" href="../CSS/Styles_Base.css"/>
    <link rel="icon" href="imagenes/imgPestaña.png">
</head>
<?php
include_once 'autenticado.php';
include_once 'cabecera.php';
?>
<body class="Inicio">
    
    <button class="toggle-btn" id="toggleBtn">&gt;</button>

    <nav class="sidebar" id="sidebar">
        <a href="SelecionarModo.php">Modo de Juego</a>
        <a href="Reglas.php">Reglas del juego</a>
        <a href="puntuaciones.php">Puntuaciones</a>
        <a href="historial.php">Historial</a>
    </nav>
    <main>
        <article class="container">
            <h4 class="Información-del-juego">Información del juego</h4>
            <p id="infogame">
                <strong>Draftosaurus</strong> 
                Es un juego de mesa familiar en el que los jugadores construyen su propio parque de dinosaurios.
                El objetivo principal es atraer la mayor cantidad de visitantes organizando los dinosaurios en distintos recintos, cada uno con reglas específicas para su colocación.
                Se trata de un juego rápido y sencillo, ideal para 2 a 5 jugadores a partir de 8 años, con partidas que duran aproximadamente 15 minutos.
                Además, gracias a su dinámica ágil y a la gran variedad de recintos disponibles, cada partida resulta diferente y divertida, lo que aumenta la rejugabilidad.
                Los jugadores deben tomar decisiones estratégicas al elegir qué dinosaurio colocar y en qué lugar, ya que una buena organización puede marcar la diferencia entre ganar o perder.
                Es perfecto tanto para familias como para grupos de amigos, ya que combina planificación, interacción y un toque de azar que lo hace emocionante en cada turno.
            </p>
        </article>
    </main>
    <script src="../JS/draftosaurus.js"></script>
</body>
</html>