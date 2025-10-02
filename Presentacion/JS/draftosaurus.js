const sidebar = document.getElementById("sidebar");
        const toggleBtn = document.getElementById("toggleBtn");

        toggleBtn.onclick = () => {
       // Alterna la clase "active" en el sidebar //
        sidebar.classList.toggle("active");

       // Cambia el símbolo del botón  //
        toggleBtn.textContent = sidebar.classList.contains("active") ? "<" : ">";
        toggleBtn.classList.toggle("active");
        };


