import { Image } from "primereact/image";
import { Link } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import AuthsServices from "../services/AuthsServices";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";

function Signin() {
	const [state, setState] = useState();

	const history = useHistory();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await AuthsServices.login(state)
			.then((response) => {
				if (response.data !== "") {
					toast.success("Successfully");
					localStorage.setItem("token", response.data);
					history.push("/homepage");
				}
			})
			.catch(() => {
				toast.error("Wrong username or password");
			});
	};

	const handleChange = (evt) => {
		const value = evt.target.value;
		setState({
			...state,
			[evt.target.name]: value,
		});
	};
	return (
		<div className="background">
			<ToastContainer />
			<div className="frame position-abs">
				<div className="col-6">
					<Image src="Image/signin-1.png" alt="Image Text" />
				</div>
				<div className="col-6">
					<div className="row-cols-6">
						<label className="easy-to-take text-center fst-normal text-white position-abs">
							EASY TO TAKE A JOB
						</label>
						<p>
							<span className="create-new-account text-center fst-normal text-white position-abs">
								Create new account.
								<Link className="ms-2 sign-up-text" to="/signup">
									Sign up
								</Link>
							</span>
						</p>
					</div>
					<div className="row-cols-6">
						<InputText
							className="input text-white position-abs"
							placeholder="Username"
							name="username"
							style={{ top: "150px" }}
							onChange={handleChange}
						/>
					</div>
					<div className="row-cols-6">
						<input
							type="password"
							className="input text-white position-abs"
							placeholder="Password"
							name="password"
							style={{ top: "250px" }}
							onChange={handleChange}
						/>
					</div>
					<div className="row-cols-6">
						<span className="checkbox-logged-in fst-normal text-white position-abs">
							<Checkbox className="me-2" style={{ display: "inline-block" }} />
							<label className="text-login-page">Keep me login </label>
						</span>
					</div>
					<div className="row-cols-6">
						<Button
							className="button-enter position-abs text-white text-enter"
							onClick={handleSubmit}
						>
							ENTER
							<i className="fa fa-long-arrow-right ms-2" aria-hidden="true"></i>
						</Button>
					</div>
					<div className="row-cols-6">
						<Link
							to="/reset-password"
							className="forgot-pass-text position-abs text-center"
						>
							Forgot your password?
						</Link>
						<h5 className="bottom-note position-abs fst-normal text-left">
							By clicking Enter, I confirm that I have read and agree to the
							Terms of Service and Privacy Policy.
						</h5>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Signin;
