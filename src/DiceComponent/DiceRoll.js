import React from "react";
import "./DiceRoll.css";
const DiceRoll = props => {
  return (
    <div style={{ display: "inline", padding: "20px" }}>
      <i className={`rolling fas fa-dice-${props.face}`} />
    </div>
  );
};

export default DiceRoll;
