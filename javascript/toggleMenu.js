// Funkcja do przełączania menu
function toggleMenu() {
    const menu = document.getElementById('menu');
    const hamburger = document.getElementById('hamburger');

    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        hamburger.style.display = 'flex';
    } else {
        menu.classList.add('open');
        hamburger.style.display = 'none';
    }
}

// Funkcja do renderowania treści na stronie głównej
function renderHomePage(lang) {
    const tresc = document.getElementById('tresc');
    tresc.innerHTML = `
        <h2>${translations[lang].homeTitle}</h2>
        <p>${translations[lang].homeContent}</p>
    `;
}

// Funkcja do renderowania ustawień
function renderSettings(lang) {
    const tresc = document.getElementById('tresc');
    tresc.innerHTML = `
        <h2>${translations[lang].settingsTitle}</h2>
        <div class="settings-container">
            <div class="setting-item">
                <label for="theme">${translations[lang].themeLabel}</label>
                <select id="theme">
                    <option value="light">${translations[lang].lightTheme} <span class="icon-sun">☀️</span></option>
                    <option value="dark" ${localStorage.getItem('theme') === 'dark' ? 'selected' : ''}>${translations[lang].darkTheme} <span class="icon-moon">🌙</span></option>
                </select>
            </div>
            <div class="setting-item">
                <label for="language">${translations[lang].languageLabel}</label>
                <select id="language">
                    <option value="pl" ${lang === 'pl' ? 'selected' : ''}>${translations[lang].polishLanguage}</option>
                    <option value="en" ${lang === 'en' ? 'selected' : ''}>${translations[lang].englishLanguage}</option>
                </select>
            </div>
        </div>
    `;
}

// Funkcja do renderowania treści w menu
function renderMenu(lang) {
    const menuItems = document.querySelectorAll('#menu ul li');
    menuItems[0].textContent = translations[lang].homeTitle; // Strona główna
    menuItems[1].textContent = translations[lang].about; // O nas
    menuItems[2].textContent = translations[lang].gallery; // Galeria
    menuItems[3].textContent = translations[lang].settingsTitle; // Ustawienia
    document.getElementById('loginLink').textContent = translations[lang].login; // Zaloguj się
}

// Funkcja do ładowania formularza logowania
function loadLoginForm() {
    const tresc = document.getElementById('tresc');
    tresc.innerHTML = `
        <div class="login-container">
            <h2>${translations[currentLanguage].login}</h2>
            <form id="loginForm" method="POST" action="login.php">
                <input type="text" name="username" placeholder="${translations[currentLanguage].usernamePlaceholder}" required>
                <input type="password" name="password" placeholder="${translations[currentLanguage].passwordPlaceholder}" required>
                <button type="submit">${translations[currentLanguage].login}</button>
            </form>
            <p style="text-align: center;"><a href="#" id="registerLink">Zarejestruj się</a></p>
        </div>
    `;
    document.getElementById('registerLink').addEventListener('click', function(event) {
        event.preventDefault();
        loadRegisterForm();
    });
}

// Funkcja do ładowania formularza rejestracji
function loadRegisterForm() {
    const tresc = document.getElementById('tresc');
    tresc.innerHTML = `
        <div class="login-container">
            <h2>${translations[currentLanguage].register}</h2>
            <form id="registerForm" method="POST" action="register.php">
                <input type="text" name="username" placeholder="${translations[currentLanguage].usernamePlaceholder}" required>
                <input type="password" name="password" placeholder="${translations[currentLanguage].passwordPlaceholder}" required>
                <button type="submit">${translations[currentLanguage].register}</button>
            </form>
            <p style="text-align: center;"><a href="#" id="loginLinkBack">Zaloguj się</a></p>
        </div>
    `;
    document.getElementById('loginLinkBack').addEventListener('click', function(event) {
        event.preventDefault();
        loadLoginForm();
    });
}

// Ustawienie domyślnego motywu i języka przy ładowaniu strony
document.addEventListener('DOMContentLoaded', function() {
    setDefaultTheme();
    let currentLanguage = localStorage.getItem('language') || 'pl';
    renderHomePage(currentLanguage);
    renderMenu(currentLanguage); // Renderowanie menu przy załadowaniu

    // Nasłuchiwacze zdarzeń dla wyboru motywu i języka
    document.getElementById('settings').addEventListener('click', function() {
        renderSettings(currentLanguage);
        toggleMenu();  // Zamknięcie menu po kliknięciu w "Ustawienia"
    });

    // Obsługa kliknięcia w "Strona główna"
    document.getElementById('home').addEventListener('click', function() {
        renderHomePage(currentLanguage); // Renderowanie treści na stronie głównej
        toggleMenu();  // Zamknięcie menu po kliknięciu w "Strona główna"
    });

    // Nasłuchiwacze dla ustawień (motyw i język)
    document.addEventListener('change', function(event) {
        if (event.target.id === 'theme') {
            const newTheme = event.target.value;
            document.body.classList.toggle('light-theme', newTheme === 'light');
            document.body.classList.toggle('dark-theme', newTheme === 'dark');
            localStorage.setItem('theme', newTheme); // Zapisanie wybranego motywu
        } else if (event.target.id === 'language') {
            currentLanguage = event.target.value;
            localStorage.setItem('language', currentLanguage); // Zapisanie wybranego języka
            renderHomePage(currentLanguage); // Ponowne renderowanie strony głównej
            renderSettings(currentLanguage); // Ponowne renderowanie ustawień
            renderMenu(currentLanguage); // Ponowne renderowanie menu
        }
    });

    // Nasłuchiwacz kliknięcia w "Zaloguj się"
    document.getElementById('loginLink').addEventListener('click', function(event) {
        event.preventDefault(); // Zapobiega przeładowaniu strony
        loadLoginForm(); // Ładowanie formularza logowania
    });

    // Nasłuchiwacz kliknięcia w "Hamburger Menu"
    document.getElementById('hamburger').addEventListener('click', toggleMenu);

    // Nasłuchiwacz kliknięcia w przycisk zamknięcia menu
    document.querySelector('.close-btn').addEventListener('click', toggleMenu);
});