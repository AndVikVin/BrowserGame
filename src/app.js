import './app.css';
import landingPage from './LandingPage/LandingPage';
import { registerPage } from './RegisterPage/registerPage';
import gamePage from './GamePage/gamePage';

const body = document.querySelector('body');
body.appendChild(landingPage);
body.appendChild(registerPage);
body.appendChild(gamePage);
