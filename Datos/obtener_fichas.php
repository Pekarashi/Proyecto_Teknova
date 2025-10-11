<?php
/** 
 * obtener_fichas.php
 * Este archivo se encarga de traer todas las fichas de dinosaurios desde la base de datos
 * y devolverlas en formato JSON para que el juego pueda usarlas.
 */

// Incluimos la conexión a la base de datos
include_once 'conexion.php';

// Indicamos que lo que vamos a devolver es JSON y con codificación UTF-8
header("Content-Type: application/json; charset=UTF-8");

// Preparamos la consulta SQL para traer el id, el tipo de dinosaurio y la imagen
$sql = "SELECT ficha_id AS id, tipo_dinosaurio AS especie, imagen FROM ficha";

// Ejecutamos la consulta
$resultado = mysqli_query($conexion, $sql);

// Creamos un array vacío donde vamos a guardar las fichas
$fichas = [];

if ($resultado) {
    // Recorremos cada fila que devuelve la consulta y la agregamos al array
    while ($fila = mysqli_fetch_assoc($resultado)) {
        $fichas[] = $fila; // Guardamos cada dinosaurio
    }
} else {
    // Si hubo un error en la consulta SQL, lo devolvemos como JSON
    echo json_encode(["error" => mysqli_error($conexion)]);
    exit; // Salimos del script
}

// Finalmente, devolvemos todas las fichas como JSON
echo json_encode($fichas);
