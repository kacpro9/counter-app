import "./App.css";
import Heading from "./components/Heading";
import Counter from "./components/COunter";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Heading text="Aplikacja licznika w ReactJS" classValue='gray'/>
        </header>
        <Counter counterInitValue={0} />  
    </div>
  );
};

export default App;
