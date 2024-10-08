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
    document.getElementById('loginLinkBack').addEventListener('click', loadLoginForm);
}