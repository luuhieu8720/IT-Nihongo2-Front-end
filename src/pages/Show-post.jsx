import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "./CSS/showpost.css";

function Showpost() {
  return (
    <div className="background1">
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
              placeholder=" Finding math teacher"
              name="title"
              style={{ left: "60px" }}
            />
            <InputText
              className="input-showpost text-black position-abs"
              placeholder=" 300"
              name="salary"
              style={{ left: "560px" }}
            />
            <InputText
              className="input-showpost text-black text-center position-abs"
              placeholder="9:00-11:00"
              name="time"
              style={{ left: "560px", top: "190px", width: "150px" }}
            />
            <InputText
              className="input-showpost text-black position-abs"
              placeholder="Mon, Wed, Sun"
              name="day"
              style={{ left: "760px", top: "190px", width: "240px" }}
            />
            <p className="money">$</p>
            <p className="special">/</p>
          </div>
          <div className="row-cols-6">
            <select
              className="input-select"
              name="location"
              style={{ top: "280px" }}
            >
              <option value="DaNang">Da Nang</option>
              <option value="QuangNam">Quang Nam</option>
              <option value="QuangNgai">Quang Ngai</option>
              <option value="Hue">Hue</option>
            </select>
            <select
              className="input-select"
              name="gender"
              style={{ top: "370px" }}
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
            <InputText
              className="description text-black"
              placeholder="Need a high school math teacher."
              name="description"
            />
          </div>
          <div className="row-cols-6">
            <Button className="button-contact position-abs text-white">
              Contact right now!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Showpost;
