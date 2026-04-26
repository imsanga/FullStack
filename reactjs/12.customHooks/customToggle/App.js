import "./App.css";
import { useToggle } from "./useToggle";

function App() {
  const [state, setState] = useToggle(false);
  return (
    <div className="App">
      <button onClick={setState}>{state ? "Hide" : "Show"}</button>
      {state && <h1>U Must achieve Sanga!!!</h1>}
    </div>
  );
}
export default App;
