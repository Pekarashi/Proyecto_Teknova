<?php
include "../Datos/solicitudes.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = trim($_POST["nombre"]);
    $correo = trim($_POST["correo"]);
    $password = $_POST["password"];

    if (empty($nombre) || empty($correo) || empty($password)) {
        echo "Por favor, completa todos los campos.";
    } else {

        $solicitud = new Solicitudes();
        $ok = $solicitud->registro($nombre, $correo, $password);
        if($ok){
            header("Location: ../Presentacion/HTML/login.php?error=$error");
        exit();
        }else{ 
            //redireccionar a pagina de registro con mensaje de error
    }
}
}
?>
