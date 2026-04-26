import { useContext } from "react";
import { AppContext } from "../App";

export const Contact = () => {
  const { userName } = useContext(AppContext);
  return (
    <h1 style={{ color: "indigo" }}>Welcome to Contact Page {userName}!!!</h1>
  );
};
