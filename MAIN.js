// HTML struktura aplikace
const appHTML = `
  <div id="auth">
    <h2>Přihlášení</h2>
    <input type="text" id="username" placeholder="Uživatelské jméno">
    <input type="password" id="password" placeholder="Heslo">
    <button id="login">Přihlásit</button>
    <button id="register">Registrovat</button>
  </div>
  <div id="app" style="display: none;">
    <h2>Poznámky</h2>
    <div id="notes"></div>
    <input type="text" id="noteTitle" placeholder="Název poznámky">
    <textarea id="noteContent" placeholder="Obsah poznámky"></textarea>
    <button id="addNote">Přidat poznámku</button>
    <button id="logout">Odhlásit se</button>
  </div>
`;

// Vloží HTML do stránky
document.body.innerHTML = appHTML;

// Inicializace správců
let currentUser = null;

// DOM prvky
const authDiv = document.getElementById("auth");
const appDiv = document.getElementById("app");
const notesDiv = document.getElementById("notes");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const noteTitleInput = document.getElementById("noteTitle");
const noteContentInput = document.getElementById("noteContent");

// Přihlášení a registrace
document.getElementById("register").addEventListener("click", () => {
  const username = usernameInput.value;
  const password = passwordInput.value;
  if (username && password) {
    alert("Registrace úspěšná.");
  } else {
    alert("Vyplňte uživatelské jméno a heslo.");
  }
});

document.getElementById("login").addEventListener("click", () => {
  const username = usernameInput.value;
  const password = passwordInput.value;
  if (username && password) {
    currentUser = username;
    renderApp();
  } else {
    alert("Neplatné přihlašovací údaje.");
  }
});

// Odhlášení
document.getElementById("logout").addEventListener("click", () => {
  currentUser = null;
  renderAuth();
});

// Přidání poznámky
document.getElementById("addNote").addEventListener("click", () => {
  const title = noteTitleInput.value;
  const content = noteContentInput.value;
  if (title && content) {
    alert("Poznámka přidána.");
    noteTitleInput.value = "";
    noteContentInput.value = "";
  } else {
    alert("Vyplňte název a obsah poznámky.");
  }
});

// Zobrazení autentizace
function renderAuth() {
  authDiv.style.display = "block";
  appDiv.style.display = "none";
}

// Zobrazení aplikace
function renderApp() {
  authDiv.style.display = "none";
  appDiv.style.display = "block";
}

// Spuštění
renderAuth();