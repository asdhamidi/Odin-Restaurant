import contactImage from '../assets/contact.jpg';
import '../style.css';
import {element} from './helper';

export default function loadContact() {
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
