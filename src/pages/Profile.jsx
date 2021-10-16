// import { Link } from "react-router-dom";
import SideBarProfile from "../components/Profile/SideBarProfile";
import MainComponent from "../components/Profile/MainComponent";
import EditProfile from "../components/Profile/EditProfile";

function Profile() {
    console.log(localStorage.getItem('stateProfile'));
    return (
        <div className="row">
            <div className="col-sm-3">
                <SideBarProfile />
            </div>
            <div className="col-sm-9">
                 {(localStorage['stateProfile'] == "show") ? <MainComponent /> : <EditProfile />}
            </div>
        </div>

    );
}
export default Profile;