import ProfileData from "./ProfileData";
import UserRepos from "./UserRepos";
import "./styles.css";

function UserInfo(props) {
  let user = props.user.userDetails;
  let repos = props.user.repos;
  let noUserFound = <h2>No such username exists</h2>;
  let userDetails = (
    <div className="userData">
      <ProfileData user={user} />
      <UserRepos repos={repos} />
    </div>
  );
  return <>{user.message === "Not Found" ? noUserFound : userDetails}</>;
}

export { UserInfo };
