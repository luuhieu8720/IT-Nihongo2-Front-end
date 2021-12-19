import TopProfileComponent from "./TopProfileComponent";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import UserServices from "../../services/UserServices";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";

function ProfileComponent() {
  const handleEdit = () => {
    localStorage["stateProfile"] = "edit";
    window.location.reload();
  };
  const [userInformation, setUserInformation] = useState({
    telephone: "",
    email: "",
    address: "",
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
        setUserInformation(response.data.value);
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
            style={{ fontSize: "28px", marginTop: "18%", color: "darkviolet" }}
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
              height: "400px",
              left: "35px",
              border: "1px solid #8d8989",
              marginLeft: "35%",
              top: "30%",
            }}
          ></p>
        </div>
        <div className="col-sm-3" style={{ marginTop: "6%" }}>
          <h5 className="py-1">Phone </h5>
          <h5 className="py-1">Email </h5>
          <h5 className="py-1">Name </h5>
          <h5 className="py-1">Gender </h5>
          <h5 className="py-1">Address </h5>
        </div>
        <div
          className="col-sm-auto text-name-profile"
          style={{ marginTop: "4.5%" }}
        >
          <h6 className="pb-2 pt-1">{userInformation.telephone}</h6>
          <h6 className="pb-2 pt-1">{userInformation.email}</h6>
          <h6 className="pb-2 pt-1">{userInformation.name}</h6>
          <h6 className="pb-2 pt-2">{gender}</h6>
          <h6 className="pb-2 pt-1">{userInformation.address}</h6>
        </div>
      </div>
    </div>
  );
}
export default ProfileComponent;
