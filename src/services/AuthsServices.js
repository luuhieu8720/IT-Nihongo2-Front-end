import axios from "axios";

const auths_URL = "api/auths";

class AuthsServices {
    login(login) {
        return axios.post(auths_URL, login);
    }
}

export default new AuthsServices();