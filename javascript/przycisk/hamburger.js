function toggleMenu() {
    const menu = document.getElementById('menu');

    if (menu.style.width === '0px' || menu.style.width === '') {
        menu.style.width = '400px';
    } else {
        menu.style.width = '0px';
    }
}