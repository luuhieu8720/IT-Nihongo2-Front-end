import SideBarProfile from "../components/Profile/SideBarProfile";
import ChangePasswordComponent from "../components/Profile/ChangePasswordComponent";
function ChangePassword() {
    return (
        <div className="row">
            <div className="col-sm-3">
                <SideBarProfile />
            </div>
            <div className="col-sm-9">
                 <ChangePasswordComponent />
            </div>
        </div>

    );
}
export default ChangePassword;