<?php
include_once '../../Datos/conexion.php';
include_once '../../Negocio/autenticado.php';
include_once '../../Negocio/cabecera.php';

if (!$conexion) {
    die("Error de conexión a la base de datos");
}

if (session_status() == PHP_SESSION_NONE) {
    session_start();
}

$usuario_id = $_SESSION['usuario_id'] ?? null;

if (!$usuario_id) {
    die("Usuario no autenticado");
}

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
    if (json_last_error() !== JSON_ERROR_NONE) continue;

    $jugadores = array_map(fn($p) => $p['nombre'], $puntajes);

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
    <title data-trad="Historial de Partidas">Draftosaurus - Historial de Partidas</title>
    <link rel="stylesheet" href="../CSS/Styles_Base.css?v=">
    <link rel="stylesheet" href="../CSS/HistorialPartidas.css?v=">
    <link rel="icon" href="imagenes/imgPestaña.png">
</head>
<body class="Historial">
    <main class="historial">
        <article class="container">
            <h2 data-trad="Historial de Partidas">Historial de Partidas</h2>
            <table id="tablaHistorial">
                <thead>
                    <tr>
                        <th data-trad="# Partida"># Partida</th>
                        <th data-trad="Jugadores">Jugadores</th>
                        <th data-trad="Ganador">Ganador</th>
                        <th data-trad="Fecha">Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    <?php if (!empty($historial)): ?>
                        <?php foreach ($historial as $partida): ?>
                            <tr>
                                <td><?= $partida['partida_id'] ?></td>
                                <td><?= implode(", ", $partida['jugadores']) ?></td>
                                <td><?= $partida['ganador'] ?></td>
                                <td><?= $partida['fecha'] ?></td>
                            </tr>
                        <?php endforeach; ?>
                    <?php else: ?>
                        <tr>
                            <td colspan="4" data-trad="No se han encontrado partidas">
                                No se han encontrado partidas.
                            </td>
                        </tr>
                    <?php endif; ?>
                </tbody>
            </table>
        </article>
    </main>

    <!-- Asegurate que idioma.js esté al final -->
    <script src="../JS/idioma.js"></script>
</body>
</html>
