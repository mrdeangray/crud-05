import React from "react";
import { Link } from "react-router-dom";

const Message = ({ message }) => {
  return (
    <div>
      <span>{message}</span>
      <Link to={`/update/${message}`}>update</Link>
      <Link to={`/delete/${message}`}>delete</Link>
    </div>
  );
};

export default Message;
