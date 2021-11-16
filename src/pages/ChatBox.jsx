import { InputText } from "primereact/inputtext";
import Image from "rc-image";
import { Card } from "react-bootstrap";

function ChatBox() {
  return (
    <div className="row">
      <label className="eto-chatbox">ETO</label>
      <div className="col-sm-1 information-chatbox">
        <Image
          src="/Image/avatardefault.png"
          alt="image"
          style={{ marginLeft: "70%", marginTop: "20%" }}
          width="140px"
          height="140px"
          roundedCircle
        ></Image>
        <i className="name-information-chatbox">Hiền gà</i>
        <i className="subject-information-chatbox">Student</i>
      </div>
      <div className="col-sm-1 information-chatbox2">
        <i style={{ fontFamily: "Segoe UI" }}>All conversations</i>
        <label className="new-message-notification">
          <i className="" style={{ color: "#FF0000", marginLeft: "30%" }}>
            3
          </i>
        </label>
        <Card className="card-message">
          <Image
            src="/Image/avatardefault.png"
            alt="image"
            style={{ marginLeft: "20%", marginTop: "10%" }}
            width="65px"
            height="65px"
            roundedCircle
          ></Image>
          <i className="name-card-message">Thierry Henry</i>
        </Card>
      </div>

      <div className="row chatbox">
        <div className="enter-your-message">
          <label className="rectangle-chatbox text-black">
            <InputText
              className="enter-message-chat"
              name="message"
              disabled="true"
              placeholder="Enter your message..."
            ></InputText>
          </label>
          <i
            className="fst-normal bi bi-reply fa-3x"
            style={{
              display: "inline-block",
              marginLeft: "90%",
              color: "#B34EE3",
            }}
          ></i>
        </div>
        <Card className="my-message">
          <Image
            src="/Image/avatardefault.png"
            alt="image"
            style={{ marginLeft: "20%" }}
            width="60px"
            height="60px"
            roundedCircle
          ></Image>
          <div class="message-blue">
            <p class="message-content">Mày có nghe thấy nhịp beat không?</p>
            <div class="message-timestamp-left">SMS 13:37</div>
          </div>
        </Card>
        <Card className="my-message" style={{ marginTop: "32%" }}>
          <Image
            src="/Image/avatardefault.png"
            alt="image"
            style={{ marginLeft: "1170%", marginTop: "60%" }}
            width="60px"
            height="60px"
            roundedCircle
          ></Image>
          <div class="message-orange">
            <p class="message-content">Bên này có nghe thấy nhịp beat không?</p>
            <div class="message-timestamp-right">SMS 13:38</div>
          </div>
        </Card>
      </div>
    </div>
  );
}
export default ChatBox;
