<?php
include_once '../../Negocio/usuario.php';
session_start();
if (!isset($_SESSION["usuario_id"])){
 header(header: "Location: login.php");
 exit();
}
?>