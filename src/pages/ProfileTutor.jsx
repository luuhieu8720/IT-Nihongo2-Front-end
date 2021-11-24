import SideBarProfile from "../components/Profile/SideBarProfile";
import MainComponent from "../components/Profile/ProfileTutorComponent";
import EditProfileTutor from "../components/Profile/EditProfileTutor";

function ProfileTutor() {
  console.log(localStorage.getItem("stateProfile"));
  return (
    <div className="row">
      <div className="col-sm-3">
        <SideBarProfile />
      </div>
      <div className="col-sm-9">
        {localStorage["stateProfile"] === "show" ? (
          <MainComponent />
        ) : (
          <EditProfileTutor />
        )}
      </div>
    </div>
  );
}
export default ProfileTutor;
