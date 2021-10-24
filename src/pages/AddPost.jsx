import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
// import PostServices from "../services/PostServices";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import useLocationForm from "../components/useLocationForm";
import Select from "react-select";

function AddPost({ }) {

	const [post, setPost] = useState({
		title: "",
		time: {
			startHour: "",
			endHour: "",
			startMinus: "",
			endMinus: "",
			day: ""
		},
		location: "",
		male: "",
		details: "",
		salary: ""
	})

	const handleChange = (evt) => {
		const value = evt.target.value;
	}
	const optionsArray = [
		{ key: "au", label: "Monday" },
		{ key: "ca", label: "Tuesday" },
		{ key: "us", label: "Wednesday" },
		{ key: "pl", label: "Thursday" },
		{ key: "es", label: "Friday" },
		{ key: "fr", label: "Saturday" },
		{ key: "fr", label: "Sunday" },
	];
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
		<div className="background1">
			<ToastContainer />
			<div className="frame-show position-abs">
				<div className="col-6">
					<div className="row-cols-6">
						<label className="tutor-asking position-abs" style={{ marginTop: '-10px' }} >MAKE A NEW POST</label>
						<p className="title" >Title</p>
						<p className="salary">Salary</p>
						<p className="time">Time</p>
						<p className="location">Location</p>
						<p className="gender">Gender</p>
					</div>
					<div className="row-cols-6">
						<InputText
							className="input-showpost text-black position-abs"
							name="title"
							style={{ left: "6.5%" }}
							onChange={handleChange}
						/>
						<InputText
							className="input-showpost text-black position-abs"
							name="salary"
							style={{ left: "49.5%" }}
							onChange={handleChange}
						/>
						<p className="special">/</p>
						<InputText
							className="input-showpost text-black position-abs"
							name="day"
							style={{ left: "49.5%", top: "35%", width: "13%" }}
							value={post.day}
							onChange={handleChange}
						/>
						<div className="input-showpost text-black position-abs" style={{ left: "66%", top: "35%", width: "21.6%" }}>
							<DropdownMultiselect
								options={optionsArray}
								name="day"
								onChange={handleChange}
							/>
						</div>
						<p className="money">$</p>
					</div>
					<div className="row-cols-6">
						{/* <InputText
							className="input-select"
							name="location"
							style={{ top: "52%" }}
							value={post.location}
							onChange={handleChange}
						>
						</InputText> */}
						<Select
						className="input-select-city"
						name="cityId"
						key={`cityId_${selectedCity?.value}`}
						// isDisabled={cityOptions.length === 0}
						options={cityOptions}
						onChange={(option) => onCitySelect(option)}
						placeholder="City"
						defaultValue={selectedCity}
						style={{ top: "52%" }}
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
						style={{ top: "52%" }}
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
						style={{ top: "52%" }}
						/>
						<InputText
							className="input-select"
							name="gender"
							style={{ top: "68%" }}
							value={post.male == true ? "Male" : "Female"}
							onChange={handleChange}
						>
						</InputText>
					</div>
					<div className="row-cols-6">
						<label className="rectangle"></label>
						<p
							className="enter-your-description"
							name="description"
						>
							Post details
						</p>
						<textarea
							className="description text-black"
							placeholder="Need a high school math teacher."
							name="description"
						/>
					</div>
					<div className="row-cols-6">
						<Button
							className="button-contact position-abs text-white"
						>
							Contact right now!
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
export default AddPost;
