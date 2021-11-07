import { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { useHistory } from "react-router";
import UserServices from "../../services/UserServices";
import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import { Card } from "react-bootstrap";
import { ToastContainer } from "react-toastify";

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
			console.log(response.data.value)
		});
	}, []);
	console.log(user.dateOfBirth);
	return (
		<div className="" style={{ position: 'fixed' }}>
			<ToastContainer />
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
						<Image className="position-abs" src={user.avatar == "" || user.avatar == null ? "/Image/avatardefault.png" : user.avatar} style={{ right: '-370px' }}
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
			<form className="profile-box" >
				<h3
					className="text-center position-abs"
					style={{ font: "Oxygen", color: "rgba(0, 0, 0, 0.5)", marginTop: '-60%', right: '-40%' }}>
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
					style={{marginTop: '-600%', width: '110px', height:'110px'}}>

                    </Image>
                    <h4
					className="text-center position-abs chau-vy"
					style={{ color: "black", marginTop: '50%', right: '-450%', width: '200px' }}>
					{user.name}
				    </h4>

				</IconButton>
				
                <div className="row">
                                   <div className="col-sm-7 tutor-left">
                                        <b className="label-left-tutor">Age </b> 
                                        <b className="label-left-tutor">Gender</b> 
                                        <b className="label-left-tutor">Location</b>
										<b className="label-left-tutor">Speciality</b>
										
										<b className="label-left-tutor">Rank</b>

                                       
                                        </div>
                                    <div className="col-sm-4 tutor-right">
                                         <p className="label-right-tutor">{user.dateOfBirth}</p>
                                         <p className="label-right-tutor">{user.gender}</p>
                                         <p className="label-right-tutor">{user.address}</p>
										 <p className="label-right-tutor">{user.specialty}</p>
										 <p className="label-right-tutor">0/5</p>
                                    </div>
                </div>
				<div className="position-abs">
					
					<IconButton
						className="icon-purple position-abs"
						children="asking"
						color="primary"
						style={{ marginLeft: "570%", marginTop: "80%" }}
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
export default ProfileTutor;