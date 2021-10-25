import { Link } from "react-router-dom";
import SidebarHomePage from "../components/Homepage/SidebarHomePage";
import PostServices from "../services/PostServices"
import TopComponent from "../components/Homepage/TopComponent";
import StudentSideBar from "../components/StudentSideBar";
import Thumbnail from "../components/Homepage/Thumbnail";
import { useState, useEffect } from "react";

function HomePage() {
    var postIDs = []
    const [posts, setPostIDs] = useState([])
    useEffect(
        () => {
            PostServices.getAllPost().then( response => {
                var listPosts = response.data.value; 
                let ids = listPosts.map(post => post.id);
                setPostIDs(ids); 
                console.log(ids)
            })
            .catch(error => console.log(error));
        }, []
    )

    Object.values(posts).forEach((id) => {
        postIDs.push(id);
    })

    const listPosts = postIDs.map((postID) =>
        <div>
            <Thumbnail id={postID} ></Thumbnail>
            <div className="blank"></div>
        </div>
    )
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
                    {listPosts}
                </div>
            </div>
            <div className="col-sm-3 student-top-component" style={{ paddingLeft: '5%' }}>
                <StudentSideBar />
            </div>
        </div>
    );
}
export default HomePage;