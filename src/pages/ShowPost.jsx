import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import PostServices from "../services/PostServices";

function ShowPost({ match }) {

	const [post, setPost] = useState({
		title: "",
		time: "",
		city: "",
		district:"",
		ward:"",
		day:"",
		male: "",
		details: "",
		salary: ""
	})

	useEffect(() => {
		var postId = {
			id: match.params.id.toString()
		}
		console.log(postId)
		PostServices.getPostInformation(postId)
			.then((response) => {
				setPost(response.data.value);
				console.log(post)
			})
			.catch((e) => {
				if (e.response && e.response.data) {
					toast.error(e.response.data.value)
				}
			})
	}, [])

	return (
		<div>
			<div className="background1">
				<ToastContainer />
				
			</div>
			<div className="frame-show position-abs">
					<div className="col-6">
						<div className="row-cols-6">
							<label className="tutor-asking position-abs">TUTOR-ASKING</label>
							<p className="title">Title</p>
							<p className="salary">Salary</p>
							<p className="time">Time</p>
							<p className="location">Location</p>
							<p className="gender">Gender</p>
						</div>
						<div className="row-cols-6">
							<InputText
								className="input-showpost text-black position-abs"
								placeholder="Finding math teacher..."
								name="title"
								value={post.title}
								style={{ left: "6.5%" }}
								disabled="true"
							/>
							<InputText
								className="input-showpost text-black position-abs"
								name="salary"
								value={post.salary}
								style={{ left: "49.5%" }}
								disabled="true"
							/>
							<p className="special">/</p>
							<InputText
								className="input-showpost text-black text-center position-abs"
								placeholder="9:00-11:00"
								name="time"
								value={post.time}
								style={{ left: "49.5%", top: "35%", width: "13%" }}
								disabled="true"
							/>
							<InputText
								className="input-showpost text-black position-abs"
								name="day"
								style={{ left: "66%", top: "35%", width: "21.6%" }}
								disabled="true"
								value={post.day}
							/>
							<p className="money">VNĐ</p>
						</div>
						<div className="row-cols-6">
							<InputText
								className="input-select"
								name="location"
								style={{ top: "52%" }}
								value={`${post.city}, ${post.district}, ${post.ward}`}
								disabled="true"
							>
							</InputText>
							<InputText
								className="input-select"
								name="gender"
								style={{ top: "68%" }}
								value={post.male == true ? "Male" : "Female"}
								disabled="true"
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
								value={post.details}
								disabled="true"
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
export default ShowPost;
