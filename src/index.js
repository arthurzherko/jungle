import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import './assets/touchTouch/touchTouch.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import jQuery from 'jquery'
global.jQuery = jQuery
require('bootstrap')

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

serviceWorker.unregister();
