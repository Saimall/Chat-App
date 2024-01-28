import React, { useEffect } from "react";
import axios from "axios";
import { chats } from "../backend/backend/data/data";
const ChatPage = () => {
  const fetchChats = async () => {
    const data = await axios.get("/api/chat");

    console.log(data);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
      {chats.maps((chat) => (
        <div>{chat.chatName} </div>
      ))}
    </div>
  );
};

export default ChatPage;
