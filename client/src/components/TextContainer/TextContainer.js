import React from "react";

import onlineIcon from "../../icons/onlineIcon.png";

const TextContainer = ({ users }) => {
    return (
        <div className="textContainer flex flex-col ml-24 text-white h-3/5 justify-between">
            <div>
                <h1>
                    포카즈 채팅 프로그램{" "}
                    <span role="img" aria-label="emoji">
                        💬
                    </span>
                </h1>
                <h2>
                    Created with React, Express, Node and Socket.IO{" "}
                    <span role="img" aria-label="emoji">
                        ❤️
                    </span>
                </h2>
                <h2>
                    Try it out right now!{" "}
                    <span role="img" aria-label="emoji">
                        ⬅️
                    </span>
                </h2>
            </div>
            {users ? (
                <div>
                    <h1>현재 채팅중인 사람들 : </h1>
                    <div className="activeContainer flex items-center mb-11">
                        <h2>
                            {users.map(({ name }) => (
                                <div key={name} className="flex items-center">
                                    {name}
                                    <img alt="Online Icon" src={onlineIcon} />
                                </div>
                            ))}
                        </h2>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default TextContainer;
