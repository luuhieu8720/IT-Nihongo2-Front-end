import { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { useHistory } from "react-router";
import UserServices from "../services/UserServices";
import { Link } from "react-router-dom";
import SignOut from "../logics/SignOut";
import { ToastContainer, toast } from "react-toastify";

function StudentSideBar() {
    const history = useHistory();
    const [currentUser, setCurrentUser] = useState({ role: '' });
    const [user, setUser] = useState({
        username: "",
        name: "",
        telephone: "",
        email: "",
        avatar: ""
    });

    const signOut = () => {
        toast.success("Successfully");
        setTimeout(() => {
            SignOut.signOut();
            history.push("/signin");
        }, 3000);
    };

    useEffect(() => {
        UserServices.getUserInformation().then((response) => {
            setUser(response.data.value)
            localStorage.setItem("current", JSON.stringify(response.data.value))
        })
        setCurrentUser(JSON.parse(localStorage.getItem('currentUser')))
        console.log(currentUser)
    }, [])

    return (
        <div className="" style={{ position: 'fixed' }}>
            <div className="row">
                <div className="col-sm-auto student-top-component" style={{ marginLeft: '3%' }}>
                    <i className="far fa-envelope fa-2x"></i>
                </div>
                <div className="col-sm-auto student-top-component">
                    <i className="far fa-bell fa-2x"></i>
                </div>
                <div className="col-sm-auto student-top-component" style={{ paddingRight: '-1%', paddingLeft: '5%' }} >
                    <p >Hi, {localStorage.getItem('currentUser') == null ? history.push("/signin") : user.username}</p>

                </div>
                <div className="col-sm-auto" style={{ marginTop: '-3%' }}>
                    <div className="dropdown">
                        <Image src={user.avatar == "" || user.avatar == null ? "Image/avatardefault.png" : user.avatar} style={{ marginLeft: '-10px' }} width="60" height="60" alt="image" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false" roundedCircle ></Image>
                        <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownMenuButton2">
                            <li><Link className="dropdown-item"
                                to={currentUser.role == "User" ? "user/profile/setting" : "tutor/profile/setting"} onClick={() => { sessionStorage.setItem("stateTabIndex", "1") }} >Profile</Link></li>
                            <li><Link className="dropdown-item" to="/signin" onClick={signOut} >Sign out</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <h4 className="text-center" style={{ font: 'Oxygen', marginTop: '10%' }}>Easy to find an experienced tutor for you!</h4>
            <Image src="Image/teacher-expectation.jpg" style={{ marginLeft: '-4%' }} alt="image" rounded  ></Image>
            <div className="text-center text-contact">
                <div style={{ marginBottom: '5px' }}>Email: {user.email}</div>
                <div style={{ marginBottom: '5px' }}>Phone: {user.telephone}</div>
                <div style={{ marginBottom: '5px' }}>Link: https://eto.edu.vn</div>
            </div>
            <Link to="post/add">
                <i style={{ position: 'fixed' }} hidden={currentUser.role != "User"} className="bi bi-plus-circle fa-3x icon-purple"></i>
            </Link>
        </div>

    );
}
export default StudentSideBar;