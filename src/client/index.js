import  React  from 'react';
import  ReactDOM  from 'react-dom';

import  App  from './components/App.js';

import styles from './scss/application.scss';
var aaa = 123;


ReactDOM.render(
  <App n={aaa}/>,
  document.getElementById('root')
);

