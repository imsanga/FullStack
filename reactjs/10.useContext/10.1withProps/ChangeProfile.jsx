import { useState } from "react";

export const ChangeProfile = ({ username, changeUsername }) => {
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
          changeUsername(newUserName);
          setchangeName(true);
          setnewUserName("");
        }}
      >
        Change UserName
      </button>
      {changeName && (
        <h2 style={{ color: "orange" }}>Username is changed to {username}</h2>
      )}
    </>
  );
};
