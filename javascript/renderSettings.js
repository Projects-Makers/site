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