<?php
include_once('../../Datos/conexion.php');
include_once '../../Negocio/autenticado.php';
include_once '../../Negocio/cabecera.php';

$id_partida = $_GET['id_partida'] ?? 0;

// Obtener jugadores de la partida
$sql = "SELECT jugador_id, nombre, turno FROM jugadores WHERE fk_partida_id = $id_partida ORDER BY turno";
$result = $conexion->query($sql);
$jugadores = $result->fetch_all(MYSQLI_ASSOC);
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modo Gestión - Draftosaurus</title>
    <link rel="stylesheet" href="../CSS/Styles_Base.css">
    <link rel="stylesheet" href="../CSS/Multijugador.css">
    <link rel="stylesheet" href="../CSS/Gestion.css">
</head>
<body class="Partida">
    <article class="tableros-container">
        <?php foreach($jugadores as $jugador): ?>
            <section class="tablero-jugador" data-jugador-id="<?= $jugador['jugador_id'] ?>">
                <header class="DinoPuntos"><?= htmlspecialchars($jugador['nombre']) ?> <span class="puntos">0</span></header>
    
                <section class="recintos">
                    <aside> 
                        <section class="recinto-1">
                            <article class="Buscarecinto recinto-a"></article>
                            <article class="Buscarecinto recinto-b"></article>
                            <article class="Buscarecinto recinto-c"></article>
                            <article class="Buscarecinto recinto-d"></article>
                            <article class="Buscarecinto recinto-e"></article>
                            <article class="Buscarecinto recinto-f"></article>
                        </section>
    
                        <section class="recinto-2">
                            <article class="Buscarecinto recinto-g"></article>
                            <article class="Buscarecinto recinto-h"></article>
                            <article class="Buscarecinto recinto-i"></article>
                        </section>
    
                        <section class="recinto-3">
                            <article class="Buscarecinto recinto-j"></article>
                            <article class="Buscarecinto recinto-k"></article>
                            <article class="Buscarecinto recinto-l"></article>
                            <article class="Buscarecinto recinto-m"></article>
                            <article class="Buscarecinto recinto-n"></article>
                            <article class="Buscarecinto recinto-o"></article>
                        </section>
                    </aside>
    
                    <article class="Rio">
                        <article class="Buscarecinto espacio-4"></article>
                        <article class="Buscarecinto espacio-5"></article>
                        <article class="Buscarecinto espacio-6"></article>
                    </article>
    
                    <aside>
                        <section class="recinto-7">
                            <article class="Buscarecinto recinto-p"></article>
                        </section>
    
                        <section class="recinto-8">
                            <article class="Buscarecinto recinto-q"></article>
                            <article class="Buscarecinto recinto-r"></article>
                            <article class="Buscarecinto recinto-s"></article>
                            <article class="Buscarecinto recinto-t"></article>
                            <article class="Buscarecinto recinto-u"></article>
                            <article class="Buscarecinto recinto-v"></article>
                        </section>
    
                        <section class="recinto-9">
                            <article class="Buscarecinto recinto-w"></article>
                        </section>
                    </aside>
                </section>
    
                <section class="toggle-contenedor">
                    <img src="https://images.vexels.com/media/users/3/264723/isolated/preview/dd0ea3896edd75f54e62342f8e7e7d85-caja-de-carton-de-dibujos-animados.png" 
                        alt="Caja de Dinosaurios" class="toggleDinos">
                </section>
    
                <dialog class="toggleDinos2">
                    <figure class="dinos listaDinos"></figure>
                    <figure class="dinos2 listaDinos2"></figure>
                    <button class="cerrar">&times;</button>
                </dialog>
            </section>
        <?php endforeach; ?>
    
        <button id="btnFinalizarPartida" class="boton" data-id-partida="<?= htmlspecialchars($id_partida) ?>">
            <p>Finalizar Partida</p>
        </button>
    </article>

    <script src="../JS/dinosaurios.js"></script>
    <script src="../JS/mostrar_dinosaurios_multijugador.js"></script>
    <script src="../JS/multijugador_juego.js"></script>
    <script src="../JS/finalizar_partida_gestion.js"></script>
</body>
</html>
