import React from 'react'

class PointsRemaining extends React.Component {
  render(){
    return(
      <div className="PRBlock">
        <img src="./vaultboy.png" alt=""/>
        <h1 className="points">Points Remaining</h1>
        <div className="remain">{this.props.remainingPoints}</div>


      </div>
    )
  }
}

export default PointsRemaining
