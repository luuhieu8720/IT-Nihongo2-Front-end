import axios from "axios";

class UserServices {
	updateProfile(user){
		return axios.put("auth/update", user);
	}
	getUserInformation(){
		return axios.get("auth/get")	
	}
	updatePassword(passwordModel){
		return axios.put("/auth/update/password", passwordModel)
	}
	getUser(username) {
        return axios.post("auth/get", username)
    }
}

export default new UserServices();