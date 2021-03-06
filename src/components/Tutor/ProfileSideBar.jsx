import { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { useHistory } from "react-router";
import UserServices from "../../services/UserServices";
import Navbar from "../Navbar"
import { IconButton } from "@material-ui/core";
import ProfileTutor from "../Tutor/ProfileTutor";

function ProfileSideBar() {
	const history = useHistory();
	const [currentUser, setCurrentUser] = useState({ role: "", specialty: "" });
	console.log(localStorage.getItem("currentUser"))
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
			setCurrentUser(response.data.value);
		});
	}, []);

	return (
		<div className="" style={{ position: 'fixed' }}>
			{(currentUser.specialty == "" || currentUser.specialty == null)
				? (

					<div>
						<Navbar />
						<form className="profile-box">
							<h3
								className="text-center position-abs"
								style={{ font: "Oxygen", color: "rgba(0, 0, 0, 0.5)", marginTop: '-90%', right: '-50%' }}>
								PROFILE
							</h3>
							<IconButton
								className="icon-purple"
								children="camera"
								color="primary"
								style={{ marginLeft: "50%", marginTop: "200%" }}
							>
								<Image
									src="/Image/camera_tutors_list.png"
									className="position-abs"
									width="250"
									height="190"
									alt="image"
									style={{}}>

								</Image>
							</IconButton>
							<div style={{ width: '300px' }}>
								<h6
									style={{
										font: "Oxygen",
										marginTop: "30%",
										marginLeft: "-20%",
										fontSize: "24px",
										color: "rgba(0, 0, 0, 0.5)",
									}}
								>
									You don't have any
								</h6>
								<h6
									style={{
										font: "Oxygen",
										marginLeft: "-5%",
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
										width: "200px",
										bottom: "-10%",
										font: "Oxygen",
										marginLeft: "-250%",
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
									style={{ marginLeft: "600%", marginTop: "600%" }}
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
				) : <ProfileTutor />
			}


		</div>
	);
}
export default ProfileSideBar;