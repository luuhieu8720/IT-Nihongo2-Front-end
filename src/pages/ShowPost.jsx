import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { ToastContainer, toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import validator from "validator";
import { useEffect, useState } from "react";
import PostServices from "../services/PostServices";

function ShowPost({ match }) {
  // const history = useHistory();
  // const [state, setState] = useState({
  //   title: "",
  //   salary: "",
  //   time: "",
  //   day: "",
  //   location: "",
  //   gender: "",
  //   description: "",
  // });
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (!validator.isDecimal(state.salary)) {
  //     toast.warning("Your salary is not number");
  //   } else if (
  //     state.title === "" ||
  //     state.time === "" ||
  //     state.day === "" ||
  //     state.location === "" ||
  //     state.gender === "" ||
  //     state.description === ""
  //   ) {
  //     toast.warning("All fields are not allowed to be null");
  //     setTimeout(() => {
  //       history.push("/post/show");
  //     }, 5000);
  //   } else toast.success("Ok");
  // };
  // const handleChange = (evt) => {
  //   const val = evt.target.value;
  //   setState({
  //     ...state,
  //     [evt.target.name]: val,
  //   });
  // };

  var postId = match.params.id;

  const [post, setPost] = useState({
    title: "",
    salary: "",
    time: "",
    location: "",
    male: "",
    description: ""
  })

  const [gender, setGender] = useState();

  useEffect(() => {
    PostServices.getPostInformation(postId)
      .then((response) => {
        setPost(response.data.value);
        if (post.male === "true") {
          setGender("Male");
        }
        else {
          setGender("Female")
        }
      })
      .catch((e) => {
        if (e.response && e.response.data) {
          toast.error(e.response.data.value)
        }
      })
  }, [])

  return (
    <div className="background1">
      <ToastContainer />
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
              placeholder="300"
              name="salary"
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
            />
            <p className="money">$</p>
          </div>
          <div className="row-cols-6">
            <InputText
              className="input-select"
              name="location"
              style={{ top: "52%" }}
              value={post.location}
              disabled="true"
            >
            </InputText>
            <InputText
              className="input-select"
              name="gender"
              style={{ top: "68%" }}
              value={gender}
              disabled="true"
            >
            </InputText>
          </div>
          <div className="row-cols-6">
            <label className="rectangle"></label>
            <p
              className="enter-your-description text-center"
              name="description"
            >
              Enter your description
            </p>
            <textarea
              className="description text-black"
              placeholder="Need a high school math teacher."
              name="description"
              value={post.description}
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
