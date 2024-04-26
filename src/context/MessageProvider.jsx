import React, { createContext, useEffect, useState } from "react";

export const MessageContext = createContext(null);

const MessageProvider = ({ children }) => {
  const [messages, setMessages] = useState(["aaa", "bbb"]);

  useEffect(() => {
    setMessages(JSON.parse(localStorage.getItem("crud-05-messages")) || []);
  }, []);

  return (
    <MessageContext.Provider value={{ messages, setMessages }}>
      {children}
    </MessageContext.Provider>
  );
};

export default MessageProvider;
