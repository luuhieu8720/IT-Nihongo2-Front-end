import { Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import ReportServices from "../../services/ReportServices";
import { toast, ToastContainer } from "react-toastify";
import { Image } from "react-bootstrap";
import { useHistory } from "react-router";
import axios from "axios";

function ReportUserList(props) {
  const reportID = {
    id: props.id.toString(),
  };

  const [report, setReport] = useState({
    id: "",
    userName: "",
    tutorName: "",
    score: "",
    comment: "",
  });

  useEffect(() => {
    ReportServices.getReportInformation(reportID)
      .then((response) => {
        setReport(response.data.value);
        console.log(response.data.value);
      })
      .catch((e) => {
        if (e.response && e.response.data) {
          console.log(e);
          toast.error(e.response.data.value);
        }
      });
  }, []);

  const deleteReportHandle = (id, e) => {
    e.preventDefault();
    console.log(id);
    ReportServices.deleteReport(+`${id}`)
      .then((res) => console.log("Delete Report", res))
      .catch((err) => console.log(err));
  };

  return (
    <Card className="card-report-user">
      <ToastContainer />
      <Card.Body>
        <div className="row">
          <div className="col-sm-6">
            <Image
              src="/Image/avatardefault.png"
              className="position-abs"
              width="70"
              height="70"
              alt="image"
              aria-expanded="false"
              roundedCircle
            ></Image>
            <Card.Text className="comment-report">
              {report.tutorName} is reported!
            </Card.Text>
            <i
              className="position-abs bi bi-trash fa-2x px-2 py-1"
              style={{
                display: "inline-block",
                marginTop: "-6.5%",
                marginLeft: "90%",
              }}
              onClick={(e) => {
                deleteReportHandle(report.id, e);
              }}
            ></i>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
export default ReportUserList;
