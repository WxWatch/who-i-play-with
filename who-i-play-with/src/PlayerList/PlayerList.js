import React, { Component } from 'react';
import '../App.css';

class PlayerList extends Component {
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
    return (
        <div>
            <p>Player 1</p>
            <p>Player 2</p>
            <p>Player 3</p>
        </div>
    )
  }
}

export default PlayerList;
