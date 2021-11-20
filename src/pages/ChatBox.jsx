import { InputText } from "primereact/inputtext";
import { Image } from "react-bootstrap";
import { Card } from "react-bootstrap";
import React, { useState, useEffect, useRef } from "react";
import socketIOClient from "socket.io-client";
import ThumbnailChat from "../components/Chat/ThumbnailChat";

const host = "http://localhost:3000";

function ChatBox() {
	const currentUser = JSON.parse(localStorage.getItem("current"));

	const [mess, setMess] = useState([]);
	const [message, setMessage] = useState("");
	const [id, setId] = useState();

	const socketRef = useRef();
	const messagesEnd = useRef();

	const [conversationIds, setConversationIds] = useState([1, 2]);
	//gọi service để lấy id của các cuộc trò chuyện có trong db ở đây, sau đó lưu vào conversationIds
	// tui đang giả sử nó chỉ có 2 Id là 1 và 2

	const listConversations = conversationIds.map((conversationId) => (
		<div>
			<ThumbnailChat id={conversationId}></ThumbnailChat>
			<div className="blank"></div>
		</div>
	));

	useEffect(() => {

		socketRef.current = socketIOClient.connect(host);

		socketRef.current.on("getId", (data) => {
			setId(data);
		});

		socketRef.current.on("sendDataServer", (dataGot) => {
			setMess((oldMsgs) => [...oldMsgs, dataGot.data]);
			scrollToBottom();
		});

		return () => {
			socketRef.current.disconnect();
		};
	}, []);

	//này là tin nhắn để send đi gần nhất
	const sendMessage = () => {
		if (message !== null) {
			const msg = {
				content: message,
				id: id,
			};
			socketRef.current.emit("sendDataClient", msg);
			setMessage("");
		}
	};

	const scrollToBottom = () => {
		messagesEnd.current.scrollIntoView({ behavior: "smooth" });
	};

	//này để render message
	const renderMess = mess.map((m, index) => (
		<div
			key={index}
			className={`${m.id === id ? "your-message" : "other-people"} chat-item`}
		>
			{m.content}
		</div>
	));

	const handleChange = (e) => {
		setMessage(e.target.value);
	};

	const onEnterPress = (e) => {
		if (e.keyCode == 13 && e.shiftKey == false) {
			sendMessage();
		}
	};



	return (
		<div className="row">
			<div className="col-3">
				<label className="eto-chatbox">ETO</label>
				<div style={{ display: "flex", justifyContent: "center", marginLeft: "10%", marginTop: "20%" }}>
					<Image
						src={ currentUser.avatar === "" ?  "/Image/avatardefault.png" : currentUser.avatar}
						alt="image"
						width="100px"
						height="100px"
					></Image>
				</div>
				<div className="information-container">
					<i className="name-information-chatbox">{currentUser.name}</i>
					<p className="subject-information-chatbox">{currentUser.role === "User" ? "Student" : "Tutor"}</p>
				</div>
				<div className="information-chatbox2">
					<i className="text-black" style={{ fontFamily: "Segoe UI", marginLeft: "5px" }}>
						All conversations
					</i>
					<i className="" style={{ color: "#FF0000", marginLeft: "30%" }}>
						3
					</i>
					<div style={{ marginTop: "10px" }}>{listConversations}</div>
				</div>
			</div>

			<div className="col-9">
				<div class="box-chat">
					<div class="box-chat_message">
						{renderMess}
						<div style={{ float: "left", clear: "both" }} ref={messagesEnd}></div>
					</div>

					<div className="enter-your-message">
						<InputText
							className="enter-message-chat"
							name="message"
							placeholder="Enter your message..."
							value={message}
							onKeyDown={onEnterPress}
							onChange={handleChange}
							placeholder="Enter your message"
						></InputText>
						<i className="far fa-arrow-alt-circle-right fa-2x"
							onClick={sendMessage}
							style={{
								display: "inline-block",
								marginLeft: "30px",
								bottom:"10px",
								color: "#B34EE3",
							}}
						></i>
					</div>
				</div>
			</div>
		</div >
	);
}
export default ChatBox;
