import createTask from './createTask';
import monsterTurn from './monsterTurn';


let damageWidth = 0;
function playerTurn() {
  const playerName = document.querySelector('.playerName');
  const turn = document.querySelector('.turn');
  turn.textContent = 'Ходит' + ' ' + playerName.textContent;
  const spellPage = document.querySelector('.spellPage');
  spellPage.style.visibility = 'visible';
  let readyTask = createTask();
  const task = document.querySelector('.task');
  task.textContent = readyTask + ' ' + '=';
  const answer = document.querySelector('.answer');
  const answerForm = document.querySelector('.answerForm');
  const useSpell = document.querySelector('.useSpell');
  function answerProcessing() {
    if (eval(readyTask) === +answer.value) {
      turn.textContent = 'Молодец!';
      const monsterDamage = document.querySelector('.monsterDamage'); 
      damageWidth += 25;
      monsterDamage.style.width = `${damageWidth}%`;
      if (damageWidth === 100) {
        spellPage.innerHTML = '';
        const winMessage = document.createElement('p');
        winMessage.classList.add('winMessage');
        winMessage.textContent = 'УРАААА! Мы победили болячки и спасли Пончика!!!';
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
          turn.textContent = 'Ходит' + ' ' + playerName.textContent;
          answer.value = '';
          readyTask = createTask();
          task.textContent = readyTask + ' ' + '=';
        }, 2000);
      }
    } else {
      answer.value = '';
      monsterTurn();
    }
  }
  useSpell.onclick = answerProcessing;
  answerForm.onkeydown = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      answerProcessing();
    }
  };
}

export default playerTurn;
