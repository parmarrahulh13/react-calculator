import { useState } from "react";
import Button from "./Button";
import Display from "./Display";
import "./Calculator.css";

function Calculator() {
  const [display, setDisplay] = useState("");

  function handleClick(value) {
    if (value === "AC") {
      setDisplay("");
      return;
    } else if (value === "backspace") {
      setDisplay((prev) => prev.slice(0, -1));
      return;
    } else if (value === "=") {
      const result = eval(display);
      setDisplay(result.toString());
      return;
    }
    setDisplay((prev) => prev + value);
  }

  return (
    <div className="cal">
      <Display display={display} />

      <Button handleClick={handleClick} />
    </div>
  );
}

export default Calculator;
