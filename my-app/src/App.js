import Main from './Main';
import About from './About';
import Header from './Header';
import Skills from './Skills'
import Projects from './Projects';
import Footer from './Footer';
import React, { useState } from 'react';


function App() {

  const [navDisplay, setNavDisplay] = useState(false)
  const [theme, setTheme] = useState(true)
  

  function scrollLock() {
    return navDisplay ? document.body.style.overflow = "auto" : document.body.style.overflow = "hidden"
  }

  function toggleNavDisplay() {
    setNavDisplay(prevNav => !prevNav)
    scrollLock()
  }

  function toggleTheme() {
    setTheme(prevTheme => !prevTheme)
  }

  return (
    <div className="App" id={theme ? "" : "app-light"}>
      <Header 
        toggleTheme={toggleTheme}
        toggleNavDisplay={toggleNavDisplay} 
        theme={theme} 
        navDisplay={navDisplay} />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Footer />

    </div>
  );
}

export default App;
