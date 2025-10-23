<?php
include_once '../Datos/conexion.php';
include_once 'autenticado.php';


if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $nombres = json_decode($_POST['jugadores'], true);
    if (!$nombres || count($nombres) < 2) {
        die("Error: Deben ser al menos 2 jugadores.");
    }

    $id_usuario = $_SESSION['usuario_id'] ?? 0;

    // Crear partida
    $sql_partida = "INSERT INTO partida (tiempo, ganador, fk_usuario_id, turno_actual, ronda_actual)
                    VALUES (0, '', $id_usuario, 1, 1)";
    if ($conexion->query($sql_partida)) {
        $partida_id = $conexion->insert_id;

        // Insertar jugadores
        foreach ($nombres as $index => $nombre) {
            $nombre_seguro = $conexion->real_escape_string($nombre);
            $turno = $index + 1; 
            $sql_jugador = "INSERT INTO jugadores (nombre, turno, fk_partida_id, tablero_json)
                            VALUES ('$nombre_seguro', $turno, $partida_id, '[]')";
            $conexion->query($sql_jugador);
        }

        // Redirigir a MultiJugador.php
        header("Location: ../Presentacion/HTML/MultiJugador.php?id_partida=$partida_id");
        exit;
    } else {
        die("Error al crear la partida: " . $conexion->error);
    }
}
?>
