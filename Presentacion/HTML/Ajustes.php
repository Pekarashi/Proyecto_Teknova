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
include_once '../../Negocio/autenticado.php';
include_once '../../Negocio/cabecera.php';
?>
<body class="Inicio-Ajustes">

   <main id="Ajustes">
        <nav class="columna-Bajustes">
            <a href="Reglas.php" class="Ajustes" data-trad="Reglas">Reglas</a>
            <a href="#" id="editarPerfil" class="Ajustes" data-trad="Editar Perfil">Editar Perfil</a>
            <a href="../../Negocio/CerrarSesion.php" class="Ajustes" data-trad="Cerrar Sesion">Cerrar Sesión</a>
            <a href="Draftosaurus.php" class="Ajustes" data-trad="Volver al Inicio">Volver al Inicio</a>
            <a href="#" id="cambiarIdioma" class="Ajustes" data-trad="Cambiar idioma">Cambiar idioma</a> 
        </nav>

        <!-- Sección para editar perfil -->
        <section id="perfil" style="display:none; margin-top:20px;">
            <div class="contenedor">
                <h4 data-trad="Editar Perfil">Editar Perfil</h4>

                <!-- FORMULARIO -->
                <form action="../../Negocio/ActualizarPerfil.php" method="POST">
                    
                    <p data-trad="Elige una imagen">Elige una imagen:</p>
                    <figure class="opciones-imagenes">
                        <label>
                            <input type="radio" name="imagen" value="https://i.imgur.com/dI9Sv1L.png" required>
                            <img src="https://i.imgur.com/dI9Sv1L.png" class="opcion" alt="Imagen 1">
                        </label>
                        <label>
                            <input type="radio" name="imagen" value="https://i.imgur.com/pWERaQp.png">
                            <img src="https://i.imgur.com/pWERaQp.png" class="opcion" alt="Imagen 2">
                        </label>
                        <label>
                            <input type="radio" name="imagen" value="https://i.imgur.com/EFIGa8n.png">
                            <img src="https://i.imgur.com/EFIGa8n.png" class="opcion" alt="Imagen 3">
                        </label>
                        <label>
                            <input type="radio" name="imagen" value="https://i.imgur.com/vmu94wH.png">
                            <img src="https://i.imgur.com/vmu94wH.png" class="opcion" alt="Imagen 4">
                        </label>
                        <label>
                            <input type="radio" name="imagen" value="https://i.imgur.com/QR48PuX.png">
                            <img src="https://i.imgur.com/QR48PuX.png" class="opcion" alt="Imagen 5">
                        </label>
                    </figure>

                    <p data-trad="Nuevo nombre">Nuevo nombre:</p>
                    <input type="text" name="nuevoNombre" id="nuevoNombre" placeholder="Escribe tu nombre" data-trad="Escribe tu nombre" required>
                    <br><br>

                    <button type="submit" id="guardar" data-trad="Guardar Cambios">Guardar Cambios</button>
                </form>

            </div>
        </section>
    </main>  

    <script src="../JS/ajustes.js"></script>
    <script src="../JS/idioma.js"></script>      
</body>
</html>
