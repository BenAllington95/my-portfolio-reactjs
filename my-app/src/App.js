
import Header from './Header';
import Main from './Main';
import About from './About';
import Projects from './Projects';
import Footer from './Footer';

import React, { useState } from 'react';

function App() {


  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
