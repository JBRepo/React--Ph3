import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from "react-redux";
import {createStore} from "redux";
import eventReducer from './EventReducer';
//import registerServiceWorker from './registerServiceWorker';


const store = createStore(eventReducer);
ReactDOM.render((<Provider store = {store} ><BrowserRouter><App /></BrowserRouter></Provider>), document.getElementById('root'));
//ReactDOM.render((<BrowserRouter><App /></BrowserRouter>), document.getElementById('root'));
//registerServiceWorker();
