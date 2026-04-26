// In React, a "state" is a built-in feature that represents the current condition or data of a component.
// Hooks allow function components to have access to state and other React features
// 'useState' hook returns an array with two elements: the current state value and a function to update the state.

// *useState - 0*
import "./App.css";
import { useState } from "react";

function App() {
  const name = "TestUser";
  const isEligibleAge = 21;
  const [vote, setVote] = useState(false);
  return (
    <div className="App">
      {isEligibleAge >= 18 ? (
        <>
          <h1>{name} ur elgible to Vote!!!</h1>
          <button onClick={() => setVote(true)}>click to Vote!!!</button>
        </>
      ) : (
        <h2 className="colorF">
          {name} u have another {18 - isEligibleAge} years to be elgible for
          Voting!
        </h2>
      )}
      {vote && <h2 style={{ color: "green" }}>Thanks for Voting</h2>}
    </div>
  );
}

export default App;

// // *useState - 1*
// import "./App.css";
// import { useState } from "react";

// function App() {
//   let [age, setAge] = useState(0);
//   return (
//     <div className="App">
//       <h1>{age}</h1>
//       <button onClick={() => setAge(++age)}>Update ur Age</button>
//     </div>
//   );
// }

// export default App;

// // *useState - 2*
// import "./App.css";
// import { useState } from "react";

// function App() {
//   let [text, setText] = useState("");
//   return (
//     <div className="App">
//       <input type="text" onChange={(event) => setText(event.target.value)} />
//       <br />
//       <h1>{text}</h1>
//     </div>
//   );
// }
// export default App;

// // *useState - 3*
// import "./App.css";
// import { useState } from "react";

// function App() {
//   const [text, setText] = useState(1);
//   return (
//     <div className="App">
//       {text && <h1>Come on Sanga!!!</h1>}
//       <button onClick={() => setText(!text)}>show/Hide</button>
//     </div>
//   );
// }
// export default App;

// // *useState - 4*
// import "./App.css";
// import { useState } from "react";

// function App() {
//   const [textColor, setTextColor] = useState("green");
//   return (
//     <div className="App">
//       <h1 style={{ color: textColor }}>Come on Sanga!!!</h1>
//       <button
//         onClick={() => setTextColor(textColor == "green" ? "red" : "green")}
//       >
//         change color
//       </button>
//     </div>
//   );
// }

// export default App;
