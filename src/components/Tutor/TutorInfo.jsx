import { Card } from "react-bootstrap";
import { ToastContainer } from "react-toastify";

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
              <Card.Text className="name-tutor-text">{tutor.name}</Card.Text>
              <Card.Text className="city-tutor" style={{ marginTop: "-3%" }}>
                Current job: {tutor.degree}
              </Card.Text>
              <Card.Text className="city-tutor" style={{ marginTop: "6%" }}>
                Speciality: {tutor.speciality}
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
