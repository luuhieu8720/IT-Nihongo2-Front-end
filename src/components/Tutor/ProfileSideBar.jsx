import { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { useHistory } from "react-router";
import UserServices from "../../services/UserServices";
import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";

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
				<div className="col-sm-auto" style={{ marginTop: '-20%' }}>
					<div className="dropdown">
						<Image className="position-abs" src={user.avatar == "" || user.avatar == null ? "/Image/avatardefault.png" : user.avatar} style={{ right: '-300px' }}
							width="60" height="60" alt="image" id="dropdownMenuButton2"
							data-bs-toggle="dropdown" aria-expanded="false" roundedCircle
						></Image>
						<ul className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownMenuButton2">
							<li><Link className="dropdown-item"
								to={currentUser.role == "User" ? "/user/profile/setting" : "/"} onClick={() => {sessionStorage.setItem("stateTabIndex","1")}}>Profile</Link></li>
							<li><Link className="dropdown-item" to="/" >Report this post</Link></li>
							<li><Link className="dropdown-item" to="/" >Manage</Link></li>
						</ul>
					</div>
				</div>
			</div>
			<form className="profile-box">
				<h2
					className="text-center position-abs"
					style={{ font: "Oxygen", color: "rgba(0, 0, 0, 0.5)", marginTop: '-40%', right: '20%' }}>
					PROFILE
				</h2>
				<IconButton
					className="icon-purple postion-abs"
					children="camera"
					color="primary"
					style={{ marginLeft: "-50%", paddingTop: "210%" }}
				>
					<Image
						src="/Image/camera.png"
						className="position-abs"
						width="250"
						height="190"
						alt="image"
					></Image>
				</IconButton>
				<div style={{ width: '300px' }}>
					<h6
						style={{
							font: "Oxygen",
							marginTop: "30%",
							marginLeft: "-40%",
							fontSize: "24px",
							color: "rgba(0, 0, 0, 0.5)",
						}}
					>
						You don't have any
					</h6>
					<h6
						style={{
							font: "Oxygen",
							marginLeft: "-25%",
							fontSize: "24px",
							color: "rgba(0, 0, 0, 0.5)",
						}}
					>
						tutor profile
					</h6>
				</div>
				<div className="position-abs">
					<p
						className="text-center position-abs"
						style={{
							width:"200px",
							bottom:"-10%",
							font: "Oxygen",
							marginLeft: "-500%",
							fontSize: "20px",
							color: "rgba(0, 0, 0, 0.5)",
						}}
					>
						Become a tutor!
					</p>
					<IconButton
						className="icon-purple position-abs"
						children="asking"
						color="primary"
						style={{ marginLeft: "305%", marginTop: "600%" }}
						size="medium"
					>
						<Image
							src="/Image/tutor_icon.JPG"
							className="position-abs"
							width="50"
							height="50"
							alt="image"
						></Image>
					</IconButton>
				</div>
			</form>

		</div>
	);
}
export default ProfileSideBar;
