import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import UserServices from "../services/UserServices";
import { useEffect, useState } from "react";

function Navbar() {
    const [user, setUser] = useState({
        username: "",
        name: "",
        telephone: "",
        email: "",
        avatar: "",
    });
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
            <div className="col-sm-auto student-top-component" style={{ marginLeft: '3%' }}>
                <i className="far fa-envelope fa-2x"></i>
            </div>
            <div className="col-sm-auto student-top-component">
                <i className="far fa-bell fa-2x"></i>
            </div>
            <div className="col-sm-auto student-top-component" style={{ paddingRight: '-1%', paddingLeft: '5%' }} >
                <p >Hi, {localStorage.getItem('currentUser') == null ? history.push("/signin") : user.name}</p>

            </div>
            <div className="col-sm-auto" style={{ marginTop: '-20%' }}>
                <div className="dropdown">
                    <Image className="position-abs" src={user.avatar == "" || user.avatar == null ? "/Image/avatardefault.png" : user.avatar} style={{ marginTop:"50px" }}
                        width="60" height="60" alt="image" id="dropdownMenuButton2"
                        data-bs-toggle="dropdown" aria-expanded="false" roundedCircle
                    ></Image>
                    <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownMenuButton2">
                        <li><Link className="dropdown-item"
                            to={currentUser.role == "User" ? "/user/profile/setting" : "/"} onClick={() => { sessionStorage.setItem("stateTabIndex", "1") }}>Profile</Link></li>
                        <li><Link className="dropdown-item" to="/" >Profile</Link></li>
                        <li><Link className="dropdown-item" to="/" >Sign out</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Navbar;