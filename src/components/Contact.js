import React from "react";
import "./Contact.css";

const Contact = ({ username, avatar, isOnline }) => {
  return (
    <div className="Contact">
      <img className="avatar" src={avatar} alt={`${username}`} />
      <div>
        <h3 className="name">{username}</h3>
        <div className="status">
          <div className={isOnline ? "status-online" : "status-offline"}></div>
          <p className="status-text">{isOnline ? "Online" : "Offline"}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
