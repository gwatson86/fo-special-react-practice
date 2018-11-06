import React from 'react'

class Category extends React.Component {
  state = {
    points: this.props.stat.points
  }

  incrementPoints = () => {
    if (this.props.remainingPoints > 0 && this.state.points < 10) {
      const newPoints = this.state.points + 1;
      this.setState({
        points: newPoints
      });
      this.props.decrementRemainingPoints();
    } else {
      alert(`You are either out of points to spend or have reached maximum ${this.props.stat.name}!`)
    }
  }

  decrementPoints = () => {
    if (this.state.points > 0) {
      const newPoints = this.state.points - 1;
      this.setState({
        points: newPoints
      });
      this.props.incrementRemainingPoints();
    } else {
      alert(`You can't have negative ${this.props.stat.name}!`)
    }
  }

  render(){
    return(
    <div className="category-box">
      <div className="category-background">
        <div className="category-name">{this.props.stat.name}</div>
        <div className="arrow-container">
          <i className="fas fa-arrow-left arrow" onClick={this.decrementPoints}></i>
          <div className="category-value">{this.state.points}</div>
          <i className="fas fa-arrow-right arrow" onClick={this.incrementPoints}></i>
        </div>
      </div>
    </div>
  )
  }
}

export default Category
