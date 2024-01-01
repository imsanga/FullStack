// useEffect - it is used for fetching data, directly updating the Dom, timers.
// It accepts two arguments --> useEffect(<function>, <dependency>)

//*App.jsx*
import "./App.css";
import { useState } from "react";
import { TextDisplay } from "./test";

function App() {
  let [text, setText] = useState(1);
  return (
    <div className="App">
      <button onClick={() => setText(!text)}>show/Hide</button>
      <br />
      <br />
      {text && <TextDisplay />}
    </div>
  );
}
export default App;
