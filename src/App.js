import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 45,
      show: true,
      rotate: 45
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
    this.setState({ rotate: this.state.rotate + 1 });
  }
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
    this.setState({ rotate: this.state.rotate - 1 });
  }
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  }


  render() {
    return (
      <div>
        <button className="math" onClick={this.IncrementItem}>Add</button>
        <button className="math" onClick={this.DecreaseItem}>Subtract</button>
        <button className="math" onClick={this.ToggleClick}>
          { this.state.show ? "Hide number" : "Show number" }
        </button>
        { this.state.show ? <h2>{ this.state.clicks }</h2> : null }
        <div className="circle"> 
          <div className="verticalLine">
          </div>
          <div className="movingLine" style={{transform: "rotate(" + this.state.rotate + "deg)"}}>
            <div className="movingLineHandle"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;