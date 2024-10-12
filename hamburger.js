// Plik: javascript/przycisk/hamburger.js

function toggleMenu() {
    const menu = document.getElementById('menu');
    // Przełączanie szerokości menu
    if (menu.style.width === '0px' || menu.style.width === '') {
        menu.style.width = '400px'; // Otwórz menu
    } else {
        menu.style.width = '0px'; // Zamknij menu
    }
}
