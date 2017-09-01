import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavbarTop from './components/NavbarTop';
import Main from './main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Main} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
