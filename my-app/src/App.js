
import Header from './Header';
import Main from './Main';
import About from './About';
import Projects from './Projects';

import React, { useState } from 'react';

function App() {

  const [theme, setTheme] = useState('dark')

  return (
    <div className="App" id={theme}>
      <Header 
      theme={theme}/>
      <Main />
      <About 
      theme={theme}/>
      <Projects 
      theme={theme}/>
    </div>
  );
}

export default App;
