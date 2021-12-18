import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import UserServices from "../services/UserServices";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import SignOut from "../logics/SignOut";

function Navbar() {
    const [user, setUser] = useState({
        username: "",
        name: "",
        telephone: "",
        email: "",
        avatar: "",
    });

    const signOut = () => {
        toast.success("Successfully");
        setTimeout(() => {
            SignOut.signOut();
            history.push("/signin");
        }, 3000);
    };

    const [currentUser, setCurrentUser] = useState({ role: "", specialty: "" });
    
    const history = useHistory();
    
    useEffect(() => {
        UserServices.getUserInformation().then((response) => {
            setUser(response.data.value);
            setCurrentUser(response.data.value);
        });
    }, []);
    return (
        <div className="row">
            <ToastContainer />
            <div className="col-sm-auto student-top-component" style={{ marginLeft: '3%' }}>
                <i className="far fa-envelope fa-2x"></i>
            </div>
            <div className="col-sm-auto student-top-component">
                <i className="far fa-bell fa-2x"></i>
            </div>
            <div className="col-sm-auto student-top-component" style={{ paddingRight: '-1%', paddingLeft: '5%' }} >
                <p >Hi, {localStorage.getItem('currentUser') == null ? history.push("/signin") : user.username}</p>

            </div>
            <div className="col-sm-auto" style={{ marginTop: '-20%' }}>
                <div className="dropdown">
                    <Image className="position-abs" src={user.avatar == "" || user.avatar == null ? "/Image/avatardefault.png" : user.avatar} style={{ marginTop: "50px" }}
                        width="60" height="60" alt="image" id="dropdownMenuButton2"
                        data-bs-toggle="dropdown" aria-expanded="false" roundedCircle
                    ></Image>
                    <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownMenuButton2">
                        <li><Link className="dropdown-item"
                            to={currentUser.role == "User" ? "/user/profile/setting" : "/"} onClick={() => { sessionStorage.setItem("stateTabIndex", "1") }}>Profile</Link></li>
                        <li><Link className="dropdown-item" to="/signin" onClick={signOut} >Sign out</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Navbar;