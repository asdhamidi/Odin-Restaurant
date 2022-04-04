import './style.css';
import aboutImage from'./assets/about.jpg';
import contactImage from './assets/contact.jpg';
import MenuImage from './assets/menu.jpg';

function element(className = "", type = "div")
{
    let result = document.createElement(type);
    result.className = className;
    return result;
}

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

function loadAbout() {
    let content = document.getElementById("content");

    let imgpart = element("img-part");
    const myIcon = new Image();
    myIcon.src = aboutImage;
    imgpart.appendChild(myIcon);

    let infopart = element("info-part");

    let heading = element("heading", "h1");
    heading.textContent = "About Us.";

    let [info, hours, address] = [element("info"), element("info"), element("info")];

    info.textContent = `We are small cozy cafe situated in the moutains.
        We aim to provide a place for wanderers to chill, enjoy and eat amazing food.
        Drop by and get a cup of joe. First one is one us.`;
    hours.textContent = `We are open everyday from 9AM to 10PM. Visit us!`;
    address.textContent = `Charkhamba, Clement Town, Dehradun, Uttarakhand, India`;

    infopart.appendChild(heading);
    infopart.appendChild(info);
    infopart.appendChild(hours);
    infopart.appendChild(address);

    let about = element("content-box");
    about.appendChild(imgpart);
    about.appendChild(infopart);

    content.appendChild(about);
}

function loadMenu() {
    let content = document.getElementById("content");

    let imgpart = element("img-part");
    const myIcon = new Image();
    myIcon.src = MenuImage;
    imgpart.appendChild(myIcon);

    let infopart = element("info-part");

    let heading = element("heading", "h1");
    heading.textContent = "Our Menu";

    let itemlist = element("item-list", "div");
    let items = [["Coffee", "₹30"],
                ["Chai", "₹20"],
                ["Maggie", "₹20"],
                ["Pastry", "₹40"],
                ["Pasta", "₹50"],
                ["Cookie", "₹10"],
                ["Hugs", "Free of cost."],
            ];

    for(let i = 0; i < items.length; i++)
    {
        let item = element("item", "div");
        item.textContent = `${items[i][0]} - ${items[i][1]}`;
        itemlist.appendChild(item);
    }

    infopart.appendChild(heading);  
    infopart.appendChild(itemlist);

    let menu = element("content-box");

    menu.appendChild(imgpart);
    menu.appendChild(infopart);

    content.appendChild(menu);
}

function loadContact() {
    let content = document.getElementById("content");

    let imgpart = element("img-part");
    const myIcon = new Image();
    myIcon.src = contactImage;
    imgpart.appendChild(myIcon);

    let infopart = element("info-part");

    let heading = element("heading", "h1");
    heading.textContent = "Let's Connect!";
    
    let [address, email, phone] = [element("info"), element("info"), element("info")];
    address.textContent = "Charkhamba, Clement Town, Dehradun, Uttarakhand, India";
    email.textContent = "realemail@realwebsite.in";
    phone.textContent = "+916942042069";

    infopart.appendChild(heading);
    infopart.appendChild(address);
    infopart.appendChild(email);
    infopart.appendChild(phone);

    let contact = element("content-box");

    contact.appendChild(imgpart);
    contact.appendChild(infopart);

    content.appendChild(contact);
}

function clear() {
    let content = document.getElementById("content");
    content.removeChild(content.childNodes[0]);
}

function begin(){
    let body = document.querySelector("body");
    let content = element();
    content.id = "content";

    body.appendChild(loadNav());
    body.appendChild(content);
    loadAbout();
}

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