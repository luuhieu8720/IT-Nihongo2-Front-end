import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import PostServices from "../../services/PostServices";
import { toast, ToastContainer } from "react-toastify";

function Thumbnail(props) {
  const postID = {
    id: props.id.toString(),
  };
  const [post, setPost] = useState({
    title: "",
    time: "",
    day: "",
    city: "",
    district: "",
    ward: "",
    gender: "",
    details: "",
    salary: "",
    course: "",
  });

  useEffect(() => {
    PostServices.getPostInformation(postID)
      .then((response) => {
        setPost(response.data.value);
        console.log(response.data.value);
      })
      .catch((e) => {
        if (e.response && e.response.data) {
          console.log(e);
          toast.error(e.response.data.value);
        }
      });
  }, []);

  return (
    <Card className="card-tutor">
      <ToastContainer />
      <Card.Body>
        <div className="row">
          <div className="col-sm-6">
            <Card.Title>Title: {post.title}</Card.Title>
            <Card.Text>Description: {post.details}</Card.Text>
          </div>
          <div className="col-sm-6">
            <div className="dropdown">
              <i
                className="fa fa-ellipsis-v"
                style={{ marginLeft: "95%" }}
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
                    to={`/post/show/${postID.id}`}
                    params={{ id: postID.id }}
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
            <Card.Subtitle>Salary: {post.salary} VND</Card.Subtitle>
            <Card.Subtitle className="mt-2">
              Time: {post.time} {post.day}
            </Card.Subtitle>
            <Card.Subtitle className="mt-2">
              Location: {post.ward + ", " + post.district + ", " + post.city}
            </Card.Subtitle>
            <Card.Subtitle className="mt-2">
              Gender: {post.gender}
            </Card.Subtitle>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
export default Thumbnail;