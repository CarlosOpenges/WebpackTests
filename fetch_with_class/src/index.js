import style from './style.css';
import sass from './scss/main.scss';

import { Ajax } from './Ajax';

const w = window,
    clg = console.log;

let url = 'https://jsonplaceholder.typicode.com/users';
let users = new Ajax(url);
clg(users.harddata);
clg(users.dataReceived);
clg(users.popo);

// Get the root element
const app = document.querySelector('#root');

// Create paragraph node
//const p = document.createElement('div');
//p.textContent = `I like ${myGame.name}.`;
//p.textContent = `I like you`;
// Append paragraph node to the DOM
//app.append(p);