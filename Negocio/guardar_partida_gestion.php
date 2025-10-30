<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

header('Content-Type: application/json');
include("../Datos/conexion.php");

if (!$conexion) {
    echo json_encode(["success" => false, "error" => "Error de conexión con la base de datos."]);
    exit;
}

try {
    $id_partida = $_POST['id_partida'] ?? null;
    $puntajes_json = $_POST['puntajes'] ?? null;

    if (!$id_partida || !$puntajes_json) {
        throw new Exception("Datos incompletos recibidos.");
    }

    $puntajes = json_decode($puntajes_json, true);
    if (!is_array($puntajes)) {
        throw new Exception("El formato de puntajes no es válido.");
    }

    // Determinar ganador
    $ganador = "";
    $max_puntos = -1;
    foreach ($puntajes as $p) {
        if ($p['puntos'] > $max_puntos) {
            $max_puntos = $p['puntos'];
            $ganador = $p['nombre'];
        }
    }

    // Guardar solo la partida en la tabla 'partida'
    $puntajes_json_safe = mysqli_real_escape_string($conexion, json_encode($puntajes));
    $ganador_safe = mysqli_real_escape_string($conexion, $ganador);

    $sqlUpdate = "
        UPDATE partida 
        SET puntaje = '$puntajes_json_safe', 
            ganador = '$ganador_safe', 
            fecha_fin = NOW() 
        WHERE partida_id = '$id_partida'
    ";

    if (!mysqli_query($conexion, $sqlUpdate)) {
        throw new Exception("Error al actualizar la partida: " . mysqli_error($conexion));
    }

    echo json_encode([
        "success" => true,
        "mensaje" => "Partida guardada exitosamente.",
        "ganador" => $ganador
    ]);

} catch (Exception $e) {
    echo json_encode(["success" => false, "error" => $e->getMessage()]);
}
?>
