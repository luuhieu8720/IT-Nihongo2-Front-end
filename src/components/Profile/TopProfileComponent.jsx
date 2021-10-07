import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

function TopProfileComponent() {
    return (
        <div className="">
            <div className="" style={{ marginTop: '1.5%', display:'inline-block' }}>
                <Image src="Image/avatardefault.png" alt="image" roundedCircle ></Image>
            </div>
            <span className="position-abs text-name-profile">Hieu Le</span>
            <h3 style={{paddingTop:'3.5%'}}>Settings</h3>
        </div>

    );
}
export default TopProfileComponent;