import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import { injectGlobal } from 'styled-components'

import logo from './logo.svg';
import './App.css';

// Import pages
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Portf01 from './pages/Portfolio_01';
import Portf06 from './pages/Portfolio_06';
import Portf07 from './pages/Portfolio_07';
import Portf08 from './pages/Portfolio_08';
import Portf09 from './pages/Portfolio_09';

// Import nav component
import Nav from './components/Nav'
import Footer from './components/Footer'
import Container from './components/Container'
import { Wrapper } from './components/Layout';

//import Background from './components/Background'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Wrapper>

        <Nav />
        <Switch>
        <Route exact={true} path="/" component={Portfolio} />
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/portfolio/01" component={Portf01}/>
        <Route path="/portfolio/06" component={Portf06}/>
        <Route path="/portfolio/07" component={Portf07}/>
        <Route path="/portfolio/08" component={Portf08}/>
        <Route path="/portfolio/09" component={Portf09}/>
        </Switch>
        <Footer />
      </Wrapper>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
