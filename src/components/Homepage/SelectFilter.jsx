import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import Select from "react-select";

function SelectFilter(props) {
    const optionGender = [
        { value: 'Male', label: 'Male' },
        { value: 'Female', label: 'Female' },
        { value: 'None', label: 'None' }
    ];

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
        gender: "",
        details: "",
        salary: ""
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
        if (evt.target.name == "location") {
            value = value + ", " + ward + ", " + district.name + ", " + city.name
        }
        setPost({
            ...post,
            [evt.target.name]: value,
        });
        console.log(post)
    }

    const [ward, setWard] = useState()

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
        console.log(tmpDistricts)
        setDistrictOptions(tmpDistricts);
    }
    const handleChangeDistrict = e => {
        setDistrict({ id: e.value, name: e.label });
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
    const optionsArray = [
        { key: "mon", label: "Monday" },
        { key: "tue", label: "Tuesday" },
        { key: "wed", label: "Wednesday" },
        { key: "thu", label: "Thursday" },
        { key: "fri", label: "Friday" },
        { key: "sat", label: "Saturday" },
        { key: "sun", label: "Sunday" },
    ];
    const [cityOptions, setCityOptions] = useState([{
        value: "",
        label: ""
    }])

    const [options, setOptions] = useState([{

    }])
    const handleChangeGender = e => {
        post.gender = e.value
        console.log(post)
    }



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

    return  (props.trigger) ? (
        <div>
            <div className="background-homepage">
            <ToastContainer />

           
        </div>

         <div className="frame-select-filter position-abs">
           <i className="fa fa-window-close position-abs" style={{right:'5px'}} onClick={() => props.setTrigger(false)} aria-hidden="true"></i>
                <label className="tutor-asking position-abs" style={{ marginTop: '-15px' }} >Filtering</label>
                <p className="subject" >Subject</p>
                <InputText
                    className="input-text-subject position-abs"
                    name="title"
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

                <Select className="position-abs input-select-gender"
                    options={optionGender}
                    defaultValue={optionGender[0]}
                    onChange={handleChangeGender}
                    placeholder="Gender"
                />
            </div>        

        </div>
        
    ) : "";
}
export default SelectFilter;