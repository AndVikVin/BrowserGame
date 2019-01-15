import './LandingPage.css';
import startDiv from './startDiv/startDiv';
import header from './header/header';
import footer from './footer/footer';
import screenShootDiv from './screenShots/screenShots';

const main = document.createElement('main');
const landingPage = document.createElement('div');
landingPage.classList.add('landingPage', 'center');
landingPage.appendChild(header);
landingPage.appendChild(main);
landingPage.appendChild(footer);
const body = document.querySelector('body');
body.appendChild(landingPage);
main.appendChild(startDiv);
main.appendChild(screenShootDiv);
export default landingPage;
