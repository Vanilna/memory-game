import React from "react";
import { Button } from "./Button.js";

const Level = props => {
  return (
    <div className="level">
      <Button name="Level 1" />
      <Button name="Level 2" />
      <Button name="Level 3" />
    </div>
  );
};

export default Level;
