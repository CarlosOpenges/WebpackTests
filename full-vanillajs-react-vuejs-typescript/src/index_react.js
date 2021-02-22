import style from './style.css';
import sass from './scss/main.scss';
import data from './data.json';

import React from 'react';
import ReactDOM from 'react-dom';

import logo from './images/react-logo.svg';
import { HelloWorld } from './App.jsx';

ReactDOM.render(
  <HelloWorld name="React" logo={logo} menu={data.links} />,
  document.getElementById('app')
);
