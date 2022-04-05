import aboutImage from'../assets/about.jpg';
import {element} from './helper';
import '../style.css';

export default function loadAbout() {
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
