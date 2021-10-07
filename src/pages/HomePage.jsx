import { Link } from "react-router-dom";
import SidebarHomePage from "../components/Homepage/SidebarHomePage";
import { Card } from "react-bootstrap";
import TopComponent from "../components/Homepage/TopComponent";
import StudentSideBar from "../components/StudentSideBar";

function HomePage() {
    return (
        <div class="row">
            <div className="col-sm-auto">
                <SidebarHomePage className="position-abs" />
            </div>
            <div className="col-sm-define ms-4">
                <TopComponent />
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
                                    <div class="dropdown">
                                        <i class="fa fa-ellipsis-v" style={{ marginLeft: '95%' }} type="" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                        </i>
                                        <ul class="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownMenuButton2">
                                            <li><Link class="dropdown-item" >View detail</Link></li>
                                            <li><Link class="dropdown-item" >Report this post</Link></li>
                                            <li><Link class="dropdown-item" >Manage</Link></li>
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
                <Card className="card-tutor">
                    <Card.Body>
                        <Card.Title>Title: Finding math teacher</Card.Title>
                        <div className="row">
                            <div className="col-sm-6">
                                <Card.Text>Description: Need a high school math teacher</Card.Text>
                                <Card.Text className="position-abs text-time">September, 16 - September, 30</Card.Text>
                            </div>
                            <div className="col-sm-6">
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
                        <Card.Title>Title: Finding math teacher</Card.Title>
                        <div className="row">
                            <div className="col-sm-6">
                                <Card.Text>Description: Need a high school math teacher</Card.Text>
                                <Card.Text className="position-abs text-time">September, 16 - September, 30</Card.Text>
                            </div>
                            <div className="col-sm-6">
                                <Card.Subtitle>Salary: 300$</Card.Subtitle>
                                <Card.Subtitle className="mt-2">Time: 17:00 - 19:00 Mon, Wed, Sun</Card.Subtitle>
                                <Card.Subtitle className="mt-2">Location: Danang</Card.Subtitle>
                                <Card.Subtitle className="mt-2">Gender: None</Card.Subtitle>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </div>
            <div className="col-sm-3 student-top-component" style={{ paddingLeft: '5%' }}>
                <StudentSideBar />
            </div>
        </div>
    );
}
export default HomePage;