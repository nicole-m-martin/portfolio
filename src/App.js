import React, { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Nav from './Components/UI/Nav';
import Dropdown from './Components/UI/Dropdown';
import Home from './containers/home';
import ProjectContainer from './containers/projectContainer';
import AboutContainer from './containers/aboutContainer';
import ContactContainer from './containers/contactContainer';
// import BlogContainer from './containers/blogContainer';
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
  const theme = useThemeStore((state) => state.theme);


  return (
    <div className="App">
      <BrowserRouter>
        <Nav toggle={toggle} toggleTheme={toggleTheme} theme={theme}/>
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/projects" element={<ProjectContainer />} />
          <Route exact path="/about" element={<AboutContainer />} />
          <Route exact path="/contact" element={<ContactContainer />} />
          {/* <Route exact path="/blog" element={<BlogContainer />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
