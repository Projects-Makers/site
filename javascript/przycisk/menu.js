// Plik: javascript/przycisk/menu.js

let currentLanguage = 'pl'; // Domyślnie język polski

// Funkcja do wyświetlania treści strony głównej
document.getElementById('home').addEventListener('click', function() {
    const tresc = document.getElementById('tresc');
    tresc.innerHTML = `
        <h2>${translations[currentLanguage].home}</h2>
        <p>${translations[currentLanguage].welcome}</p>
    `;
    toggleMenu(); // Zamknięcie menu po kliknięciu w "Strona Główna"
});

// Funkcja do wyświetlania treści ustawień
document.getElementById('settings').addEventListener('click', function() {
    displaySettings(); // Wywołanie funkcji do wyświetlania ustawień
});

// Funkcja do wyświetlania ustawień
function displaySettings() {
    const tresc = document.getElementById('tresc');
    tresc.innerHTML = `
        <h2>${translations[currentLanguage].settings}</h2>
        <div>
            <label for="theme">${translations[currentLanguage].selectTheme}</label>
            <select id="theme">
                <option value="light">Jasny</option>
                <option value="dark">Ciemny</option>
            </select>
        </div>
        <div>
            <label for="language">${translations[currentLanguage].selectLanguage}</label>
            <select id="language">
                <option value="pl">Polski</option>
                <option value="en">English</option>
            </select>
        </div>
    `;

    // Ustawienie aktualnie wybranego motywu w dropdownie
    document.getElementById('theme').value = document.body.getAttribute('data-theme');
    // Ustawienie aktualnie wybranego języka w dropdownie
    document.getElementById('language').value = currentLanguage;

    // Obsługa zmiany motywu
    document.getElementById('theme').addEventListener('change', function() {
        const selectedTheme = this.value;
        document.body.setAttribute('data-theme', selectedTheme); // Zmiana motywu
    });

    // Obsługa zmiany języka
    document.getElementById('language').addEventListener('change', function() {
        const selectedLanguage = this.value;
        if (selectedLanguage !== currentLanguage) { // Zmiana tylko wtedy, gdy wybrany język jest inny
            currentLanguage = selectedLanguage; // Aktualizacja języka
            updateContent(); // Odśwież treść z nowym językiem
        }
    });

    // Upewnienie się, że menu jest otwarte
    document.getElementById('menu').style.width = '250px'; // Upewnij się, że menu jest otwarte
}

// Funkcja odświeżająca treści na stronie po zmianie języka
function updateContent() {
    // Odświeżanie treści na podstawie aktualnego języka
    displaySettings(); // Wyświetlenie ustawień z nowym językiem
}
