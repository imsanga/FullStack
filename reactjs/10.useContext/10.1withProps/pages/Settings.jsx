import { ChangeProfile } from "../ChangeProfile";

export const Settings = ({ username, setusername }) => {
  return (
    <div>
      <br />
      <ChangeProfile username={username} changeUsername={setusername} />
    </div>
  );
};
