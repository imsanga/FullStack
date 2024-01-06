import { AppContext } from "../App";
import { useContext } from "react";

export const Contact = () => {
  const { userName } = useContext(AppContext);
  return <h1 style={{ color: "brown" }}>Welcome to Home Page {userName}!!!</h1>;
};
