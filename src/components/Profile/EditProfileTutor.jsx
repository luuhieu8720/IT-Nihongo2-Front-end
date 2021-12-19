import TopProfileComponent from "./TopProfileComponent";
import { InputText } from "primereact/inputtext";
import Button from "react-bootstrap/Button";
import UserServices from "../../services/UserServices";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import Select from "react-select";
import UploadImageServices from "../../services/UploadImageServices";

function EditProfile() {
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
  const [avatar, setAvatar] = useState();
  const [imageSelected, setImageSelected] = useState("");
  useEffect(() => {
    UserServices.getUserInformation()
      .then((response) => {
        setTutorInformation(response.data.value);
        console.log(response.data.value.gender === "Female");
      })
      .catch((e) => {
        if (e.response && e.response.data) {
          toast.error(e.response.data.value);
        }
      });
  }, []);

  const options = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];

  const colourStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "white",
      width: "250px",
      border: "1px solid black",
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isDisabled ? "blue" : "white",
        color: "black",
        cursor: isDisabled ? "not-allowed" : "default",
      };
    },
  };

  const handleChangeGender = (e) => {
    tutorInformation.gender = e.value;
    console.log(tutorInformation);
  };

  const handleChange = (evt) => {
    const value = evt.target.value;
    setTutorInformation({
      ...tutorInformation,
      [evt.target.name]: value,
    });
    console.log(tutorInformation);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "fb42jacc");
    var imageName = makeid(10);
    formData.append("public_id", imageName);

    if (imageSelected.name != null) {
      imageName += "." + imageSelected.name.slice(-3);
      UploadImageServices.uploadImage(formData).then(() => {
        if (imageName != "") {
          tutorInformation.avatar =
            "https://res.cloudinary.com/it-nihongo/image/upload/v1634999302/" +
            imageName;
          setTutorInformation({ ...tutorInformation, avatar: imageName });
          imageName = "";
        }
        console.log(tutorInformation);
        UserServices.updateProfile(tutorInformation)
          .then(() => {
            toast.success("Success");
            setTimeout(() => {
              localStorage["stateProfile"] = "show";
              window.location.reload();
            }, 3000);
          })
          .catch((e) => {
            if (e.response && e.response.data) {
              toast.error(e.response.data.value);
            }
          });
      });
    } else {
      UserServices.updateProfile(tutorInformation)
        .then(() => {
          toast.success("Success");
          setTimeout(() => {
            localStorage["stateProfile"] = "show";
            window.location.reload();
          }, 3000);
        })
        .catch((e) => {
          if (e.response && e.response.data) {
            toast.error(e.response.data.value);
          }
        });
    }
  };

  const makeid = (length) => {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

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
          <p
            className="position-abs"
            style={{
              color: "rgba(0, 0, 0, 0.5)",
              width: "0px",
              height: "600px",
              left: "35px",
              border: "1px solid #8d8989",
              marginLeft: "35%",
              top: "30%",
            }}
          ></p>
        </div>
        <div className="col-sm-7">
          <div className="mt-3">
            <span className="">Name </span>
            <InputText
              style={{
                marginLeft: "6.2rem",
                border: 0,
                outline: 0,
                color: "#000000",
                background: "transparent",
                borderBottom: "1px solid #000000",
              }}
              defaultValue={tutorInformation.name}
              name="name"
              className="input-update-profile"
              placeholder=""
              onChange={handleChange}
            />
          </div>
          <div className="mt-3">
            <span className="">Age </span>
            <InputText
              style={{
                marginLeft: "7.1rem",
                border: 0,
                outline: 0,
                color: "#000000",
                background: "transparent",
                borderBottom: "1px solid #000000",
              }}
              defaultValue={tutorInformation.age}
              name="age"
              className="input-update-profile"
              placeholder=""
              onChange={handleChange}
            />
          </div>
          <div className="mt-3">
            <span className="">Gender </span>
            <div
              style={{
                display: "inline-block",
                marginLeft: "5.6rem",
              }}
            >
              <Select
                styles={colourStyles}
                options={options}
                defaultValue={
                  tutorInformation.gender === "Female" ? options[1] : options[0]
                }
                onChange={handleChangeGender}
              />
            </div>
          </div>
          <div className="mt-3">
            <span className="">Location </span>
            <InputText
              style={{
                marginLeft: "5.1rem",
                border: 0,
                outline: 0,
                color: "#000000",
                background: "transparent",
                borderBottom: "1px solid #000000",
              }}
              defaultValue={tutorInformation.address}
              name="location"
              className="input-update-profile"
              placeholder=""
              onChange={handleChange}
            />
          </div>
          <div className="mt-3">
            <span className="">Speciality </span>
            <InputText
              style={{
                marginLeft: "4.7rem",
                border: 0,
                outline: 0,
                color: "#000000",
                background: "transparent",
                borderBottom: "1px solid #000000",
              }}
              defaultValue={tutorInformation.specialty}
              name="specialty"
              className="input-update-profile"
              placeholder=""
              onChange={handleChange}
            />
          </div>
          <div className="mt-3">
            <span className="">Birthday </span>
            <InputText
              style={{
                marginLeft: "5.2rem",
                border: 0,
                outline: 0,
                color: "#000000",
                background: "transparent",
                borderBottom: "1px solid #000000",
              }}
              defaultValue={tutorInformation.dateOfBirth}
              name="birthday"
              className="input-update-profile"
              placeholder=""
              onChange={handleChange}
            />
          </div>
          <div className="mt-3">
            <span className="">Experience </span>
            <InputText
              style={{
                marginLeft: "4.1rem",
                border: 0,
                outline: 0,
                color: "#000000",
                background: "transparent",
                borderBottom: "1px solid #000000",
              }}
              defaultValue={tutorInformation.experience}
              name="experience"
              className="input-update-profile"
              placeholder=""
              onChange={handleChange}
            />
          </div>
          <div className="mt-3">
            <span className="">Certificate </span>
            <InputText
              style={{
                marginLeft: "4.4rem",
                border: 0,
                outline: 0,
                color: "#000000",
                background: "transparent",
                borderBottom: "1px solid #000000",
              }}
              defaultValue={tutorInformation.role}
              name="role"
              className="input-update-profile"
              placeholder=""
              onChange={handleChange}
            />
          </div>
          <div className="mt-3">
            <span className="">Teaching Method </span>
            <InputText
              style={{
                marginLeft: "1.2rem",
                border: 0,
                outline: 0,
                color: "#000000",
                background: "transparent",
                borderBottom: "1px solid #000000",
              }}
              defaultValue={tutorInformation.currentJob}
              name="currentJob"
              className="input-update-profile"
              placeholder=""
              onChange={handleChange}
            />
          </div>
          <div className="mt-3">
            <span className="">ID </span>
            <InputText
              style={{
                marginLeft: "7.9rem",
                border: 0,
                outline: 0,
                color: "#000000",
                background: "transparent",
                borderBottom: "1px solid #000000",
              }}
              defaultValue={tutorInformation.studentId}
              name="id"
              className="input-update-profile"
              placeholder=""
              disabled="true"
            />
          </div>
          <div className="mt-3">
            <span className="">Phone </span>
            <InputText
              style={{
                marginLeft: "6.0rem",
                border: 0,
                outline: 0,
                color: "#000000",
                background: "transparent",
                borderBottom: "1px solid #000000",
              }}
              defaultValue={tutorInformation.telephone}
              name="telephone"
              className="input-update-profile"
              placeholder=""
              onChange={handleChange}
            />
          </div>
          <div className="mt-3">
            <span className="">Email </span>
            <InputText
              style={{
                marginLeft: "6.4rem",
                border: 0,
                outline: 0,
                color: "#000000",
                background: "transparent",
                borderBottom: "1px solid #000000",
              }}
              defaultValue={tutorInformation.email}
              name="email"
              className="input-update-profile"
              placeholder=""
              onChange={handleChange}
            />
          </div>
          <br />
        </div>
        <div className="col-mt-7">
          <input
            type="file"
            style={{ marginLeft: "25%" }}
            onChange={(event) => {
              setImageSelected(event.target.files[0]);
            }}
          ></input>
          <br />
          <Button
            variant="primary"
            className="mt-4"
            style={{ marginLeft: "25%" }}
            onClick={handleSubmit}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}
export default EditProfile;
