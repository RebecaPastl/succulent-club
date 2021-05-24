import React from 'react';
import Header from './components/Header.js';
import About from './components/About.js';
import Services from './components/Services.js';
import Events from './components/Events.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';

class App extends React.Component {
  
  constructor(props) {
       
    super(props);

    this.backToTop = this.backToTop.bind(this)
             
  }

  backToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  
  render() {

    return <>
      <Header />
      <About />
      <Services />
      <Events />
      <Contact />
      <Footer backToTop={this.backToTop}/>
    </>
  };
}

export default App;
