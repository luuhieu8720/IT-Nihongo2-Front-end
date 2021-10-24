import axios from "axios";

class PostServices {
	// updateProfile(user){
	// 	return axios.put("auth/update", user);
	// }
	// getUserInformation(){
	// 	return axios.get("auth/get")	
	// }
	// updatePassword(passwordModel){
	// 	return axios.put("/auth/update/password", passwordModel)
	// }
	add(post){
		return axios.post("auth/create/post", post)
	}
}

export default new PostServices();