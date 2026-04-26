// *Fetch API*
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [fetchData, setFetchData] = useState("");

  const fetchfact = () => {
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((jsObj) => setFetchData(jsObj.fact))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchfact();
  }, []);

  return (
    <div className="App">
      <button onClick={fetchfact}>Generate Cat Fact</button>
      <p>{fetchData}</p>
    </div>
  );
}
export default App;
