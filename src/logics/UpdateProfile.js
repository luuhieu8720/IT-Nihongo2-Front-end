import UserServices from "../services/UserServices";
import { toast } from "react-toastify";

class UpdateProfile {
  UpdateProfile(user) {
    UserServices.updateProfile(user)
      .then(toast.success("Successfully updated"))
      .catch((e) => {
        if (e.response && e.response.data) {
          toast.error("Error when updating");
        }
      });
  }
}

export default new UpdateProfile();
