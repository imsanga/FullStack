import { useContext } from "react";
import { AppContext } from "../App";

export const Profile = () => {
  const { userName } = useContext(AppContext);
  return (
    <h1 style={{ color: "orange" }}>Welcome to Profile Page {userName}!!!</h1>
  );
};
