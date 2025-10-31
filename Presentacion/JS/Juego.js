document.addEventListener("DOMContentLoaded", () => {
  // MAPA DE RECINTOS Y PUNTAJES
  var mapa = {
    "recinto-a": 2, 
    "recinto-b": 10, 
    "recinto-c": 4, 
    "recinto-d": 18, 
    "recinto-e": 8, 
    "recinto-f": 20,

    "recinto-g": 1, 
    "recinto-h": 3, 
    "recinto-i": 3,

    "recinto-j": 2.5, 
    "recinto-k": 2.5, 
    "recinto-l": 2.5, 
    "recinto-m": 2.5, 
    "recinto-n": 2.5, 
    "recinto-o": 2.5,

    "espacio-4": 1, 
    "espacio-5": 1, 
    "espacio-6": 1,

    "recinto-p": 7,
    "recinto-q": 1, 
    "recinto-r": 10, 
    "recinto-s": 3, 
    "recinto-t": 18, 
    "recinto-u": 8, 
    "recinto-v": 20,
    
    "recinto-w": 7
  };

   // VARIABLES GLOBALES
  var puntos = 0;
  window.dinoSeleccionado = null;
  var recintosDinos = {};
  var puntosTrioFrondoso = 0;
  var parejasAmorActuales = 0;
  var caraActual = null; 

  // mostrar puntos & alertas
  function mostrarPuntos() {
    var puntosElemento = document.querySelector(".DinoPuntos");
    if (puntosElemento) puntosElemento.textContent = "PUNTOS: " + puntos;
  }
  function alertaError(mensaje) {
    alert("" + mensaje);
  }

  //DADO 
  const dado = document.getElementById("dado");
  const imagenesDado = [
    "https://i.imgur.com/aejOyBz.png", // 0 Bosque
    "https://i.imgur.com/BC6AkWf.png", // 1 Llanura
    "https://i.imgur.com/YR2y6EB.png", // 2 Baños (derecha)
    "https://i.imgur.com/Wv4kiqA.png", // 3 Cafetería (izquierda)
    "https://i.imgur.com/J62cPcN.png",
    "https://i.imgur.com/3Fx3gf0.png"
  ];

  // crear texto de regla si no existe
  (function crearReglaActualUI() {
    if (!dado) return;
    if (!document.getElementById("regla-actual")) {
      const divRegla = document.createElement("div");
      divRegla.id = "regla-actual";
      divRegla.style.textAlign = "center";
      divRegla.style.marginTop = "8px";
      divRegla.style.fontWeight = "600";
      divRegla.style.fontSize = "14px";
      divRegla.textContent = "Tira el dado para ver la restricción";
      dado.parentNode.insertBefore(divRegla, dado.nextSibling);
    }
  })();

  function tirarDado() {
    if (!dado) return;
    const random = Math.floor(Math.random() * 6); 
    caraActual = random;
    dado.innerHTML = `<img src="${imagenesDado[random]}" alt="cara del dado">`;

    const reglas = [
      "Bosque : colocar solo en Bosque, Trío Frondoso o Rey de la Selva.",
      "Llanura : colocar solo en Pradera del Amor, Pradera de las Diferencias o Isla Solitaria.",
      "Baños : colocar solo en recintos de la derecha.",
      "Cafetería : colocar solo en recintos de la izquierda."
    ];

    const textoRegla = document.getElementById("regla-actual");
    if (textoRegla) textoRegla.textContent = "Restricción actual: " + reglas[random];

    aplicarRestriccion(random);
    console.log("Regla del dado:", reglas[random]);
  }
  if (dado) dado.addEventListener("click", tirarDado);

  
   // DEFINICIONES DE ZONAS
   
  const zonaBosque = ["recinto-a","recinto-b","recinto-c","recinto-d","recinto-e","recinto-f"];
  const zonaTrio = ["recinto-g","recinto-h","recinto-i"];
  const zonaPraderaAmor = ["recinto-j","recinto-k","recinto-l","recinto-m","recinto-n","recinto-o"];
  const zonaPraderaDiferencias = ["recinto-q","recinto-r","recinto-s","recinto-t","recinto-u","recinto-v"];
  const recintoRey = ["recinto-p"];
  const recintoIsla = ["recinto-w"];
  const izquierda = ["recinto-a","recinto-b","recinto-c","recinto-d","recinto-e","recinto-f","recinto-g","recinto-h","recinto-i","recinto-j","recinto-k","recinto-l","espacio-4","espacio-5","espacio-6"];
  const derecha = ["recinto-m","recinto-n","recinto-o","recinto-p","recinto-q","recinto-r","recinto-s","recinto-t","recinto-u","recinto-v","recinto-w"];

 
  function desbloquearRecintosLista(listaIds) {
    listaIds.forEach(id => {
      // intento por clase 
      let recinto = document.querySelector(`.${id}`);
      if (!recinto) recinto = document.querySelector(`#${id}`);
      if (recinto) {
        recinto.classList.remove("bloqueado");
        recinto.style.pointerEvents = "auto";
        recinto.style.opacity = "1";
      }
    });
  }
   // APLICAR RESTRICCION 
  function aplicarRestriccion(cara) {
    //bloquearTodosRecintos();

    if (cara === 0) {
      const validos = zonaBosque.concat(zonaTrio, recintoRey);
      desbloquearRecintosLista(validos);
      return;
    }
    if (cara === 1) {
      const validos = zonaPraderaAmor.concat(zonaPraderaDiferencias, recintoIsla);
      desbloquearRecintosLista(validos);
      return;
    }
    if (cara === 2) {
      desbloquearRecintosLista(derecha);
      return;
    }
    if (cara === 3) {
      desbloquearRecintosLista(izquierda);
      return;
    }

    // fallback: desbloquear todos
    document.querySelectorAll(".Buscarecinto").forEach(r => {
      r.classList.remove("bloqueado");
      r.style.pointerEvents = "auto";
      r.style.opacity = "1";
    });
  }

  function colocarEnRecintoPorClase(recintoClase) {
    if (!window.dinoSeleccionado) return false;
    // intento por clase o id (robusto)
    let recinto = document.querySelector(`.${recintoClase}`);
    if (!recinto) recinto = document.querySelector(`#${recintoClase}`);
    if (!recinto) return false;

    const nombreDino = window.dinoSeleccionado.dataset.nombre;
    if (!recintosDinos[recintoClase]) recintosDinos[recintoClase] = [];

    // chequeos del dado 
    if (caraActual !== null) {
      if (caraActual === 0) {
        const validos = zonaBosque.concat(zonaTrio, recintoRey);
        if (!validos.includes(recintoClase)) { alertaError("No podés colocar aquí por la restricción del dado (Bosque)."); return false; }
      }
      if (caraActual === 1) {
        const validos = zonaPraderaAmor.concat(zonaPraderaDiferencias, recintoIsla);
        if (!validos.includes(recintoClase)) { alertaError("No podés colocar aquí por la restricción del dado (Llanura)."); return false; }
      }
      if (caraActual === 2) {
        if (!derecha.includes(recintoClase)) { alertaError("No podés colocar aquí por la restricción del dado (Baños)."); return false; }
      }
      if (caraActual === 3) {
        if (!izquierda.includes(recintoClase)) { alertaError("No podés colocar aquí por la restricción del dado (Cafetería)."); return false; }
      }
    }

    // BOSQUE DE LA IGUALDAD
    if (zonaBosque.includes(recintoClase)) {
      let tipoExistente = null;
      zonaBosque.forEach(c => {
        const d = document.querySelector(`.${c} .Dinos`) || document.querySelector(`#${c} .Dinos`);
        if (d) tipoExistente = d.dataset.nombre;
      });
      if (tipoExistente && nombreDino !== tipoExistente) { alertaError("En el Bosque solo dinosaurios del mismo tipo."); return false; }

      recinto.appendChild(window.dinoSeleccionado);
      recintosDinos[recintoClase].push(window.dinoSeleccionado);
      finalizarColocacion(recintoClase);
      puntos += mapa[recintoClase] || 0;
      mostrarPuntos();
      return true;
    }

    // TRÍO FRONDOSO
    if (zonaTrio.includes(recintoClase)) {
      recinto.appendChild(window.dinoSeleccionado);
      recintosDinos[recintoClase].push(window.dinoSeleccionado);
      finalizarColocacion(recintoClase);

      const tipos = [];
      zonaTrio.forEach(c => {
        const d = document.querySelector(`.${c} .Dinos`) || document.querySelector(`#${c} .Dinos`);
        if (d) tipos.push(d.dataset.nombre);
      });

      if (tipos.length === 3) {
        const unicos = [...new Set(tipos)];
        if (unicos.length === 3 && puntosTrioFrondoso === 0) {
          puntosTrioFrondoso = zonaTrio.reduce((acc, c) => acc + (mapa[c] || 0), 0);
          puntos += puntosTrioFrondoso;
        } else puntos += mapa[recintoClase] || 0;
      } else puntos += mapa[recintoClase] || 0;

      mostrarPuntos();
      return true;
    }

    // PRADERA DEL AMOR
    if (zonaPraderaAmor.includes(recintoClase)) {
      let dinosAntes = [];
      zonaPraderaAmor.forEach(c => {
        const d = document.querySelector(`.${c} .Dinos`) || document.querySelector(`#${c} .Dinos`);
        if (d) dinosAntes.push(d.dataset.nombre);
      });
      let contAntes = {};
      dinosAntes.forEach(n => contAntes[n] = (contAntes[n] || 0) + 1);
      let paresAntes = Object.values(contAntes).reduce((s, v) => s + Math.floor(v / 2), 0);

      recinto.appendChild(window.dinoSeleccionado);
      recintosDinos[recintoClase].push(window.dinoSeleccionado);
      finalizarColocacion(recintoClase);

      let dinosDesp = [];
      zonaPraderaAmor.forEach(c => {
        const d = document.querySelector(`.${c} .Dinos`) || document.querySelector(`#${c} .Dinos`);
        if (d) dinosDesp.push(d.dataset.nombre);
      });
      let contDesp = {};
      dinosDesp.forEach(n => contDesp[n] = (contDesp[n] || 0) + 1);
      let paresDesp = Object.values(contDesp).reduce((s, v) => s + Math.floor(v / 2), 0);

      const nuevasParejas = paresDesp - paresAntes;
      if (nuevasParejas > 0) puntos += nuevasParejas * 5;

      mostrarPuntos();
      return true;
    }

    // PRADERA DE LAS DIFERENCIAS
    if (zonaPraderaDiferencias.includes(recintoClase)) {
      const tiposColocados = [];
      zonaPraderaDiferencias.forEach(c => {
        const d = document.querySelector(`.${c} .Dinos`) || document.querySelector(`#${c} .Dinos`);
        if (d) tiposColocados.push(d.dataset.nombre);
      });
      if (tiposColocados.includes(nombreDino)) { alertaError("No podés repetir tipo en la Pradera de las Diferencias."); return false; }

      recinto.appendChild(window.dinoSeleccionado);
      recintosDinos[recintoClase].push(window.dinoSeleccionado);
      finalizarColocacion(recintoClase);
      puntos += mapa[recintoClase] || 0;
      mostrarPuntos();
      return true;
    }

    // REY DE LA SELVA
    if (recintoRey.includes(recintoClase)) {
      const yaTiene = document.querySelector(`.${recintoClase} .Dinos`) || document.querySelector(`#${recintoClase} .Dinos`);
      if (yaTiene) { alertaError("El Rey de la Selva ya tiene un dinosaurio."); return false; }

      recinto.appendChild(window.dinoSeleccionado);
      recintosDinos[recintoClase].push(window.dinoSeleccionado);
      const tipoRey = nombreDino;
      finalizarColocacion(recintoClase);

      let conteo = {};
      Object.values(recintosDinos).forEach(arr => arr.forEach(dEl => {
        if (!dEl) return;
        const n = dEl.dataset.nombre;
        conteo[n] = (conteo[n] || 0) + 1;
      }));
      const maxCantidad = Math.max(...Object.values(conteo));
      if (conteo[tipoRey] === maxCantidad) puntos += 7;
      else puntos += mapa[recintoClase] || 0;

      mostrarPuntos();
      return true;
    }

    // ISLA SOLITARIA
    if (recintoIsla.includes(recintoClase)) {
      const yaTiene = document.querySelector(`.${recintoClase} .Dinos`) || document.querySelector(`#${recintoClase} .Dinos`);
      if (yaTiene) { alertaError("La Isla Solitaria ya tiene un dinosaurio."); return false; }

      recinto.appendChild(window.dinoSeleccionado);
      recintosDinos[recintoClase].push(window.dinoSeleccionado);
      const tipoIsla = nombreDino;
      finalizarColocacion(recintoClase);

      let conteoIsla = {};
      Object.values(recintosDinos).forEach(arr => arr.forEach(dEl => {
        if (!dEl) return;
        const n = dEl.dataset.nombre;
        conteoIsla[n] = (conteoIsla[n] || 0) + 1;
      }));

      if (conteoIsla[tipoIsla] === 1) puntos += 7;
      else puntos += mapa[recintoClase] || 0;

      mostrarPuntos();
      return true;
    }

    recinto.appendChild(window.dinoSeleccionado);
    recintosDinos[recintoClase].push(window.dinoSeleccionado);
    finalizarColocacion(recintoClase);
    puntos += mapa[recintoClase] || 0;
    mostrarPuntos();
    return true;
  }

   // Finalizar colocación común
  function finalizarColocacion(recintoClase) {
    if (window.dinoSeleccionado) {
      window.dinoSeleccionado.classList.remove("dino-seleccionado");
      window.dinoSeleccionado.dataset.recinto = recintoClase;
    }
    window.dinoSeleccionado = null;
  }

   // SELECCIÓN DE DINOSAURIOS (UI)
  const toggleDinos = document.getElementById("toggleDinos");
  const toggleDinos2 = document.getElementById("toggleDinos2");
  const btnCerrar = document.getElementById("cerrar");

  if (toggleDinos && toggleDinos2) {
    toggleDinos.addEventListener("click", function() { toggleDinos2.style.display = "flex"; });
  }
  if (btnCerrar && toggleDinos2) {
    btnCerrar.addEventListener("click", function(e){ e.preventDefault(); toggleDinos2.style.display = "none"; });
  }

  // re-query para asegurarnos que existan (si dom cambió)
  var dinos = document.querySelectorAll("#listaDinos .Dinos, #listaDinos2 .Dinos");
  dinos.forEach(function(dino) {
    dino.addEventListener("click", function() {
      dinos.forEach(d => d.classList.remove("dino-seleccionado"));
      this.classList.add("dino-seleccionado");
      window.dinoSeleccionado = this;
      console.log("Dinosaurio seleccionado:", this.dataset.nombre);
    });
  });

   // COLOCACIÓN POR CLIC (usa colocarEnRecintoPorClase)
  var recintosNodo = document.querySelectorAll(".Buscarecinto");
  recintosNodo.forEach(function(recintoEl) {
    recintoEl.addEventListener("click", function(e) {
      // localizar nombre lógico del recinto (ej 'recinto-a' o 'espacio-4')
      const recintoClase = Array.from(recintoEl.classList).find(c => c.startsWith("recinto") || c.startsWith("espacio")) || recintoEl.id;
      if (!recintoClase) return;

      if (recintoEl.classList.contains("bloqueado")) {
        alertaError("🚫 No podés colocar aquí por la restricción del dado.");
        return;
      }

      if (!window.dinoSeleccionado) {
        alertaError("Debes seleccionar un dinosaurio antes de colocarlo.");
        return;
      }

      colocarEnRecintoPorClase(recintoClase);
    });
  });

  /** ==========================
   * INICIAL
   * ========================= */
  mostrarPuntos();
  console.log("Juego.js ");
});
