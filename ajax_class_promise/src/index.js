import style from './style.css';
import sass from './scss/main.scss';

const w = window,
    clg = console.log;

import {Users, Posts, CompareData} from './process/index.js'

const init=async ()=>{
	const users=new Users()
	await users.startRequest()

	const posts=new Posts()
	await posts.startRequest()

	const compare=new CompareData(users, posts)
	clg(compare.popo, 'FT esto me llego ome hajajaja')
}

//para poder usar la propiedad async/await
//se tiene que usar dentro de una función con async
init()


const app = document.querySelector('#root');

// Create paragraph node
//const p = document.createElement('div');
//p.textContent = `I like ${myGame.name}.`;
//p.textContent = `I like you`;
// Append paragraph node to the DOM
//app.append(p);