import SidebarHomePage from "../components/Homepage/SidebarHomePage";
import TutorServices from "../services/TutorServices";
import TopTutorComponent from "../components/Tutor/TopTutorComponent";
import TutorInfo from "../components/Tutor/TutorInfo";
import FindTutorFilter from "../components/Tutor/FindTutorFilter";
import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import ProfileSideBar from "../components/Tutor/ProfileSideBar";
import ShowPost from "./ShowPost";
import PostServices from "../services/PostServices";

function TutorList() {
  const [tutorlist, setTutorList] = useState([]);

  useEffect(() => {
    const fetchTutorList = async () => {
      try {
        const responce = await TutorServices.getAllTutor();
        console.log("Successfully: ", responce.data.value);
        setTutorList(responce.data.value);
      } catch (error) {
        console.log("Failed", error);
      }
    };
    fetchTutorList();
  }, []);

  console.log(tutorlist);
  const listTutor = tutorlist.map((tutor) => (
    <div className="row">
      <div className="grid col-12  col-lg-4">
        <TutorInfo tutor={tutor}></TutorInfo>
      </div>
    </div>
  ));

  const [buttonPopup, setButtonPopup] = useState(false);

  const handleClickFilter = () => {
    window.scrollTo(0, 0);
    sessionStorage.setItem("filterState", "false");
    setTimeout(() => {
      setButtonPopup(true);
    }, 500);
  };

  return (
    <div className="row">
      <div className="col-sm-1">
        <SidebarHomePage />
      </div>

      <div className="col-sm-define" style={{ marginLeft: "-3%" }}>
        <div>
          <TopTutorComponent />
        </div>
        <FindTutorFilter
          trigger={buttonPopup}
          setTrigger={setButtonPopup}
        ></FindTutorFilter>
        <Card className="card-filter">
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
              {sessionStorage.getItem("filterString")}
            </Card.Subtitle>
            <i
              className="fas fa-angle-double-up fa-lg position-abs"
              hidden={
                sessionStorage.getItem("filterState") != "true" &&
                sessionStorage.getItem("filterState") != null
              }
              onClick={handleClickFilter}
              style={{ right: "10px" }}
            ></i>
          </Card.Body>
        </Card>

        <div style={{ marginTop: "30px" }}>{listTutor}</div>
      </div>
      <div
        className="col-sm-3 student-top-component"
        style={{ paddingLeft: "3%" }}
      >
        <ProfileSideBar />
      </div>
    </div>
  );
}
export default TutorList;
