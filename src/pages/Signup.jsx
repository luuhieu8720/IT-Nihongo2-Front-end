import { Image } from "primereact/image";
import { Link } from "react-router-dom";
import { InputText } from "primereact/inputtext";
//import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";

function Signup() {
  return (
    <div className="background">
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
                <Link className="ms-2 Log-in-text" to="/">
                  Log in
                </Link>
              </span>
            </p>
          </div>
          <div className="row-cols-6">
            <InputText
              className="input text-white position-abs"
              placeholder="Email"
              type="email"
              style={{ top: "120px" }}
            />
          </div>
          <div className="row-cols-6">
            <InputText
              className="input text-white position-abs"
              placeholder="Username"
              style={{ top: "200px" }}
            />
          </div>
          <div className="row-cols-6">
            <InputText
              className="input text-white position-abs"
              placeholder="Password"
              type="password"
              style={{ top: "280px" }}
            />
          </div>
          <div className="row-cols-6">
            <Button className="button-enter position-abs text-white text-enter">
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
