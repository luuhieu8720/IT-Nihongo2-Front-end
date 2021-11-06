import SidebarReport from "../components/Admin/SidebarReport";
import TopAdminComponent from "../components/Admin/TopAdminComponent";
import { useState, useEffect } from "react";
import ReportServices from "../services/ReportServices";
import ReportUserList from "../components/Admin/ReportUserList";

function ReportUser() {
  var reportIDs = [];

  const [reports, setReportIDs] = useState([]);
  useEffect(() => {
    var reportIds = JSON.parse(sessionStorage.getItem("reportIds"));
    let reportTemp = [];

    if (reportIds != null) {
      reportIds.forEach((element) => reportTemp.push(element));
      setReportIDs(reportTemp);
    } else {
      ReportServices.getAllReport()
        .then((response) => {
          var listReports = response.data.value;
          let ids = listReports.map((report) => report.id);
          setReportIDs(ids);
        })
        .catch((error) => console.log(error));
    }
  }, []);

  Object.values(reports).forEach((id) => {
    reportIDs.push(id);
  });

  const listPosts = reportIDs.map((reportID) => (
    <div>
      <ReportUserList id={reportID}></ReportUserList>
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
