<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Partida de Draftosaurus</title>
    <link rel="stylesheet" href="../CSS/Styles_Base.css">
    <link rel="stylesheet" href="../CSS/Juego.css">
</head>
<?php
include_once 'autenticado.php';
include_once 'cabecera.php';
?>
<body class="Partida">
  <article class="Sector-tablero">
    <header class="DinoPuntos" type="text" placeholder="PUNTOS:">PUNTOS:</header>
    <section class="recintos"> 
      <aside> 
        <section class="recinto-1">
          <article class="Buscarecinto recinto-a"></article>
          <article class="Buscarecinto recinto-b"></article>
          <article class="Buscarecinto recinto-c"></article>
          <article class="Buscarecinto  recinto-d"></article>
          <article class="Buscarecinto  recinto-e"></article>
          <article class="Buscarecinto  recinto-f"></article>
        </section>
        
        <section class="recinto-2">
          <article class="Buscarecinto  recinto-g"></article>
          <article class="Buscarecinto  recinto-h"></article>
          <article class="Buscarecinto  recinto-i"></article>
        </section>
  
        <section class="recinto recinto-3">
          <article class="Buscarecinto  recinto-j"></article>
          <article class="Buscarecinto  recinto-k"></article>
          <article class="Buscarecinto  recinto-l"></article>
          <article class="Buscarecinto  recinto-m"></article>
          <article class="Buscarecinto  recinto-n"></article>
          <article class="Buscarecinto  recinto-o"></article>
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
      
          <section class="Buscarecinto recinto-9">
          <article class="Buscarecinto recinto-w">
        </article>
        </section>
      </aside>
      
    </section>
    
    <section class="toggle-contenedor">
        <img src="https://images.vexels.com/media/users/3/264723/isolated/preview/dd0ea3896edd75f54e62342f8e7e7d85-caja-de-carton-de-dibujos-animados.png" alt="Caja de Dinosaurios" id="toggleDinos">
        <aside class="DinoDado" id="dado">
            <img src="https://i.imgur.com/aejOyBz.png" alt="cara del dado">
        </aside>
    </section>
    
    <dialog id="toggleDinos2">
        <figure class="dinos" id="listaDinos">
            <img src="https://i.imgur.com/6akD1K2.png" alt="Dinosaurio-4" class="Dinos">
            <img src="https://i.imgur.com/YR61Aub.png" alt="Dinosaurio-5" class="Dinos">
            <img src="https://i.imgur.com/z1WjVCw.png" alt="Dinosaurio-6" class="Dinos">
        </figure>
        <figure class="dinos2" id="listaDinos2">
            <img src="https://i.imgur.com/hYrkrlG.png" alt="Dinosaurio-1" class="Dinos">
            <img src="https://i.imgur.com/VimMp4W.png" alt="Dinosaurio-2" class="Dinos">
            <img src="https://i.imgur.com/tumUHHf.png" alt="Dinosaurio-3" class="Dinos">
        </figure>
        <button id="cerrar">&times;</button>
    </dialog>
  </article>
  <script src="../JS/Juego.js"></script>
</body>
</html>