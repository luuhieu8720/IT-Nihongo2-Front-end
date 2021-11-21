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
                                        <Image className="image-avartar"src="data:image/jpeg;base64,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" alt="image" roundedCircle  ></Image>
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
                {/* <Card className="card-tutor">
                    <Card.Body>
                        <div className="row"> */}
                        {/* <Card className="card-tutor-new">
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
                    </Card> */}

                    {/*  */}
                    {/* <Card className="card-tutor-new1">
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
                    </Card> */}
                    {/* <Card className="card-tutor-new1">
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
                    </Card> */}
                        {/* </div>
                    </Card.Body>
                </Card> */}
               
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