import style from './style.css';
import sass from './scss/main.scss';

import mainImage from './images/openges.png';

const arr = [1, 2, 3];

const codeES6 = () => console.log(...arr);

codeES6();

class Game {
    name = 'Violin Charades';
}
const myGame = new Game();

// Get the root element
const app = document.querySelector('#root');

// Create paragraph node
const p = document.createElement('p');
p.textContent = `I like ${myGame.name}.`;
// Append paragraph node to the DOM
app.append(p);

// Create heading node
const heading = document.createElement('h1');
heading.textContent = 'Interesting!';
// Append heading node to the DOM
app.append(heading);

// Create image
const my_image = document.createElement('img');
my_image.src = mainImage; // '/dist/c73a9ef2b7d287eb736d.png'
app.append(my_image);