import axios from "axios";

const auths_URL = "api/auths";
const reset_URL = "https://auth.habit-dev.novahub.vn/api/password/forget";

class AuthsServices {
  login(login) {
    return axios.post(auths_URL, login);
  }
  reset(email) {
    return axios.post(reset_URL, email);
  }
  signup(signup) {
    return axios.post(auths_URL, signup);
  }
}

export default new AuthsServices();
