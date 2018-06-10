import React from 'react';
import ReactDOM from 'react-dom';
import {injectGlobal} from 'styled-components';
import { HashRouter } from 'react-router-dom'

import './index.css';
import App from './app/App';

// Global style
injectGlobal`
  html,
  body,
  #app,
  .wrapper {
    min-height: 100vh;
    height: 100%;
  }

  html {
    box-sizing: border-box;
    font-size: 100%;
  }

  * {
    &,
    &::after,
    &::before {
      box-sizing: inherit;
    }
  }

  body {
    padding: 0;
    margin: 0;
    font: 1rem / 1.414 'Roboto Mono', monospace;
  }`

const Main = () => (
    <HashRouter>
      <App />
    </HashRouter>
  )

ReactDOM.render(<Main />, document.getElementById('root'));