import style from './style.css';
import sass from './scss/main.scss';

import { Ajax, ProxyAjax } from './Ajax';

const w = window,
    clg = console.log;

let url = 'https://jsonplaceholder.typicode.com/users';

const users = new Ajax(url);

const proxy=new ProxyAjax(users)

setTimeout(()=>{//es una forma de hacerlo aunque esta muyyyy mal,
				//pero es solo para ejemplo.
				//la forma correcta es con un .then() o async/await
	console.log(proxy.popo, 'FT resultados ome jajaja')
}, 3000)




// clg(users.harddata);
// clg(users.dataReceived);

// Get the root element
const app = document.querySelector('#root');

// Create paragraph node
//const p = document.createElement('div');
//p.textContent = `I like ${myGame.name}.`;
//p.textContent = `I like you`;
// Append paragraph node to the DOM
//app.append(p);