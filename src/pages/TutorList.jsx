import SidebarHomePage from "../components/Homepage/SidebarHomePage";
import TutorServices from "../services/TutorServices";
import TopTutorComponent from "../components/Tutor/TopTutorComponent";
import TutorInfo from "../components/Tutor/TutorInfo";
import FindTutorFilter from "../components/Tutor/FindTutorFilter";
import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import ProfileSideBar from "../components/Tutor/ProfileSideBar";

function TutorList() {
	const [tutorlist, setTutorList] = useState([]);

	useEffect(
		() => {
			var tutors = JSON.parse(sessionStorage.getItem("tutors"));

			if (tutors != null) {
				setTutorList(tutors);
			}
			else {
				TutorServices.getAllTutor().then(response => {
					setTutorList(response.data.value)
				})
					.catch(error => console.log(error));
			}
		}, [])

	console.log(tutorlist);
	const listTutor = tutorlist.map((tutor) => (
		<div className="col-12 col-lg-4">
			<TutorInfo tutor={tutor}></TutorInfo>
		</div>

	));

	const [buttonPopup, setButtonPopup] = useState(false);

	const handleClickClose = () => {
		sessionStorage.setItem("filterTutorState", "true");
		sessionStorage.removeItem("tutors");
		sessionStorage.setItem("filterTutorString", "");
		window.location.reload();
	}
	const handleClickFilter = () => {
		window.scrollTo(0, 0);
		sessionStorage.setItem("filterTutorState", "false");
		setTimeout(() => {
			setButtonPopup(true);
		}, 500);
	}

	return (
		<div className="row">
			<div className="col-sm-1">
				<SidebarHomePage />
			</div>

			<div className="col-sm-define" style={{ marginLeft: "0%" }}>
				<div>
					<TopTutorComponent />
				</div>
				<FindTutorFilter
					trigger={buttonPopup}
					setTrigger={setButtonPopup}
				></FindTutorFilter>
				<Card className="card-filter-tutor">
					<Card.Body>
						<Card.Title
							style={{ display: "inline-block" }}
							className="filter-text"
						>
							FILTER
						</Card.Title>
						<Card.Subtitle
							style={{ display: "inline-block" }}
							className="ms-5 filter-text-condition"
						>
							{sessionStorage.getItem("filterTutorString")}
						</Card.Subtitle>
						<i className="fas fa-angle-double-up fa-lg position-abs" hidden={(sessionStorage.getItem("filterTutorState") != "true" && sessionStorage.getItem("filterTutorState") != null)}
							onClick={handleClickFilter} style={{ right: '10px' }}></i>
						<i className="fa fa-window-close fa-lg position-abs" hidden={(sessionStorage.getItem("filterTutorState") == "true" || sessionStorage.getItem("filterTutorState") == null)}
							onClick={handleClickClose} style={{ right: '10px' }}></i>
					</Card.Body>
				</Card>

				<div className="row">
					{listTutor}
				</div>
			</div>
			<div
				className="col-sm-3 student-top-component"
				style={{ marginLeft: "20px" }}
			>
				<ProfileSideBar />
			</div>
		</div>
	);
}
export default TutorList;
