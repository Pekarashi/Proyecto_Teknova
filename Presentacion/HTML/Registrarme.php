<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Registro</title>
  <link rel="stylesheet" href="../CSS/Styles_Base.css">
  <link rel="stylesheet" href="../CSS/Login.css">
</head>
<?php
include_once 'cabecera.php';
?>
<body class="login-body">
    
  <main class="login-container">
    <form class="login-form" action="../../Negocio/registrame.php" method="POST">
      <h2>REGISTRARSE</h2>

      <label for="nombre">Nombre</label>
      <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" required>

      <label for="correo">Correo electrónico</label>
      <input type="email" id="correo" name="correo" placeholder="Ingresa tu correo" required>

      <label for="password">Contraseña</label>
      <input type="password" id="password" name="password" placeholder="Crea tu contraseña" required>

      <button type="submit">REGISTRAR</button>
    </form>
  </main>
</body>
</html>
