import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useState } from "react";
// import AuthsServices from "../services/AuthsServices.js";
import { ToastContainer, toast } from "react-toastify";
// import { RadioButton } from 'primereact/radiobutton';
import { useHistory } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import PostServices from "../services/PostServices.js";
import useLocationForm from "../components/useLocationForm";
import Select from "react-select";


function AddPost() {
	const history = useHistory();
	const [task, setTask] = useState({
    title: "",
    salary: "",
		time: "",
		location: "",
		gender: ""
	});
	// // const [value, setValue] = useState();
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (task.title === "" || task.salary === "" || task.time === "" || task.location === "" || task.gender === "") {
			alert("All fields are not allowed to be null");
			window.location.reload()
		}

		const addPost = new Object({
		  title: task.title,
      salary: task.salary,
			time: task.time,
			location: task.location,
			gender: task.gender
		})
		await PostServices.add(addPost)
			.then(() => {
				alert('Create post successfully. Come to Show Post Page!!');
				history.push("/post/view");
			})
			.catch(() => {
				toast.error("Error!");
			});
	};

	const handleChange = (evt) => {
		const val = evt.target.value;
		setTask({
			...task,
			[evt.target.name]: val,
		});
	};
  const {
    state,
    onCitySelect,
    onDistrictSelect,
    onWardSelect
  } = useLocationForm(false);

  const {
    cityOptions,
    districtOptions,
    wardOptions,
    selectedCity,
    selectedDistrict,
    selectedWard
  } = state;

  return (
    <div className="background">
      <ToastContainer />
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
              // onChange={handleChange}
            />
            <InputText
              className="input-showpost text-black position-abs"
              placeholder="Salary"
              name="salary"
              style={{ left: "560px" }}
              // onChange={handleChange}
            />
            <InputText
              className="input-showpost text-black text-left position-abs"
              placeholder="Time"
              name="time"
              style={{ left: "560px", top: "190px", width: "150px" }}
              // onChange={handleChange}
            />
            <InputText
              className="input-showpost text-black position-abs"
              placeholder=""
              name="day"
              style={{ left: "760px", top: "190px", width: "240px" }}
              // onChange={handleChange}
            />
            <p className="special-add-post">/</p>
          </div>
          <div className="row-cols-6">
            {/* <select
              className="input-select"
              name="location"
              placeholder="Location"
              style={{ top: "280px" }}
              onChange={handleChange}
            >
              <option value="location">Location</option>
              <option value="DaNang">Da Nang</option>
              <option value="QuangNam">Quang Nam</option>
              <option value="QuangNgai">Quang Ngai</option>
              <option value="Hue">Hue</option>
            </select>
             */}
             
             <Select
              className="input-select-city"
              name="cityId"
              key={`cityId_${selectedCity?.value}`}
              // isDisabled={cityOptions.length === 0}
              options={cityOptions}
              onChange={(option) => onCitySelect(option)}
              placeholder="City"
              defaultValue={selectedCity}
            />

            <Select
              className="input-select-district"
              name="districtId"
              key={`districtId_${selectedDistrict?.value}`}
              // isDisabled={districtOptions.length === 0}
              options={districtOptions}
              onChange={(option) => onDistrictSelect(option)}
              placeholder="District"
              defaultValue={selectedDistrict}
            />

            <Select
              className="input-select-ward"
              name="wardId"
              key={`wardId_${selectedWard?.value}`}
              // isDisabled={wardOptions.length === 0}
              options={wardOptions}
              placeholder="Ward"
              onChange={(option) => onWardSelect(option)}
              defaultValue={selectedWard}
            />
            <select
              className="input-select"
              name="gender"
              placeholder="Gender"
              style={{ top: "370px" }}
              // onChange={handleChange}
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
              // onChange={handleChange}
            />
          </div>
          <div className="row-cols-6">
            <Button 
              className="button-contact position-abs text-white"
              // onClick={handleSubmit}
            >
             Create a new post 
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddPost;
