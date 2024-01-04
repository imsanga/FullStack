import { useState } from "react";

export const ChangeProfile = (props) => {
  const [newUserName, setnewUserName] = useState("");
  const [changeName, setchangeName] = useState(false);
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
          props.changeUsername(newUserName);
          setchangeName(true);
        }}
      >
        Change UserName
      </button>
      {changeName && (
        <h2 style={{ color: "orange" }}>
          Username is changed to {props.username}
        </h2>
      )}
    </>
  );
};
