import { useEffect, useState } from "react";
import Display from "./Display";
import ButtonsPanel from "./ButtonsPanel";
import Step from "./Step";
import "./Counter.css";
const Counter = (props) => {
  const [counter, setCounter] = useState(props.counterInitValue);
  const [stepValue, setStepValue] = useState(1);

  const handleChange = (event) => {
    const newStep = Math.max(1, Number(event.target.value)) ;
    setStepValue(newStep);
  };
  

  const updateCounter = (action) => {
    if (action === "add") {
      setCounter(props.counterInitValue + stepValue);
    } else if (action === "substract") {
      setCounter(prev => prev - stepValue);
    } else if (action === "zero") {
      setCounter(0);
    }
  };

  return (
    <div className="counter">
      <Display counter={counter} />
      <ButtonsPanel updateCounter={updateCounter} stepValue={stepValue}/>
      <Step handleChange={handleChange}/>
    </div>
  );
};
export default Counter;
