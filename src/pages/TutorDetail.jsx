import SidebarHomePage from "../components/Homepage/SidebarHomePage";
import { Card } from "react-bootstrap";
import TopComponent from "../components/Homepage/TopComponent";
import StudentSideBar from "../components/StudentSideBar";
import { Image } from "react-bootstrap";
import ProfileTutor from "../components/Tutor/ProfileTutor";
import { InputText } from "primereact/inputtext";
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
                {/* <TopComponent /> */}
                <div style={{ marginTop: '30px' }}>
                    <Card className="card-tutor">
                        <Card.Body>
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="row-sm-3" style={{ marginTop: '-3%' }}>
                                        <Image className="image-avartar"src="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.6435-1/c60.0.240.240a/p240x240/242046587_155555230081668_8229001917049422588_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=7206a8&_nc_ohc=AIrIDWQewnkAX-DcMIZ&_nc_ht=scontent.fdad3-4.fna&oh=2fc2ae77c9b90864901be4f793b63bd4&oe=618F5DB7" alt="image" roundedCircle  ></Image>
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
                <Card className="card-tutor">
                    <Card.Body>
                        <div className="row">
                        <Card className="card-tutor-new">
                        <Card.Body>
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="row-sm-3" style={{ marginTop: '-9%', marginLeft: '-7%' }}>
                                        <Image className="image-avartar"
                                        src="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.6435-1/c60.0.240.240a/p240x240/242046587_155555230081668_8229001917049422588_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=7206a8&_nc_ohc=AIrIDWQewnkAX-DcMIZ&_nc_ht=scontent.fdad3-4.fna&oh=2fc2ae77c9b90864901be4f793b63bd4&oe=618F5DB7" 
                                        alt="image" 
                                        roundedCircle  
                                        style={{width:'60px' , height:'60px' }}
                                        ></Image>
                                    </div>
                                </div>
                               
                                   <div className="col-sm-7 henry">
                                   <div className="col-sm-4">
                                    <div className="row-sm-3" style={{ marginTop: '-3%' }}>
                                         <b className="henry-top">Shizuka Alizabezt</b> 
                                         <b className="five">   5<i class="fa star-mark" >&#9734;</i></b>
                                    </div>
                                    <div className="row-sm-1">
                                         <label className=" henry-bottom">The best helpful post!</label> 
                                    </div>
                                </div>
                                        </div>
                                <div className="col-sm-1 mark">
                                    <i class="fa">&#xf06a;</i>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>

                    {/*  */}
                    <Card className="card-tutor-new1">
                        <Card.Body>
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="row-sm-3" style={{ marginTop: '-9%', marginLeft: '-7%' }}>
                                        <Image className="image-avartar"
                                        src="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.6435-1/c60.0.240.240a/p240x240/242046587_155555230081668_8229001917049422588_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=7206a8&_nc_ohc=AIrIDWQewnkAX-DcMIZ&_nc_ht=scontent.fdad3-4.fna&oh=2fc2ae77c9b90864901be4f793b63bd4&oe=618F5DB7" 
                                        alt="image" 
                                        roundedCircle  
                                        style={{width:'60px' , height:'60px' }}
                                        ></Image>
                                    </div>
                                   
                                </div>
                               
                                <div className="col-sm-7 henry">
                                    <div className="col-sm-4">
                                        <div className="row-sm-3" style={{ marginTop: '-3%' }}>
                                            <b className="henry-top">Alesxen Alizabezt </b> 
                                            <b className="five">   5<i class="fa star-mark" >&#9734;</i></b>
                                        </div>
                                        <div className="row-sm-1">
                                            <label className=" henry-bottom">Good job you!</label> 
                                        </div>
                                    </div>                                      
                                </div>
                                <div className="col-sm-1 mark1">
                                    <i class="fa">&#xf06a;</i>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="card-tutor-new1">
                        <Card.Body>
                            <div className="row list">
                                <div className="col-sm-4 ">
                                    <div className="row-sm-3" style={{ marginTop: '-9%', marginLeft: '-7%' }}>
                                        <Image className="image-avartar"
                                        src="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.6435-1/c60.0.240.240a/p240x240/242046587_155555230081668_8229001917049422588_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=7206a8&_nc_ohc=AIrIDWQewnkAX-DcMIZ&_nc_ht=scontent.fdad3-4.fna&oh=2fc2ae77c9b90864901be4f793b63bd4&oe=618F5DB7" 
                                        alt="image" 
                                        roundedCircle  
                                        style={{width:'60px' , height:'60px' }}
                                        ></Image>
                                    </div>
                                   
                                </div>
                               
                                <div className="col-sm-7 henry">
                                    <div className="col-sm-4">
                                        <div className="row-sm-3" style={{ marginTop: '-3%' }}>
                                            <b className="henry-top">
                                                <i class="fa star-mark-gray" >&#9734;</i>
                                                <i class="fa star-mark-gray" >&#9734;</i>
                                                <i class="fa star-mark-gray" >&#9734;</i>
                                                <i class="fa star-mark-gray" >&#9734;</i>
                                                <i class="fa star-mark-gray" >&#9734;</i>
                                            </b> 
                                        </div>
                                        <div className="row-sm-1">
                                            <InputText
                                            className="text-white henry-bottom input-tutor-detail"
                                            placeholder="Enter your comment..."
                                            name="username"
                                            />   
                                        </div>
                                    </div>                                      
                                </div>
                                <div className="col-sm-1 mark2">
                                    <Image className="image-avartar"
                                    src="https://cdn-icons.flaticon.com/png/512/3682/premium/3682321.png?token=exp=1636186342~hmac=5b5ce5a94954f0c1cdb7fd1ab07b3e5e" 
                                    alt="image"  
                                    style={{width:'25px' , height:'25px' }}
                                    ></Image> 
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                        </div>
                    </Card.Body>
                </Card>
               
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