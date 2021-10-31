import { Card } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import { Image } from "react-bootstrap";

function TutorInfo(props) {
  const tutor = props.tutor;
  console.log(tutor);

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
                    ? "Image/avatardefault.png"
                    : tutor.avatar
                }
                className="position-abs"
                style={{ marginLeft: "20%", marginTop: "-60%" }}
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
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
export default TutorInfo;
