import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import PostServices from "../services/PostServices";
import { useHistory } from "react-router";
import validator from "validator";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import CreatableSelect from "react-select/creatable";

function AddPost({ }) {
	const history = useHistory();
	const optionGender = [
		{ value: 'Male', label: 'Male' },
		{ value: 'Female', label: 'Female' },
	];
	const [post, setPost] = useState({
		title: "",
		time: "",
		city: "",
		district: "",
		ward: "",
		gender: "None",
		details: "",
		salary: "",
		course: "",
		day: "",
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

	const [district, setDistrict] = useState({ id: "", name: "" })

	const handleChange = (evt) => {
		var value = evt.target.value;
		setPost({
			...post,
			[evt.target.name]: value,
		});
	};

	const [ward, setWard] = useState();

	const handleChangeCity = e => {
		setCity({ id: e.value, name: e.label });
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

		setDistrictOptions(tmpDistricts);
	};
	const handleChangeDistrict = e => {
		setDistrict({ id: e.value, name: e.label });
		var wards = []

		districtOptions.forEach(element => {
			if (element.value == e.value) {
				wards = (element.wards);
			}
		});
		var tmpWards = [{ value: "", label: "" }]
		wards.forEach(element => {
			tmpWards.push({ value: element.Id, label: element.Name })
		})
		setWardOptions(tmpWards);
	};
	const handleChangeWard = e => {
		setWard(e.label)
	};

	const optionsArray = [
		'Mon',
		'Tues',
		'Wed',
		'Thu',
		'Fri',
		'Sat',
		'Sun'
	];
	const [cityOptions, setCityOptions] = useState([{
		value: "",
		label: ""
	}])

	const { Option } = Select;
	const [options, setOptions] = useState([{

	}])
	const handleChangeGender = e => {
		post.gender = e.value
	};



	const ITEM_HEIGHT = 15;
	const ITEM_PADDING_TOP = 8;
	const MenuProps = {
		PaperProps: {
			style: {
				maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
				width: 250,
			},
		},
	};

	const [date, setDate] = useState([]);

	const handleChangeDay = (event) => {
		const {
			target: { value },
		} = event;
		setDate(
			typeof value === 'string' ? value.split(', ') : value,
		);
		const stringData = value.join(", ");
		post.day = stringData;
	};

	// 
	const handleSubmit = async (e) => {

		e.preventDefault();
		post.city = city.name;
		post.district = district.name;
		post.ward = ward.name;
		console.log(post)
		if (!validator.isInt(post.salary) || (post.salary <= 0)) {
			toast.warning("Salary must be a number and be positive.");
		}
		else if (
			post.title === "" ||
			post.time === "" ||
			post.city === "" ||
			post.district === "" ||
			post.ward === "" ||
			post.gender === "" ||
			post.details === "" ||
			post.salary === "" ||
			post.day === "" ||
			post.course === "") {
			toast.warning("All fields are not allowed to be null");
		}
		else {
			console.log(post)
			await PostServices.creastePost(post)
				.then(() => {
					toast.success("Create successfully. Return to homepage");
					setTimeout(() => {
						history.push("/");
					}, 3000);
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
				},
				(error) => {

				}
			)
	}, [])
	// 
	return (
		<div className="background1">
			<ToastContainer />
			<div className="frame-show position-abs">
				<div className="col-6">
					<div className="row-cols-6">
						<label className="tutor-asking position-abs" style={{ marginTop: '-10px' }} >MAKE A NEW POST</label>
						<p className="title" >Title</p>
						<p className="subject-add-post" style={{ marginTop: '-15px' }}>Subject</p>
						<p className="salary">Salary</p>
						<p className="time" style={{ marginTop: '-15px' }}>Time</p>
						<p className="location-add-post" style={{ marginTop: '-35px' }}>Location</p>
						<p className="gender-add-post">Gender</p>
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
							name="course"
							style={{ left: "6.5%", top: "32%" }}
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
						<div className="input-addpost text-black position-abs" style={{ left: "66%", top: "33%" }}>
							<FormControl placeholder="Enter text" style={{ top: '', left: '2px', width: '250px', height: '40px' }}>
								<Select
									style={{ border: 0, height: 38 }}
									multiple
									value={date}
									onChange={handleChangeDay}
									renderValue={(selected) => selected.join(', ')}
									MenuProps={MenuProps}

								>
									{optionsArray.map((name) => (
										<MenuItem key={name} value={name}>
											<Checkbox checked={date.indexOf(name) > -1} />
											<ListItemText primary={name} />
										</MenuItem>
									))}
								</Select>
							</FormControl>

						</div>

						<p className="money">VNĐ</p>
					</div>
					<div className="row-cols-6" className="select-box-location" >
						<CreatableSelect
							className="input-select-city"
							name="cityId"
							onChange={handleChangeCity}
							options={cityOptions}
							placeholder="City"
						/>
						<CreatableSelect
							className="input-select-district"
							name="districtId"
							placeholder="District"
							options={districtOptions}
							onChange={handleChangeDistrict}
						/>

						<CreatableSelect
							className="input-select-ward"
							name="wardId"
							onChange={handleChangeWard}
							options={wardOptions}
							placeholder="Ward"
						/>
						<div style={{ marginLeft: '0%' }} className="gender-select">

							<CreatableSelect
								options={optionGender}
								defaultValue={optionGender[0]}
								onChange={handleChangeGender}
							/>
						</div>
					</div>
					<div className="row-cols-6">
						<label className="rectangle-add"></label>
						<p
							className="enter-your-description-add"
							name="description"
						>
							Post details
						</p>
						<textarea
							className="description-add text-black"
							placeholder="Need a high school math teacher."
							name="details"
							onChange={handleChange}
						/>
					</div>
					<div className="row-cols-6">
						<Button
							className="button-contact position-abs text-white" onClick={handleSubmit}
						>
							Find tutor
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AddPost;