<?php
include "../Datos/solicitudes.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = trim($_POST["nombre"]);
    $correo = trim($_POST["correo"]);
    $password = $_POST["password"];

    // Función para mostrar alerta y regresar a la página de registro
    function alertaError($mensaje) {
        echo "<script>alert('$mensaje'); window.history.back();</script>";
        exit();
    }

    // Validar campos vacíos
    if (empty($nombre) || empty($correo) || empty($password)) {
        alertaError("Por favor, completa todos los campos.");
    }

    // Validar longitud del nombre 
    if (strlen($nombre) < 3 || strlen($nombre) > 30) {
        alertaError("El nombre debe tener entre 3 y 20 caracteres.");
    }

    // Validar correo Gmail
    if (!filter_var($correo, FILTER_VALIDATE_EMAIL) || !preg_match('/@gmail\.com$/', $correo)) {
        alertaError("Debes ingresar un correo Gmail válido.");
    }

    // Validar contraseña 
    if (strlen($password) < 6 || strlen($password) > 20) {
        alertaError("La contraseña debe tener entre 6 y 20 caracteres.");
    }

    // Registrar usuario
    $solicitud = new Solicitudes();
    $ok = $solicitud->registro($nombre, $correo, $password);

    if ($ok) {
        // Redirigir al login con mensaje de éxito
        echo "<script>alert('Usuario registrado correctamente'); window.location.href='../Presentacion/HTML/login.php';</script>";
        exit();
    } else {
        // Error al registrar 
        alertaError("Error al registrar el usuario. Intenta con otro correo.");
    }
}
?>
