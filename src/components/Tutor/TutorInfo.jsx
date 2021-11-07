import { Card } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

function TutorInfo(props) {
	const tutor = props.tutor;
	console.log(tutor)
	return (
		<Card className="card-tutor-info box">
			<ToastContainer />
			<Card.Body>
				<div className="row">
					<div className="col-sm-6">
						<div className="col-sm-6">
							<Image
								src={
									tutor.avatar == "" || tutor.avatar == null
										? "/Image/default_avt.png"
										: tutor.avatar
								}
								className="position-abs"
								style={{ marginLeft: "17%", marginTop: "-60%" }}
								width="120"
								height="120"
								alt="image"
								aria-expanded="false"
								roundedCircle
							></Image>
							<Card.Text className="name-tutor-text">{tutor.name}</Card.Text>
							<Card.Text className="city-tutor" style={{ marginTop: "-3%" }}>
								Current job: {tutor.degree}
							</Card.Text>
							<Card.Text className="city-tutor" style={{ marginTop: "6%" }}>
								Speciality: {tutor.specialty}
							</Card.Text>
							<Card.Text className="city-tutor" style={{ marginTop: "15%" }}>
								Rank:
							</Card.Text>
							<div className="dropdown">
								<i
									className="fa fa-ellipsis-v"
									style={{ marginLeft: "470%", marginTop:'-100%' }}
									type=""
									id="dropdownMenuButton2"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								></i>
								<ul
									className="dropdown-menu dropdown-menu-light"
									aria-labelledby="dropdownMenuButton2"
								>
									<li>
										<Link
											className="dropdown-item"
											to={`/post/show/${tutor.username}`}
											params={{ id: tutor.username }}
										>
											View detail
										</Link>
									</li>
									<li>
										<Link className="dropdown-item" to="/">
											Report this post
										</Link>
									</li>
									<li>
										<Link className="dropdown-item" to="/">
											Manage
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</Card.Body>
		</Card>
	);
}
export default TutorInfo;