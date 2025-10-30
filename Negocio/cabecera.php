<?php
require_once '../../Negocio/usuario.php';
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

// Obtener datos del usuario desde la sesión o  los valores por defecto
$usuario = isset($_SESSION["usuario"]) ? $_SESSION["usuario"] : null;
$nombre = isset($_SESSION['nombre']) ? $_SESSION['nombre'] : "Invitado";
$imagen = isset($_SESSION['imagen_perfil']) ? $_SESSION['imagen_perfil'] : "https://i.imgur.com/dI9Sv1L.png";
?>

<header class="barra-superior">
    <section class="Usuario">
        <!-- Imagen del usuario -->
        <img class="img-Usuario" src="<?php echo $imagen; ?>" alt="Foto del Usuario">
        
        <!-- Nombre y enlaces -->
        <aside class="NombreyAjustes">
            <h5 class="nombre-Usuario"><?php echo htmlspecialchars($nombre); ?></h5>
            <?php if ($usuario): ?>
                <a href="Ajustes.php" class="ajustes">Ajustes</a>
            <?php else: ?>
                <a href="login.php" class="login">Iniciar Sesión</a>
            <?php endif; ?>
        </aside>
    </section>

    <!-- Logo Draftosaurus como botón (envuelto en <a>) -->
    <a href="Draftosaurus.php">
        <img src="https://i.imgur.com/Elnz5fv.png" alt="Logo Draftosaurus" class="logo-central">
    </a>

    <!-- Logo Teknova (sin cambios) -->
    <img src="https://i.imgur.com/lNgoRWb.png" alt="Logo Teknova" class="logo-teknova">
</header>
