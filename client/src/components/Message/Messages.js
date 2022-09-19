import React from "react";

import ScrollToBottom from "react-scroll-to-bottom";
import Msg from "./Msg";

const Messages = ({ messages, name }) => {
    console.log("messagesmessagesmessages", messages);

    return (
        <ScrollToBottom className="flex-auto overflow-auto px-4 ">
            {messages.map((message, i) => {
                // console.log("message in ", message);
                return (
                    <div key={i}>
                        <Msg
                            message={message}
                            name={name}
                            // timeStamp={thisTime}
                        />
                    </div>
                );
            })}
        </ScrollToBottom>
    );
};

export default Messages;
