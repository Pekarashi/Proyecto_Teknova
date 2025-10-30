<?php
session_start(); // Iniciar la sesión para obtener el usuario autenticado

include_once '../../Negocio/conexion.php';
include_once '../../Negocio/autenticado.php';  // Asegúrate de que el usuario esté autenticado

// Iniciar el buffer de salida
ob_start();

// Obtener el ID del usuario desde la sesión
$usuario_id = $_SESSION['usuario_id'];

// SQL para obtener el historial de partidas del usuario
$sql = "SELECT partida_id, fk_usuario_id, ganador, fecha_fin, puntaje FROM partida WHERE fk_usuario_id = ?";
$stmt = $conexion->prepare($sql);
$stmt->bind_param("i", $usuario_id); // Asociar el ID del usuario
$stmt->execute();
$result = $stmt->get_result();

// Comprobar si hubo error en la consulta
if (!$result) {
    echo json_encode(["success" => false, "error" => "Error en la consulta: " . mysqli_error($conexion)]);
    exit;
}

// Recoger todas las partidas
$partidas = [];
while ($row = $result->fetch_assoc()) {
    // Decodificar el JSON de puntajes
    $puntajes = json_decode($row['puntaje'], true);

    // Si hay un error al decodificar el JSON, devolver el error
    if (json_last_error() !== JSON_ERROR_NONE) {
        echo json_encode(["success" => false, "error" => "Error al decodificar puntajes JSON"]);
        exit;
    }

    // Obtener los jugadores y las puntuaciones
    $jugadores = implode(", ", array_map(function($p) { return $p['nombre']; }, $puntajes));
    $puntuaciones = implode(" - ", array_map(function($p) { return $p['puntos']; }, $puntajes));

    // Crear un array con los datos de la partida
    $partidas[] = [
        'partida_id' => $row['partida_id'],
        'jugadores' => $jugadores,
        'puntajes' => $puntuaciones,
        'fecha' => date("d/m/Y", strtotime($row['fecha_fin'])),
        'ganador' => $row['ganador']
    ];
}

// Si no hay partidas para mostrar
if (empty($partidas)) {
    echo json_encode(["success" => false, "message" => "No se han encontrado partidas para este usuario."]);
    exit;
}

// Devolver el historial de partidas en formato JSON
echo json_encode($partidas);

// Finalizar el buffer de salida
ob_end_flush();
?>
