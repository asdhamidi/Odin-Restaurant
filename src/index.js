import { begin } from "./begin";
import loadAbout from "./about";
import loadMenu from "./menu";
import loadContact from "./contact";
import { clear } from "./helper";

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