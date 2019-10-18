import React, { Component } from 'react';
import './App.css';
import { regions } from './config'
import * as loadingImage from './loading.gif'

class App extends Component {
  state = {
    loading: false,
  }

  submitSummoner = () => {
    this.setState({ loading: true })
    setTimeout(() => {
      this.setState({ loading: false })
    }, 5000)
  }

  render() {
    const { loading } = this.state

    let content = (
      <img src={loadingImage} alt="Loading" />
    )

    if (!loading) {
      content = (
        <>
          <h1>Who I Play With</h1>
          <input placeholder="Summoner Name" />
          <select>
            {regions.map(region => (
              <option>{region}</option>
            ))}
          </select>
          <button onClick={this.submitSummoner}>Hi</button>
        </>
      )
    }

    return (
      <div className="App">
        <div className="centering-container fullscreen-bg">
          <div className="panel">
            {content}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
