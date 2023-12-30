// *Array*
import "./App.css";

function App() {
  const arrayName = ["Santha", "Sanga", "Natarajan", "Kalidoss", "Vijaya"];
  return (
    <div className="App">
      {arrayName.map((userName, index) => (
        <h1 key={index}>
          {userName} Index: {index}
        </h1>
      ))}
    </div>
  );
}

export default App;

// // *Object - 1*
// import "./App.css";

// function App() {
//   const arrayName = [
//     { name: "Sanga", age: 23 },
//     { name: "Santha", age: 46 },
//     { name: "Natarajan", age: 52 },
//     { name: "Kalidoss", age: 84 },
//     { name: "Vijaya", age: 77 },
//   ];
//   return (
//     <div className="App">
//       {arrayName.map((ele, index) => {
//         return (
//           <h1 key={index}>
//             {ele.name} {ele.age} Index: {index}
//           </h1>
//         );
//       })}
//     </div>
//   );
// }

// export default App;

// // *Object - 1.1*
// import "./App.css";

// function App() {
//   const arrayName = [
//     { name: "Sanga", age: 23 },
//     { name: "Santha", age: 46 },
//     { name: "Natarajan", age: 52 },
//     { name: "Kalidoss", age: 84 },
//     { name: "Vijaya", age: 77 },
//   ];

//   return (
//     <div className="App">
//       {arrayName.map((user, index) => (
//         <UserDetails
//           key={index}
//           name={user.name}
//           age={user.age}
//           index={index}
//         />
//       ))}
//     </div>
//   );
// }

// const UserDetails = (props) => {
//   return (
//     <div>
//       <h1>
//         {props.name} {props.age} Index: {props.index}
//       </h1>
//     </div>
//   );
// };

// export default App;
