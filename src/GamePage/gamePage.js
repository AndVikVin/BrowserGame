import './gamePage.css';
import healthBar from './healthBar/healthBar';
import player from './player/player';
import { playerName } from '../RegisterPage/registerPage';
import turn from './turn/turn';
import { monsters, monsterName } from './monster/monsters';
import spellPage from './spellPage/spellPage';
import { playerAtack } from './damage/playerAtack';

const gamePage = document.createElement('div');
gamePage.classList.add('gamePage', 'right');
gamePage.appendChild(healthBar);
gamePage.appendChild(player);
gamePage.appendChild(playerName);
gamePage.appendChild(monsters);
gamePage.appendChild(monsterName);
gamePage.appendChild(turn);
gamePage.appendChild(spellPage);
gamePage.appendChild(playerAtack);

export default gamePage;
