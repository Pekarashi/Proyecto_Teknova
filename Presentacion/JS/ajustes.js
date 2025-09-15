// ELEMENTOS DEL DOM //
let usuarioImg = document.querySelector(".img-Usuario");
let usuarioNombre = document.querySelector(".nombre-Usuario");
let editarPerfil = document.getElementById("editarPerfil");
let seccionPerfil = document.getElementById("perfil");
let opciones = document.querySelectorAll(".opcion");
let inputNombre = document.getElementById("nuevoNombre");
let botonGuardar = document.getElementById("guardar");

// ABRIR y CERRAR SECCIÓN DE PERFIL //
editarPerfil.addEventListener("click", function(e){
    e.preventDefault();
    if(seccionPerfil.style.display === "none"){
        seccionPerfil.style.display = "block";
    } else {
        seccionPerfil.style.display = "none";
    }
});
// CAMBIAR IMAGEN DE PERFIL //
opciones.forEach(function(img){
    img.addEventListener("click", function(){
        usuarioImg.src = this.src;
    });
});
// GUARDAR NUEVO NOMBRE //
botonGuardar.addEventListener("click", function(){
    if(inputNombre.value.trim() !== ""){
        usuarioNombre.innerText = inputNombre.value;
    }
    alert("Cambios guardados");
});
