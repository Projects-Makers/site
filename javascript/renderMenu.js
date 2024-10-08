function renderMenu(lang) {
    const menuItems = document.querySelectorAll('#menu ul li');
    menuItems[0].textContent = translations[lang].homeTitle;
    menuItems[1].textContent = translations[lang].about;
    menuItems[2].textContent = translations[lang].gallery;
    menuItems[3].textContent = translations[lang].settingsTitle;
    document.getElementById('loginLink').textContent = translations[lang].login;
}