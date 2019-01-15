import './footer.css';

const footer = document.createElement('footer');
footer.id = 'author';
const ul = document.createElement('ul');
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
const a1 = document.createElement('a');
a1.href = 'https://github.com/AndVikVin';
a1.textContent = 'Andrey Vintskevich';
li1.appendChild(a1);
li2.textContent = 'Location: Minsk, Belarus';
const a3 = document.createElement('a');
a3.href = 'mailto:vintskevich@gmail.com?subject=Game';
a3.textContent = 'Написать письмо';
li3.appendChild(a3);
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
footer.appendChild(ul);

export default footer;
