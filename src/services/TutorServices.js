import axios from "axios";

class TutorServices {
  //   getTutorInformation() {
  //     return axios.post("auth/tutor/get");
  //   }
  getAllTutor() {
    return axios.get("auth/tutor/get");
  }
  findTutor(condition) {
    return axios.post("auth/tutor/find", condition);
  }
}

export default new TutorServices();
