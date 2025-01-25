# Aplikace Poznámek

Tento projekt je jednoduchá webová aplikace pro správu poznámek. Poskytuje možnosti registrace a přihlášení uživatelů a správy jejich poznámek. Všechna data jsou ukládána lokálně na straně klienta pomocí LocalStorage.

## Funkce aplikace

- **Registrace uživatelů**: Umožňuje vytvoření nového účtu.
- **Přihlášení uživatelů**: Zabezpečený přístup ke správě poznámek.
- **Správa poznámek**: Možnost přidávání, mazání a úpravy poznámek.
- **Uložení dat**: Všechna data jsou ukládána na straně klienta, aby byla aplikace nezávislá na serveru.

## Použité technologie

- **HTML5**: Pro vytvoření struktury aplikace.
- **CSS**: Pro stylování uživatelského rozhraní.
- **JavaScript (ES6)**: Pro logiku aplikace a práci s daty.
- **LocalStorage**: Pro ukládání uživatelských údajů a poznámek.

## Struktura projektu

- **INDEX.html**: Hlavní HTML soubor s layoutem aplikace.
- **MAIN.js**: Hlavní JavaScript soubor obsahující logiku aplikace.

## Instalace a spuštění

1. Naklonujte tento repozitář:
   ```bash
   git clone https://github.com/janskopek/poznamky.git
   ```
2. Otevřete soubor `INDEX.html` ve svém webovém prohlížeči.
3. Navštivte aplikaci online: [Otevřít aplikaci](https://kraken.pedf.cuni.cz/~skopekjan/GIT/INDEX.html)

## Funkční specifikace

### Charakteristika funkcionalit

1. **Registrace**: Nový uživatel může vytvořit účet zadáním uživatelského jména a hesla.
2. **Přihlášení**: Stávající uživatel se může přihlásit ke svému účtu.
3. **Správa poznámek**: Uživatel může přidávat, upravovat a mazat poznámky.
4. **Lokální uložiště**: Data jsou ukládána v LocalStorage, aby byla dostupná i po obnovení stránky.

### Specifikace uživatelských rolí

- **Registrovaný uživatel**: Může vytvářet a spravovat své poznámky.
- **Anonymní uživatel**: Nemá přístup do aplikace.

## Technická specifikace

### Datový model

- **Uživatel**: Obsahuje uživatelské jméno, heslo a pole s poznámkami.
- **Poznámka**: Obsahuje unikátní ID, název a obsah.

### Architektura

1. **Frontend**: HTML, CSS a JavaScript.
2. **Ukládání dat**: Použití LocalStorage pro perzistentní údaje.
3. **Logika aplikace**: Implementována v JavaScriptu pomocí OOP (třídy UserManager a NoteManager).

### Popis tříd

1. **UserManager**
   - Spravuje seznam uživatelů.
   - Umožňuje registraci a přihlášení.
2. **NoteManager**
   - Spravuje poznámky aktuálního uživatele.
   - Obsahuje funkce pro přidávání, mazání a úpravu poznámek.

## Autor

- **Jan Škopek**
