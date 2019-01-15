import './player.css';
import head from './head.png';
import body from './body.png';

const player = document.createElement('canvas');
player.classList.add('player');
player.width = 150;
player.height = 500;
const ctx = player.getContext('2d');
const bodyParts = {};
function loadImage(name, path, x, y) {
  bodyParts[name] = document.createElement('img');
  bodyParts[name].onload = function () {
    ctx.drawImage(bodyParts[name], x, y);
  };
  bodyParts[name].src = path;
}
let y = 0;
loadImage('head', head, 0, 0);
loadImage('body', body, 0, 103);

let dy = 2;
function draw() {
  ctx.clearRect(0, 0, player.width, player.height);
  ctx.drawImage(bodyParts.body, 0, 103);
  ctx.drawImage(bodyParts.head, 0, y);
  if (y + dy > 8 || y + dy < 0) {
    dy = -dy;
  }
  y += dy;
}
setInterval(draw, 180);


export default player;
