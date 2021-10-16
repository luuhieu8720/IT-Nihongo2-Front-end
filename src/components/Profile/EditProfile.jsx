import TopProfileComponent from "./TopProfileComponent";
import { InputText } from "primereact/inputtext";
import Button from 'react-bootstrap/Button'

function EditProfile() {
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
                <div className="col-sm-5" style={{ marginTop: '4%' }}>
                    <div className="">
                        <span className="">ID </span>
                        <InputText style={{ marginLeft: '7rem' }} className="input-update-profile" placeholder="9999" />
                    </div>
                    <div className="mt-3">
                        <span className="">Phone </span>
                        <InputText style={{ marginLeft: '5.2rem' }} className="input-update-profile" placeholder="9999" />
                    </div>
                    <div className="mt-3">
                        <span className="">Email </span>
                        <InputText style={{ marginLeft: '5.7rem' }} className="input-update-profile" placeholder="9999" />
                    </div>
                    <div className="mt-3">
                        <span className="">Name </span>
                        <InputText style={{ marginLeft: '5.4rem' }} className="input-update-profile" placeholder="9999" />
                    </div>
                    <div className="mt-3">
                        <span className="">Current job </span>
                        <InputText style={{ marginLeft: '3rem' }} className="input-update-profile" placeholder="9999" />
                    </div>
                    <div className="mt-3">
                        <span className="">Gender </span>
                        <InputText style={{ marginLeft: '4.8rem' }} className="input-update-profile" placeholder="9999" />
                    </div>
                    <div className="mt-3">
                        <span className="">Location </span>
                        <InputText style={{ marginLeft: '4.2rem' }} className="input-update-profile" placeholder="9999" />
                    </div>
                    <Button variant="primary" className="mt-4" onClick={handleSubmit} >Submit</Button>
                </div>
            </div>
            
        </div>

    );
}
export default EditProfile;