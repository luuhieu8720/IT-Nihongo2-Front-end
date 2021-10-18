import axios from "axios";

const URL = "http://localhost:8080/api/";

class AuthsServices {
  login(login) {
    return axios.post(URL + "noauth/login", login);
  }
  signup(signup) {
    return axios.post(URL + "noauth/signup", signup);
  }
  finishSignup(finishSignupModel){
    return axios.post(URL + "noauth/signup/finish", finishSignupModel);
  }
  resetPassword(resetPasswordModel){
    return axios.post(URL + "noauth/forgotpassword", resetPasswordModel);
  }
}

export default new AuthsServices();
