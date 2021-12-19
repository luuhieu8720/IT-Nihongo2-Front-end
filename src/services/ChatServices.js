import axios from "axios";

class ChatServices {
    newGroup(group) {
        return axios.post("api/chat/group/new", group)
    }
}

export default new ChatServices();