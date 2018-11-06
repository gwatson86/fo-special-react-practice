import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import PointsRemaining from './points-remaining'
import Category from './category'
import SpecialData from './special-data'

class App extends Component {
  state = {
    remainingPoints: 28,
    data: SpecialData
  }

  incrementRemainingPoints = () => {
    const newRemainingPoints = this.state.remainingPoints + 1;
    this.setState({
      remainingPoints: newRemainingPoints
    });
  }

  decrementRemainingPoints = () => {
    if (this.state.remainingPoints > 0) {
      const newRemainingPoints = this.state.remainingPoints - 1;
      this.setState({
        remainingPoints: newRemainingPoints
      });
    } else {
      alert("You don't have any more points to spend!")
    }
  }

  render() {
    return (
      <div>
      <div className="headline">You're S.P.E.C.I.A.L.</div>
      {this.state.data.map(stat => {
        return <Category key={stat.name}
          stat={stat}
          remainingPoints={this.state.remainingPoints}
          incrementRemainingPoints={this.incrementRemainingPoints}
          decrementRemainingPoints={this.decrementRemainingPoints}
        />
      })}
      <PointsRemaining remainingPoints={this.state.remainingPoints} />
      </div>
    );
  }
}

export default App;
