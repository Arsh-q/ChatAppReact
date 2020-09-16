import React from "react";
import "./Input.css";
const Input = ({ message, sendMessage, setMessage }) => {
  return (
    <>
      <form className="form">
        <input
          className="input"
          placeholder='Type a message...'
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          onKeyPress={(event) =>
            event.key === "Enter" ? sendMessage(event) : null
          }
          type="text"
        />
        <button onClick={(event) => sendMessage(event)} className="sendButton">
          Send
        </button>
      </form>
    </>
  );
};

export default Input;
