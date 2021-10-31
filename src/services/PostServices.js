import axios from "axios";

class PostServices {
    getPostInformation(id) {
        return axios.post("auth/post/get", id)
    }
    getAllPost() {
        return axios.get("auth/post/get")
    }
    findPost(condition) {
        return axios.post("auth/post/find", condition);
    }
    creastePost(post) {
        return axios.post("auth/post/new", post);
    }
}

export default new PostServices();