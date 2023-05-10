import "./Profile.css";
import { useContext } from "react";
import { AppContext } from "../AppContext";

export default function Profile() {
  const { user } = useContext(AppContext);

  return (
    <div className="profile-main">
      <img src={user.avatar_url}></img>
      <div>{user.name}</div>
      <div>@{user.name}</div>
      <div>{user.email}</div>
      <div className="profile-follow">
        <div className="profile-following">
          <div>2540</div>
          <div>Following</div>
        </div>

        <div className="profile-follower">
          <div>500k</div>
          <div>Follower</div>
        </div>
      </div>
    </div>
  );
}
