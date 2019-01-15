import './spellPage.css';
import playerTurn from '../gameProcess/playerTurn';

const spellPage = document.createElement('div');
spellPage.classList.add('spellPage');
const useSpell = document.createElement('button');
useSpell.textContent = 'Ответить';
useSpell.classList.add('useSpell');
const taskLabel = document.createElement('p');
taskLabel.classList.add('taskLabel');
taskLabel.textContent = 'А ну-ка, посчитай!';
const task = document.createElement('p');
task.classList.add('task');
const answerForm = document.createElement('form');
answerForm.classList.add('answerForm');
const answer = document.createElement('input');
answer.type = 'text';
answer.classList.add('answer');
answerForm.appendChild(answer);
spellPage.appendChild(taskLabel);
spellPage.appendChild(task);
spellPage.appendChild(useSpell);
spellPage.appendChild(answerForm);


export default spellPage;
