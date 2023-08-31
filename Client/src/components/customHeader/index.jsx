import React from "react";
import { ChatBubbleLeftRightIcon, PhoneIcon } from "@heroicons/react/24/solid";

const CustomerHeader = ({ chat }) => {
  return (
    <div className="chat-header">
      <div className="flex-between">
        <ChatBubbleLeftRightIcon className="icon-chat" />
    
        <h3 className="header-text">{chat.title}</h3>
      </div>
      <div className="flex-between">
        <PhoneIcon className="icon-phone" />
        {console.log(chat.description)}
        {chat.description !== "⬅️ ⬅️ ⬅️" ? (
          <p className="header-text">{chat.description}</p>
        ) : (
          <p className="header-text">no chat selected</p>
        )}
      </div>
    </div>
  );
};

export default CustomerHeader;
