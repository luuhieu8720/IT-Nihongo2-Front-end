import { Link } from "react-router-dom";
import { Image, Button } from "react-bootstrap";

function TopProfileComponent() {

    return (
        <div className="">
            <div className="" style={{ marginTop: '1.5%', display: 'inline-block' }}>
                <Image src="/Image/avatardefault.png" alt="image" roundedCircle ></Image>
                <div className="dropdown position-abs" style={{ top: '3%', right: '3%' }}>
                    <i className="fa fa-ellipsis-h fa-2x" type="" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                    </i>
                    <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownMenuButton2">
                        <li><Link className="dropdown-item" >Finding tutor</Link></li>
                        <li><Link className="dropdown-item" >Back to home page</Link></li>
                        <li><Link className="dropdown-item" >Sign out</Link></li>
                    </ul>
                </div>
            </div>
            <span className="position-abs text-name-profile">Hieu Le</span>
            <h3 style={{ paddingTop: '3.5%' }}>Settings</h3>
           
        </div>

    );
}
export default TopProfileComponent;