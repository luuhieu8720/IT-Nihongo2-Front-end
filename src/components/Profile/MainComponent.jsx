import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import TopProfileComponent from "./TopProfileComponent";

function MainComponent() {
    return (
        <div className="">
            <TopProfileComponent />
            <div className="row">
                <div className="col-sm-3">
                    <h3 className="" style={{ fontSize: '28px', marginTop: '18%', color: 'darkviolet' }}>Profile</h3>
                    <p style={{ color: 'rgba(0, 0, 0, 0.5)', width: '0px', height: '350px', left: '35px', border: '1px solid #8d8989', marginLeft: '80%' }}></p>
                </div>
                <div className="col-sm-2" style={{ marginTop:'9%' }}>
                    <h5 className="py-1">ID </h5>
                    <h5 className="py-1">Phone </h5>
                    <h5 className="py-1">Email </h5>
                    <h5 className="py-1">Name </h5>
                    <h5 className="py-1">Current job </h5>
                    <h5 className="py-1">Gender </h5>
                    <h5 className="py-1">Location </h5>
                    <h5 className="py-1">Speciality </h5>
                </div>
                <div className="col-sm-auto text-name-profile" style={{ marginTop:'8%' }}>
                    <h6 className="pb-2">9999</h6>
                    <h6 className="pb-2 pt-1">(+84)123456789 </h6>
                    <h6 className="pb-2 pt-1">luuhieu8720@gmail.com</h6>
                    <h6 className="pb-2 pt-1">Hieu Le</h6>
                    <h6 className="pb-2 pt-1">Student</h6>
                    <h6 className="pb-2 pt-2">Female</h6>
                    <h6 className="pb-2 pt-1">Son Tra, Da Nang</h6>
                    <h6 className="pb-2 pt-1">Nothing</h6>
                </div>
            </div>
        </div>

    );
}
export default MainComponent;