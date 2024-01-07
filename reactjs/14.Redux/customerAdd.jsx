import { useState } from "react";
import { CustomerView } from "./customerView";
import { addCustomer as addCustomerAction } from "./slices/customerSlice";
import { useDispatch } from "react-redux";

export const CustomerAdd = () => {
  const [newCustomer, setNewCustomer] = useState("");
  const dispatch = useDispatch();
  // const [addNewCustomer, setaddNewCustomer] = useState([]);

  function addCustomer() {
    if (newCustomer) {
      // setaddNewCustomer((previousData) => [...previousData, newCustomer]);
      dispatch(addCustomerAction(newCustomer));
      setNewCustomer("");
    }
  }
  return (
    <>
      <h1>Add New Customer</h1>
      <input
        type="text"
        value={newCustomer}
        placeholder="enter the customer name"
        onChange={(e) => setNewCustomer(e.target.value)}
      />
      &nbsp;
      <button onClick={addCustomer}>Add</button>
      <br />
      <br />
      <CustomerView />
    </>
  );
};
