import SidebarReport from "../components/Admin/SidebarReport";
import TopAdminComponent from "../components/Admin/TopAdminComponent";
import { useState, useEffect } from "react";
import PostServices from "../services/PostServices";
import ReportUserList from "../components/Admin/ReportUserList";

function ReportUser() {
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
      <ReportUserList id={postID}></ReportUserList>
      <div className="blank"></div>
    </div>
  ));

  return (
    <div className="row">
      <div className="col-sm-1">
        <SidebarReport />
      </div>
      <div className="col-sm-define" style={{ marginLeft: "17%" }}>
        <div>
          <TopAdminComponent />
          <div
            style={{ marginTop: "35px", marginLeft: "-15%", display: "block" }}
          >
            {listPosts}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ReportUser;
