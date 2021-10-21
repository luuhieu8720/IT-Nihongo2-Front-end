import axios from "axios";

class AuthsServices {
  login(login) {
    return axios.post("noauth/login", login);
  }
  signup(signup) {
    return axios.post("noauth/signup", signup);
  }
  finishSignup(finishSignupModel){
    return axios.post("noauth/signup/finish", finishSignupModel);
  }
  resetPassword(resetPasswordModel){
    return axios.post("noauth/forgotpassword", resetPasswordModel);
  }
}

export default new AuthsServices();
