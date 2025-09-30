<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Draftosaurus - Ajustes</title>
    <link rel="stylesheet" href="../CSS/Styles_Base.css">
    <link rel="stylesheet" href="../CSS/Ajustes.css">
    <link rel="icon" href="imagenes/imgPestaña.png">
</head>    
<?php
include_once 'autenticado.php';
include_once 'cabecera.php';
?>
<body class="Inicio-Ajustes">


    <!--Menu de Ajustes-->
    <main id="Ajustes">
        <nav class="columna-Bajustes">
            <a href="Reglas.php" class="Ajustes">Reglas</a>
            <a href="#" id="editarPerfil" class="Ajustes">Editar Perfil</a>
            <a href="../../Negocio/CerrarSesion.php" class="Ajustes">Cerrar Sesion</a>
            <a href="Draftosaurus.php" class="Ajustes">Volver al Inicio</a>
        </nav>

        <!-- Sección para editar perfil -->
        <section id="perfil" style="display:none; margin-top:20px;">
            <div class="contenedor">
            <h4>Editar Perfil</h4>

            <p>Elige tu nueva imagen de perfil:</p>
            <figure class="opciones-imagenes">
                <img src="https://i.imgur.com/dI9Sv1L.png" class="opcion" alt="Imagen 1">
                <img src="https://i.imgur.com/pWERaQp.png" class="opcion" alt="Imagen 2">
                <img src="https://i.imgur.com/EFIGa8n.png" class="opcion" alt="Imagen 3">
                <img src="https://i.imgur.com/vmu94wH.png" class="opcion" alt="Imagen 4">
                <img src="https://i.imgur.com/QR48PuX.png" class="opcion" alt="Imagen 5">
            </figure>

            <p>Nuevo nombre:</p>
            <input type="text" id="nuevoNombre" placeholder="Escribe tu nombre">
            <br>
            <button id="guardar">Guardar Cambios</button>
            <br>
            </div>
        </section>
    </main>  

    <script src="../JS/ajustes.js"></script>      
</body>
</html>
