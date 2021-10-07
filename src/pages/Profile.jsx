import { Link } from "react-router-dom";
import SideBarProfile from "../components/Profile/SideBarProfile";
import MainComponent from "../components/Profile/MainComponent"

function Profile() {
    return (
        <div className="row">
            <div className="col-sm-3">
                <SideBarProfile />
            </div>
            <div className="col-sm-9">
                <MainComponent />
            </div>
        </div>

    );
}
export default Profile;