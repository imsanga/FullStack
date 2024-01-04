import { AppContext } from "../App";
import { useContext } from "react";

export const Home = () => {
  const { userName } = useContext(AppContext);
  return <h1 style={{ color: "red" }}>Welcome to Home Page {userName}!!!</h1>;
};
