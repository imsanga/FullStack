import "./App.css";
import { useCount } from "./useCount";

function App() {
  const [state, setIncrease, setDecrease, restart] = useCount(0);
  return (
    <div className="App">
      <button onClick={setIncrease}>
        Add<sup>+</sup>
      </button>
      &nbsp; &nbsp;
      <button onClick={setDecrease}>
        Subtract<sup>-</sup>
      </button>
      &nbsp; &nbsp;
      <button onClick={restart}>
        Restart<sup>0</sup>
      </button>
      <h1>{state}</h1>
    </div>
  );
}
export default App;
