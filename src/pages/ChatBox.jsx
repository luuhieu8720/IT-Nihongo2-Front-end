import { InputText } from "primereact/inputtext";
import { Image } from "react-bootstrap";
import { Card } from "react-bootstrap";
import React, { useState, useEffect, useRef } from "react";
import SockJS from "sockjs-client";
import Stomp from "webstomp-client";
import ThumbnailChat from "../components/Chat/ThumbnailChat";
import axios from "axios";

const host = "https://itnihongo2.herokuapp.com";
// const host = "http://localhost:8080";
const endpoint = host + "/socket/endpoint";
const prefixes = "/socket";

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

  const [message, setMessage] = useState("");

  const messagesEnd = useRef();

  const stompClient = useRef();

  // State all conversation
  const [conversationIds, setConversationIds] = useState([]);
  const [groups, setGroups] = useState([]);

  // State conversation hiện tại
  const [currentConversationId, setCurrentConversationId] = useState("");
  const [currentConversation, setCurrentConversation] = useState([]);

  const [needUpdate, setNeedUpdate] = useState(0);

  useEffect(() => {
    const token = axios.defaults.headers.common["Authorization"];
    let header = { Authorization: token };
    stompClient.current = Stomp.over(new SockJS(endpoint));

    stompClient.current.connect(header, function (frame) {
      // Đăng ký các callback cho các đường dẫn

      // Callback ("/chat/receive") cho việc nhận tin nhắn gửi đến
      stompClient.current.subscribe("/user/queue/chat/receive", receiveChat);

      // Callback ("/chat/group") cho việc lấy thông tin group
      stompClient.current.subscribe("/user/queue/chat/group", receiveGroup);

      // Callback ("/chat/group") cho nhận thông tin group mới tạo
      stompClient.current.subscribe("/user/queue/chat/group/new", receiveNewGroup);

      // Callback ("/chat/group") cho nhận tất cả group (không đầy đủ)
      stompClient.current.subscribe("/user/queue/chat/group/all", receiveAllGroup);

      getAllGroup();
    });

    return () => {
      stompClient.current.disconnect();
    };
  }, []);

  useEffect(() => {
    if (groups[currentConversationId] && groups[currentConversationId].chats)
      setCurrentConversation(groups[currentConversationId].chats);
  }, [needUpdate, currentConversationId]);

  useEffect(() => {
    scrollToBottom();
  }, [currentConversation.length]);

  const sendMessage = () => {
    if (message !== null) {
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
    if (e.keyCode === 13 && e.shiftKey === false) {
      sendMessage();
    }
  };

  const onChangeConversation = (groupId) => {
    setCurrentConversationId(groupId);
  }

  const getAllGroup = () => {
    stompClient.current.send(prefixes + "/chat/group/all");
  };

  const receiveAllGroup = (model) => {
    let response = JSON.parse(model.body);
    if (!response.success) {
      console.log("Receive All Group Fail");
      console.log(response.value);
      return;
    }
    let groupModels = response.value;
    if (groupModels.length <= 0) return;

    conversationIds.length = 0;
    groupModels.forEach((groupModel) => {
      conversationIds.push(groupModel.id);
      groups[groupModel.id] = groupModel;
    });
    setConversationIds(conversationIds);
    setNeedUpdate(Math.random());

    setCurrentConversationId(conversationIds[0]);
    getGroup(conversationIds[0]);
  };

  const getGroup = (groupId) => {
    let payload = JSON.stringify({ id: groupId });
    stompClient.current.send(prefixes + "/chat/group", payload);
  };

  const receiveGroup = (model) => {
    let response = JSON.parse(model.body);
    if (!response.success) {
      console.log("Receive Group Fail");
      console.log(response.value);
      return;
    }

    let groupModel = response.value;
    if (conversationIds.find((value) => { return value === groupModel.id; }) === undefined) {
      conversationIds.push(groupModel.id);
      setConversationIds(conversationIds);
    }
    groups[groupModel.id] = groupModel;
    setNeedUpdate(Math.random());
  };

  const sendChat = (idGroup, mes) => {
    let payload = JSON.stringify({ idGroup: idGroup, content: mes });
    stompClient.current.send(prefixes + "/chat/send", payload);
  };

  const receiveChat = (model) => {
    let response = JSON.parse(model.body);
    if (!response.success) {
      console.log("Receive Chat Fail");
      console.log(response.value);
      return;
    }

    let chatModel = response.value;
    let have = false;
    conversationIds.forEach((conversationId) => {
      if (conversationId === chatModel.idGroup)
        if (groups[chatModel.idGroup].chats != null) have = true;
    });

    if (!have) {
      getGroup(chatModel.idGroup);
      return;
    }

    groups[chatModel.idGroup].chats.push(chatModel);

    setNeedUpdate(Math.random());
  };

  // Trước khi chat với ai đều cần tạo group
  // Ví dụ cho tham số group
  // let group = { members: [{ username: "test" }] };
  // Nếu muốn truyền mảng hay gì đó thì tự sửa nha, miễn payload có đủ thành phần là được
  const newGroup = (group) => {
    let payload = JSON.stringify(group);
    stompClient.current.send(prefixes + "/chat/group/new", {}, payload);
  };

  const receiveNewGroup = (model) => {
    let response = JSON.parse(model.body);
    if (!response.success) {
      console.log("Receive New Group Fail");
      console.log(response.value);
      return;
    }
    let groupModel = response.value;

    groups[groupModel.id] = groupModel;
    conversationIds.push(groupModel.id);

    setConversationIds(conversationIds);
    setCurrentConversationId(groupModel.id);
  };

  const listConversations = conversationIds.map((conversationId) => (
    <div key={conversationId} onClick={() => { onChangeConversation(conversationId); }}>
      <ThumbnailChat id=""></ThumbnailChat>
      <div className="blank"></div>
    </div>
  ));

  const renderMess = currentConversation.map((chat) => (
    <div
      key={chat.index}
      className={`${chat.username === currentUser.username ? "your-message" : "other-people"
        } chat-item`}
    >
      {chat.content}
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
        <div className="box-chat">
          <div className="box-chat_message">
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
