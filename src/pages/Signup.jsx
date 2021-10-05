import { Image } from "primereact/image";
import { Link } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useState } from "react";
import AuthsServices from "../services/AuthsServices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const [state, setState] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await AuthsServices.signup(state)
      .then((response) => {
        if (response.data !== "") {
          toast.success("Successfully");
          localStorage.setItem("token", response.data);
        }
      })
      .catch(() => {
        toast.error("....................");
      });
  };

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };
  return (
    <div className="background">
      <ToastContainer />
      <div className="frame position-abs">
        <div className="col-6">
          <Image src="Image/signup-1.png" alt="Image Text" />
        </div>
        <div className="col-6">
          <div className="row-cols-6">
            <label className="create-account text-center fst-normal text-white position-abs">
              CREATE YOUR ACCOUNT
            </label>
            <p>
              <span className="already-have-account text-center fst-normal text-white position-abs">
                Already have an account?
                <Link className="ms-2 Log-in-text" to="/signin">
                  Log in
                </Link>
              </span>
            </p>
          </div>
          <div className="row-cols-6">
            <InputText
              className="input text-white position-abs"
              placeholder="Email"
              name="email"
              type="email"
              style={{ top: "120px" }}
              onChange={handleChange}
            />
          </div>
          <div className="row-cols-6">
            <InputText
              className="input text-white position-abs"
              placeholder="Username"
              name="username"
              style={{ top: "200px" }}
              onChange={handleChange}
            />
          </div>
          <div className="row-cols-6">
            <InputText
              className="input text-white position-abs"
              placeholder="Password"
              type="password"
              name="password"
              style={{ top: "280px" }}
              onChange={handleChange}
            />
          </div>
          <div className="row-cols-6">
            <Button
              className="button-enter position-abs text-white text-enter"
              onClick={handleSubmit}
            >
              ENTER
              <i class="fa fa-long-arrow-right ms-2" aria-hidden="true"></i>
            </Button>
          </div>
          <div className="row-cols-6">
            <h5 className="bottom-note position-abs fst-normal text-left">
              By clicking Enter, I confirm that I have read and agree to the
              Terms of Service and Privacy Policy.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Signup;
