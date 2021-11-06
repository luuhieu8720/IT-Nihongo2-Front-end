import axios from "axios";

class ReportServices {
  getReportInformation(id) {
    return axios.post("auth/report/get", id);
  }
  getAllReport() {
    return axios.get("auth/report/get");
  }
  findReport() {
    return axios.post("auth/report/find");
  }
  deleteReport(id) {
    return axios.post("auth/report/delete", id);
  }
}

export default new ReportServices();
