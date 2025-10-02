<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Iniciar Sesión</title>
  <link rel="stylesheet" href="../CSS/Styles_Base.css">
  <link rel="stylesheet" href="../CSS/Login.css">
  <link rel="icon" href="imagenes/imgPestaña.png">
</head>
<body class="inicio">
  <!-- Cabecera -->
  <?php include_once 'cabecera.php'; ?>

  <!-- Botón toggle (si lo usás) -->
  <button class="toggle-btn" id="toggleBtn">&gt;</button>

  <!-- Contenedor del login -->
  <main class="login-container">
    <form class="login-form" action="../../Negocio/validar_login.php" method="POST">
      <h2>INICIAR SESIÓN</h2>
      
      <label for="email">Correo electrónico</label>
      <input type="email" id="email" name="usuario" placeholder="Ingresa tu correo" required>

      <label for="password">Contraseña</label>
      <input type="password" id="password" name="password" placeholder="Ingresa tu contraseña" required>

      <button type="submit">ENTRAR</button>

      <p>¿No tienes cuenta?</p>
      <a href="Registrarme.php" class="boton-registro">Registrarse</a>
    </form>
  </main>

  <!-- Script para mostrar alertas de error -->
  <script>
    <?php if(isset($_GET['error'])): ?>
      alert("<?php echo htmlspecialchars($_GET['error']); ?>");
    <?php endif; ?>
  </script>
</body>
</html>
