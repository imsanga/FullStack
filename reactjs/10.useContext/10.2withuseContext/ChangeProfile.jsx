import { useState, useContext } from "react";
import { AppContext } from "./App";

export const ChangeProfile = () => {
  const { userName, setUserName } = useContext(AppContext);
  const [newUserName, setnewUserName] = useState("");
  const [changeName, setchangeName] = useState(false);
  return (
    <>
      <input
        type="text"
        placeholder="enter ur new user name"
        value={newUserName}
        onChange={(event) => setnewUserName(event.target.value)}
      />
      &nbsp; &nbsp;
      <button
        onClick={() => {
          setUserName(newUserName);
          setchangeName(true);
          setnewUserName("");
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
