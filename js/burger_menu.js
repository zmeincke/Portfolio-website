window.addEventListener("load", sidenVises);

// Lav variablen "button", der henviser til ".toggle-button"
const button = document.querySelector(".toggle_button");
// Lav variablen "menu", der henviser til ".main-menu"
const menu = document.querySelector("#main_menu");
const ulmenu = document.querySelector(".ul_menu");

function sidenVises() {
    console.log("siden vises");
    button.classList.add(".icon_menu");
}



// Lav funktionen "toggleMenu()" med følgende funktionalitet
function toggleMenu() {
    console.log("button clicked")

    // a) toggle klassen "shown" på menu
    menu.classList.toggle("show");


    // spørg om "menuShow" i if-sætningen nedenfor (=> if (menuShown)), og udskift teksten
    if (menu.classList.contains("show")) {
        console.log(menu.classList.contains("show")); // se i konsollen
        // sæt btn.textContent til "Luk", hvis menuShown er "true"
        button.classList.remove("toggle_button")
        button.classList.add("icon_exit");
    } else {
        console.log(menu.classList.contains("show")); // se i konsollen
        // sæt btn.textContent til "Menu", hvis menuShown er "false"
        button.classList.add("icon_menu");
    }
}

// Tilføj et klik-event til "btn", der sætter toggleMenu-funktionen i gang
button.addEventListener("click", toggleMenu);