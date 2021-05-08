import React from 'react';
import Header from './Header.js'

class App extends React.Component {
  render() {

    return <>
      <Header />
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    </>
  };
}

export default App;
