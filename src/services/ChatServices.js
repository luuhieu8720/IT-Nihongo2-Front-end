import axios from "axios";

class ChatServices {
    async newGroup(group) {
        return await axios.post("chat/group/new", group);
    }
}

export default new ChatServices();