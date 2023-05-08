export default function Profile() {
  return (
    <div className="profile-main">
      <div>Avatar</div>
      <div>Name</div>
      <div>@Username</div>
      <div>Description</div>
      <div className="profile-follow">
        <div className="profile-following">
          <div>Following Number</div>
          <div>Following</div>
        </div>

        <div className="profile-follower">
          <div>Follower Number</div>
          <div>Follower</div>
        </div>
      </div>
    </div>
  );
}
