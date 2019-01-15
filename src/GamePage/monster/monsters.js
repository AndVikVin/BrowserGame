import './monsters.css';
import monster1head from './monster1head.png';
import monster2head from './monster2head.png';
import monster3head from './monster3head.png';
import monster1body from './monster1body.png';
import monster2body from './monster2body.png';
import monster3body from './monster3body.png';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
const monsterNumber = getRandomInt(0, 3);
const firstName = ['Старый', 'Клыкастый', 'Зеленейший'];
const secondName = ['Мумий', 'Расамаха', 'Франкенштейн'];
const thirdName = ['Егор', 'Петя', 'Иван'];
const monsterName = document.createElement('p');
monsterName.classList.add('monsterName');
monsterName.textContent = firstName[monsterNumber]
+ ' ' + secondName[monsterNumber] + ' ' + thirdName[monsterNumber];
const monsters = document.createElement('canvas');
monsters.classList.add('monsters');
monsters.width = 150;
monsters.height = 500;
const ctx = monsters.getContext('2d');
const monstersScope = [];
function loadMonsterImage(head, headPath, body, bodyPath) {
  let monster = {};
  monster[head] = document.createElement('img');
  monster[head].src = headPath;
  monster[body] = document.createElement('img');
  monster[body].src = bodyPath;
  monstersScope.push(monster);
}
let y = 0;
loadMonsterImage('head', monster1head, 'body', monster1body);
loadMonsterImage('head', monster2head, 'body', monster2body);
loadMonsterImage('head', monster3head, 'body', monster3body);
let dy = 2;
function draw() {
  ctx.clearRect(0, 0, monsters.width, monsters.height);
  ctx.drawImage(monstersScope[monsterNumber].body, 0, 98);
  ctx.drawImage(monstersScope[monsterNumber].head, 0, y);
  if (y + dy > 8 || y + dy < 0) {
    dy = -dy;
  }
  y += dy;
}
setInterval(draw, 180);


export { monsters, monsterName };
