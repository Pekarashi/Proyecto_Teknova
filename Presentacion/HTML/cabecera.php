<?php
require_once '../../Negocio/usuario.php';
// Solo inicia sesión si no hay una activa
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}
$usuario = null;
if (isset($_SESSION["usuario"])) {
    $usuario = $_SESSION["usuario"];
}
?>

<header class="barra-superior">
    <section class="Usuario">
        <img class="img-Usuario" src="https://i.imgur.com/dI9Sv1L.png" alt="Foto del Usuario">
        <aside class="NombreyAjustes">
            <h5 class="nombre-Usuario">
                <?php if ($usuario) echo $usuario->getNombre(); ?>
            </h5>
            <a href="Ajustes.php" class="ajustes">Ajustes</a>
            <a href="login.php" class="login">login</a>
        </aside>
    </section>
    <img src="https://i.imgur.com/Elnz5fv.png" alt="Logo Draftosaurus" class="logo-central">
    <img src="https://i.imgur.com/lNgoRWb.png" alt="Logo Teknova" class="logo-teknova">
</header>
