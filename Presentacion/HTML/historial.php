<?php
include_once '../../Datos/conexion.php';
include_once '../../Negocio/autenticado.php';
include_once '../../Negocio/cabecera.php';

// Asegurar que la conexión exista
if (!$conexion) {
    die("Error de conexión a la base de datos");
}

// Evitar reiniciar sesión si ya está activa
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}

// Obtener el ID del usuario desde la sesión
$usuario_id = $_SESSION['usuario_id'] ?? null;

if (!$usuario_id) {
    die("Usuario no autenticado");
}

// Consulta para obtener el historial de partidas del usuario
$sql = "SELECT partida_id, ganador, fecha_fin, puntaje FROM partida WHERE fk_usuario_id = ?";
$stmt = $conexion->prepare($sql);
if (!$stmt) {
    die("Error al preparar la consulta: " . $conexion->error);
}

$stmt->bind_param("i", $usuario_id);

if (!$stmt->execute()) {
    die("Error al ejecutar la consulta: " . $stmt->error);
}

$result = $stmt->get_result();

$historial = [];
while ($row = $result->fetch_assoc()) {
    $puntajes = json_decode($row['puntaje'], true);
    if (json_last_error() !== JSON_ERROR_NONE) {
        continue; // Evita errores de JSON
    }

    $jugadores = array_map(function ($p) {
        return $p['nombre'];
    }, $puntajes);

    $historial[] = [
        'partida_id' => $row['partida_id'],
        'jugadores' => $jugadores,
        'ganador' => $row['ganador'],
        'fecha' => date("d/m/Y", strtotime($row['fecha_fin']))
    ];
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Draftosaurus - Historial de Partidas</title>

 
    <link rel="stylesheet" href="../CSS/Styles_Base.css?v=">
    <link rel="stylesheet" href="../CSS/HistorialPartidas.css?v=">

    <link rel="icon" href="imagenes/imgPestaña.png">
</head>
<body class="Historial">
    <main class="historial">
        <article class="container">
            <h2>Historial de Partidas</h2>
            <table id="tablaHistorial">
                <thead>
                    <tr>
                        <th># Partida</th>
                        <th>Jugadores</th>
                        <th>Ganador</th>
                        <th>Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                    if (!empty($historial)) {
                        foreach ($historial as $partida) {
                            echo "<tr>";
                            echo "<td>{$partida['partida_id']}</td>";
                            echo "<td>" . implode(", ", $partida['jugadores']) . "</td>";
                            echo "<td>{$partida['ganador']}</td>";
                            echo "<td>{$partida['fecha']}</td>";
                            echo "</tr>";
                        }
                    } else {
                        echo "<tr><td colspan='4'>No se han encontrado partidas.</td></tr>";
                    }
                    ?>
                </tbody>
            </table>
        </article>
    </main>
    <script src="../JS/historial.js"></script>
</body>
</html>
