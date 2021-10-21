import { Link } from "react-router-dom";
import SidebarHomePage from "../components/Homepage/SidebarHomePage";
import { Card } from "react-bootstrap";
import TopComponent from "../components/Homepage/TopComponent";
import StudentSideBar from "../components/StudentSideBar";

function HomePage() {
    return (
        <div className="row">
            <div className="col-sm-1" >
                <SidebarHomePage />
            </div>
            <div className="col-sm-define" style={{ marginLeft: '-3%' }} >
                <div>
                    <TopComponent />
                </div>
                <div style={{ marginTop: '30px' }}>
                    <Card className="card-tutor">
                        <Card.Body>
                            <div className="row">
                                <div className="col-sm-6">
                                    <Card.Title>Title: Finding math teacher</Card.Title>
                                    <Card.Text>Description: Need a high school math teacher</Card.Text>
                                    <Card.Text className="position-abs text-time">September, 16 - September, 30</Card.Text>
                                </div>
                                <div className="col-sm-6">
                                    <div className="dropdown">
                                        <i className="fa fa-ellipsis-v" style={{ marginLeft: '95%' }} type="" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                        </i>
                                        <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownMenuButton2">
                                            <li><Link className="dropdown-item" to="/" >View detail</Link></li>
                                            <li><Link className="dropdown-item" to="/" >Report this post</Link></li>
                                            <li><Link className="dropdown-item" to="/" >Manage</Link></li>
                                        </ul>
                                    </div>
                                    <Card.Subtitle>Salary: 300$</Card.Subtitle>
                                    <Card.Subtitle className="mt-2">Time: 17:00 - 19:00 Mon, Wed, Sun</Card.Subtitle>
                                    <Card.Subtitle className="mt-2">Location: Danang</Card.Subtitle>
                                    <Card.Subtitle className="mt-2">Gender: None</Card.Subtitle>

                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="card-tutor">
                        <Card.Body>
                            <div className="row">
                                <div className="col-sm-6">
                                    <Card.Title>Title: Finding math teacher</Card.Title>
                                    <Card.Text>Description: Need a high school math teacher</Card.Text>
                                    <Card.Text className="position-abs text-time">September, 16 - September, 30</Card.Text>
                                </div>
                                <div className="col-sm-6">
                                    <div className="dropdown">
                                        <i className="fa fa-ellipsis-v" style={{ marginLeft: '95%' }} type="" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                        </i>
                                        <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownMenuButton2">
                                            <li><Link className="dropdown-item" to="/" >View detail</Link></li>
                                            <li><Link className="dropdown-item" to="/" >Report this post</Link></li>
                                            <li><Link className="dropdown-item" to="/" >Manage</Link></li>
                                        </ul>
                                    </div>
                                    <Card.Subtitle>Salary: 300$</Card.Subtitle>
                                    <Card.Subtitle className="mt-2">Time: 17:00 - 19:00 Mon, Wed, Sun</Card.Subtitle>
                                    <Card.Subtitle className="mt-2">Location: Danang</Card.Subtitle>
                                    <Card.Subtitle className="mt-2">Gender: None</Card.Subtitle>

                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="card-tutor">
                        <Card.Body>
                            <div className="row">
                                <div className="col-sm-6">
                                    <Card.Title>Title: Finding math teacher</Card.Title>
                                    <Card.Text>Description: Need a high school math teacher</Card.Text>
                                    <Card.Text className="position-abs text-time">September, 16 - September, 30</Card.Text>
                                </div>
                                <div className="col-sm-6">
                                    <div className="dropdown">
                                        <i className="fa fa-ellipsis-v" style={{ marginLeft: '95%' }} type="" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                        </i>
                                        <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownMenuButton2">
                                            <li><Link className="dropdown-item" to="/" >View detail</Link></li>
                                            <li><Link className="dropdown-item" to="/" >Report this post</Link></li>
                                            <li><Link className="dropdown-item" to="/" >Manage</Link></li>
                                        </ul>
                                    </div>
                                    <Card.Subtitle>Salary: 300$</Card.Subtitle>
                                    <Card.Subtitle className="mt-2">Time: 17:00 - 19:00 Mon, Wed, Sun</Card.Subtitle>
                                    <Card.Subtitle className="mt-2">Location: Danang</Card.Subtitle>
                                    <Card.Subtitle className="mt-2">Gender: None</Card.Subtitle>

                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className="col-sm-3 student-top-component" style={{ paddingLeft: '5%' }}>
                <StudentSideBar />
            </div>
        </div>
    );
}
export default HomePage;