document.addEventListener("DOMContentLoaded", async () => {
  await cargarDinosaurios(); // Cargar dinos desde DB

  const tableros = document.querySelectorAll(".tablero-jugador");

  tableros.forEach(tablero => {
      const listaDinos = tablero.querySelector(".listaDinos");
      const listaDinos2 = tablero.querySelector(".listaDinos2");

      if (!listaDinos || !listaDinos2) return;

      // Limpiar contenedores
      listaDinos.innerHTML = "";
      listaDinos2.innerHTML = "";

      // Crear dinos aleatorios (3 por jugador como ejemplo)
      const jugadorDinos1 = Array.from({length:3}, () => dinosauriosDisponibles[Math.floor(Math.random() * dinosauriosDisponibles.length)]);
      const jugadorDinos2 = Array.from({length:3}, () => dinosauriosDisponibles[Math.floor(Math.random() * dinosauriosDisponibles.length)]);

      // Insertar dinos en el DOM
      jugadorDinos1.forEach(dino => {
          const img = document.createElement("img");
          img.src = dino.imagen;
          img.alt = dino.tipo_dinosaurio;
          img.classList.add("Dinos");
          listaDinos.appendChild(img);
      });

      jugadorDinos2.forEach(dino => {
          const img = document.createElement("img");
          img.src = dino.imagen;
          img.alt = dino.tipo_dinosaurio;
          img.classList.add("Dinos");
          listaDinos2.appendChild(img);
      });

      // --- Ahora que los dinos están en el DOM, agregamos los eventos ---

      let puntos = 0;
      let dinoSeleccionado = null;
      let recintosDinos = {};

      const puntosElemento = tablero.querySelector(".puntos");
      const dado = tablero.querySelector(".DinoDado");
      const toggleDinos = tablero.querySelector(".toggleDinos");
      const toggleDinos2 = tablero.querySelector(".toggleDinos2");
      const btnCerrar = tablero.querySelector(".cerrar");

      const imagenesDado = [
          "https://i.imgur.com/aejOyBz.png",
          "https://i.imgur.com/J62cPcN.png",
          "https://i.imgur.com/Wv4kiqA.png",
          "https://i.imgur.com/YR2y6EB.png",
          "https://i.imgur.com/BC6AkWf.png",
          "https://i.imgur.com/3Fx3gf0.png"
      ];

      function mostrarPuntos() { puntosElemento.textContent = puntos; }
      function tirarDado() {
          const random = Math.floor(Math.random()*6);
          dado.innerHTML = `<img src="${imagenesDado[random]}" alt="cara del dado">`;
      }

      if(dado) dado.addEventListener("click", tirarDado);
      if(toggleDinos && toggleDinos2){
          toggleDinos.addEventListener("click", ()=>{ toggleDinos2.style.display="flex"; });
      }
      if(btnCerrar && toggleDinos2){
          btnCerrar.addEventListener("click",(e)=>{ e.preventDefault(); toggleDinos2.style.display="none"; });
      }

      // Selección de dinosaurios
      const dinos = tablero.querySelectorAll(".listaDinos .Dinos, .listaDinos2 .Dinos");
      dinos.forEach(dino=>{
          dino.addEventListener("click", function(){
              dinos.forEach(d=>d.classList.remove("dino-seleccionado"));
              this.classList.add("dino-seleccionado");
              dinoSeleccionado = this;
          });
      });

      // Colocar dinos en recintos
      const recintos = tablero.querySelectorAll(".Buscarecinto");
      recintos.forEach(recinto=>{
          recinto.addEventListener("click", function(){
              if(!dinoSeleccionado) return;
              recinto.appendChild(dinoSeleccionado);
              recintosDinos[recinto.className] = recintosDinos[recinto.className] || [];
              recintosDinos[recinto.className].push(dinoSeleccionado);
              dinoSeleccionado.classList.remove("dino-seleccionado");
              dinoSeleccionado = null;
              puntos += 1; // Lógica de puntos
              mostrarPuntos();
          });
      });

      mostrarPuntos();
  });
});
