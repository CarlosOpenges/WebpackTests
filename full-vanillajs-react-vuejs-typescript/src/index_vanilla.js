import style from './style.css';
import sass from './scss/main.scss';
import data from './data.json';

import logo from './images/js-logo.png';
import { HelloWorld} from './App.js';

console.log('Vanilla JS con Webpack');

const arr = [1, 2, 3];
const codeES6 = () => console.log(...arr);

codeES6();
console.log(data, data.name);

/* ********************************************************** */
const d = document,
    app = d.getElementById('app'),
    cl = console.log;

const h1 = d.createElement('h1'),
      p = d.createElement('p'),
      img = d.createElement('img'),
      nav = d.createElement('nav');

const hi = new HelloWorld('Vanilla JS');

let menu = '';

data.links.forEach(link => menu += `<a href="${link[1]}">${link[0]}</a>`);

h1.textContent = 'Webpack + VanillaJS';
p.textContent = hi.greet();
img.src = logo;
nav.classList.add('Menu');
nav.innerHTML = menu;

app.appendChild(h1);
app.appendChild(p);
app.appendChild(nav);
app.appendChild(img);