import React, { useContext } from "react";
import { MessageContext } from "../../context/MessageProvider";
import Message from "../Message";
import { Link } from "react-router-dom";

const Messages = () => {
  const { messages } = useContext(MessageContext);

  return (
    <div>
      <h5>Messages</h5>
      {messages.map((message) => {
        return <Message message={message} />;
      })}
      <Link to={`/create`}>
        <button>Create Message</button>
      </Link>
    </div>
  );
};

export default Messages;
