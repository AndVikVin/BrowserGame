import './playerAtack.css';
import spell from './spell.png';

const playerAtack = document.createElement('canvas');
playerAtack.classList.add('playerAtack');
playerAtack.width = '500';
playerAtack.height = '300';
const ctx = playerAtack.getContext('2d');
const atackImage = document.createElement('img');
atackImage.src = spell;

function drawPlayerAtack() {
  let imageWidth = 0;
  do {
    console.log(imageWidth);
    ctx.clearRect(0, 0, playerAtack.width, playerAtack.height);
    ctx.drawImage(atackImage, 0, 0, 500, 300, 0, 0, imageWidth, 300);
    imageWidth += 0.5;
  } while (imageWidth !== 500);
}

export { playerAtack, drawPlayerAtack };
