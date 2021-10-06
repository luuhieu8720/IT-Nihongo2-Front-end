import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

function StudentSideBar() {
    return (
        <div className="">
            <div className="row">
                <div className="col-sm-auto student-top-component">
                    <i className="far fa-envelope fa-2x"></i>
                </div>
                <div className="col-sm-auto student-top-component">
                    <i class="far fa-bell fa-2x"></i>
                </div>
                <div className="col-sm-auto student-top-component" style={{ paddingRight: '-1%', paddingLeft: '5%' }} >
                    <p >Hi, Hieu</p>

                </div>
                <div className="col-sm-auto" style={{ marginTop: '-3%' }}>
                    <Image src="Image/avatardefault.png" alt="image" roundedCircle ></Image>
                </div>
            </div>
            <h4 className="text-center" style={{ font: 'Oxygen', marginTop: '10%' }}>Easy to find an experienced tutor for you!</h4>
            <Image src="Image/test.jpg" style={{ marginLeft: '-5%' }} alt="image" rounded  ></Image>
            <div className="text-center text-contact">
                <div style={{ marginBottom:'5px' }}>Email: eto.edu@gmail.com</div>
                <div style={{ marginBottom:'5px' }}>Phone: +(84)123456789</div>
                <div style={{ marginBottom:'5px' }}>Link: https://eto.edu.vn</div>
            </div>
            <i className="bi bi-plus-circle fa-3x icon-purple"></i>
        </div>

    );
}
export default StudentSideBar;