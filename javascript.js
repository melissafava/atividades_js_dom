function darkMode() {
    let element = document.body;
    let content = document.getElementById("darkModeText");
    element.className = "dark-mode";
    content.innerText = "Tema escuro ATIVADO"
}

function lightMode() {
    let element = document.body;
    let content = document.getElementById("darkModeText");
    element.className = "light-mode";
    content.innerText = "Tema escuro DESATIVADO";
}