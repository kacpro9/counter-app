import { useEffect, useState } from "react";
import Display from "./Display";
import ButtonsPanel from "./ButtonsPanel";
import Step from "./Step";
import "./Counter.css";
const Counter = (props) => {
  const [counter, setCounter] = useState(props.counterInitValue);
  

  const updateCounter = (action) => {
    if (action === "add") {
      setCounter(counter + 1);
    } else if (action === "reset") {
      setCounter(props.counterInitValue);
    } else if (action === "zero") {
      setCounter(0);
    }
  };

  useEffect(() => {
    console.log("Wywołanie useEffect");
  },[counter]);

  return (
    <div className="counter">
      <Display counter={counter} />
      <ButtonsPanel updateCounter={updateCounter} />
      <Step />
    </div>
  );
};
export default Counter;
