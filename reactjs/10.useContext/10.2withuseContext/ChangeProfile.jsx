import { useState } from "react";
import { AppContext } from "./App";
import { useContext } from "react";

export const ChangeProfile = () => {
  const [newUserName, setnewUserName] = useState("");
  const [changeName, setchangeName] = useState(false);
  const { userName, setUserName } = useContext(AppContext);
  return (
    <>
      <input
        type="text"
        placeholder="enter ur new user name"
        onChange={(event) => setnewUserName(event.target.value)}
      />
      &nbsp; &nbsp;
      <button
        onClick={() => {
          setUserName(newUserName);
          setchangeName(true);
        }}
      >
        Change UserName
      </button>
      {changeName && (
        <h2 style={{ color: "orange" }}>Username is changed to {userName}</h2>
      )}
    </>
  );
};
