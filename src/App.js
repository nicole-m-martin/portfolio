import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom"; 
import Header from './Components/UI/Header';
import Main from './Components/UI/Main'
import Projects from './Components/Projects/Projects';
import About from './Components/About/About';
import Footer from './Components/UI/Footer'
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
           <Main />
            </Route>
          <Route exact path='/projects'> 
          <Projects />
          </Route>
          <Route exact path='/about'> 
          <About />
          </Route>
          <Route exact path='/contact'> 
          <Contact />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
