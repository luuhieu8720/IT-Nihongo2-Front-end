import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import PostServices from "../../services/PostServices";
import { toast, ToastContainer } from "react-toastify";
import { unstable_concurrentAct } from "react-dom/test-utils";

function TutorInfo(props) {
  const postID = {
    id: props.id.toString(),
  };
  const [post, setPost] = useState({
    title: "",
    time: {
      startHour: "",
      endHour: "",
      startMinus: "",
      endMinus: "",
    },
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
        var tmp = response.data.value;
        var date = "";
        tmp.time.forEach((element) => {
          date += element.day + ", ";
        });
        date = date.slice(0, -2);
        var postTemp = {
          title: tmp.title,
          time: {
            startHour: tmp.time[0].startHour,
            endHour: tmp.time[0].endHour,
            startMinus: tmp.time[0].startMinus,
            endMinus: tmp.time[0].endMinus,
          },
          city: tmp.city,
          district: tmp.district,
          ward: tmp.ward,
          gender: tmp.gender,
          details: tmp.details,
          salary: tmp.salary,
          course: tmp.course,
          day: date,
        };

        if (postTemp.time.startMinus < 10) {
          postTemp.time.startMinus = "0" + postTemp.time.startMinus;
        }
        if (postTemp.time.endMinus < 10) {
          postTemp.time.endMinus = "0" + postTemp.time.endMinus;
        }
        setPost(postTemp);
      })
      .catch((e) => {
        if (e.response && e.response.data) {
          console.log(e);
          toast.error(e.response.data.value);
        }
      });
  }, []);

  return (
    <Card className="card-tutor-info">
      <ToastContainer />
      <Card.Body>
        <div className="row">
          <div className="col-sm-6">
            <div className="col-sm-6">
              <Card.Text className="city-tutor">City: {post.city}</Card.Text>
              <Card.Text className="city-tutor" style={{ marginTop: "90%" }}>
                Salary: {post.salary}
              </Card.Text>
              <Card.Text className="city-tutor" style={{ marginTop: "105%" }}>
                Ward: {post.ward}
              </Card.Text>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
export default TutorInfo;
