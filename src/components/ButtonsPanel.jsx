import'./ButtonsPanel.css';


const ButtonsPanel = (props) => {
return (
<div className="buttonsPanel">
        <button onClick={() => props.updateCounter('add')}>Add by {props.stepValue}</button>
        <button onClick={() => props.updateCounter('substract')}>Substract by {props.stepValue}</button>
        <button onClick={() => props.updateCounter('zero')}>Set 0</button>
      </div>
);
};
export default ButtonsPanel;