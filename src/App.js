import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/UI/Header';
import Dropdown from './components/UI/Dropdown';
import Home from './containers/home';
import ProjectContainer from './containers/projectContainer';
import AboutContainer from './containers/aboutContainer';
import ContactContainer from './containers/contactContainer';
import ResumeContainer from './containers/resumeContainer';
import Footer from './components/UI/Footer';

function App() {
  // NavBar Dropdown Hamburger Menu Logic
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.addEventListener('resize', hideMenu);
    };
  });

  return (
    <div className="App">
      <Router>
        <Header toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/projects" component={ProjectContainer} />
          <Route exact path="/about" component={AboutContainer} />
          <Route exact path="/contact" component={ContactContainer} />
          <Route exact path="/resume" component={ResumeContainer} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
