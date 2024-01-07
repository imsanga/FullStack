import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./slices/customerSlice";

export const MyStore = configureStore({
  reducer: {
    customers: customerReducer,
  },
});
