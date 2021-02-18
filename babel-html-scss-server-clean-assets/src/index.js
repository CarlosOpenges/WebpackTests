import style from './style.css';
import sass from './scss/main.scss';

const arr = [1, 2, 3];

const codeES6 = () => console.log(...arr);

codeES6();

class Game {
    name = 'Violin Charades'
}
const myGame = new Game()
// Create paragraph node
const p = document.createElement('p')
p.textContent = `I like ${myGame.name}.`

// Create heading node
const heading = document.createElement('h1');
heading.textContent = 'Interesting!';

// Append heading node to the DOM
const app = document.querySelector('#root');
app.append(heading);