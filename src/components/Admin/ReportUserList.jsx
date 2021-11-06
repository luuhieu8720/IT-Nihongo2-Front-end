import { Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import ReportServices from "../../services/ReportServices";
import { toast, ToastContainer } from "react-toastify";
import { Image } from "react-bootstrap";
import { useHistory } from "react-router";

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

  const history = useHistory();
  const deleteReport = (id) => {
    alert(id);
    ReportServices.deleteReport(id).then((response) => {
      //   setReport(response.data.value);
      //   console.log(report);
      // })
      // .catch((e) => {
      //   if (e.response && e.response.data) {
      //     toast.error(e.response.data.value);
      //   }
      // });
      toast.success("Successfully");
      response.JSON().then((resp) => {
        console.warn(resp);
      });
    });
    setTimeout(() => {
      history.push("/admin/reportuser");
    }, 1000);
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
              className="position-abs bi bi-trash fa-2x"
              style={{
                display: "inline-block",
                marginTop: "-6.5%",
                marginLeft: "90%",
              }}
              onClick={() => {
                deleteReport(report.id);
              }}
            ></i>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
export default ReportUserList;
