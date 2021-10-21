import { Image } from "primereact/image";
import { Link } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useState } from "react";
import AuthsServices from "../services/AuthsServices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router";


function CheckSignup() {
	const [state, setState] = useState();
	const history = useHistory();
	const handleChange = (evt) => {
		const value = evt.target.value;
		setState({
			...state,
			[evt.target.name]: value,
		});

	}

	const handleSubmit = () => {
		AuthsServices.finishSignup(state).then(() => {
			toast.success("Successfully sign up! You can sign in now");
			setTimeout(() => {
				history.push("/signin");
			}, 5000);
		})
			.catch((e) => {
				if (e.response && e.response.data) {
					toast.error(e.response.data.value)
				}
			})
	}

	return (
		<div className="background">
			<ToastContainer />
			<div className="frame position-abs">
				<div className="col-6">
					<Image src="/Image/enteryourcode.png" alt="Image Text" />
				</div>
				<div className="col-6">
					<div className="row-cols-6">
						<label className="enter-your-code-page text-center fst-normal text-white position-abs">
							Enter Your Code
						</label>
						<p>
							<span className="enter-your-code1 text-center fst-normal text-white position-abs">
								Enter your code from email
							</span>
						</p>
						<p>
							<span className="enter-your-code2 text-center fst-normal text-white position-abs">
								Already have an account?
								<Link className="ms-2 Log-in-text" to="/signin">
									Log in
								</Link>
							</span>
						</p>
					</div>

					<div className="row-cols-6">
						<InputText
							className="input1 text-white position-abs"
							name="username"
							placeholder="Your username"
							style={{ top: "25%" }}
							onChange={handleChange}
						/>
					</div>
					<div className="row-cols-6">
						<InputText
							className="input1 text-white position-abs"
							name="token"
							placeholder="Verification code"
							style={{ top: "40%" }}
							onChange={handleChange}
						/>
					</div>
					<div className="row-cols-6">
						<Button className="button-enter-your-code position-abs text-white text-enter1"
							onClick={handleSubmit}
						>
							Enter
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
export default CheckSignup;
