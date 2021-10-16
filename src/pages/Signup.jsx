import { Image } from "primereact/image";
import { Link } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useState } from "react";
import AuthsServices from "../services/AuthsServices.js";
import { ToastContainer, toast } from "react-toastify";
import { RadioButton } from 'primereact/radiobutton';
import { useHistory } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";

function Signup() {
	const history = useHistory();
	const [state, setState] = useState({
		email: "",
		username: "",
		password: "",
		name: ""
	});
	const [value, setValue] = useState();
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (state.username === "" || state.email === "" || state.username === "" || state.password === "" || state.name === "") {
			alert("All fields are not allowed to be null");
			window.location.reload()
		}

		console.log(state);
		const registerUser = new Object({
			email: state.email,
			username: state.username,
			password: state.password,
			name: state.name,
			role: value
		})
		await AuthsServices.signup(registerUser)
			.then(() => {
				alert('Successfully. Check your email for the confirmation code');
				history.push("/verify-code");
			})
			.catch(() => {
				toast.error("Error!");
			});
	};

	const handleChange = (evt) => {
		const val = evt.target.value;
		setState({
			...state,
			[evt.target.name]: val,
		});
	};
	return (
		<div className="background">
			<ToastContainer />
			<div className="frame position-abs">
				<div className="col-6 signup-image">
					<Image className="" src="Image/signup-1.png" alt="Image Text" />
				</div>
				<div className="col-6">
					<div className="row-cols-6">
						<label className="create-account text-center fst-normal text-white position-abs">
							CREATE YOUR ACCOUNT
						</label>
						<p>
							<span className="already-have-account text-center fst-normal text-white position-abs">
								Already have an account?
								<Link className="ms-2 Log-in-text" to="/signin">
									Log in
								</Link>
							</span>
						</p>
					</div>
					<div className="row-cols-6">
						<InputText
							className="input text-white position-abs"
							placeholder="Email"
							name="email"
							type="email"
							style={{ top: "23%" }}
							onChange={handleChange}
						/>
					</div>
					<div className="row-cols-6">
						<InputText
							className="input text-white position-abs"
							placeholder="Username"
							name="username"
							style={{ top: "35%" }}
							onChange={handleChange}
						/>
					</div>
					<div className="row-cols-6">
						<InputText
							className="input text-white position-abs"
							placeholder="Password"
							type="password"
							name="password"
							style={{ top: "47%" }}
							onChange={handleChange}
						/>

					</div>
					<div className="row-cols-6">
						<InputText
							className="input text-white position-abs"
							placeholder="Name"
							name="name"
							style={{ top: "59%" }}
							onChange={handleChange}
						/>
						<RadioButton style={{ position: 'absolute', top: '70%', left: '49%' }} value="User" name="city" onChange={(e) => setValue(e.value)} checked={value === 'User'} />
						<span style={{ position: 'absolute', top: '70%', left: '51%' }} className="text-light">User</span>
						<RadioButton style={{ position: 'absolute', top: '70%', left: '58%' }} value="Tutor" name="city" onChange={(e) => setValue(e.value)} checked={value === 'Tutor'} />
						<span style={{ position: 'absolute', top: '70%', left: '60%' }} className="text-light">Tutor</span>
					</div>
					<div className="row-cols-6">

						<Button
							className="position-abs button-enter-signup text-white text-enter"
							onClick={handleSubmit}
						>
							ENTER
							<i class="fa fa-long-arrow-right ms-2" aria-hidden="true"></i>
						</Button>
					</div>
					<div className="row-cols-6">
						<h5 className="bottom-note-signup position-abs fst-normal text-left">
							By clicking Enter, I confirm that I have read and agree to the
							Terms of Service and Privacy Policy.
						</h5>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Signup;
