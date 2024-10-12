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
    displaySettings(true); // Wywołanie funkcji do wyświetlania ustawień z otwarciem menu
});

// Funkcja do wyświetlania ustawień
function displaySettings(openMenu) {
    const tresc = document.getElementById('tresc');
    tresc.innerHTML = `
        <h2>${translations[currentLanguage].settings}</h2>
        <div>
            <label for="theme">${translations[currentLanguage].selectTheme}</label>
            <select id="theme">
                <option value="light">${translations[currentLanguage].light}</option>
                <option value="dark">${translations[currentLanguage].dark}</option>
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

    // Upewnienie się, że menu jest otwarte tylko wtedy, gdy openMenu jest true
    if (openMenu) {
        document.getElementById('menu').classList.add('open');
        document.getElementById('menu').classList.remove('close');
        toggleMenu(); // Zamknięcie menu po kliknięciu w "Ustawienia"
    }
}

// Funkcja odświeżająca treści na stronie po zmianie języka
function updateContent() {
    // Odświeżanie treści na podstawie aktualnego języka
    displaySettings(false); // Wyświetlenie ustawień z nowym językiem bez otwierania menu
    setMenuTranslations(); // Aktualizacja tłumaczeń w menu
}

// Funkcja do przełączania menu
function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        menu.classList.add('close'); // Natychmiastowe zamknięcie menu
    } else {
        menu.classList.remove('close');
        menu.classList.add('open'); // Płynne otwarcie menu
    }
}

// Funkcja do ustawiania zawartości menu
function setMenuTranslations() {
    document.getElementById('home').textContent = translations[currentLanguage].home;
    document.getElementById('settings').textContent = translations[currentLanguage].settings;
}

// Dodanie obsługi zmiany języka
document.getElementById('language-pl').addEventListener('click', function() {
    currentLanguage = 'pl';
    updateContent();
});

document.getElementById('language-en').addEventListener('click', function() {
    currentLanguage = 'en';
    updateContent();
});

// Wywołanie funkcji po załadowaniu dokumentu
document.addEventListener('DOMContentLoaded', function() {
    setMenuTranslations();
    displayHomePage(); // Ustawienie strony głównej jako domyślnej
});