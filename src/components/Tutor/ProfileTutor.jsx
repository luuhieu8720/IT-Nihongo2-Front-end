import { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { useHistory } from "react-router";
import UserServices from "../../services/UserServices";
import Navbar from "../Navbar"
import { IconButton } from "@material-ui/core";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";

function ProfileTutor() {
	const history = useHistory();
	const [currentUser, setCurrentUser] = useState({ role: "" });
	const [user, setUser] = useState({
		username: "",
		name: "",
		telephone: "",
		email: "",
		avatar: "",
		specialty: "",
		degree: "",
		address: "",
		gender: ""
	});
	useEffect(() => {
		UserServices.getUserInformation().then((response) => {
			setUser(response.data.value);
		});
	}, []);
	return (
		<div className="" style={{ position: 'fixed' }}>
			<ToastContainer />
			<Navbar />
			<form className="profile-box">
				<h3
					className="text-center position-abs"
					style={{ font: "Oxygen", color: "rgba(0, 0, 0, 0.5)", marginTop: '-90%', right: '-50%' }}>
					PROFILE
				</h3>
				<IconButton
					className="icon-purple postion-abs"
					children="camera"
					color="primary"
					style={{ marginLeft: "3%", paddingTop: "210%" }}
				>
					<Image
						src={
							user.avatar == "" || user.avatar == null
								? "/Image/avatardefault.png"
								: user.avatar
						}
						alt="image"
						className="position-abs image-avar"
						roundedCircle
						style={{ marginTop: '-600%', width: '110px', height: '110px' }}>

					</Image>
					<h4
						className="text-center position-abs chau-vy"
						style={{ color: "black", marginTop: '140%', right: '-450%', width: '200px' }}>
						{user.name}
					</h4>

				</IconButton>

				<div className="row" style={{ marginTop: '20%' }}>
					<div className="col-sm-5">
						<b className="label-left-tutor">Age </b>
						<b className="label-left-tutor">Gender</b>
						<b className="label-left-tutor">Location</b>
						<b className="label-left-tutor">Speciality</b>
					</div>
					<div className=" col-sm-6 profile-tutor">
						<p className="label-right-tutor">
							{
								user.dateOfBirth == "" || user.dateOfBirth == null
									? "None"
									: user.dateOfBirth}
						</p>
						<p className="label-right-tutor">
							{
								user.gender == "" || user.gender == null
									? "None"
									: user.gender}
						</p>
						<p className="label-right-tutor">
							{
								user.address == "" || user.address == null
									? "None"
									: user.address}
						</p>
						<p className="label-right-tutor">
							{
								user.specialty == "" || user.specialty == null
									? "None"
									: user.specialty}
						</p>
					</div>
				</div>

				<div className="position-abs">
					<Link to="/tutors/dialog">
						<IconButton
							className="icon-purple position-abs"
							children="asking"
							color="primary"
							style={{ marginLeft: "570%", marginTop: "230%" }}
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
					</Link>

				</div>
			</form>


		</div>
	);
}
export default ProfileTutor;
