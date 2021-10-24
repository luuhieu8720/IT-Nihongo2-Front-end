import axios from "axios";

class PostServices {
	getPostInformation(id){
		return axios.post("auth/post/get", id)	
	}
}

export default new PostServices();