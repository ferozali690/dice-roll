import React from "react";
import Rolling from "./DiceDisplayComponent/Rolling";
class App extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Dice Roll</h1>
        <Rolling />
      </div>
    );
  }
}
export default App;
