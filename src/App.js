import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/UI/Header';
import Main from './Containers/Main';
import Projects from './Components/Projects/Projects';
import About from './Components/About/About';
import Footer from './Components/UI/Footer';
import Contact from './Components/Contact/Contact';
import Resume from './Components/Resume/Resume';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/resume">
            <Resume />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
