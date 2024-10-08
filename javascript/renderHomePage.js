function renderHomePage(lang) {
    const tresc = document.getElementById('tresc');
    tresc.innerHTML = `
        <h2>${translations[lang].homeTitle}</h2>
        <p>${translations[lang].homeContent}</p>
    `;
}