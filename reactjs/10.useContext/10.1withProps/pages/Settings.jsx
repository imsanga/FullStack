import { ChangeProfile } from "../ChangeProfile";

export const Settings = (props) => {
  return (
    <div>
      <br />
      <ChangeProfile
        username={props.username}
        changeUsername={props.setusername}
      />
    </div>
  );
};
