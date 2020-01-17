import React, { Component } from 'react';
import NavBar from './components/navBar';
import Todos from './components/todos';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Todos />
      </React.Fragment>
    );
  }
}

export default App;
