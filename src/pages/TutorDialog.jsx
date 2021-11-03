import { IconButton } from "@material-ui/core";
import { Image, Button } from "react-bootstrap";
import { Checkbox } from 'primereact/checkbox';
import { InputText } from "primereact/inputtext";
import { InputTextarea } from 'primereact/inputtextarea';
import { useState } from "react";
import { styled } from '@mui/material/styles';
import UploadImageServices from "../services/UploadImageServices";

const Input = styled('input')({
    display: 'none',
});

function TutorDialog() {

    const [tutor, setTutor] = useState({
        gender: "",
        avatar: "",
        specialty: "",
        degree: "",
        studentId: "",
        address: "",
        telephone: "",
        experience: ""
    })

    const [imageSelected, setImageSelected] = useState("");

    const handleChange = (evt) => {
        const value = evt.target.value;
        setTutor({
            ...tutor,
            [evt.target.name]: value,
        });
    }

    const makeid = (length) => {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result;
    }


    return (
        <div className="">
            <div className="background-homepage"></div>
            <div className="frame-tutor-dialog">
                <div className="row">
                    <div className="col-sm-3">
                        <label htmlFor="icon-button-file">
                            <Input accept="image/*" id="icon-button-file" type="file" onChange={(event) => { setImageSelected(event.target.files[0]) }} />
                            <IconButton color="primary" aria-label="upload picture" component="span">
                                <Image
                                    src="/Image/camera.png"
                                    width="230"
                                    height="180"
                                    alt="image"
                                ></Image>
                            </IconButton>
                        </label>
                        <p className="text-center"
                            style={{ font: "Oxygen", color: "rgba(0, 0, 0, 0.5)", marginLeft: '23%', width: '150px' }}>Add your card photo</p>
                        <div style={{ marginTop: '220px', marginLeft: '40px' }}>
                            <Checkbox inputId="cb1" value="New York" style={{ display: 'inline-block', }} ></Checkbox>
                            <p className="text-center"
                                style={{
                                    font: "Oxygen", color: "rgba(0, 0, 0, 0.5)", marginLeft: '18%',
                                    width: '150px', marginTop: '-25px'
                                }}>I agree privacy policy</p>
                        </div>
                        <Button className="button-enter-tutor-dialog">Enter</Button>
                        <p className="position-abs" style={{
                            color: 'rgba(0, 0, 0, 0.5)',
                            width: '0px', height: '90%', border: '1px solid #8d8989', marginLeft: '26%', top: '5%'
                        }}></p>

                    </div>

                    <div className="col-sm-8">
                        <div className="row">
                            <div className="col-sm-6">
                                <InputText className="input-tutor-dialog ms-5"
                                    placeholder="Location"
                                    name="address"
                                    style={{ marginTop: '10%' }}></InputText>
                                <InputText className="input-tutor-dialog ms-5"
                                    placeholder="ID"
                                    name="studentId"
                                    style={{ marginTop: '5%' }}></InputText>
                                <InputText className="input-tutor-dialog"
                                    placeholder="Gender"
                                    name="gender"
                                    style={{ marginTop: '5%', marginLeft: '45.4px' }}></InputText>
                                <input type="date" className="datetime-picker-dialog"
                                    style={{ marginTop: '15%' }}
                                    id="datetimepicker" data-date-format="yyyy-mm-dd"></input>
                            </div>
                            <div className="col-sm-6">
                                <InputText className="input-tutor-dialog ms-5" placeholder="Phone"
                                    name="telephone"
                                    style={{ marginTop: '10%' }}></InputText>
                                <InputText className="input-tutor-dialog ms-5"
                                    placeholder="Speciality"
                                    name="specialty"
                                    style={{ marginTop: '5%' }}></InputText>
                                <label className="rectangle-tutor-dialog"></label>
                                <p
                                    className="enter-certificate"
                                >
                                    Certificate
                                </p>
                                <InputTextarea
                                    className="cert-text-area text-black"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="rectangle-experience"></label>
                            <p
                                className="label-experience"
                            >
                                Experience
                            </p>
                            <InputTextarea className="experience-text-area" placeholder=""></InputTextarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TutorDialog;