import React from "react";

import onlineIcon from "../icons/onlineIcon.png";
import closeIcon from "../icons/closeIcon.png";

const InfoBar = ({ room }) => {
    return (
        <div className="flex items-center justify-between bg-blue-500 rounded-t-md h-16 w-full">
            <div className="flex items-center ml-4 text-white ">
                <img
                    className="onlineIcon mr-3"
                    src={onlineIcon}
                    alt="online icon"
                />
                <h3>{room}</h3>
            </div>
            <div className="flex flex-shrink-0 mr-4 content-end ">
                <a href="/">
                    <img src={closeIcon} alt="close icon" />
                </a>
            </div>
        </div>
    );
};

export default InfoBar;
