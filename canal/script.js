// Función para manejar el menú responsivo
function toggleResponsiveMenu() {
    var menu = document.querySelector('.nav-menu');
    menu.classList.toggle('show');
}

// Event listener para el icono de navegación responsivo
document.getElementById('icono-nav').addEventListener('click', function() {
    console.log("Icono de navegación clickeado");
    toggleResponsiveMenu();
});
