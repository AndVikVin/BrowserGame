import './healthBar.css';

const healthBar = document.createElement('div');
healthBar.classList.add('healthBar');
const playerHealth = document.createElement('div');
playerHealth.classList.add('playerHealth');
const monsterHealth = document.createElement('div');
monsterHealth.classList.add('monsterHealth');
const playerDamage = document.createElement('div');
playerDamage.classList.add('playerDamage');
playerHealth.appendChild(playerDamage);
const monsterDamage = document.createElement('div');
monsterHealth.appendChild(monsterDamage);
monsterDamage.classList.add('monsterDamage');
monsterDamage.style.width = '0%';

healthBar.appendChild(playerHealth);
healthBar.appendChild(monsterHealth);

export default healthBar;
