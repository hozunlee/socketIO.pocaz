import React from "react";

import ReactEmoji from "react-emoji";

const Msg = ({ message: { text, user, timeStamp }, name }) => {
    //TODO TimeStamp 추가
    console.log("timeStamp :>> ", timeStamp);
    const trimmedName = name.trim().toLowerCase();

    let isSentByCurrentUser = false;
    if (user === trimmedName) isSentByCurrentUser = true;

    return isSentByCurrentUser ? (
        <div className="messageContainer flex justify-end py-3 mt-1">
            <div>
                <p className="sentText flex items-center text-gray-400 tracking-tight">
                    {trimmedName}
                </p>
                <p>{timeStamp}</p>
            </div>
            <div className="messageBox bg-blue-700 rounded-3xl px-2 py-5 inline-block text-white max-w-fit">
                <p className="messageText colorWhite w-full letter tracking-normal float-left text-lg ">
                    {ReactEmoji.emojify(text)}
                </p>
            </div>
        </div>
    ) : (
        <div className="messageContainer flex justify-start py-3 mt-1">
            <div className="messageBox bg-yellow-300 rounded-3xl px-2 py-5 inline-block text-white max-w-fit">
                <p className="messageText text-gray-800 w-full letter tracking-normal float-left text-base ">
                    <span className=" align-middle">
                        {ReactEmoji.emojify(text)}
                    </span>
                </p>
            </div>
            <p className="sentText  flex items-center text-gray-400 tracking-tight pl-2 ">
                {user}
            </p>
            <p>{timeStamp}</p>
        </div>
    );
};

export default Msg;
