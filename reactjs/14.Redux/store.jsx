// store - centralised store
import { configureStore } from "@reduxjs/toolkit";
import todoFeature from "./todo/todoSlice";

export const myStore = configureStore({
  reducer: {
    todo: todoFeature,
  },
});
