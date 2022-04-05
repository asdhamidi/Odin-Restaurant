import { element } from './helper';
import '../style.css';
import loadAbout from "./about";

function loadNav()
{
    let nav = document.createElement("nav");

    let title = element("title");
    title.textContent = "KhaJa Cafe";

    let links = element("links");

    let aboutTab = document.createElement("a");
    links.appendChild(aboutTab);
    aboutTab.textContent = "About";
    aboutTab.id = "About";
    
    let MenuTab = document.createElement("a");
    links.appendChild(MenuTab);
    MenuTab.textContent = "Menu";
    MenuTab.id = "Menu";
    
    let ContactTab = document.createElement("a");
    links.appendChild(ContactTab);
    ContactTab.textContent = "Contact";
    ContactTab.id = "Contact";

    nav.appendChild(title);
    nav.appendChild(links);
    nav.appendChild(loadFooter());

    return nav;
}

function loadFooter() {
    let footer = element("", "footer");
    let footerIcon = element();
    footerIcon.classList.add("heart");
    footer.appendChild(footerIcon);
    
    return footer;
}

export function begin(){
    let body = document.querySelector("body");
    let content = element();
    content.id = "content";

    body.appendChild(loadNav());
    body.appendChild(content);
    loadAbout();
}
