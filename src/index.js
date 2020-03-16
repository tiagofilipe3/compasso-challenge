import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UserList from './UserList/UserList';
import * as serviceWorker from './serviceWorker';

const root = document.getElementById('root');

ReactDOM.render(<UserList />, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
