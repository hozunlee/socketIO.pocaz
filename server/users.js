const users = [];

const addUser = ({ id, name, room }) => {
    name = name.trim().toLowerCase();
    console.log("🚀 ~ file: users.js ~ line 5 ~ addUser ~ name", name);
    room = room.trim().toLowerCase();

    const existingUser = users.find(
        (user) => user.room === room && user.name === name
    );

    if (!name || !room) return { error: "사용자 이름과 방이 필요합니다." };
    if (existingUser) return { error: "이미 사용중인 이름입니다." };

    const user = { id, name, room };

    users.push(user);

    return { user };
};

const removeUser = (id) => {
    console.log("remove id :>> ", id);
    console.log("users :>> ", users);
    const index = users.findIndex((user) => user.id === id);
    console.log("index :>> ", index);
    if (index !== -1) return users.splice(index, 1)[0];
};

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };
