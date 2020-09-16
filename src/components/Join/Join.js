import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import './Join.css'
import '../Header/Header.css';
const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  return (
    <>
      <div className="joinOuterContainer">
      <Header />
        <div className="joinInnerContainer">
          <h1 className="heading">Join</h1>
          <div>
            <input
              placeholder="user"
              className="joinInput"
              type="text"
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div>
            <input
              placeholder="room"
              className="joinInput mt-20"
              type="text"
              onChange={(event) => setRoom(event.target.value)}
            />
          </div>
          <Link
            onClick={(event) =>
              (!name || !room) ? event.preventDefault() : null
            }
            to={`/chat?name=${name}&room=${room}`}
          >
            <button className="button mt-20" type="submit">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Join;
