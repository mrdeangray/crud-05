import React, { useContext, useState } from "react";
import { MessageContext } from "../../context/MessageProvider";
import { Link } from "react-router-dom";

const CreateMessage = () => {
  const { messages, setMessages } = useContext(MessageContext);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMessages = [...messages, inputValue];
    setMessages(newMessages);
    localStorage.setItem("crud-05-messages", JSON.stringify(newMessages));
    setInputValue("");
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
    </div>
  );
};

export default CreateMessage;
