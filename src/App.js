import React, { Component } from 'react';
import PayeesManager from './payees/PayeesManager';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <main className="container">
        <PayeesManager/>
      </main>
    );
  }
}

export default App;
