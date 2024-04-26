import React, { useContext, useState } from "react";
import { MessageContext } from "../../context/MessageProvider";
import { Link, useNavigate, useParams } from "react-router-dom";

const UpdateMessage = () => {
  const { message } = useParams();
  const { messages, setMessages } = useContext(MessageContext);
  const [inputValue, setInputValue] = useState(message);
  const [isUpdating, setIsUpdating] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMessages = [...messages];
    const startIndex = newMessages.indexOf(message);
    newMessages.splice(startIndex, 1, inputValue);
    setMessages(newMessages);
    localStorage.setItem("crud-05-messages", JSON.stringify(newMessages));
    setInputValue("");
    setIsUpdating(true);
    setTimeout(() => {
      setIsUpdating(false);
      navigate(`/`);
    }, 2000);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <Link to={`/`}>Back</Link>
      <h4>CreateMessage</h4>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} />
      </form>
      <p>{messages.join(", ")}</p>
      {isUpdating && <p>Updating...</p>}
    </div>
  );
};

export default UpdateMessage;
