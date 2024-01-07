import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const customerSlice = createSlice({
  name: "Customer",
  initialState: initialState,
  reducers: {
    addCustomer(state, action) {
      state.push(action.payload);
    },
    deleteCustomer(state, action) {
      const deleteIndex = action.payload;
      return state.filter((ele, index) => index !== deleteIndex);
    },
  },
});

export const { addCustomer, deleteCustomer } = customerSlice.actions;
export default customerSlice.reducer;
