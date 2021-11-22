import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import { useEffect, useState } from "react";
import PostServices from "../../services/PostServices";
import { toast, ToastContainer } from "react-toastify";

function ThumbnailChat(props) {
    function changeBackgroundColor(e) {
        e.target.style.background = '#e0dddd';
    }
    const postID = {
        id: props.id.toString(),
    };
    const [post, setPost] = useState({
        title: "",
        time: "",
        day: "",
        city: "",
        district: "",
        ward: "",
        gender: "",
        details: "",
        salary: "",
        course: "",
    });

    useEffect(() => {
        PostServices.getPostInformation(postID)
            .then((response) => {
                setPost(response.data.value);
                console.log(response.data.value);
            })
            .catch((e) => {
                if (e.response && e.response.data) {
                    console.log(e);
                    toast.error(e.response.data.value);
                }
            });
    }, []);

    return (
        <Card className="card-message" >
            <div className="row">
                <div className="col-sm-3">
                    <Image
                        src="/Image/avatardefault.png"
                        alt="image"
                        style={{ marginLeft: "4%", marginTop: "0%" }}
                        width="55px"
                        height="55px"
                    ></Image>

                </div>
                <div className="name-card-message"
                    onMouseOver={changeBackgroundColor} onMouseLeave={(e) => e.target.style.background = "#FFFF"}>
                    Thierry Henry
                </div>
            </div>
        </Card>
    );
}
export default ThumbnailChat;