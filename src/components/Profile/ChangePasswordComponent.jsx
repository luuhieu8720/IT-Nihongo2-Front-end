import TopProfileComponent from "./TopProfileComponent";
import { InputText } from "primereact/inputtext";
import Button from 'react-bootstrap/Button'

function ChangePasswordComponent() {
    const handleSubmit = () => {
        localStorage['stateProfile'] = "show";
        window.location.reload();
    }
    return (
        <div className="">
            <TopProfileComponent />
            <div className="row">
                <div className="col-sm-3">
                    <h3 className="" style={{ fontSize: '28px', marginTop: '18%', color: 'darkviolet' }}>Profile</h3>
                    <p className="position-abs" style={{ color: 'rgba(0, 0, 0, 0.5)', width: '0px', height: '400px', left: '35px', border: '1px solid #8d8989', marginLeft: '35%', top: '30%' }}></p>
                </div>
                <div className="col-sm-auto" style={{ marginTop: '6%' }}>
                    <div className="">
                        <h6 style={{ display:'inline-block' }}>Old Password </h6>
                        <InputText style={{ marginLeft: '2.5rem'}} className="input-update-profile" placeholder="9999" />
                    </div>
                    <div className="mt-3">
                        <h6 style={{ display:'inline-block' }} className="font-weight-bold">New Password </h6>
                        <InputText style={{ marginLeft: '2.1rem' }} className="input-update-profile" placeholder="9999" />
                    </div>
                    <div className="mt-3">
                        <h6 style={{ display:'inline-block' }} className="font-weight-bold">Confirm Password </h6>
                        <InputText style={{ marginLeft: '0.5rem' }} className="input-update-profile" placeholder="9999" />
                    </div>
                    <Button variant="primary" className="mt-4" onClick={handleSubmit} >Submit</Button>
                </div>
            </div>
            
        </div>

    );
}
export default ChangePasswordComponent;