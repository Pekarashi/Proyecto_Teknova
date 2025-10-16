<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Draftosaurus - Historial de Partidas</title>
    <link rel="stylesheet" href="../CSS/Styles_Base.css">
    <link rel="stylesheet" href="../CSS/HistorialPartidas.css">
    <link rel="icon" href="imagenes/imgPestaña.png">
    
</head>
<?php
include_once '../../Negocio/autenticado.php';
include_once '../../Negocio/cabecera.php';
?>
<body class="Historial">
   

    <main class="historial">
        <article class="container">
            <h2>Historial de Partidas</h2>
            <table id="tablaHistorial">
                <thead>
                    <tr>
                        <th># Partida</th>
                        <th>Jugadores</th>
                        <th>Puntuaciones</th>
                        <th>Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Franco, Victoria, Rodigo</td>
                        <td>140 - 122 - 135</td>
                        <td>25/08/2025</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Rodigo, Franco</td>
                        <td>130 - 119</td>
                        <td>23/08/2025</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Leydi, Luna</td>
                        <td>110 - 125</td>
                        <td>11/07/2025</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Mauro, Pepe</td>
                        <td>98 - 110</td>
                        <td>09/07/2025</td>
                    </tr>
                </tbody>
            </table>
        </article>
    </main>
    <script src="../JS/historial.js"></script>
</body>
</html>
