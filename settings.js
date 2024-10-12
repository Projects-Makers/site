// Plik: javascript/settings.js

document.getElementById('settings').addEventListener('click', function() {
    const tresc = document.getElementById('tresc');
    tresc.innerHTML = `
        <h2>${translations[currentLanguage].settings}</h2>
        <div>
            <label for="language">${translations[currentLanguage].selectLanguage}</label>
            <select id="language">
                <option value="pl">Polski</option>
                <option value="en">English</option>
            </select>
        </div>
    `;

    toggleMenu();  // Zamknięcie menu po kliknięciu w "Ustawienia"

    // Obsługa zmiany języka
    document.getElementById('language').addEventListener('change', function() {
        const selectedLanguage = this.value;
        currentLanguage = selectedLanguage;  // Aktualizacja języka
        updateContent();  // Odśwież treść z nowym językiem
    });
});

// Funkcja odświeżająca treści na stronie po zmianie języka
function updateContent() {
    const tresc = document.getElementById('tresc');
    tresc.innerHTML = `
        <h2>${translations[currentLanguage].settings}</h2>
        <div>
            <label for="language">${translations[currentLanguage].selectLanguage}</label>
            <select id="language">
                <option value="pl">Polski</option>
                <option value="en">English</option>
            </select>
        </div>
    `;
}
