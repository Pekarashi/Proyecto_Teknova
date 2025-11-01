<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title data-trad="Reglas del juego">Draftosaurus - Reglas</title>
    <link rel="stylesheet" href="../CSS/Styles_Base.css">
    <link rel="stylesheet" href="../CSS/Reglas.css">
    <link rel="icon" href="imagenes/imgPestaña.png">
</head> 
<?php
include_once '../../Negocio/autenticado.php';
include_once '../../Negocio/cabecera.php';
?>
<body class="Reglas">
    <nav id="columna-Breglas">
        <a href="SelecionarModo.php" class="botonesReglas" data-trad="Modo de Juego">Modo de juego</a> 
        <a href="puntuaciones.php" class="botonesReglas" data-trad="Puntuaciones">Puntuaciones</a>
        <a href="draftosaurus.php" class="botonesReglas" data-trad="Volver al Inicio">volver al Inicio</a>
    </nav>

<main id="Reglas">
    <section class="container1">
        <h2 data-trad="Objetivo">Objetivo</h2>
        <p data-trad="Objetivo descripción">
            El objetivo principal en Draftosaurus es construir el parque de dinosaurios más atractivo para los visitantes. Para lograrlo, los jugadores deben colocar estratégicamente dinosaurios en diferentes recintos de su tablero individual, teniendo en cuenta las restricciones de ubicación que cambian con cada turno. El juego implica un proceso de selección y colocación de "dinos" (meeples de dinosaurios) en los recintos, buscando maximizar los puntos de victoria al final de la partida
        </p>
    </section>
    <section class="container2">
        <h2 data-trad="Cómo se juega">Cómo se juega</h2>
        <p data-trad="Cómo se juega párrafo 1">En Draftosaurus, los jugadores tendrán que ir colocando dinosaurios en los distintos recintos para conseguir la máxima cantidad de puntos posible. Estas zonas, además de no puntuar igual, tienen una regla que hay que cumplir para que el parque siga en armonía. El juego consta de 2 rondas de juego divididas cada una de ellas en 6 turnos que se juegan exactamente igual. Antes de empezar en cada ronda, todos los jugadores sacarán de la bolsa sin mirar 6 dinosaurios que ocultarán en su mano al resto de jugadores.</p>
        <p data-trad="Cómo se juega párrafo 2">Teniendo en cuenta todo esto, organizar nuestro zoológico de dinosaurios parece una tarea fácil ¿me equivoco? Pues sí, porque no lo es. No podremos colocar los 6 dinosaurios que hemos sacado de la bolsa. Tan solo nos quedaremos con uno de ellos y el resto los pasaremos al siguiente jugador. Y para rizar el rizo el jugador inicial, que cambiará en cada turno, será el encargado de lanzar el dado con el que se indicará una regla extra a cumplir durante el turno en curso. Ahora sí que parece un poco caótico el parque tan bonito que os habíais montado en vuestras cabecitas ¿verdad?</p>
        <!-- Agrega data-trad a todos los párrafos siguientes de forma similar -->
        <ul data-trad="Áreas del tablero">
            <li>El Bosque de la Semejanza: en este recinto tan solo se pueden poner dinosaurios de la misma especie.</li>
            <li>El Prado de la Diferencia: este recinto puede llegar a albergar dinosaurios de distintas especies, por lo que no podremos repetir.</li>
            <li>La Pradera del Amor: se colocan parejas de la misma especie hasta llegar a un máximo de 6 dinosaurios.</li>
            <li>El Trío Frondoso: para puntuar hay que colocar exactamente 3 dinosaurios, sean cuales sean.</li>
            <li>El Rey de la Selva: nos llevaremos 7 puntos si ponemos un dinosaurio y nuestro parque es el que más dinosaurios tiene de esa especie.</li>
            <li>La Isla Solitaria: si queremos conseguir los puntos , el dinosaurio que dejemos en este recinto no puede estar en ningún otro del parque.</li>
            <li>Río: no se considera un recinto del zoo pero sí puntuará con 1 punto por dinosaurio al final de la partida.</li>
        </ul>
    </section>

    <section class="container3">
        <p data-trad="Notas T-Rex">¡A tener en cuenta! El T-Rex es único y especial, de ahí que por cada recinto que contenga uno de ellos nos llevaremos otro punto adicional.</p>
        <p data-trad="Notas dado">El dado, como he comentado, nos forzará a colocar un dinosaurio en un recinto del tablero salvo que seamos el que lo ha tirado o prefiramos descartarlo para no perder puntos. Este dado nos puede obligar a colocar dinosaurios en los recintos que se encuentren en el bosque (arriba) o en la llanura (abajo). También puede hacernos colocarlos en la zona de la derecha del río (en la zona de aseos) o a la izquierda del mismo (cerca de la cafetería). Por último, nos puede forzar a ponerlos en una zona dependiendo de como hayamos desarrollado el tablero colocándolo en un recinto que todavía tengamos vacío o en un lugar donde no haya ningún T-Rex.</p>
        <p data-trad="Fin partida">La partida de Draftosaurus finaliza al terminar la segunda ronda, cuando todos los jugadores tienen 12 dinosaurios en sus respectivos parques. En este momento, los jugadores cuentan los puntos conseguidos en cada zona del parque según se especifica en el tablero, ganando el jugador que tiene una mayor cantidad de puntos. En caso de un hipotético empate, ganará el que tenga menos T-Rex.</p>
        <h3 data-trad="Fin de la partida">Fin de la partida</h3>
        <footer>
            <p class="Pie-de-la-Pagina" data-trad="Pie de página">&copy; 2025 - Proyecto de Egreso</p>
        </footer>
    </section>
</main>

<script src="../JS/idioma.js"></script>
</body>
</html>
