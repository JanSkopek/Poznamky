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

// Třída pro správu uživatelů
class UserManager {
  constructor() {
    this.users = JSON.parse(localStorage.getItem("users")) || {};
  }

  register(username, password) {
    if (this.users[username]) {
      alert("Uživatel již existuje.");
      return false;
    }
    this.users[username] = { password, notes: [] };
    this.saveUsers();
    alert("Registrace úspěšná.");
    return true;
  }

  login(username, password) {
    const user = this.users[username];
    if (!user || user.password !== password) {
      alert("Neplatné přihlašovací údaje.");
      return null;
    }
    return username;
  }

  saveUsers() {
    localStorage.setItem("users", JSON.stringify(this.users));
  }
}

// Třída pro správu poznámek
class NoteManager {
  constructor(userManager, username) {
    this.userManager = userManager;
    this.username = username;
    this.notes = this.userManager.users[username].notes;
  }

  addNote(title, content) {
    const id = Date.now();
    this.notes.push({ id, title, content });
    this.saveNotes();
  }

  deleteNote(id) {
    this.notes = this.notes.filter(note => note.id !== id);
    this.saveNotes();
  }

  saveNotes() {
    this.userManager.users[this.username].notes = this.notes;
    this.userManager.saveUsers();
  }

  getNotes() {
    return this.notes;
  }
}

// Inicializace správců
const userManager = new UserManager();
let currentUser = null;
let noteManager = null;

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
    userManager.register(username, password);
  } else {
    alert("Vyplňte uživatelské jméno a heslo.");
  }
});

document.getElementById("login").addEventListener("click", () => {
  const username = usernameInput.value;
  const password = passwordInput.value;
  const user = userManager.login(username, password);
  if (user) {
    currentUser = user;
    noteManager = new NoteManager(userManager, currentUser);
    renderApp();
  }
});

// Odhlášení
document.getElementById("logout").addEventListener("click", () => {
  currentUser = null;
  noteManager = null;
  renderAuth();
});

// Přidání poznámky
document.getElementById("addNote").addEventListener("click", () => {
  const title = noteTitleInput.value;
  const content = noteContentInput.value;
  if (title && content) {
    noteManager.addNote(title, content);
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

// Odstranění poznámky
window.deleteNote = (id) => {
  const confirmDelete = confirm("Opravdu chcete tuto poznámku odstranit?");
  if (confirmDelete) {
    noteManager.deleteNote(id);
  }
};

// Spuštění
renderAuth();