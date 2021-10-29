import SidebarHomePage from "../components/Homepage/SidebarHomePage";
import PostServices from "../services/PostServices";
import TopTutorComponent from "../components/Tutor/TopTutorComponent";
import TutorInfo from "../components/Tutor/TutorInfo";
import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import SelectFilter from "../components/Homepage/SelectFilter";
import ProfileSideBar from "../components/Tutor/ProfileSideBar";
import ShowPost from "./ShowPost";

function TutorList() {
  var postIDs = [];

  const [posts, setPostIDs] = useState([]);
  useEffect(() => {
    var postIds = JSON.parse(sessionStorage.getItem("postIds"));
    let postTemp = [];

    if (postIds != null) {
      postIds.forEach((element) => postTemp.push(element));
      setPostIDs(postTemp);
    } else {
      PostServices.getAllPost()
        .then((response) => {
          var listPosts = response.data.value;
          let ids = listPosts.map((post) => post.id);
          setPostIDs(ids);
        })
        .catch((error) => console.log(error));
    }
  }, []);

  Object.values(posts).forEach((id) => {
    postIDs.push(id);
  });

  const listPosts = postIDs.map((postID) => (
    <div>
      <TutorInfo id={postID}></TutorInfo>
      <div className="blank"></div>
    </div>
  ));

  const [buttonPopup, setButtonPopup] = useState(false);

  const [buttonPopupShow, setButtonPopupShow] = useState(false);

  const handleClickClose = () => {
    sessionStorage.setItem("filterState", "true");
    sessionStorage.removeItem("postIds");
    sessionStorage.setItem("filterString", "");
    window.location.reload();
  };
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
        <SelectFilter
          trigger={buttonPopup}
          setTrigger={setButtonPopup}
        ></SelectFilter>
        {/* <ShowPost trigger={buttonPopupShow} setTrigger={setButtonPopupShow}>
                </ShowPost> */}
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
            <i
              className="fa fa-window-close fa-lg position-abs"
              hidden={
                sessionStorage.getItem("filterState") == "true" ||
                sessionStorage.getItem("filterState") == null
              }
              onClick={handleClickClose}
              style={{ right: "10px" }}
            ></i>
          </Card.Body>
        </Card>

        <div style={{ marginTop: "30px" }}>{listPosts}</div>
      </div>
      <div
        className="col-sm-3 student-top-component"
        style={{ paddingLeft: "5%" }}
      >
        <ProfileSideBar />
      </div>
    </div>
  );
}
export default TutorList;
