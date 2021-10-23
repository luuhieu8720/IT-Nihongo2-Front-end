import axios from "axios";

class UploadImageServices {
    uploadImage(formData) {
        return fetch("https://api.cloudinary.com/v1_1/it-nihongo/image/upload", {
            method: "POST",
            body: formData,
        })
    }
    changeBase() {
        axios.defaults.baseURL = "http://localhost:8080/api/";
    }
}
export default new UploadImageServices();