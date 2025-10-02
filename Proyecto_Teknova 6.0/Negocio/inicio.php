<?php
session_start();
if (!isset($_SESSION["usuario_id"])) {
    header("Location: ../Presentacion/HTML/login.html");
    exit();
}else{
    header("Location: ../../Presentacion/HTML/Draftosaurus.html");
    exit();
}
?>
