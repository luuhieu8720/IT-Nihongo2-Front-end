import { useState } from "react";
import { Link } from "react-router-dom";

function SideBarProfile() {
    const handleProfileSubmit = () => {
        localStorage['stateProfile'] = "show";
    }
    //localStorage["stateTabIndex"] = "0";

    const handleChangeIndexProfile = () =>{
        localStorage["stateTabIndex"] = "1";
    }

    const handleChangeIndexPassword = () => {
        localStorage["stateTabIndex"] = "0";
    }

    return (
        <div className="pt-3 ps-5">
            <label className="text-profile-sidebar">ETO</label>
            <p className="pt-5 text-customize">Customize</p>
            <p style={{ color: 'rgba(0, 0, 0, 0.5)', width: '200px', height: '0px', left: '35px', border: '1px solid #8d8989' }}></p>
            <Link className="position-abs" to="/user/profile/setting" onClick={handleProfileSubmit} >
                <i className="fst-normal bi bi-person fa-2x" 
                    id='id' style={{ display: 'inline-block', color: localStorage["stateTabIndex"] == "1" ? 'darkviolet' : 'rgba(0, 0, 0, 0.5)' }}
                    onClick={handleChangeIndexProfile} >
                    <span className="ms-3" style={{ fontSize: '25px', fontFamily: 'Roboto' }}>Profile</span>
                </i>
            </Link>
            <br />
            <div className="mt-5">
                <Link className="mt-4" to="/password/change">
                <i className="fst-normal bi bi-unlock fa-2x" tabIndex='1' id='id' style={{ display: 'inline-block', color: localStorage["stateTabIndex"] == "0" ? 'darkviolet' : 'rgba(0, 0, 0, 0.5)'  }}
                onClick={handleChangeIndexPassword} >
                <span className="ms-3" style={{ fontSize: '25px', fontFamily: 'Roboto' }}>Password</span></i>
            </Link>
            </div>
            <br />
            <Link to="/password/change" className="position-abs" style={{ paddingTop: '0.2rem', marginLeft: '-6px' }}>
                <i className="fst-normal bi bi-plus fa-2x " tabIndex='1' id='id' style={{ display: 'inline-block'}}>
                    <span className="ms-3" style={{ fontSize: '25px', fontFamily: 'Roboto', paddingLeft: '4px' }}>Advance</span> 
                </i>
            </Link>
            <br />
            <i className="position-abs far fa-arrow-alt-circle-left fa-3x" style={{ bottom:'30px' }}></i>
        </div>


    );
}
export default SideBarProfile;