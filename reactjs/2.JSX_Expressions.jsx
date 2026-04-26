// JSX - JS XML - It allows us to write HTML in React and it simplifies DOM compared to vanillaJS

// *JSX Expressions*
import "./App.css";

function App() {
  const name = "Sangameshwaran Natarajan";
  const nick_name = "Sanga";
  return (
    <div className="App">
      <h1>{name}</h1>
      <h3>Come on {nick_name}, u must do it!!!</h3>
    </div>
  );
}
export default App;

// // *JSX Expressions_Directly Assigning HTML tags to variables*
// import "./App.css";

// function App() {
//   const name = <h1>Sangameshwaran Natarajan</h1>;
//   const nick_name = <h3>Come on Sanga, u can do it!!!</h3>;
//   return (
//     <div className="App">
//       {name}
//       {nick_name}
//     </div>
//   );
// }

// export default App;

// // *JSX Expressions_Assigning Div tags to variables*
// import "./App.css";

// function App() {
//   const name = <h1>Sangameshwaran Natarajan</h1>;
//   const age = <h2>23</h2>;
//   const email = <h2>madrascoder05@gmail.com</h2>;
//   const random_div = (
//     <div>
//       {name} {age} {email}
//     </div>
//   );
//   return <div className="App">{random_div}</div>;
// }

// export default App;
