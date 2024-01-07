import { useDispatch, useSelector } from "react-redux";
import { deleteCustomer } from "./slices/customerSlice";

export const CustomerView = () => {
  const customers = useSelector((state) => state.customers);
  const dispatch = useDispatch();

  function deleteHandler(index) {
    dispatch(deleteCustomer(index));
  }

  return (
    <>
      <h2>Customer List</h2>
      {customers.map((customer, index) => (
        <h3>
          {customer}{" "}
          <button onClick={() => deleteHandler(index)}>Delete</button>
        </h3>
      ))}
    </>
  );
};
