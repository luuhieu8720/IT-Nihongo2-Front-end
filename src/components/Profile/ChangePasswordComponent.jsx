import TopProfileComponent from "./TopProfileComponent";
import Button from 'react-bootstrap/Button'
import { useState } from "react";
import { Password } from 'primereact/password';
import { ToastContainer, toast } from "react-toastify";
import UserServices from "../../services/UserServices";

function ChangePasswordComponent() {
    const [passwordModel, setPasswordModel] = useState({
        newPassword: "",
        oldPassword: "",
        confirmPassword: ""
    });

    const handleReset = () => {
        window.location.reload();
    }

    const handleChange = (evt) => {
        const value = evt.target.value;
        setPasswordModel({
            ...passwordModel,
            [evt.target.name]: value,
        });
    }
    const handleSubmit = () => {
        localStorage["statePassword"] = "false";
        if (passwordModel.newPassword != passwordModel.confirmPassword) {
            toast.error("Confirm password has to be the same with new password!")
        }
        else {
            UserServices.updatePassword(passwordModel)
                .then(() => toast
                    .success("Successfully updated"))
                .catch((e) => {
                    if (e.response && e.response.data) {
                        toast.error(e.response.data.value);
                    }
                });
        }
    }
    return (
        <div className="">
            <ToastContainer />
            <TopProfileComponent />
            <div className="row">
                <div className="col-sm-3">
                    <h3 className="" style={{ fontSize: '28px', marginTop: '18%', color: 'darkviolet' }}>Password</h3>
                    <p className="position-abs" style={{ color: 'rgba(0, 0, 0, 0.5)', width: '0px', height: '400px', left: '35px', border: '1px solid #8d8989', marginLeft: '35%', top: '30%' }}></p>
                </div>
                <div className="col-sm-auto" style={{ marginTop: '6%' }}>
                    <div className="">
                        <h6 style={{ display: 'inline-block' }}>Old Password </h6>
                        <Password style={{ marginLeft: '4rem', display: 'inline-block'}} name="oldPassword" className="input-update-profile" placeholder="" onChange={handleChange} feedback={false} />
                    </div>
                    <div className="mt-3">
                        <h6 style={{ display: 'inline-block' }} className="font-weight-bold">New Password </h6>
                        <Password style={{ marginLeft: '3.6rem', display: 'inline-block' }} id="newPassword" name="newPassword" className="input-update-profile" placeholder="" onChange={handleChange} feedback={false} />
                    </div>
                    <div className="mt-3">
                        <h6 style={{ display: 'inline-block' }} className="font-weight-bold">Confirm Password </h6>
                        <Password style={{ marginLeft: '2rem', display: 'inline-block' }} id="confirmPassword" name="confirmPassword" className="input-update-profile" placeholder="" onChange={handleChange} feedback={false} />
                    </div>
                    <div>
                        <Button className="mt-4 button-update-password text-dark" onClick={handleReset}>Reset</Button>
                        <Button className="mt-4 button-confirm-password" onClick={handleSubmit} >Confirm</Button>
                    </div>
                </div>
            </div>

        </div>

    );
}
export default ChangePasswordComponent;