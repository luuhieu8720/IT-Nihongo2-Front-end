import { InputText } from "primereact/inputtext";
import PostServices from "../../services/PostServices";
import { Button } from "primereact/button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import Select from "react-select";
import { useHistory } from "react-router";

function SelectFilter(props) {
  const history = useHistory();
  const optionGender = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "None", label: "None" },
  ];
  const test = {
    id: "617434f1db81702e10c16ad0",
  };
  const [post, setPost] = useState({
    city: "",
    district: "",
    ward: "",
    course: "",
    gender: "None",
  });
  const [districtOptions, setDistrictOptions] = useState([
    {
      value: "",
      label: "",
      wards: [],
    },
  ]);

  const [wardOptions, setWardOptions] = useState([
    {
      value: "",
      label: "",
    },
  ]);

  const [city, setCity] = useState({
    id: "",
    name: "",
  });

  const [district, setDistrict] = useState({ id: "", name: "" });

  const handleChange = (evt) => {
    var value = evt.target.value;
    setPost({
      ...post,
      [evt.target.name]: value,
    });
  };

  const [ward, setWard] = useState("");

  const handleChangeCity = (e) => {
    setCity({ id: e.value, name: e.label });
    var districts = [];
    options.forEach((element) => {
      if (element.Id == e.value) {
        districts = element.Districts;
      }
    });
    var tmpDistricts = [{ value: "", label: "", wards: [] }];
    districts.forEach((element) => {
      tmpDistricts.push({
        value: element.Id,
        label: element.Name,
        wards: element.Wards,
      });
    });
    setDistrictOptions(tmpDistricts);
  };
  const handleChangeDistrict = (e) => {
    setDistrict({ id: e.value, name: e.label });
    var wards = [];
    districtOptions.forEach((element) => {
      if (element.value == e.value) {
        wards = element.wards;
      }
    });
    var tmpWards = [{ value: "", label: "" }];
    wards.forEach((element) => {
      tmpWards.push({ value: element.Id, label: element.Name });
    });
    setWardOptions(tmpWards);
  };
  const handleChangeWard = (e) => {
    setWard(e.label);
  };
  const optionsArray = [
    { key: "mon", label: "Monday" },
    { key: "tue", label: "Tuesday" },
    { key: "wed", label: "Wednesday" },
    { key: "thu", label: "Thursday" },
    { key: "fri", label: "Friday" },
    { key: "sat", label: "Saturday" },
    { key: "sun", label: "Sunday" },
  ];
  const [cityOptions, setCityOptions] = useState([
    {
      value: "",
      label: "",
    },
  ]);

  const [options, setOptions] = useState([{}]);
  const handleChangeGender = (e) => {
    post.gender = e.value;
  };

  const handleSubmit = () => {
    post.city = city.name;
    post.district = district.name;
    post.ward = ward;
    console.log(post);
    var filterString = "";
    if (post.course != "") filterString += " " + post.course + ",";
    if (post.city != "") filterString += " " + post.city + ",";
    if (post.district != "") filterString += " " + post.district + ",";
    if (post.ward != "") filterString += " " + post.ward + ",";
    if (post.gender != "") filterString += " " + post.gender + ",";
    if (filterString != "") filterString = filterString.slice(0, -1);
    console.log(filterString);

    PostServices.findPost(post).then((response) => {
      if (response.data.value.length == 0) {
        toast.warning("No posts found");
        sessionStorage.setItem("filterState", "true");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        sessionStorage.setItem("filterString", filterString);
        console.log(response.data.value);
        var posts = [];
        var temp = JSON.stringify(response.data.value);
        posts = JSON.parse(temp);
        var postIds = [];
        Object.values(posts).forEach((element) => {
          postIds.push(element.id);
        });
        console.log(postIds);
        sessionStorage.setItem("postIds", JSON.stringify(postIds));
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
          result.forEach((element) => {
            tmpOptions.push({ value: element.Id, label: element.Name });
          });
          setCityOptions(tmpOptions);
          setOptions(result);
        },
        (error) => {}
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
          name="course"
          onChange={handleChange}
        />
        <p className="home-page-location">Location</p>
        <Select
          className="input-select-city-homepage"
          onChange={handleChangeCity}
          options={cityOptions}
          placeholder="City"
        />

        <Select
          className="input-select-district-homepage"
          name="districtId"
          placeholder="District"
          style={{ top: "48%" }}
          options={districtOptions}
          onChange={handleChangeDistrict}
        />

        <Select
          className="input-select-ward-homepage"
          name="wardId"
          onChange={handleChangeWard}
          options={wardOptions}
          placeholder="Ward"
        />
        <p className="gender-homepage">Gender</p>

        <Select
          className="position-abs input-select-gender"
          options={optionGender}
          defaultValue={optionGender[2]}
          onChange={handleChangeGender}
          placeholder="Gender"
        />
        <Button
          className="btn btn-secondary position-abs button-filter"
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
export default SelectFilter;
