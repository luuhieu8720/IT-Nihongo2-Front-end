import TopProfileComponent from "./TopProfileComponent";
import { InputText } from "primereact/inputtext";
import Button from 'react-bootstrap/Button';
import UserServices from "../../services/UserServices";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import Select from 'react-select';

function EditProfile() {
    const [userProfile, setUserProfile] = useState({
        telephone: "",
        email: "",
        name: "",
        male: "",
        address: ""
    })
    useEffect(() => {
        UserServices.getUserInformation()
            .then((response) => {
                setUserProfile(response.data.value);
                console.log(response.data);
            })
            .catch((e) => {
                if (e.response && e.response.data) {
                    toast.error(e.response.data.value)
                }
            })
    }, [])

    const options = [
        { value: 'true', label: 'Male' },
        { value: 'false', label: 'Female' }
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

    const [selectedValue, setSelectedValue] = useState();

    const handleChangeGender = e => {
        setSelectedValue(e.value)
        setUserProfile({ ...userProfile, male: e.value })
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
        UserServices.updateProfile(userProfile).then(toast.success("Success"))
            .catch((e) => {
                if (e.response && e.response.data) {
					toast.error(e.response.data.value);
				}
            });
            setTimeout(() => {
            localStorage['stateProfile'] = "show";
            window.location.reload();
        }, 3000);
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
                <div className="col-sm-5" style={{ marginTop: '4%' }}>
                    <div className="mt-3">
                        <span className="">Phone </span>
                        <InputText style={{ marginLeft: '5.2rem' }} defaultValue={userProfile.telephone} name="telephone" className="input-update-profile" placeholder="" onChange={handleChange} />
                    </div>
                    <div className="mt-3">
                        <span className="">Email </span>
                        <InputText style={{ marginLeft: '5.7rem' }} defaultValue={userProfile.email} name="email" className="input-update-profile" placeholder="" onChange={handleChange} />
                    </div>
                    <div className="mt-3">
                        <span className="">Name </span>
                        <InputText style={{ marginLeft: '5.4rem' }} defaultValue={userProfile.name} name="name" className="input-update-profile" placeholder="" onChange={handleChange} />
                    </div>
                    <div className="mt-3">
                        <span className="">Gender </span>
                        <div style={{ display: 'inline-block', marginLeft: '4.8rem' }}>
                            <Select styles={colourStyles}
                                value={options.find(obj => obj.value === selectedValue)}
                                options={options}
                                defaultValue={options[0]}
                                onChange={handleChangeGender}
                            />
                        </div>
                    </div>
                    <div className="mt-3">
                        <span className="">Address </span>
                        <InputText style={{ marginLeft: '4.6rem' }} defaultValue={userProfile.address} name="address" className="input-update-profile" placeholder="" onChange={handleChange} />
                    </div>
                    <Button variant="primary" className="mt-4" onClick={handleSubmit} >Submit</Button>
                </div>
            </div>

        </div>

    );
}
export default EditProfile;