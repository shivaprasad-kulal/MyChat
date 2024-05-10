import React, { useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import { useState } from "react";

const Chat = () => {
  const usenavigate = useNavigate();
  useEffect(() => {
    let username = sessionStorage.getItem("username");
    if (username === "" || username === null) {
      usenavigate("/");
    }
  }, [usenavigate]);
  //==============================================================================
  //new1
const usersData = [
  { id: 1, name: "User 1", messages: ["Hi", "Hello"] },
  { id: 2, name: "User 2", messages: ["How are you?", "Fine"] },
  // Add more user data as needed
];

  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (userId) => {
    setSelectedUser(userId);
  };

  return (
    <div style={{ display: "flex" }}>
      {/* User List Column */}
      <div style={{ flex: 1, borderRight: "1px solid #ccc", padding: "10px" }}>
        <h2>User List</h2>
        <ul>
          {usersData.map((user) => (
            <li
              key={user.id}
              onClick={() => handleUserClick(user.id)}
              style={{ cursor: "pointer" }}
            >
              {user.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Messages Column */}
      <div style={{ flex: 2, padding: "10px" }}>
        <h2>Messages</h2>
        {selectedUser !== null ? (
          <div>
            <h3>{usersData[selectedUser - 1].name}'s Messages</h3>
            <ul>
              {usersData[selectedUser - 1].messages.map((message, index) => (
                <li key={index}>{message}</li>
              ))}
            </ul>
          </div>
        ) : (
          <p>Select a user to see messages</p>
        )}
      </div>
    </div>
  );
};

  /*return (
    <div>
      <Link to="/">home</Link>
      <Link to="/">logout</Link>
      hii from chat
    </div>
  );
};*/

export default Chat;
