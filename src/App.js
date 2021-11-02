import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Components/UI/Nav';
import Dropdown from './Components/UI/Dropdown';
import Home from './containers/home';
import ProjectContainer from './containers/projectContainer';
import AboutContainer from './containers/aboutContainer';
import ContactContainer from './containers/contactContainer';
import Footer from './Components/UI/Footer';
import { useTheme } from './darkMode/hooks/useTheme';
import useThemeStore from './darkMode/stores/useThemeStore';

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

  // Dark Mode!
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  useTheme();

  return (
    <div className="App">
      <Router>
        <Nav toggle={toggle} toggleTheme={toggleTheme} />
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/projects" component={ProjectContainer} />
          <Route exact path="/about" component={AboutContainer} />
          <Route exact path="/contact" component={ContactContainer} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
