import { Routes, Route } from "react-router-dom";
import "./App.css";
import Messages from "./components/ReadMessages";
import CreateMessage from "./components/CreateMessage";
import UpdateMessage from "./components/UpdateMessage";
import DeleteMessage from "./components/DeleteMessage";
import MessageProvider from "./context/MessageProvider";

function App() {
  return (
    <div className="App">
      <MessageProvider>
        <Routes>
          <Route exact path="/" element={<Messages />} />
          <Route exact path="/create" element={<CreateMessage />} />
          <Route exact path="/update/:message" element={<UpdateMessage />} />
          <Route exact path="/delete/:message" element={<DeleteMessage />} />
        </Routes>
      </MessageProvider>
    </div>
  );
}

export default App;
