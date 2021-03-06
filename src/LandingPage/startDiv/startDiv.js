import './startDiv.css';

const startDiv = document.createElement('div');
startDiv.classList.add('startDiv');
const h1 = document.createElement('h1');
h1.textContent = 'Увлекательная игра для маленьких всезнаек!';
startDiv.appendChild(h1);
const p = document.createElement('p');
p.textContent = 'Друзья! Пончик заболел! И у Пилюлькина нет нужного лекарства! Давайте поможем Незнайке решить задачки, чтобы вылечить Пончика!';
startDiv.appendChild(p);
const button = document.createElement('button');
button.innerHTML = 'Начать!';
startDiv.appendChild(button);
button.addEventListener('click', () => {
  const landingPage = document.querySelector('.landingPage');
  landingPage.classList.remove('center');
  landingPage.classList.add('left');  
  document.querySelector('body').style = 'overflow:hidden';
  const registerPage = document.querySelector('.registerPage');
  registerPage.classList.remove('right');
  registerPage.classList.add('center');
});
startDiv.id = 'startDiv';
export default startDiv;
