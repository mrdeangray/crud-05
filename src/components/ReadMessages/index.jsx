import React, { useContext } from "react";
import { MessageContext } from "../../context/MessageProvider";
import Message from "../Message";

const Messages = () => {
  const { messages, setMessages } = useContext(MessageContext);
  return (
    <div>
      <h5>Messages</h5>
      {messages.map((message) => {
        return <Message message={message} />;
      })}
    </div>
  );
};

export default Messages;
