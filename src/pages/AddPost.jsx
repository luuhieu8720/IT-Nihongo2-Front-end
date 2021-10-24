import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import axios from "axios";
import Select from "react-select";

function AddPost({ }) {
	const optionGender = [
		{ value: 'true', label: 'Male' },
		{ value: 'false', label: 'Female' }
	];

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
	const [districtOptions, setDistrictOptions] = useState([{
		value: "",
		label: "",
		wards: []
	}])

	const [wardOptions, setWardOptions] = useState([{
		value: "",
		label: ""
	}])

	const [city, setCity] = useState({
		id: "",
		name: ""
	})

	const [district, setDistrict] = useState({id:"", name:""})

	const handleChange = (evt) => {
		var value = evt.target.value;
		if (evt.target.name == "location") {
			value = value + ", " + ward + ", " + district.name + ", " + city.name
		}
		 setPost({
            ...post,
            [evt.target.name]: value,
        });
		console.log(post)
	}



	const [ward, setWard] = useState()

	const handleChangeCity = e => {
		setCity({id: e.value, name: e.label});
		var districts = []
		options.forEach(element => {
			if (element.Id == e.value) {
				districts = (element.Districts);
			}
		});
		var tmpDistricts = [{ value: "", label: "", wards: [] }]
		districts.forEach(element => {
			tmpDistricts.push({ value: element.Id, label: element.Name, wards: element.Wards })
		})
		console.log(tmpDistricts)
		setDistrictOptions(tmpDistricts);
	}
	const handleChangeDistrict = e => {
		setDistrict({id: e.value, name: e.label});
		var wards = []
		console.log("districtOptions: ", districtOptions)
		districtOptions.forEach(element => {
			if (element.value == e.value) {
				wards = (element.wards);
				console.log(element.value + "   " + e.value)
			}
		});
		var tmpWards = [{ value: "", label: "" }]
		wards.forEach(element => {
			tmpWards.push({ value: element.Id, label: element.Name })
		})
		setWardOptions(tmpWards);
	}
	const handleChangeWard = e => {
		setWard(e.label)
		console.log(e.label)
	}
	const optionsArray = [
		{ key: "mon", label: "Monday" },
		{ key: "tue", label: "Tuesday" },
		{ key: "wed", label: "Wednesday" },
		{ key: "thu", label: "Thursday" },
		{ key: "fri", label: "Friday" },
		{ key: "sat", label: "Saturday" },
		{ key: "sun", label: "Sunday" },
	];
	const [cityOptions, setCityOptions] = useState([{
		value: "",
		label: ""
	}])

	const [options, setOptions] = useState([{

	}])
	const handleChangeGender = e => {
		// userProfile.male = e.value;
		// console.log(userProfile)
	}



	useEffect(() => {
		fetch("https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json")
			.then(res => res.json())
			.then(
				(result) => {
					var tmpOptions = [{
						value: "",
						label: ""
					}];
					result.forEach(element => {
						tmpOptions.push({ value: element.Id, label: element.Name })
					});
					setCityOptions(tmpOptions)
					setOptions(result)
					console.log(tmpOptions)
				},
				(error) => {

				}
			)
	}, [])

	return (
		<div className="background1">
			<ToastContainer />
			<div className="frame-show position-abs">
				<div className="col-6">
					<div className="row-cols-6">
						<label className="tutor-asking position-abs" style={{ marginTop: '-10px' }} >MAKE A NEW POST</label>
						<p className="title" >Title</p>
						<p className="salary">Salary</p>
						<p className="time" style={{ marginTop: '-15px' }}>Time</p>
						<p className="location" style={{ marginTop: '-35px' }}>Location</p>
						<p className="gender" style={{ marginTop: '27px' }}>Gender</p>
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
						<p className="special" style={{ marginTop: '-23px' }}>/</p>
						<InputText
							className="input-showpost text-black position-abs"
							name="time"
							style={{ left: "49.5%", top: "32%", width: "13%" }}
							placeholder="9:00 - 10:00"
							onChange={handleChange}
						/>
						<div className="input-showpost text-black position-abs" style={{ left: "66%", top: "32%", width: "21.6%" }}>
							<DropdownMultiselect
								options={optionsArray}
								name="day"
								onChange={handleChange}
							/>
						</div>
						<p className="money">$</p>
					</div>
					<div className="position-abs" style={{ top: '45%', left: '49.5%', width: '100%' }}>
						<InputText
							className="input-showpost"
							name="location"
							placeholder="House number, building, street name"
							onChange={handleChange}
						>
						</InputText>
					</div>
					<div className="row-cols-6">

						<Select
							className="input-select-city"
							name="cityId"
							onChange={handleChangeCity}
							options={cityOptions}
							// isDisabled={cityOptions.length === 0}
							placeholder="City"
						/>

						<Select
							className="input-select-district"
							name="districtId"
							// isDisabled={districtOptions.length === 0}
							placeholder="District"
							style={{ top: "48%" }}
							options={districtOptions}
							onChange={handleChangeDistrict}
						/>

						<Select
							className="input-select-ward"
							name="wardId"
							// isDisabled={wardOptions.length === 0}
							onChange={handleChangeWard}
							options={wardOptions}
							placeholder="Ward"


						/>
						<div style={{ display: 'inline-block', marginLeft: '115%', marginTop: '20px' }}>
							<Select
								options={optionGender}
								defaultValue={optionGender[0]}
								onChange={handleChangeGender}
							/>
						</div>
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
