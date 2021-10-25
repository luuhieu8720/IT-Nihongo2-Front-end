import axios from "axios";

class PostServices {
	getPostInformation(id){
		return axios.post("auth/post/get", id)	
	}
	getAllPost(){
		return axios.get("auth/post/get")
	}
}

export default new PostServices();