import { AppContext } from "../App";
import { useContext } from "react";

export const Profile = () => {
  const { userName } = useContext(AppContext);
  return <h1 style={{ color: "green" }}>Welcome to Home Page {userName}!!!</h1>;
};
