import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import axios from "axios";
import Select from "react-select";
import PostServices from "../services/PostServices";
import { useHistory } from "react-router";
import validator from "validator";
import { Col, Form } from "react-bootstrap";
import ShowPost from "./ShowPost";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function AddPost({  }) {
	const optionGender = [
		{ value: 'Male', label: 'Male' },
		{ value: 'Female', label: 'Female' },
		{ value: 'None', label: 'None' }
	];

	const history = useHistory();
	const [post, setPost] = useState({
		title: "",
		time:  "",
		city: "",
		district: "",
		ward: "",
		gender: "None",
		details: "",
		salary: "", 
		day:""
	})
	// Modify postID

	
	// 
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
		console.log(evt.target.name);
		post.city = city.name;
		post.district = district.name;
		post.ward= ward;

		 setPost({
            ...post,
            [evt.target.name]: value,
        });
	
		console.log("post:",post);
	}

	const [ward, setWard] = useState();

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
	// ===
	const [field, setField] = useState([]);
	// 
	const optionsArray = [
		{ value: 'Mon', label: 'Monday' },
		{ value: 'Tue', label: 'Tuesday'},
		{ value: 'Wed', label: 'Wednesday'},
		{ value: 'Thu', label: 'Thursday' },
		{ value: 'Fri', label: 'Friday' },
		{ value: 'Sat', label: 'Saturday' },
		{ value: 'Sun', label: 'Sunday' },
	];
	const [cityOptions, setCityOptions] = useState([{
		value: "",
		label: ""
	}])

	const [options, setOptions] = useState([{

	}])
	const handleChangeGender = e => {
		console.log("gender1", post.gender);
		console.log("gender2", e.value);
		post.gender = e.value
		console.log("gender3", post.gender);
		console.log(post)
	}
	const handleChangeDay = e => {
		setField([].slice.call(e.target.selectedOptions).map(item => item.value))
		console.log("Yes: field:", field);
		// post.day = field ;
		// console.log("day:", post.day);
		const stringData = field.join();
		post.day = stringData;
		console.log(post.day);
		
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!validator.isInt(post.salary)) {
		  toast.warning("Salary must be a number.");
		} else if (
		  post.title === "" ||
		  post.time === "" ||
		  post.city === "" ||
		  post.district === "" ||
		  post.ward === "" ||
		  post.gender === "" ||
		  post.details === "" ||
		  post.salary === "" || 
		  post.day == ""
		) {
		  toast.warning("All fields are not allowed to be null");
		  setTimeout(() => {
			  alert("TimeOut");
			// history.push("/signup");
		  }, 5000);
		} 
	else{
		await PostServices.creastePost(post)
			.then(() => {
				toast.success("Create successfully. Go to View Post!!");
				setTimeout(() => {
					alert("TimeOut_New");
					console.log("post cuoi", post);
					
				}, 5000);
			})
			.catch((e) => {
				if (e.response && e.response.data) {
					toast.error(e.response.data.value)
				}
			})
		}
	};


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
							{/* <DropdownMultiselect
								options={optionsArray}
								name="day"
								onChange={handleChangeDay}
							/> */}
							 <Form.Group as={Col} controlId="my_multiselect_field">
								<Form.Label>My multiselect</Form.Label>
								<Form.Control as="select" multiple value={field} onChange={handleChangeDay} >
									<option value="Mon">Monday</option>
									<option value="Tue">Tuesday</option>
									<option value="Wed">Wednesday</option>
									<option value="Thur">Thurday</option>
									<option value="Fri">Friday</option>
									<option value="Sat">Saturday</option>
									<option value="Sun">Sunday</option>
								</Form.Control>
							</Form.Group>
						</div>
						<p className="money">$</p>
					</div>
					<div className="row-cols-6" >

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
							name="details"
							onChange={handleChange}
						/>
					</div>
					<div className="row-cols-6">
						<Button
							className="button-contact position-abs text-white" onClick={handleSubmit}
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
