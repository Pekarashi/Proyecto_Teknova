<?php
session_start();
$_SESSION=array();
session_destroy();
header("Location: ../Presentacion/HTML/login.php");
exit();
?>