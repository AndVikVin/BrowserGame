import turn from '../turn/turn';
import { monsterName } from '../monster/monsters';
import playerTurn from './playerTurn';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let damageWidth = 0;

function isMonsterSuccesfull() {
  const x = getRandomInt(1, 5);
  console.log(x);
  setTimeout(() => {
    if (x === 2) {
      turn.textContent = 'Ой! Монстр попал!';
      const playerDamage = document.querySelector('.playerDamage');
      damageWidth += 25;
      playerDamage.style.width = `${damageWidth}%`;
      if (damageWidth === 100) {
        const spellPage = document.querySelector('.spellPage');
        spellPage.style.visibility = 'visible';
        spellPage.innerHTML = '';
        const winMessage = document.createElement('p');
        winMessage.classList.add('winMessage');
        winMessage.textContent = 'Ох ох! Болячки победили. Но ничего! В следующий раз мы им зададим жару!!!';
        const restartButton = document.createElement('button');
        restartButton.classList.add('restartButton');
        restartButton.textContent = 'Начать с начала';
        restartButton.addEventListener('click', () => {
          document.location.reload(true);
        });
        spellPage.appendChild(winMessage);
        spellPage.appendChild(restartButton);
      } else {
        setTimeout(() => {
          turn.textContent = 'Ходит' + ' ' + monsterName.textContent;
          isMonsterSuccesfull();
        }, 2000);
      }
    } else {
      turn.textContent = 'Фухх! Монстер промахнулся';
      setTimeout(playerTurn, 2000);
    }
  }, 2000);
}


function monsterTurn() {
  const useSpell = document.querySelector('.useSpell');
  useSpell.oncklick = '';
  useSpell.onkeydown = '';
  turn.textContent = 'Неправильно! :(';
  const spellPage = document.querySelector('.spellPage');
  spellPage.style.visibility = 'hidden';
  setTimeout(() => {
    console.log('monsterTimeOut');
    turn.textContent = 'Ходит' + ' ' + monsterName.textContent;
    isMonsterSuccesfull();
  }, 2000);
}

export default monsterTurn;
