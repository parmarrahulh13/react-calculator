import { useState } from "react";
import Button from "./Button";
import Display from "./Display";
import "./Calculator.css";

function Calculator() {

  const [display, setDisplay] = useState("");

  function handleClick(value) {
    console.log(value);
  }

  return (
    <div className="cal">
      <Display display={display} />

      <Button handleClick={handleClick} />
    </div>
  );
}

export default Calculator;