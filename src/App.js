
// @flow

// In every Component, we are supposed to provide types of its Props and State or get an error!
// Use empty carly braces to say its empty and doesnt contain any Props or State to be defined;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component <{}> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
