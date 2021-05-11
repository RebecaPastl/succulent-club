import React from 'react';
import Header from './components/Header.js';
import About from './components/About.js';
import Services from './components/Services.js';
import Events from './components/Events.js';
import Contact from './components/Contact.js';

class App extends React.Component {
  render() {

    return <>
      <Header />
      <About />
      <Services />
      <Events />
      <Contact />
    </>
  };
}

export default App;
