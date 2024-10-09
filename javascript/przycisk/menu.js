document.getElementById('home').addEventListener('click', function() {
    const tresc = document.getElementById('tresc');
    tresc.innerHTML = `<h2>Strona Główna</h2><p>Witaj na stronie głównej!</p>`;
    toggleMenu();  // Zamknięcie menu po kliknięciu w "Strona główna"
});
