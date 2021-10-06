import { Image } from "primereact/image";
import { Link } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useState } from "react";
import AuthsServices from "../services/AuthsServices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./CSS/signin.css";

function PassReset() {
  const [email, setEmail] = useState();

  const handleChange = (evt) => {
    const value = evt.target.value;
    setEmail({
      ...email,
      [evt.target.name]: value,
    });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    await AuthsServices.reset(email)
      .then(() => {
        toast.success("Checkout your email to get new password");
      })
      .catch(() => {
        toast.error("Your email is neither registered nor existed");
      });
  };

  return (
    <div className="background">
      <ToastContainer />
      <div className="frame position-abs">
        <div className="col-6">
          <Image src="Image/reset.png" alt="Image Text" />
        </div>
        <div className="col-6">
          <div className="row-cols-6">
            <label className="easy-to-take text-center fst-normal text-white position-abs">
              Forgot your password?
            </label>
            <p>
              <span className="create-new-account1 text-center fst-normal text-white position-abs">
                Enter your email to receive password reset
              </span>
            </p>
          </div>
          <div className="row-cols-6">
            <p>
              <span className="create-new-account2 text-center fst-normal text-white position-abs">
                instruction
              </span>
            </p>
          </div>

          <div className="row-cols-6">
            <InputText
              className="input1 text-white position-abs"
              name="email"
              placeholder="  Enter your email"
              style={{ top: "150px" }}
              onChange={handleChange}
            />
          </div>

          <div className="row-cols-6">
            <Button
              className="button1 position-abs text-white text-enter1"
              onClick={handleSubmit}
            >
              Send a request to your email
            </Button>
          </div>
          <div className="row-cols-6">
            <Link
              to="/signin"
              className="forgot-pass-text2 position-abs text-center"
            >
              Login |{" "}
            </Link>
            <Link
              to="/signup"
              className="forgot-pass-text1 position-abs text-center"
            >
              Signup{" "}
            </Link>
          </div>
          <div className="row-cols-6"></div>
        </div>
      </div>
    </div>
  );
}
export default PassReset;
