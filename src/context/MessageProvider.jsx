import React, { createContext, useState } from "react";

export const MessageContext = createContext(null);

const MessageProvider = ({ children }) => {
  const [messages, setMessages] = useState(["aaa", "bbb"]);

  return (
    <MessageContext.Provider value={{ messages, setMessages }}>
      {children}
    </MessageContext.Provider>
  );
};

export default MessageProvider;
