window.addEventListener("load", sidenVises);

// Lav variablen "button", der henviser til ".toggle-button"
const button = document.querySelector(".toggle_button");
// Lav variablen "menu", der henviser til ".main-menu"
const menu = document.querySelector("#main_menu");

function sidenVises() {
    console.log("siden vises");
    //tilføj icon til button
    button.classList.add("icon_menu");
}


// Lav funktionen "toggleMenu()"
function toggleMenu() {
    console.log("button clicked");

    // tilføj toggle klassen "shown" på menu
    menu.classList.toggle("show");


    // spørg om "menu" i if-sætningen nedenfor 
    if (menu.classList.contains("show")) {
        console.log(menu.classList.contains("show"));

        // sæt bagrundsbilled til "lukke icon", når toggleMenu er "true"
        button.classList.remove("icon_menu");
        button.classList.add("icon_exit");
    } else {
        console.log(menu.classList.contains("show"));

        // sæt bgrundsbilled til "menu icon", når toggleMenu er "false"
        button.classList.remove("icon_exit");
        button.classList.add("icon_menu");
    }
}

// Tilføj et klik-event til "button", der kalder på "toggelMenu" funktionen
button.addEventListener("click", toggleMenu);