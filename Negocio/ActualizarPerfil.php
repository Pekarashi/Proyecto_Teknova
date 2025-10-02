<?php
session_start();

if (isset($_POST['nuevoNombre']) && isset($_POST['imagen'])) {
    $_SESSION['nombre'] = $_POST['nuevoNombre'];
    $_SESSION['imagen_perfil'] = $_POST['imagen'];

    header("Location: ../Presentacion/HTML/Ajustes.php");
    exit;
} else {
    header("Location: ../Presentacion/HTML/Ajustes.php");
    exit;
}
