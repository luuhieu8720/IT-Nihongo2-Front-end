import { InputText } from "primereact/inputtext";
import TutorServices from "../../services/TutorServices";
import { Button } from "primereact/button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import Select from "react-select";
import { useHistory } from "react-router";

function FindTutorFilter(props) {
	const history = useHistory();
	const optionGender = [
		{ value: "Male", label: "Male" },
		{ value: "Female", label: "Female" },
		{ value: "None", label: "None" },
	];

	const [tutor, setTutor] = useState({
		specialty: "",
		gender: "None",
	});

	const handleChange = (evt) => {
		var value = evt.target.value;
		setTutor({
			...tutor,
			[evt.target.name]: value,
		});
	};

	const [options, setOptions] = useState([{}]);
	const handleChangeGender = (e) => {
		tutor.gender = e.value;
	};

	const handleSubmit = () => {
		console.log(tutor);
		var filterString = "";
		if (tutor.specialty != "") filterString += " " + tutor.specialty + ",";
		if (tutor.gender != "") filterString += " " + tutor.gender;

		console.log(filterString);
		TutorServices.findTutor(tutor).then((response) => {
			if (response.data.value.length == 0) {
				toast.warning("Tutor not found");
				sessionStorage.setItem("filterState", "true");
				setTimeout(() => {
					window.location.reload();
				}, 1000);
			} else {
				sessionStorage.setItem("filterString", filterString);
				console.log(response.data.value);
				sessionStorage.setItem("filterTutorState", "false");
				sessionStorage.setItem("tutors", JSON.stringify(response.data.value));
				window.location.reload();
			}
			props.setTrigger(false);
		});
	};

	useEffect(() => {
		fetch(
			"https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json"
		)
			.then((res) => res.json())
			.then(
				(result) => {
					var tmpOptions = [
						{
							value: "",
							label: "",
						},
					];
					result.forEach((tutor) => {
						tmpOptions.push(tutor);
					});
					// setCityOptions(tmpOptions);
					setOptions(result);
				},
				(error) => { }
			);
	}, []);

	return props.trigger ? (
		<div>
			<ToastContainer />
			<div className="background-homepage"></div>

			<div className="frame-select-filter position-abs">
				<i
					className="fa fa-window-close position-abs"
					style={{ right: "0px", top: "-1px" }}
					onClick={() => {
						props.setTrigger(false);
						sessionStorage.setItem("filterState", "true");
						sessionStorage.setItem("filterString", "");
					}}
					aria-hidden="true"
				></i>
				<label
					className="tutor-asking position-abs"
					style={{ marginTop: "-15px" }}
				>
					Filtering
				</label>
				<p className="subject">Subject</p>
				<InputText
					className="input-text-subject position-abs"
					name="specialty"
					onChange={handleChange}
				/>
				<p className="gender-tutor">Gender</p>

				<Select
					className="position-abs input-select-gender1"
					options={optionGender}
					defaultValue={optionGender[2]}
					onChange={handleChangeGender}
					placeholder="Gender"
				/>
				<Button
					className="btn btn-secondary position-abs button-filter"
					style={{ marginTop: "15%" }}
					onClick={handleSubmit}
				>
					Start Filtering
				</Button>
			</div>
		</div>
	) : (
		""
	);
}
export default FindTutorFilter;
