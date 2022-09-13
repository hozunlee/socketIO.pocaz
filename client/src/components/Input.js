import React from "react";

const Input = ({ setMessage, sendMessage, message }) => {
    return (
        <form action="" className="flex">
            <input
                type="text"
                placeholder="메세지를 입력하라"
                value={message}
                onChange={({ target: { value } }) => setMessage(value)}
                onKeyPress={(event) =>
                    event.key === "Enter ? sendMessage(event) : null"
                }
                className="mr-3 mt-3"
            />
            <button onClick={(e) => sendMessage(e)}>전송</button>
        </form>
    );
};

export default Input;
