document.addEventListener('DOMContentLoaded', function() {
    // Nasłuchiwacz kliknięcia w "Ustawienia"
    document.getElementById('settings').addEventListener('click', function() {
        renderSettings(currentLanguage);
        toggleMenu();
    });

    // Nasłuchiwacz kliknięcia w "Strona główna"
    document.getElementById('home').addEventListener('click', function() {
        renderHomePage(currentLanguage);
        toggleMenu();
    });

    // Nasłuchiwacz zmiany motywu i języka
    document.addEventListener('change', function(event) {
        if (event.target.id === 'theme') {
            const newTheme = event.target.value;
            document.body.classList.toggle('light-theme', newTheme === 'light');
            document.body.classList.toggle('dark-theme', newTheme === 'dark');
            localStorage.setItem('theme', newTheme);
        } else if (event.target.id === 'language') {
            currentLanguage = event.target.value;
            localStorage.setItem('language', currentLanguage);
            renderHomePage(currentLanguage);
            renderSettings(currentLanguage);
            renderMenu(currentLanguage);
        }
    });

    // Nasłuchiwacz kliknięcia w "Zaloguj się"
    document.getElementById('loginLink').addEventListener('click', function(event) {
        event.preventDefault();
        loadLoginForm();
    });

    // Nasłuchiwacz kliknięcia w "Hamburger Menu"
    document.getElementById('hamburger').addEventListener('click', toggleMenu);

    // Nasłuchiwacz kliknięcia w przycisk zamknięcia menu
    document.querySelector('.close-btn').addEventListener('click', toggleMenu);
});