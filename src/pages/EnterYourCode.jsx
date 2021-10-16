import { Image } from "primereact/image";
import { Link } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useState } from "react";
import AuthsServices from "../services/AuthsServices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EnterYourCode() {
  return (
    <div className="background">
      <ToastContainer />
      <div className="frame position-abs">
        <div className="col-6">
          <Image src="/Image/enteryourcode.png" alt="Image Text" />
        </div>
        <div className="col-6">
          <div className="row-cols-6">
            <label className="enter-your-code-page text-center fst-normal text-white position-abs">
              Enter Your Code
            </label>
            <p>
              <span className="enter-your-code1 text-center fst-normal text-white position-abs">
                Enter your code from email
              </span>
            </p>
            <p>
              <span className="enter-your-code2 text-center fst-normal text-white position-abs">
                Already have an account?
                <Link className="ms-2 Log-in-text" to="/signin">
                  Log in
                </Link>
              </span>
            </p>
          </div>

          <div className="row-cols-6">
            <InputText
              className="input1 text-white position-abs"
              name="email"
              placeholder="  Enter your code here"
              style={{ top: "28%" }}
            />
          </div>

          <div className="row-cols-6">
            <Button className="button-enter-your-code position-abs text-white text-enter1">
              Enter
            </Button>
          </div>
          <div className="row-cols-6"></div>
        </div>
      </div>
    </div>
  );
}
export default EnterYourCode;
