import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import UserServices from "../../services/UserServices";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import SignOut from "../../logics/SignOut";
import { useHistory } from "react-router";

function TopAdminComponent() {
  const [userInformation, setUserInformation] = useState({
    name: "",
    avatar: "",
  });
  useEffect(() => {
    UserServices.getUserInformation()
      .then((response) => {
        setUserInformation(response.data.value);
        console.log(response.data.value);
      })
      .catch((e) => {
        if (e.response && e.response.data) {
          toast.error(e.response.data.value);
        }
      });
  }, []);
  const history = useHistory();
  const signOut = () => {
    toast.success("Successfully");
    setTimeout(() => {
      SignOut.signOut();
      history.push("/signin");
    }, 3000);
  };
  return (
    <div className="">
      <ToastContainer />
      <div className="" style={{ marginTop: "1.5%", display: "inline-block" }}>
        <Image
          src={
            userInformation.avatar != ""
              ? userInformation.avatar
              : "/Image/avatardefault.png"
          }
          alt="image"
          width="80"
          height="80"
          roundedCircle
        ></Image>
        <div
          className="dropdown position-abs"
          style={{ top: "3%", right: "3%" }}
        >
          <i
            className="fa fa-ellipsis-h fa-2x"
            type=""
            id="dropdownMenuButton2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          ></i>
          <ul
            className="dropdown-menu dropdown-menu-light"
            aria-labelledby="dropdownMenuButton2"
          >
            <li>
              <Link to="/" className="dropdown-item">
                Finding tutor
              </Link>
            </li>
            <li>
              <Link to="/" className="dropdown-item">
                Back to home page
              </Link>
            </li>
            <li>
              <a className="dropdown-item" onClick={signOut}>
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
      <span className="position-abs text-name-profile">
        {userInformation.name}
      </span>
      <h3 style={{ paddingTop: "8%" }}>Comment</h3>
    </div>
  );
}
export default TopAdminComponent;
