import React from "react";
import DiceRoll from "../DiceComponent/DiceRoll";

class Rolling extends React.Component {
  constructor() {
    super();
    this.state = {
      sideOne: "one",
      sideTwo: "two",
      loading: false
    };
  }
  handleRoll = () => {
    const rolls = ["one", "two", "three", "four", "five", "six"];
    const newDieOne = rolls[Math.floor(Math.random() * rolls.length)];
    const newDieTwo = rolls[Math.floor(Math.random() * rolls.length)];

    this.setState({ sideOne: newDieOne, sideTwo: newDieTwo, loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 200);
  };
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <DiceRoll face={this.state.sideOne} />
        <DiceRoll face={this.state.sideTwo} />
        <h3>Click below button to roll the dice</h3>
        <button
          style={{
            width: "100px",
            height: "40px",
            display: "block",
            background: "black",
            borderRadius: "50px",
            outline: "none",
            color: "white",
            fontSize: "20px",
            cursor: "pointer",
            marginLeft: "46%"
          }}
          onClick={this.handleRoll}
        >
          {this.state.loading ? "Rolling..." : "Roll"}
        </button>
      </div>
    );
  }
}
export default Rolling;
