import { InputText } from "primereact/inputtext";
import { Image } from "react-bootstrap";
import { Card } from "react-bootstrap";
import React, { useState, useEffect, useRef } from "react";
import SockJS from "sockjs-client";
import Stomp from "webstomp-client";
import ThumbnailChat from "../components/Chat/ThumbnailChat";
import axios from "axios";

const host = "https://itnihongo2.herokuapp.com";
const endpoint = host + "/api/socket/endpoint";
const prefixes = "/api/socket";

/*
Model được sử dụng
GroupChat {
  id: string,          // Mã id của group
  name: string,        // Tên hiển thị của group
  length: int,         // Số tin nhắn trong group == chats.length
  members: [{username: string, seenIndex: int}, ...], // Danh sách người dùng trong nhóm
  chats: [Chat, ...],  // Danh sách tin nhắn
  avatar: string       // Url avatar
}
Chat {
  idGroup: string,
  username: string,
  index: int,         // Vị trí tin nhắn
  content: string,
  sendTime: string    // Thời gian
}
 */

function ChatBox() {
  const currentUser = JSON.parse(localStorage.getItem("current"));

  const [mess, setMess] = useState([]);
  const [message, setMessage] = useState("");

  let username = "";

  const socketRef = useRef();
  const messagesEnd = useRef();

  const [conversationIds, setConversationIds] = useState([1, 2]);
  //gọi service để lấy id của các cuộc trò chuyện có trong db ở đây, sau đó lưu vào conversationIds
  // tui đang giả sử nó chỉ có 2 Id là 1 và 2

  // Chứa toàn bộ group và chat (chat có trong group)
  const allGroup = {};

  // Dùng để chuyển đổi conversation id hiện tại
  const [currentConversationId, setCurrentConversationId] = useState("");

  useEffect(() => {
    // socketRef.current = socketIOClient.connect(host);

    // socketRef.current.on("getId", (data) => {
    // 	setId(data);
    // });

    // socketRef.current.on("sendDataServer", (dataGot) => {
    // 	setMess((oldMsgs) => [...oldMsgs, dataGot.data]);
    // 	scrollToBottom();
    // });

    return () => {
      // socketRef.current.disconnect();
    };
  }, []);

  //này là tin nhắn để send đi gần nhất
  const sendMessage = () => {
    if (message !== null) {
      //   const msg = {
      //     content: message,
      //     id: id,
      //   };
      //   socketRef.current.emit("sendDataClient", msg);
      sendChat(currentConversationId, message);
      setMessage("");
    }
  };

  const scrollToBottom = () => {
    messagesEnd.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const onEnterPress = (e) => {
    if (e.keyCode == 13 && e.shiftKey == false) {
      sendMessage();
    }
  };

  const token = axios.defaults.headers.common["Authorization"];
  let header = { Authorization: token };

  let socket = new SockJS(endpoint);
  let stompClient = Stomp.over(socket);

  stompClient.connect(header, function (frame) {
    // Callback khi kết nối thành công
    username = frame.headers["user-name"];
    // Đăng ký các callback cho các đường dẫn

    // Callback ("/chat/receive") cho việc nhận tin nhắn gửi đến
    stompClient.subscribe("/user/queue/chat/receive", receiveChat);

    // Callback ("/chat/group") cho việc lấy thông tin group
    stompClient.subscribe("/user/queue/chat/group", receiveGroup);

    // Callback ("/chat/group") cho nhận thông tin group mới tạo
    stompClient.subscribe("/user/queue/chat/group/new", receiveNewGroup);

    // Callback ("/chat/group") cho nhận tất cả group (không đầy đủ)
    stompClient.subscribe("/user/queue/chat/group/all", receiveAllGroup);

    getAllGroup();
  });

  const getAllGroup = () => {
    stompClient.send(prefixes + "/chat/group/all");
  };

  const receiveAllGroup = (model) => {
    let response = JSON.parse(model.body);
    if (!response.success) {
      console.log("Receive All Group Fail");
      console.log(response.value);
      return;
    }
    let groupModels = response.value;
    conversationIds.length = 0;
    groupModels.forEach((groupModel) => {
      conversationIds.push(groupModel.id);
      allGroup[groupModel.id] = groupModel;
    });
    // Render lại listConversations
    // Render lại chatbox (chỗ này là phải gọi getGroup(currentConvaersationId) vì api này chỉ trả kết quả thô)
  };

  // id là string (được lấy từ conversationIds)
  const getGroup = (id) => {
    let payload = JSON.stringify({ id: id });
    stompClient.send(prefixes + "/chat/group", {}, payload);
  };

  const receiveGroup = (model) => {
    let response = JSON.parse(model.body);
    if (!response.success) {
      console.log("Receive All Group Fail");
      console.log(response.value);
      return;
    }
    let groupModel = response.value;
    // Kiểm tra đã có group đó chưa
    if (conversationIds.find((value) => {return value === groupModel.id;}) === undefined)
      conversationIds.push(groupModel.id);
      // render lại listConversations
    
    allGroup[groupModel.id] = groupModel;
    // render lại chatbox nếu 
    // groupModel.id == currentConversationId
  };

  const sendChat = (idGroup, mes) => {
    let payload = JSON.stringify({ idGroup: idGroup, content: mes });
    stompClient.send(prefixes + "/chat/send", {}, payload);
  };

  const receiveChat = (model) => {
    let response = JSON.parse(model.body);
    if (!response.success) {
      console.log("Receive All Group Fail");
      console.log(response.value);
      return;
    }
    let chatModel = response.value;
    // Kiểm tra đã có thông tin của group mà tin nhắn gửi đến
    let have = false;
    conversationIds.forEach((conversationId) => {
      if (conversationId == chatModel.idGroup)
        if (allGroup[chatModel.idGroup].chats != null) have = true;
    });
    if (!have) {
      // Nếu ko có thì dùng getGroup để lấy
      getGroup(chatModel.idGroup);
      return;
    }
    // Nếu có rồi thì lưu data chat vào group
    allGroup[chatModel.idGroup].chats.push(chatModel);
    // Render lại chatbox nếu
    // groupModel.id == currentConversationId
  };

  // Trước khi chat với ai đều cần tạo group
  // Ví dụ cho tham số group
  // let group = { members: [{ username: "test" }] };
  // Nếu muốn truyền mảng hay gì đó thì tự sửa nha, miễn payload có đủ thành phần là được
  const newGroup = (group) => {
    let payload = JSON.stringify(group);
    stompClient.send(prefixes + "/chat/group/new", {}, payload);
  };

  const receiveNewGroup = (model) => {
    let response = JSON.parse(model.body);
    if (!response.success) {
      console.log("Receive All Group Fail");
      console.log(response.value);
      return;
    }
    let groupModel = response.value;
    allGroup[groupModel.id] = groupModel;
    conversationIds.push(groupModel.id);
    // Render lại listConversations
    // Render lại chatbox (bắt buộc render cái này)
    // setCurrentConversationId(groupModel.id)
  };

  // Thêm Onclick vô cái này nha, dùng để thay đổi currentConversationId cũng như render lại renderMess
  const listConversations = conversationIds.map((conversationId) => (
    <div>
      <ThumbnailChat id={conversationId}></ThumbnailChat>
      <div className="blank"></div>
    </div>
  ));

  // Chuyển sang kiểm tra với username
  const renderMess = mess.map((m, index) => (
    <div
      key={index}
      className={`${
        m.username === username ? "your-message" : "other-people"
      } chat-item`}
    >
      {m.content}
    </div>
  ));

  return (
    <div className="row">
      <div className="col-3">
        <label className="eto-chatbox">ETO</label>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginLeft: "10%",
            marginTop: "20%",
          }}
        >
          <Image
            src={
              currentUser.avatar === ""
                ? "/Image/avatardefault.png"
                : currentUser.avatar
            }
            alt="image"
            width="100px"
            height="100px"
          ></Image>
        </div>
        <div className="information-container">
          <i className="name-information-chatbox">{currentUser.name}</i>
          <p className="subject-information-chatbox">
            {currentUser.role === "User" ? "Student" : "Tutor"}
          </p>
        </div>
        <div className="information-chatbox2">
          <i
            className="text-black"
            style={{ fontFamily: "Segoe UI", marginLeft: "5px" }}
          >
            All conversations
          </i>
          <i className="" style={{ color: "#FF0000", marginLeft: "30%" }}>
            {conversationIds.length}
          </i>
          <div style={{ marginTop: "10px" }}>{listConversations}</div>
        </div>
      </div>

      <div className="col-9">
        <div class="box-chat">
          <div class="box-chat_message">
            {renderMess}
            <div
              style={{ float: "left", clear: "both" }}
              ref={messagesEnd}
            ></div>
          </div>

          <div className="enter-your-message">
            <InputText
              className="enter-message-chat"
              name="message"
              placeholder="Enter your message..."
              value={message}
              onKeyDown={onEnterPress}
              onChange={handleChange}
            ></InputText>
            <i
              className="far fa-arrow-alt-circle-right fa-2x"
              onClick={sendMessage}
              style={{
                display: "inline-block",
                marginLeft: "30px",
                bottom: "10px",
                color: "#B34EE3",
              }}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ChatBox;
