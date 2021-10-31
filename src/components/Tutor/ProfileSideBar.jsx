import { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { useHistory } from "react-router";
import UserServices from "../../services/UserServices";
import { Link } from "react-router-dom";

function ProfileSideBar() {
	const history = useHistory();
	const [currentUser, setCurrentUser] = useState({ role: "" });
	const [user, setUser] = useState({
		username: "",
		name: "",
		telephone: "",
		email: "",
		avatar: "",
	});
	useEffect(() => {
		UserServices.getUserInformation().then((response) => {
			setUser(response.data.value);
		});
		setCurrentUser(JSON.parse(localStorage.getItem("currentUser")));
		console.log(currentUser);
	}, []);

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
					<p >Hi, {localStorage.getItem('currentUser') == null ? history.push("/signin") : user.name}</p>

				</div>
				<div className="col-sm-auto" style={{ marginTop: '-3%', right: '-2%' }}>
					<div className="dropdown">
						<Image src={user.avatar == "" || user.avatar == null ? "Image/avatardefault.png" : user.avatar} className="position-abs" style={{ marginLeft: '240px', top: '-45px' }} width="60" height="60" alt="image" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false" roundedCircle ></Image>
						<ul className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownMenuButton2">
							<li><Link className="dropdown-item"
								to={currentUser.role == "User" ? "user/profile/setting" : "/"}>Profile</Link></li>
							<li><Link className="dropdown-item" to="/" >Report this post</Link></li>
							<li><Link className="dropdown-item" to="/" >Manage</Link></li>
						</ul>
					</div>
				</div>
			</div>
			<form className="profile-box">
				<h1
					className="text-center"
					style={{
						font: "Oxygen",
						marginTop: "10%",
						color: "rgba(0, 0, 0, 0.5)",
					}}
				>
					PROFILE
				</h1>
			</form>
		</div>
	);
}
export default ProfileSideBar;
