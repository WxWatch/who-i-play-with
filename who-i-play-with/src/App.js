import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="centering-container fullscreen-bg">
          <div className="panel">
            <h1>Who I Play With</h1>
            <input placeholder="Summoner Name" />
            <select>
              <option>-- Choose a Region --</option>
            </select>
            <button>Hi</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
