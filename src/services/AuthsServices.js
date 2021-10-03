import axios from "axios";

const auths_URL = "api/auths";

class AuthsServices {
    login(login) {
        console.log(login);
        return axios.post(auths_URL, login);
    }
}

export default new AuthsServices();