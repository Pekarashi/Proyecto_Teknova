<?php
session_start(); 
include_once '../Datos/conexion.php'; 

if (isset($_POST['nuevoNombre']) && isset($_POST['imagen'])) {
    // Verifica que el formulario haya mandado un nuevo nombre y una imagen.

    $nuevoNombre = $_POST['nuevoNombre']; 
    $imagen = $_POST['imagen'];           

    $usuario_id = $_SESSION['usuario_id']; 
    

    // Prepara la consulta SQL para cambiar nombre e imagen.
    $sql = "UPDATE usuario 
            SET nombre = ?, imagen = ? 
            WHERE usuario_id = ?";
    
    $stmt = $conexion->prepare($sql); 
    // evitamos inyección SQL.

    if (!$stmt) {
        // Si algo falla al preparar la consulta, mostramos el error.
        die("Error en la preparación: " . $conexion->error);
    }

    // se enlazamos los valores a la consulta: 
    // "s" = string, "i" = entero.
    $stmt->bind_param("ssi", $nuevoNombre, $imagen, $usuario_id);

    if ($stmt->execute()) {
        // Si la consulta se ejecuta bien, también actualizamos la sesión.
        $_SESSION['nombre'] = $nuevoNombre;
        $_SESSION['imagen_perfil'] = $imagen;
    } else {
        // si la consulta falla muetra error .
        die("Error al ejecutar: " . $stmt->error);
    }

    header("Location: ../Presentacion/HTML/Ajustes.php");
    exit;
} else {
    
    header("Location: ../Presentacion/HTML/Ajustes.php");
    exit;
}
