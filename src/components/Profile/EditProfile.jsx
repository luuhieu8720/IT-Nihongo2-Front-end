import TopProfileComponent from "./TopProfileComponent";
import { InputText } from "primereact/inputtext";
import Button from 'react-bootstrap/Button';
import UserServices from "../../services/UserServices";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import Select from 'react-select';
import UploadImageServices from "../../services/UploadImageServices";

function EditProfile() {
    const [userProfile, setUserProfile] = useState({
        telephone: "",
        email: "",
        name: "",
        gender: "",
        address: "",
        avatar: ""
    })
    const [avatar, setAvatar] = useState()
    const [imageSelected, setImageSelected] = useState("");
    useEffect(() => {
        UserServices.getUserInformation()
            .then((response) => {
                setUserProfile(response.data.value);
                console.log(response.data.value.gender === "Female");
            })
            .catch((e) => {
                if (e.response && e.response.data) {
                    toast.error(e.response.data.value)
                }
            })
    }, [])

    const options = [
        { value: 'Male', label: 'Male' },
        { value: 'Female', label: 'Female' }
    ];

    const colourStyles = {
        control: styles => ({ ...styles, backgroundColor: 'white', width: '250px', border: '1px solid black' }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            return {
                ...styles,
                backgroundColor: isDisabled ? 'blue' : 'white',
                color: 'black',
                cursor: isDisabled ? 'not-allowed' : 'default',
            }
        },
    }

    const handleChangeGender = e => {
        userProfile.gender = e.value;
        console.log(userProfile)
    }

    const handleChange = (evt) => {
        const value = evt.target.value;
        setUserProfile({
            ...userProfile,
            [evt.target.name]: value,
        });
        console.log(userProfile)
    }

    const handleSubmit = () => {
        const formData = new FormData();
        formData.append("file", imageSelected);
        formData.append("upload_preset", "fb42jacc");
        var imageName = makeid(10);
        formData.append("public_id", imageName)

        if (imageSelected.name != null) {
            imageName += "." + imageSelected.name.slice(-3);
            UploadImageServices.uploadImage(formData).then(() => {
                if (imageName != "") {
                    userProfile.avatar = "https://res.cloudinary.com/it-nihongo/image/upload/v1634999302/" + imageName;
                    setUserProfile({ ...userProfile, avatar: imageName })
                    imageName = "";
                }
                console.log(userProfile);
                UserServices.updateProfile(userProfile).then(() => {
                    toast.success("Success")
                    setTimeout(() => {
                        localStorage['stateProfile'] = "show";
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
            UserServices.updateProfile(userProfile).then(() => {
                    toast.success("Success")
                    setTimeout(() => {
                        localStorage['stateProfile'] = "show";
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

    return (
        <div className="">
            <ToastContainer />
            <TopProfileComponent />
            <div className="row">
                <div className="col-sm-3">
                    <h3 className="" style={{ fontSize: '28px', marginTop: '18%', color: 'darkviolet' }}>Profile</h3>
                    <p className="position-abs" style={{ color: 'rgba(0, 0, 0, 0.5)', width: '0px', height: '400px', left: '35px', border: '1px solid #8d8989', marginLeft: '35%', top: '30%' }}></p>
                </div>
                <div className="col-sm-7" style={{ marginTop: '0%' }}>
                    <div className="mt-3">
                        <span className="">Phone </span>
                        <InputText style={{ marginLeft: '5.2rem' }} defaultValue={userProfile.telephone} name="telephone" className="input-update-profile" placeholder="" onChange={handleChange} />
                    </div>
                    <div className="mt-3">
                        <span className="">Name </span>
                        <InputText style={{ marginLeft: '5.4rem' }} defaultValue={userProfile.name} name="name" className="input-update-profile" placeholder="" onChange={handleChange} />
                    </div>
                    <div className="mt-3">
                        <span className="">Gender </span>
                        <div style={{ display: 'inline-block', marginLeft: '4.8rem' }}>
                            <Select styles={colourStyles}
                                options={options}
                                defaultValue={userProfile.gender === "Female" ? options[1] : options[0]}
                                onChange={handleChangeGender}
                            />
                        </div>
                    </div>
                    <div className="mt-3">
                        <span className="">Address </span>
                        <InputText style={{ marginLeft: '4.6rem' }} defaultValue={userProfile.address} name="address" className="input-update-profile" placeholder="" onChange={handleChange} />
                    </div>
                    <div className="mt-3">
                        <input type="file" style={{ marginTop: '1rem' }} onChange={(event) => { setImageSelected(event.target.files[0]) }}></input>
                    </div>

                    <Button variant="primary" className="mt-4" onClick={handleSubmit} >Submit</Button>
                </div>
            </div>

        </div>

    );
}
export default EditProfile;