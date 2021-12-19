import { Card } from "react-bootstrap";
import { Image } from "react-bootstrap";

function ThumbnailChat(props) {
    function changeBackgroundColor(e) {
        e.target.style.background = '#e0dddd';
    }
    const name = props.name.toString();

    return (
        <Card className="card-message">
            <div className="row">
                <div className="col-sm-3">
                    <Image
                        src="/Image/avatardefault.png"
                        alt="image"
                        style={{ marginLeft: "2px", marginTop: "0px", borderRadius:"50%", display:"inline-block" }}
                        width="55px"
                        height="55px"
                    ></Image>

                </div>
                <div className="col-sm-9 name-card-message"
                    onMouseOver={changeBackgroundColor} onMouseLeave={(e) => e.target.style.background = "#FFFF"}>
                    {name}
                </div>
            </div>
        </Card>
    );
}
export default ThumbnailChat;