<?php
require_once("../Datos/solicitudes.php");
require_once("usuario.php");
session_start();

$correo = $_POST['usuario'] ?? '';
$contrasenia = $_POST['password'] ?? '';

if (!filter_var($correo, FILTER_VALIDATE_EMAIL)) {
    $error = urlencode("Usuario o contraseña no válido");
    header("Location: ../Presentacion/HTML/login.php?error=$error");
    exit();
}

$solicitudes = new Solicitudes();
$usuario = $solicitudes->login($correo, $contrasenia);

if ($usuario instanceof Usuario) {
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
