import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import SignOut from "../../logics/SignOut";
import { useHistory } from "react-router";

function SidebarReport() {
  const handleAdminPageSubmit = () => {
    localStorage["stateAdminPage"] = "show";
  };

  const handleChangeComment = () => {
    localStorage["stateTabIndex"] = "1";
  };

  const handleChangeReport = () => {
    localStorage["stateTabIndex"] = "3";
  };

  const handleChangeUser = () => {
    localStorage["stateTabIndex"] = "2";
  };

  const history = useHistory();
  const signOut = () => {
    toast.success("Successfully");
    setTimeout(() => {
      SignOut.signOut();
      history.push("/signin");
    }, 3000);
  };

  return (
    <div className="pt-3 ps-5">
      <label className="text-eto-sidebar">ETO</label>
      <p className="pt-5 text-admin">Admin</p>
      <p
        className="position-abs"
        style={{
          color: "rgba(0, 0, 0, 0.5)",
          width: "220px",
          left: "35px",
          border: "1px solid #8d8989",
        }}
      ></p>
      <p
        className="position-abs"
        style={{
          color: "rgba(0, 0, 0, 0.5)",
          height: "95%",
          border: "1px solid #8d8989",
          marginLeft: "18%",
          top: "2%",
        }}
      ></p>
      <br />
      <Link className="position-abs" to="/" /*onClick={handleAdminPageSubmit}*/>
        <i
          className="fst-normal bi bi-chat-right-text fa-2x"
          id="id"
          style={{
            display: "inline-block",
            color:
              localStorage["stateTabIndex"] == "1"
                ? "darkviolet"
                : "rgba(0, 0, 0, 0.5)",
          }}
          onClick={handleChangeComment}
        >
          <span
            className="ms-3"
            style={{ fontSize: "25px", fontFamily: "Roboto" }}
          >
            Comment
          </span>
        </i>
      </Link>
      <br />
      <Link
        className="position-abs"
        to="/tutors/list"
        // onClick={handleAdminPageSubmit}
        style={{ paddingTop: "3rem" }}
      >
        <i
          className="fst-normal bi bi-exclamation-triangle fa-2x"
          tabIndex="1"
          id="id"
          style={{
            display: "inline-block",
            color:
              localStorage["stateTabIndex"] == "3"
                ? "darkviolet"
                : "rgba(0, 0, 0, 0.5)",
          }}
          onClick={handleChangeReport}
        >
          <span
            className="ms-3"
            style={{ fontSize: "25px", fontFamily: "Roboto" }}
          >
            Report
          </span>
        </i>
      </Link>
      {/* </div> */}
      <br />
      <Link
        className="position-abs"
        to="/admin/reportuser"
        // onClick={handleAdminPageSubmit}
        style={{ paddingTop: "6rem" }}
      >
        <i
          className="fst-normal bi bi-people fa-2x"
          tabIndex="1"
          id="id"
          style={{
            display: "inline-block",
            color:
              localStorage["stateTabIndex"] == "2"
                ? "darkviolet"
                : "rgba(0, 0, 0, 0.5)",
          }}
          onClick={handleChangeUser}
        >
          <span
            className="ms-3"
            style={{ fontSize: "25px", fontFamily: "Roboto" }}
          >
            User
          </span>
        </i>
      </Link>
      <br />
      <i
        className="position-abs fas fa-sign-out-alt fa-3x"
        style={{ bottom: "30px" }}
        onClick={signOut}
      ></i>
    </div>
  );
}
export default SidebarReport;
