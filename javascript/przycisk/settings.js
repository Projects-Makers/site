document.getElementById('settings').addEventListener('click', function() {
    const tresc = document.getElementById('tresc');
    tresc.innerHTML = `
        <h2>Ustawienia</h2>
        <div>
            <label for="theme">Wybierz motyw:</label>
            <select id="theme">
                <option value="light">Jasny</option>
                <option value="dark">Ciemny</option>
            </select>
        </div>
        <div>
            <label for="language">Wybierz język:</label>
            <select id="language">
                <option value="pl">Polski</option>
                <option value="en">Angielski</option>
            </select>
        </div>
    `;
    toggleMenu();  // Zamknięcie menu po kliknięciu w "Ustawienia"
});
