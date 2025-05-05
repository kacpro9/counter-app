import './Step.css';

const Step = (props) => {
  return (
    <div className="step"> Krok:
      <input type="number" min={1}  onChange={props.handleChange}/>
    </div>
  );
};
export default Step;
