import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import dayjs from "dayjs";

import InfoBar from "./InfoBar";
import Input from "./Input";
import Messages from "./Message/Messages";
import TextContainer from "./TextContainer/TextContainer";
import { useLocation } from "react-router-dom";

const ENDPOINT = "http://localhost:5000";
let socket;

const Chat = () => {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const [users, setUsers] = useState("");
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const location = useLocation();

    const thisTime = dayjs().format("HH:mm");

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);
        socket = io.connect(ENDPOINT, {
            cors: { origin: "*" },
        });

        setRoom(room);
        setName(name);
        socket.emit("join", { name, room }, (error) => {
            if (error) {
                alert(error);
            }
        });
    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on("message", (message) => {
            setMessages((messages) => [...messages, message]);
        });

        socket.on("roomData", ({ users }) => {
            setUsers(users);
        });
    }, []);

    const sendMessage = (event) => {
        event.preventDefault();
        if (message) {
            socket.emit("sendMessage", { message, thisTime }, () =>
                setMessage("")
            );
        }
    };

    return (
        <div className="outerContainer flex justify-center items-center h-screen bg-gray-800">
            <div className="container flex flex-col justify-between bg-white rounded-lg h-3/4 w-2/3">
                <h1>하이 여긴 챗</h1>
                <InfoBar room={room} />
                <Messages messages={messages} name={name} />
                <Input
                    message={message}
                    setMessage={setMessage}
                    sendMessage={sendMessage}
                />
            </div>
            <TextContainer users={users} />
        </div>
    );
};

export default Chat;
