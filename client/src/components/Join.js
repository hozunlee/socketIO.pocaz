import React, { useState } from "react";
import { Link } from "react-router-dom";

const Join = () => {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");

    return (
        <div>
            <div>
                <h1 className="text-xl bg-red-600">
                    아마 채팅목록이 되지 않을까요
                </h1>
                <div>
                    <input
                        type="text"
                        placeholder="이름"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        placeholder="채팅방"
                        className="joinInput mt-20"
                        type="text"
                        onChange={(event) => setRoom(event.target.value)}
                    />
                </div>
                <Link
                    onClick={(e) =>
                        !name || !room ? e.preventDefault() : null
                    }
                    to={`/chat?name=${name}&room=${room}`} //TODO 1:1 채팅을 어떻게 이동시킬것인지
                >
                    <button
                        className={"button mt-20"}
                        type="submit"
                        disabled={!name || !room}
                    >
                        가입
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Join;
