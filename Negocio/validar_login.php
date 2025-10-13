<?php
require_once("../Datos/solicitudes.php");
require_once("Usuario.php");
session_start();

// Recibir datos del formulario
$correo = $_POST['usuario'] ?? '';
$contrasenia = $_POST['password'] ?? '';

// Validar correo
if (!filter_var($correo, FILTER_VALIDATE_EMAIL)) {
    $error = urlencode("Usuario o contraseña no válido");
    header("Location: ../Presentacion/HTML/login.php?error=$error");
    exit();
}

// Validar longitud del correo (mínimo 5, máximo 50 caracteres)
if (strlen($correo) < 5 || strlen($correo) > 30) {
    $error = urlencode("El correo debe tener entre 5 y 30 caracteres");
    header("Location: ../Presentacion/HTML/login.php?error=$error");
    exit();
}

// Validar longitud de la contraseña (mínimo 6, máximo 20 caracteres)
if (strlen($contrasenia) < 6 || strlen($contrasenia) > 20) {
    $error = urlencode("La contraseña debe tener entre 6 y 20 caracteres");
    header("Location: ../Presentacion/HTML/login.php?error=$error");
    exit();
}

// Intentar loguear al usuario
$solicitudes = new Solicitudes();
$usuario = $solicitudes->login($correo, $contrasenia);

if ($usuario instanceof Usuario) {
    // Guardar datos en sesión
    $_SESSION["usuario"] = $usuario;
    $_SESSION["usuario_id"] = $usuario->getUsuarioId();
    $_SESSION["nombre"] = $usuario->getNombre();
    $_SESSION["imagen_perfil"] = $usuario->getImagenPerfil() ?? "https://i.imgur.com/dI9Sv1L.png";
    header("Location: ../Presentacion/HTML/Draftosaurus.php");
    exit();
} else {
    $error = urlencode("Usuario o contraseña incorrectos");
    header("Location: ../Presentacion/HTML/login.php?error=$error");
    exit();
}
