// Components - it is a fnc that returns html elements
// (note: when creating a component, the components name must start with a upperCase letter)

import "./App.css";

function App() {
  return (
    <div className="App">
      <TestComponent />
      <TestComponent />
      <TestComponent />
    </div>
  );
}

const TestComponent = () => {
  return (
    <div>
      <h1>Sangameshwaran Natarajan</h1>
      <h2>23</h2>
      <h2>madrascoder05@gmail.com</h2>
    </div>
  );
};

export default App;

// Props - it is an argument that is passed to react components via html attributes. It is stored as an JS_Object

// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <TestComponent name="Natarajan" age={51} email="nattu@gmail.com" />
//       <TestComponent name="Santhakumari" age={47} email="santha@gmail.com" />
//       <TestComponent name="Sangameshwaran" age={23} email="sanga@gmail.com" />
//     </div>
//   );
// }

// const TestComponent = (props) => {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h2>{props.age}</h2>
//       <h2>{props.email}</h2>
//     </div>
//   );
// };

// export default App;
