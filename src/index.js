import { begin } from "./scripts/begin";
import loadAbout from "./scripts/about";
import loadMenu from "./scripts/menu";
import loadContact from "./scripts/contact";
import { clear } from "./scripts/helper";

begin();

let nav_about = document.getElementById("About");
nav_about.onclick = () => {
    clear();
    loadAbout();
}
let nav_menu = document.getElementById("Menu");
nav_menu.onclick = () => {
    clear();
    loadMenu();
}

let nav_contact = document.getElementById("Contact");
nav_contact.onclick = () => {
    clear();
    loadContact();
}