import SidebarHomePage from "../components/Homepage/SidebarHomePage";
import { Card } from "react-bootstrap";
import { Image } from "react-bootstrap";
import ProfileTutor from "../components/Tutor/ProfileTutor";
import { ToastContainer, toast } from "react-toastify";
import UserServices from "../services/UserServices";
import { useEffect, useState } from "react";

function TutorDetail({match}) {
    const [user, setUser] = useState({
		username: "",
		name: "",
		telephone: "",
		email: "",
		avatar: "",
		specialty: "",
      	degree: "",
		address: "",
		gender: "", 
        dateOfBirth:""
	});
	useEffect(() => {
        var username = {
          username: match.params.username.toString(),
        };
        console.log("user:", username)
        UserServices.getUser(username)
          .then((response) => {
            setUser(response.data.value);
            console.log(user);
          })
          .catch((e) => {
            if (e.response && e.response.data) {
              toast.error(e.response.data.value);
            }
          });
      }, []);
    return (
        <div class="row">
            <ToastContainer/>
            <div className="col-sm-auto">
                <SidebarHomePage className="position-abs" />
            </div>
            <div className="col-sm-define ms-4">
                <div style={{ marginTop: '30px' }}>
                    <Card className="card-tutor-new2">
                        <Card.Title>
                                <h4
                                    className="text-center position-abs"
                                    style={{ font: "Oxygen", color: "rgba(0, 0, 0, 0.5)", marginLeft: "33%", marginTop:"6%"}}>
                                    Detail Information of Tutor
                                </h4>
                        </Card.Title>
                        <Card.Body>
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="row-sm-3" style={{ marginTop: '-3%' }}>
                                        <Image className="image-avartar"src={user.avatar === "" ? "/Image/avatardefault.png" : user.avatar} alt="image" roundedCircle  ></Image>
                                    </div>
                                    <div className="row-sm-1">
                                        <label className="tutor-name">{user.username}</label>
                                    </div>
                                </div>
                               
                                   <div className="col-sm-3 total-left">
                                        <b className="label-left">Age </b> 
                                        <b className="label-left">Gender</b> 
                                        <b className="label-left">Location</b>
                                        <b className="label-left">Speciality</b> 
                                        <b className="label-left">Experience</b>
                                        <b className="label-left">Certificate</b>
                                        <b className="label-left">Phone</b>
                                        <b className="label-left">Email</b> 
                                        </div>
                                    <div className="col-sm-5 total-right">
                                         <p className="label-right">
                                        {
                                         user.dateOfBirth == "" || user.dateOfBirth == null
										? "No Information"
										: user.dateOfBirth}</p>
                                         <p className="label-right">
                                         {
                                         user.gender == "" || user.gender == null
										? "No Information"
										: user.gender}
                                        </p>
                                         <p className="label-right">
                                         {
                                         user.address == "" || user.address == null
										? "No Information"
										: user.address}    
                                        </p>
                                         <p className="label-right">
                                         {
                                         user.specialty == "" || user.specialty == null
										? "No Information"
										: user.specialty}    
                                         </p>
                                         <p className="label-right">
                                         {
                                         user.experience == "" || user.experience == null
										? "No Information"
										: user.experience}         
                                        </p>
                                         <p className="label-right">
                                         {
                                         user.degree == "" || user.degree == null
										? "No Information"
										: user.degree}    
                                        </p>
                                        
                                         <p className="label-right">
                                         {
                                         user.telephone == "" || user.telephone == null
										? "No Information"
										: user.telephone}   
                                        </p>
                                         <p className="label-right">
                                         {
                                         user.email == "" || user.email == null
										? "No Information"
										: user.email}      
                                        </p>
                                    </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>               
            </div>
            <div
				className="col-sm-3 student-top-component"
				style={{ paddingLeft: "3%" }}
			>
				<ProfileTutor />
			</div>
		</div>
      
    );
}
export default TutorDetail;