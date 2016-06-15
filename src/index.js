// src/main.js

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, hashHistory } from 'react-router'
import Root from './components/Root'

import Routes from './routes'

import './css/normalize.css'
import './css/awesome.css'


let container = document.getElementById('react-app');

// 绑定
ReactDOM.render(<Router routes={Routes} history={hashHistory}></Router>, container);
