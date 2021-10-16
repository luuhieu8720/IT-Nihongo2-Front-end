import axios from "axios";

const auths_URL = "http://localhost:8080/api/noauth/login";
const signup_URL = "http://localhost:8080/api/noauth/signup";

class AuthsServices {
  login(login) {
    return axios.post(auths_URL, login);
  }
  reset(email) {
    //return axios.post(reset_URL, email);
  }
  signup(signup) {
    return axios.post(signup_URL, signup);
  }
}

export default new AuthsServices();
