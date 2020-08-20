import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navigation from './components/Navigation';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';

function App() {
  return (
    <main style={appStyles}>
      <Navigation />
      <Switch>
        <Route path="/about" component={About} exact />
        <Route path="/education" component={Education} />
        <Route path="/experience" component={Experience} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/skills" component={Skills} />
        <Redirect from="/*" to="/about" />
      </Switch>
    </main>
/*    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>  */
  );
}

const appStyles={
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
};

export default App;
