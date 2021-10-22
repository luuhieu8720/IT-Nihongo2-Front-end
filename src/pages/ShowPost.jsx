import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import validator from "validator";

function ShowPost() {
  const history = useHistory();
  const [state, setState] = useState({
    title: "",
    salary: "",
    time: "",
    day: "",
    location: "",
    gender: "",
    description: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validator.isDecimal(state.salary)) {
      toast.warning("Your salary is not number");
    } else if (
      state.title === "" ||
      state.time === "" ||
      state.day === "" ||
      state.location === "" ||
      state.gender === "" ||
      state.description === ""
    ) {
      toast.warning("All fields are not allowed to be null");
      setTimeout(() => {
        history.push("/post/show");
      }, 5000);
    } else toast.success("Ok");
  };
  const handleChange = (evt) => {
    const val = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: val,
    });
  };

  return (
    <div className="background1">
      <ToastContainer />
      <div className="frame-show position-abs">
        <div className="col-6">
          <div className="row-cols-6">
            <label className="tutor-asking position-abs">TUTOR-ASKING</label>
            <p className="title">Title</p>
            <p className="salary">Salary</p>
            <p className="time">Time</p>
            <p className="location">Location</p>
            <p className="gender">Gender</p>
          </div>
          <div className="row-cols-6">
            <InputText
              className="input-showpost text-black position-abs"
              placeholder="Finding math teacher..."
              name="title"
              onChange={handleChange}
              style={{ left: "6.5%" }}
            />
            <InputText
              className="input-showpost text-black position-abs"
              placeholder="300"
              name="salary"
              onChange={handleChange}
              style={{ left: "49.5%" }}
            />
            <p className="special">/</p>
            <InputText
              className="input-showpost text-black text-center position-abs"
              placeholder="9:00-11:00"
              name="time"
              onChange={handleChange}
              style={{ left: "49.5%", top: "35%", width: "13%" }}
            />
            <InputText
              className="input-showpost text-black position-abs"
              placeholder="Mon, Wed, Sun"
              name="day"
              onChange={handleChange}
              style={{ left: "66%", top: "35%", width: "21.6%" }}
            />
            <p className="money">$</p>
          </div>
          <div className="row-cols-6">
            <select
              className="input-select"
              name="location"
              style={{ top: "52%" }}
              onChange={handleChange}
              value={state.value}
            >
              <option value="DaNang">Da Nang</option>
              <option value="QuangNam">Quang Nam</option>
              <option value="QuangNgai">Quang Ngai</option>
              <option value="Hue">Hue</option>
            </select>
            <select
              className="input-select"
              name="gender"
              style={{ top: "68%" }}
              onChange={handleChange}
              value={state.value}
            >
              <option value="none">None</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="row-cols-6">
            <label className="rectangle"></label>
            <p
              className="enter-your-description text-center"
              name="description"
            >
              Enter your description
            </p>
            <textarea
              className="description text-black"
              placeholder="Need a high school math teacher."
              name="description"
              onChange={handleChange}
            />
          </div>
          <div className="row-cols-6">
            <Button
              className="button-contact position-abs text-white"
              onClick={handleSubmit}
            >
              Contact right now!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ShowPost;
