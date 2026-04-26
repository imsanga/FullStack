import { useContext } from "react";
import { AppContext } from "../App";

export const Home = () => {
  // Step 3: Consume the context value
  const { userName } = useContext(AppContext);
  return <h1 style={{ color: "red" }}>Welcome to Home Page {userName}!!!</h1>;
};
