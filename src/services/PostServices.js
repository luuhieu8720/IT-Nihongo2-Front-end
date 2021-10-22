import axios from "axios";

class PostServices {
	getPostInformation(id){
		return axios.get("auth/post/get/" + id)	
	}
}

export default new PostServices();