// Redux = Action -> dispatch -> Reducer -> Store

import "./App.css";
import { Provider } from "react-redux";
import { myStore } from "./store";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <div className="App">
      <Provider store={myStore}>
        <AddTodo />
      </Provider>
    </div>
  );
}
export default App;
