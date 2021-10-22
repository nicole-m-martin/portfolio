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




function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path='/main'> 
          <Main />
          </Route>
          <Route exact path='/projects'> 
          <Projects />
          </Route>
          <Route exact path='/about'> 
          <About />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
