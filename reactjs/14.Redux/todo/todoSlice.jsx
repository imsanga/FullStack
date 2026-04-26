// slice - it sets the initial State, links all reducers
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todoSlice = createSlice({
  name: "todoFeature",
  initialState,
  reducers: {
    addToDo(state, action) {
      state.push(action.payload);
    },
    removeToDo(state, action) {
      const deleteIndex = action.payload;
      return state.filter((ele, index) => deleteIndex != index);
    },
  },
});

export const { addToDo, removeToDo } = todoSlice.actions;
export default todoSlice.reducer;
