import { IconButton } from "@material-ui/core";
import { Image, Button } from "react-bootstrap";
import { Checkbox } from 'primereact/checkbox';
import { InputText } from "primereact/inputtext";
import { InputTextarea } from 'primereact/inputtextarea';
import { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import UploadImageServices from "../services/UploadImageServices";
import UserServices from "../services/UserServices";
import validator from "validator";
import { ToastContainer, toast } from "react-toastify";

const Input = styled('input')({
    display: 'none',
});

function TutorDialog() {
    const [currentUser, setCurrentUser] = useState({
        gender: "",
        avatar: "",
        specialty: "",
        degree: "",
        studentId: "",
        address: "",
        telephone: "",
        experience: "",
        dateOfBirth: ""
    });

    const [tutor, setTutor] = useState({
        gender: "",
        avatar: "",
        specialty: "",
        degree: "",
        studentId: "",
        address: "",
        telephone: "",
        experience: "",
        dateOfBirth: ""
    })

    const [imageSelected, setImageSelected] = useState("");

    useEffect(() => {
        UserServices.getUserInformation()
            .then((response) => {
                setTutor(response.data.value);
                setCurrentUser(response.data.value)
            })
            .catch((e) => {
                if (e.response && e.response.data) {
                    toast.error(e.response.data.value)
                }
            })
    }, [])

    const handleChange = (evt) => {
        var value = evt.target.value;
        if (evt.target.name == "gender") {
            value = value.charAt(0).toUpperCase() + value.slice(1);
        }
        setTutor({
            ...tutor,
            [evt.target.name]: value,
        });
    }

    const makeid = (length) => {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result;
    }

    const handleSubmit = () => {
        if (!validator.isInt(tutor.telephone) || (tutor.telephone.length != 10)) {
            toast.warning("Phone number must be 10 digits");
        }
        else if (
            tutor.address === "" ||
            tutor.studentId === "" ||
            tutor.specialty === "" ||
            tutor.degree === "" || tutor.dateOfBirth === "" ||
            tutor.experience === ""
        ) {
            toast.warning("All fields are not allowed to be null");
        }
        else if ((tutor.gender.toLowerCase() != "female") && (tutor.gender.toLowerCase() != "male")) {
            toast.warning("Gender must be male or female");
        }
        else {
            const formData = new FormData();
            formData.append("file", imageSelected);
            formData.append("upload_preset", "fb42jacc");
            var imageName = makeid(15);
            formData.append("public_id", imageName)

            if (imageSelected.name != null) {
                imageName += "." + imageSelected.name.slice(-3);
                UploadImageServices.uploadImage(formData).then(() => {
                    if (imageName != "") {
                        tutor.avatar = "https://res.cloudinary.com/it-nihongo/image/upload/v1634999302/" + imageName;
                        setTutor({ ...tutor, avatar: imageName })
                        imageName = "";
                    }
                    UserServices.updateProfile(tutor).then(() => {
                        toast.success("Success");
                        setCurrentUser({ ...currentUser, specialty: tutor.specialty })
                        localStorage.setItem("currentUser", JSON.stringify(currentUser));
                        setTimeout(() => {
                            window.location.reload();
                        }, 3000);
                    })
                        .catch((e) => {
                            if (e.response && e.response.data) {
                                toast.error(e.response.data.value);
                            }
                        });
                })
            }
            else {
                UserServices.updateProfile(tutor).then(() => {
                    toast.success("Success");
                    setCurrentUser({ ...currentUser, specialty: tutor.specialty })
                    localStorage.setItem("currentUser", JSON.stringify(currentUser));
                    setTimeout(() => {
                        window.location.reload();
                    }, 3000);
                })
                    .catch((e) => {
                        if (e.response && e.response.data) {
                            toast.error(e.response.data.value);
                        }
                    });
            }
        }
    }

    return (
        <div className="">
            <ToastContainer />
            <div className="background-homepage"></div>
            <div className="frame-tutor-dialog">
                <div className="row">
                    <div className="col-sm-3">
                        <label htmlFor="icon-button-file">
                            <Input accept="image/*" id="icon-button-file" type="file" onChange={(event) => { setImageSelected(event.target.files[0]) }} />
                            <IconButton color="primary" aria-label="upload picture" component="span">
                                <Image
                                    src="/Image/camera.png"
                                    width="230"
                                    height="180"
                                    alt="image"
                                ></Image>
                            </IconButton>
                        </label>
                        <p className="text-center"
                            style={{ font: "Oxygen", color: "rgba(0, 0, 0, 0.5)", marginLeft: '23%', width: '150px' }}>Add your card photo</p>
                        <div style={{ marginTop: '220px', marginLeft: '40px' }}>
                            <Checkbox inputId="cb1" value="New York" style={{ display: 'inline-block', }} ></Checkbox>
                            <p className="text-center"
                                style={{
                                    font: "Oxygen", color: "rgba(0, 0, 0, 0.5)", marginLeft: '18%',
                                    width: '150px', marginTop: '-25px'
                                }}>I agree privacy policy</p>
                        </div>
                        <Button className="button-enter-tutor-dialog" onClick={handleSubmit}>Enter</Button>
                        <p className="position-abs" style={{
                            color: 'rgba(0, 0, 0, 0.5)',
                            width: '0px', height: '90%', border: '1px solid #8d8989', marginLeft: '26%', top: '5%'
                        }}></p>

                    </div>

                    <div className="col-sm-8">
                        <div className="row">
                            <div className="col-sm-6">
                                <InputText className="input-tutor-dialog ms-5"
                                    onChange={handleChange}
                                    placeholder="Location"
                                    name="address"
                                    style={{ marginTop: '10%' }}></InputText>
                                <InputText className="input-tutor-dialog ms-5"
                                    onChange={handleChange}
                                    placeholder="ID"
                                    name="studentId"
                                    style={{ marginTop: '5%' }}></InputText>
                                <InputText className="input-tutor-dialog"
                                    onChange={handleChange}
                                    placeholder="Gender"
                                    name="gender"
                                    style={{ marginTop: '5%', marginLeft: '45.4px' }}></InputText>
                                <input type="date" className="datetime-picker-dialog"
                                    onChange={handleChange}
                                    name="dateOfBirth"
                                    style={{ marginTop: '15%' }}
                                    id="datetimepicker" data-date-format="yyyy-mm-dd"></input>
                            </div>
                            <div className="col-sm-6">
                                <InputText className="input-tutor-dialog ms-5" placeholder="Phone"
                                    onChange={handleChange}
                                    name="telephone"
                                    style={{ marginTop: '10%' }}></InputText>
                                <InputText className="input-tutor-dialog ms-5"
                                    onChange={handleChange}
                                    placeholder="Speciality"
                                    name="specialty"
                                    style={{ marginTop: '5%' }}></InputText>
                                <label className="rectangle-tutor-dialog"></label>
                                <p
                                    className="enter-certificate"
                                >
                                    Certificate
                                </p>
                                <InputTextarea
                                    className="cert-text-area text-black"
                                    name="degree"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="rectangle-experience"></label>
                            <p
                                className="label-experience"
                            >
                                Experience
                            </p>
                            <InputTextarea className="experience-text-area" onChange={handleChange} name="experience" placeholder=""></InputTextarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TutorDialog;