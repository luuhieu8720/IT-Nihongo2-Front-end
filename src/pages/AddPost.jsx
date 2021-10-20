import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

function AddPost() {
  return (
    <div className="background">
      <div className="frame-add position-abs">
        <div className="col-6">
          <div className="row-cols-6">
            <label className="tutor-asking position-abs">MAKE A NEW POST</label>
            <p className="title"></p>
            <p className="salary"></p>
            <p className="time"></p>
            <p className="location"></p>
            <p className="gender"></p>
          </div>
          <div className="row-cols-6">
            <InputText
              className="input-showpost text-black position-abs"
              placeholder="Title "
              name="title"
              style={{ left: "60px" }}
            />
            <InputText
              className="input-showpost text-black position-abs"
              placeholder="Salary"
              name="salary"
              style={{ left: "560px" }}
            />
            <InputText
              className="input-showpost text-black text-left position-abs"
              placeholder="Time"
              name="time"
              style={{ left: "560px", top: "190px", width: "150px" }}
            />
            <InputText
              className="input-showpost text-black position-abs"
              placeholder=""
              name="day"
              style={{ left: "760px", top: "190px", width: "240px" }}
            />
            <p className="special-add-post">/</p>
          </div>
          <div className="row-cols-6">
            <select
              className="input-select"
              name="location"
              placeholder="Location"
              style={{ top: "280px" }}
            >
              <option value="location">Location</option>
              <option value="DaNang">Da Nang</option>
              <option value="QuangNam">Quang Nam</option>
              <option value="QuangNgai">Quang Ngai</option>
              <option value="Hue">Hue</option>
            </select>
            <select
              className="input-select"
              name="gender"
              placeholder="Gender"
              style={{ top: "370px" }}
            >
              <option value="gender">Gender</option>
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
              placeholder=""
              name="description"
            />
          </div>
          <div className="row-cols-6">
            <Button className="button-contact position-abs text-white">
             Create a new post 
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddPost;
