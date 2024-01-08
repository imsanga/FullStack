// todoslice
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.push(action.payload);
    },
    removeTodo(state, action) {
      const deleteIndex = action.payload;
      return state.filter((ele, index) => index !== deleteIndex);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;


//todos.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  return (
    <>
      {todos.map((todo, index) => (
        <h3>
          {todo}&nbsp;
          <button onClick={() => dispatch(removeTodo(index))}>Delete</button>
        </h3>
      ))}
    </>
  );
};

export default Todos;


// addtodo
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../todo/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  function addTodos() {
    if (input) {
      dispatch(addTodo(input));
      setInput("");
    }
  }

  return (
    <>
      <h1>Ur ToDo's</h1>
      <input
        type="text"
        value={input}
        placeholder="enter the customer name"
        onChange={(e) => setInput(e.target.value)}
      />
      &nbsp;
      <button onClick={addTodos}>Add</button>
    </>
  );
};

export default AddTodo;


// app.jsx
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AddTodo />
        <Todos />
      </Provider>
    </div>
  );
}
export default App;

// store.jsx
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todo/todoSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
