import spellPage from '../spellPage/spellPage';
import playerTurn from './playerTurn';

function showName() {
  const playerName = document.querySelector('.inputName');
  const turn = document.querySelector('.turn');
  setTimeout(() => {
    turn.textContent = 'Ходит' + ' ' + playerName.value
  }, 3000);
}

function showSpellPage() {
  setTimeout(() => {
    spellPage.style.visibility = 'visible';
    playerTurn();
  }, 3000);
}

function startGame() {
  showName();
  showSpellPage();
}

export default startGame;
