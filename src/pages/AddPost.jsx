import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import axios from "axios";
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

	const [citis, setCitis] = useState({
		id: "",
		name: ""
	})

	const [district, setDistrict] = useState()

	const [ward, setWard] = useState()

	const handleChangeCity = e => {
		setCitis(e.value)
	}
	const handleChangeDistrict = e => {
		setDistrict(e.value)
	}
	const handleChangeWard = e => {
		setWard(e.value)
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
	var options = ([
		{
			Id: "",
			Name: ""
		}
	])

	useEffect(() => {
		var Parameter = {
			url: 'https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json',//Đường dẫn đến file chứa dữ liệu hoặc api do backend cung cấp
			method: 'GET', //do backend cung cấp 
		}
		//gọi ajax = axios => nó trả về cho chúng ta là một promise
		var promise = axios(Parameter);
		//Xử lý khi request thành công
		promise.then(function (result) {
			options = result.data
			console.log(options)
		})
			.catch(e => console.log(e));
	})

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
							onChange={handleChangeCity}
							options={options}
							// isDisabled={cityOptions.length === 0}
							placeholder="City"
							style={{ top: "52%" }}
						/>

						<Select
							className="input-select-district"
							name="districtId"
							// isDisabled={districtOptions.length === 0}
							placeholder="District"
							style={{ top: "52%" }}
							onChange={handleChangeDistrict}
						/>

						<Select
							className="input-select-ward"
							name="wardId"
							// isDisabled={wardOptions.length === 0}
							onChange={handleChangeWard}
							placeholder="Ward"

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
