<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title data-trad="Partida de Draftosaurus">Partida de Draftosaurus</title>
    <link rel="stylesheet" href="../CSS/Styles_Base.css">
    <link rel="stylesheet" href="../CSS/Juego.css">
    <link rel="icon" href="imagenes/imgPestaña.png">
  </head>

  <?php
  include_once '../../Negocio/autenticado.php';
  include_once '../../Negocio/cabecera.php';
  ?>

  <body class="Partida">
    <article class="Sector-tablero">
      
      <!--ENCABEZADO CON PUNTAJE -->
      <header class="DinoPuntos">
        <span data-trad="PUNTOS:">PUNTOS:</span>
        <span id="puntos">0</span>
      </header>

      <!--TABLERO DE RECINTOS -->
      <section class="recintos"> 
        <aside> 
          <section class="recinto-1">
            <article class="Buscarecinto recinto-a"></article>
            <article class="Buscarecinto recinto-b"></article>
            <article class="Buscarecinto recinto-c"></article>
            <article class="Buscarecinto recinto-d"></article>
            <article class="Buscarecinto recinto-e"></article>
            <article class="Buscarecinto recinto-f"></article>
          </section>
          
          <section class="recinto-2">
            <article class="Buscarecinto recinto-g"></article>
            <article class="Buscarecinto recinto-h"></article>
            <article class="Buscarecinto recinto-i"></article>
          </section>

          <section class="recinto recinto-3">
            <article class="Buscarecinto recinto-j"></article>
            <article class="Buscarecinto recinto-k"></article>
            <article class="Buscarecinto recinto-l"></article>
            <article class="Buscarecinto recinto-m"></article>
            <article class="Buscarecinto recinto-n"></article>
            <article class="Buscarecinto recinto-o"></article>
          </section>
        </aside>

        <article class="Rio">
          <article class="Buscarecinto espacio-4"></article>
          <article class="Buscarecinto espacio-5"></article>
          <article class="Buscarecinto espacio-6"></article>
        </article>
        
        <aside>
          <section class="recinto-7">
            <article class="Buscarecinto recinto-p"></article>
          </section>
        
          <section class="recinto-8">
            <article class="Buscarecinto recinto-q"></article>
            <article class="Buscarecinto recinto-r"></article>
            <article class="Buscarecinto recinto-s"></article>
            <article class="Buscarecinto recinto-t"></article>
            <article class="Buscarecinto recinto-u"></article>
            <article class="Buscarecinto recinto-v"></article>
          </section>
        
          <section class="recinto-9">
            <article class="Buscarecinto recinto-w"></article>
          </section>
        </aside>
      </section>

      <!--CAJA DE DINOSAURIOS + DADO -->
      <section class="toggle-contenedor">
        <img src="https://images.vexels.com/media/users/3/264723/isolated/preview/dd0ea3896edd75f54e62342f8e7e7d85-caja-de-carton-de-dibujos-animados.png" 
             alt="Caja de Dinosaurios" 
             id="toggleDinos" 
             data-trad="Caja de Dinosaurios">
        <aside class="DinoDado" id="dado" data-trad="cara del dado">
          <img src="https://i.imgur.com/aejOyBz.png" alt="cara del dado">
        </aside>
      </section>

      <!--LISTA DE DINOSAURIOS -->
      <dialog id="toggleDinos2">
        <figure class="dinos" id="listaDinos"></figure>
        <figure class="dinos2" id="listaDinos2"></figure>
        <button id="cerrar" data-trad="Cerrar">&times;</button>
      </dialog>

    </article>

    <!--SCRIPTS -->
    <script src="../JS/idioma.js"></script>
    <script src="../JS/dinosaurios.js"></script>
    <script src="../JS/mostrar_dinosaurios_solitario.js"></script>
    <script src="../JS/Juego.js"></script>
  </body>
</html>
