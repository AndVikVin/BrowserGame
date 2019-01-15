import './registerPage.css';
import startGame from '../GamePage/gameProcess/startGame';

const registerPage = document.createElement('div');
document.querySelector('body').appendChild(registerPage);
registerPage.classList.add('registerPage', 'right');
const form = document.createElement('form');

const inputName = document.createElement('input');
inputName.classList.add('inputName');
inputName.type = 'text';
inputName.placeholder = 'Введите своё имя';
const inputButton = document.createElement('input');
inputButton.type = 'button';
inputButton.classList.add('inputButton');
inputButton.value = 'Начать!';
const playerName = document.createElement('p');
playerName.classList.add('playerName');
function switchToGame() {
  registerPage.classList.remove('center');
  registerPage.classList.add('left');
  const gamePage = document.querySelector('.gamePage');
  gamePage.classList.remove('right');
  gamePage.classList.add('center');
  playerName.textContent = inputName.value;
  startGame();
}
form.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    switchToGame();
  }
});
inputButton.addEventListener('click', switchToGame);
const rules = document.createElement('p');
rules.textContent = 'Помогай Незнайке, решай задачки, побеждай болячки!';
form.appendChild(inputName);
form.appendChild(inputButton);
registerPage.appendChild(form);
registerPage.appendChild(rules);

export { registerPage, playerName };
