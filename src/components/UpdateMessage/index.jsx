import React, { useContext } from "react";
import { MessageContext } from "../../context/MessageProvider";
import { Link, useParams } from "react-router-dom";

const UpdateMessage = () => {
  const { message } = useParams();
  const { messages, setMessages } = useContext(MessageContext);
  return (
    <div>
      <Link to={`/`}>Back</Link>
      <h5>Update: {message}</h5>
    </div>
  );
};

export default UpdateMessage;
