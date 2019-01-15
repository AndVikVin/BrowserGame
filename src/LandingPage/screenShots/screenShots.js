import './screenShots.css';
import scr1 from './screenShot1.png';
import scr2 from './screenShot2.png';
import scr3 from './screenShot3.png';


const screenShotsDiv = document.createElement('div');
screenShotsDiv.classList.add('screenShotsDiv');
screenShotsDiv.id = 'gameplay';
const screenShot1 = document.createElement('img');
screenShot1.width = '450';
screenShot1.height = '300';
screenShot1.src = scr1;
screenShot1.alt = 'screenshot';
const screenShot2 = document.createElement('img');
screenShot2.width = '450';
screenShot2.height = '300';
screenShot2.src = scr2;
screenShot2.alt = 'screenshot';

const screenShot3 = document.createElement('img');
screenShot3.width = '450';
screenShot3.height = '300';
screenShot3.src = scr3;
screenShot3.alt = 'screenshot';
screenShotsDiv.appendChild(screenShot1);
screenShotsDiv.appendChild(screenShot2);
screenShotsDiv.appendChild(screenShot3);

export default screenShotsDiv;
