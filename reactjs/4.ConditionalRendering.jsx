// Conditional Rendering(ternary,logicalAND - Operator)

import "./App.css";

function App() {
  const name = "TestUser",
    isEligibleAge = 18,
    isEligible = true,
    voted = true;
  return (
    <div className="App">
      {isEligibleAge >= 18 ? (
        <h1>{name} ur elgible to Vote!!!</h1>
      ) : (
        <h2 className="colorF">
          {name} u have another {18 - isEligibleAge} years to be elgible for
          Voting!
        </h2>
      )}
      {isEligible && (
        <>
          <button>click to Vote!!!</button>
          <h2 style={{ color: voted ? "green" : "red" }}>Thanks for Voting</h2>
        </>
      )}
    </div>
  );
}

export default App;
