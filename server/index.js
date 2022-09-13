const express = require("express");
const cors = require("cors");
const socketio = require("socket.io");
const http = require("http");

const router = require("./router");

const { addUser, removeUser, getUser, getUsersInRoom } = require("./users.js");

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});

app.use(
    cors({
        origin: ["*"], // 모든 출처 허용 옵션. true 를 써도 된다.
    })
);
app.use(router);

io.on("connection", (socket) => {
    console.log("새로운 connection 이 발생하였다");
    socket.on("join", ({ name, room }, callback) => {
        const { error, user } = addUser({ id: socket.id, name, room });
        console.log("user :>> ", user);
        if (error) callback({ error: "에러가 발생했어요." });

        socket.emit("message", {
            user: "admin",
            text: `${user.name}, ${user.room}에 오신것을 환영합니다.`,
        });
        socket.broadcast.to(user.room).emit("message", {
            user: "admin",
            users: getUsersInRoom(user.room),
        });
        socket.join(user.room);
        callback();
    });

    socket.on("sendMessage", (message, callback) => {
        const user = getUser(socket.id);
        // console.log("socket.id ===>", socket.id);
        // console.log("user ===>", user);
        // console.log("message :>> ", message);
        io.to(user.room).emit("message", { user: user.name, text: message });
        callback();
    });

    socket.on("disconnect", () => {
        const user = removeUser(socket.id);
        console.log("socket.id :>> ", socket.id);
        console.log("🚀 ~ file: index.js ~ line 53 ~ socket.on ~ user", user);

        if (user) {
            io.to(user.room).emit("message", {
                user: "Admin",
                text: `${user.name} 님이 방을 나갔습니다.`,
            });
            io.to(user.room).emit("roomData", {
                room: user.room,
                users: getUsersInRoom(user.room),
            });
            console.log("나감메세지 보냄");
        }
        console.log("유저가 떠났어요.");
    });
});

server.listen(PORT, () => console.log(`서버가 ${PORT} 에서 시작되었어요`));
