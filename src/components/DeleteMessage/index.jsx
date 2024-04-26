import React, { useContext, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { MessageContext } from "../../context/MessageProvider";

const DeleteMessage = () => {
  const { message } = useParams();
  const { messages, setMessages } = useContext(MessageContext);
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();

  const handleDelete = () => {
    const newMessages = messages.filter((msg) => msg !== message);
    setMessages(newMessages);
    localStorage.setItem("crud-05-messages", JSON.stringify(newMessages));
    setIsDeleting(true);
    setTimeout(() => {
      setIsDeleting(false);
      navigate(`/`);
    }, 2000);
  };

  return (
    <div>
      <Link to={`/`}>Back</Link>
      <h4>Delete: {message}</h4>
      <button onClick={handleDelete}>Delete {message}</button>
      <p>{messages.join(", ")}</p>
      {isDeleting && <p>Deleting...</p>}
    </div>
  );
};

export default DeleteMessage;
