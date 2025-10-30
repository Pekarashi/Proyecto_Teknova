// OBJETO DE TRADUCCIONES
const traducciones = {
    "es": {
        "info_juego": "Información del juego",
        "descripcion_juego": "<strong>Draftosaurus</strong> es un juego de mesa familiar en el que los jugadores construyen su propio parque de dinosaurios. El objetivo principal es atraer la mayor cantidad de visitantes organizando los dinosaurios en distintos recintos, cada uno con reglas específicas para su colocación. Se trata de un juego rápido y sencillo, ideal para 2 a 5 jugadores a partir de 8 años, con partidas que duran aproximadamente 15 minutos. Además, gracias a su dinámica ágil y a la gran variedad de recintos disponibles, cada partida resulta diferente y divertida, lo que aumenta la rejugabilidad. Los jugadores deben tomar decisiones estratégicas al elegir qué dinosaurio colocar y en qué lugar, ya que una buena organización puede marcar la diferencia entre ganar o perder. Es perfecto tanto para familias como para grupos de amigos, ya que combina planificación, interacción y un toque de azar que lo hace emocionante en cada turno.",
        "modo_juego": "Modo de Juego",
        "reglas_juego": "Reglas del juego",
        "puntuaciones": "Puntuaciones",
        "historial": "Historial",
        "editar_perfil": "Editar Perfil",
        "cerrar_sesion": "Cerrar Sesión",
        "volver_inicio": "Volver al Inicio"
    },
    "en": {
        "info_juego": "Game Information",
        "descripcion_juego": "<strong>Draftosaurus</strong> is a family board game where players build their own dinosaur park. The main goal is to attract as many visitors as possible by arranging dinosaurs in different enclosures, each with specific placement rules. It is a fast and simple game, suitable for 2 to 5 players aged 8 and up, with games lasting around 15 minutes. Additionally, thanks to its agile dynamics and the wide variety of enclosures available, each game is different and fun, increasing replayability. Players must make strategic decisions when choosing which dinosaur to place and where, as good organization can make the difference between winning or losing. It is perfect for both families and groups of friends, combining planning, interaction, and a touch of luck that makes each turn exciting.",
        "modo_juego": "Game Mode",
        "reglas_juego": "Game Rules",
        "puntuaciones": "Scores",
        "historial": "History",
        "editar_perfil": "Edit Profile",
        "cerrar_sesion": "Log Out",
        "volver_inicio": "Back to Home"
    }
};
// DETECTAR IDIOMA
let idioma = localStorage.getItem("idioma") || "es";

// FUNCION PARA TRADUCIR PÁGINA

function aplicarTraducciones() {
    // Info del juego
    const infoTitulo = document.querySelector(".Información-del-juego");
    if(infoTitulo) infoTitulo.innerHTML = traducciones[idioma]["info_juego"];

    const infoDescripcion = document.getElementById("infogame");
    if(infoDescripcion) infoDescripcion.innerHTML = traducciones[idioma]["descripcion_juego"];

    // Menú lateral
    const links = document.querySelectorAll("nav.sidebar a, nav.columna-Bajustes a");
    links.forEach(link => {
        const texto = link.textContent.trim().toLowerCase();
        if(texto.includes("modo")) link.textContent = traducciones[idioma]["modo_juego"];
        if(texto.includes("reglas")) link.textContent = traducciones[idioma]["reglas_juego"];
        if(texto.includes("puntuaciones")) link.textContent = traducciones[idioma]["puntuaciones"];
        if(texto.includes("historial")) link.textContent = traducciones[idioma]["historial"];
        if(texto.includes("editar")) link.textContent = traducciones[idioma]["editar_perfil"];
        if(texto.includes("cerrar")) link.textContent = traducciones[idioma]["cerrar_sesion"];
        if(texto.includes("volver")) link.textContent = traducciones[idioma]["volver_inicio"];
    });
}

// EJECUTAR AL CARGAR LA PÁGINA

document.addEventListener("DOMContentLoaded", aplicarTraducciones);
