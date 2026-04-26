// *Axios - 1*
import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [fetchData, setFetchData] = useState("");

  const fetchfact = () => {
    Axios.get("https://catfact.ninja/fact")
      .then((res) => setFetchData(res.data.fact))
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

// *Axios - 2*
// import "./App.css";
// import Axios from "axios";
// import { useState } from "react";

// function App() {
//   const [fetchAge, setFetchAge] = useState("");
//   const [predictedAge, setPredictedAge] = useState("");

//   const fetchData = () => {
//     Axios.get(`https://api.agify.io/?name=${fetchAge}`).then((res) => {
//       setPredictedAge(
//         <h1>
//           Predicted Age of {res.data.name} is {res.data.age}
//         </h1>
//       );
//     });
//   };

//   return (
//     <div className="App">
//       <input
//         type="text"
//         placeholder="enter ur name"
//         onChange={(event) => setFetchAge(event.target.value)}
//       />
//       &nbsp;
//       <button onClick={fetchData}>Predict ur age</button>
//       {predictedAge}
//     </div>
//   );
// }
// export default App;
