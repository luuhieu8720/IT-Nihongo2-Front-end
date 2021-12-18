import TopProfileComponent from "./TopProfileComponent";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import UserServices from "../../services/UserServices";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";

function ProfileTutorComponent() {
  const handleEdit = () => {
    localStorage["stateProfile"] = "edit";
    window.location.reload();
  };
  const [tutorInformation, setTutorInformation] = useState({
    username: "",
    email: "",
    name: "",
    telephone: "",
    experience: "",
    currentJob: "",
    dateOfBirth: "",
    address: "",
    gender: "",
    avatar: "",
    specialty: "",
    degree: "",
    studentId: "",
    role: "",
  });
  const [gender, setGender] = useState("");
  useEffect(() => {
    UserServices.getUserInformation()
      .then((response) => {
        console.log(response.data.value);
        if (response.data.value.gender === "Female") {
          setGender("Female");
        } else {
          setGender("Male");
        }
        setTutorInformation(response.data.value);
      })
      .catch((e) => {
        if (e.response && e.response.data) {
          toast.error(e.response.data.value);
        }
      });
  }, []);
  return (
    <div className="">
      <ToastContainer />
      <TopProfileComponent />
      <div className="row">
        <div className="col-sm-3">
          <h3
            className=""
            style={{ fontSize: "28px", marginTop: "10%", color: "darkviolet" }}
          >
            Profile
          </h3>
          <Link to="">
            <i
              className="position-abs fas fa-pen fa-lg"
              style={{ marginTop: "0%", right: "10%" }}
              onClick={handleEdit}
            ></i>
          </Link>
          <p
            className="position-abs"
            style={{
              color: "rgba(0, 0, 0, 0.5)",
              width: "0px",
              height: "500px",
              left: "35px",
              border: "1px solid #8d8989",
              marginLeft: "35%",
              top: "30%",
            }}
          ></p>
        </div>
        <div className="col-sm-3">
          <h5 className="py-1">Name </h5>
          <h5 className="py-1">Age </h5>
          <h5 className="py-1">Gender</h5>
          <h5 className="py-1">Location</h5>
          <h5 className="py-1">Speciality </h5>
          <h5 className="py-1">Birthday </h5>
          <h5 className="py-1">Experience </h5>
          <h5 className="py-1">Certificate </h5>
          <h5 className="py-1">Teaching Method </h5>
          <br />
          <br />
          <h5 className="py-1">ID </h5>
          <h5 className="py-1">Phone </h5>
          <h5 className="py-1">Email</h5>
        </div>
        <div className="col-sm-auto">
          <h6 className="pb-2 pt-2">{tutorInformation.name}</h6>
          <h6 className="pb-2 pt-1">{tutorInformation.age}</h6>
          <h6 className="pb-2 pt-1">{gender}</h6>
          <h6 className="pb-2 pt-1">{tutorInformation.address}</h6>
          <h6 className="pb-2 pt-1">{tutorInformation.specialty}</h6>
          <h6 className="pb-2 pt-1">{tutorInformation.dateOfBirth}</h6>
          <h6 className="pb-2 pt-2">{tutorInformation.experience}</h6>
          <h6 className="pb-2 pt-1">{tutorInformation.role}</h6>
          <h6 className="pb-2 pt-2">{tutorInformation.currentJob}</h6>
          <br />
          <br />
          <h6 className="pb-2 pt-1">{tutorInformation.studentId}</h6>
          <h6 className="pb-2 pt-1">{tutorInformation.telephone}</h6>
          <h6 className="pb-2 pt-1">{tutorInformation.email}</h6>
        </div>
      </div>
    </div>
  );
}
export default ProfileTutorComponent;
