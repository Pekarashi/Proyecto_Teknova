<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Puntuaciones</title>
    <link rel="stylesheet" href="../CSS/Styles_Base.css">
    <link rel="stylesheet" href="../CSS/Puntuaciones.css">
</head>
<?php
include_once '../../Negocio/autenticado.php';
include_once 'cabecera.php';
?>
<body>
    <section class="Puntuaciones">
        <h1 class="TABLA">TABLA DE PUNTUACIONES</h1>
        <table>
            <tr>
                <th>Posicion</th>
                <th>Nombre</th>
                <th>Puntos</th>
                <th>Fecha</th>
            </tr>
            <tr class="primero">
                <td>1</td>
                <td>flor</td>
                <td>1000</td>
                <td>15/12/2023</td>
            </tr>
            <tr class="segundo">
                <td>2</td>
                <td>Rocio</td>
                <td>850</td>
                <td>14/12/2023</td>
            </tr>
            <tr class="tercero">
                <td>3</td>
                <td>Ale</td>
                <td>720</td>
                <td>13/12/2023</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Tadeo</td>
                <td>650</td>
                <td>12/12/2023</td>
            </tr>
            <tr>
                <td>5</td>
                <td>Vicky</td>
                <td>500</td>
                <td>11/12/2023</td>
            </tr>
            <tr>
                <td>6</td>
                <td>Rodrigo</td>
                <td>450</td>
                <td>10/12/2023</td>
            </tr>
            <tr>
                <td>7</td>
                <td>will</td>
                <td>400</td>
                <td>09/12/2023</td>
            </tr>
        </table>
        <div class="total-jugadores">
            <strong>Total de jugadores: 10</strong>
        </div>
        <button onclick="alert('¡Esta función todavía no está implementada!')" 
                class="boton-actualizar">
                Actualizar Puntuaciones
        </button>
    </section>
</body>
</html>
