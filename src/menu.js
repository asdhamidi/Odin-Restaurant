import MenuImage from './assets/menu.jpg';
import {element} from './helper';
import './style.css';

export default function loadMenu() {
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
