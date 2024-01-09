// useDispatch(it is used along with the reducer to update in the store) = useDispatch -> reducer -> store

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo, removeToDo } from "../../src/todo/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state.todo);

  return (
    <>
      <h1>Ur's ToDo!!!</h1>
      <input
        type="text"
        placeholder="enter ur todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      &nbsp;&nbsp;
      <button
        onClick={() => {
          dispatch(addToDo(input));
          setInput("");
        }}
      >
        Add
      </button>
      <br />
      <br />
      {globalState.map((ele, index) => (
        <h2>
          {ele}{" "}
          <button onClick={() => dispatch(removeToDo(index))}>Delete</button>
        </h2>
      ))}
    </>
  );
};

export default AddTodo;
