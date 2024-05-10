import React, { useEffect, useState } from "react";
import "./Home.css";
import img from "../images/logochat.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const navigate = useNavigate();
  const [User, setUser] = useState([]);
  const [password, setPassword] = useState();
  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:5000/user/${User}`, {})
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (Object.keys(data).length === 0) {
          toast.error("Please Enter valid email");
        } else {
          if (data[0].password === password) {
            toast.success("Successfully logged in");
            sessionStorage.setItem("username", User);
            navigate("/chat");
          } else {
            toast.error("Pleace Enter valid Email/Password");
          }
        }
      });
  };

  const loginForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            placeholder="Email"
            name="uname"
            id="username"
            onChange={(e) => setUser(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <input
            type="password"
            placeholder="Password"
            name="pass"
            onChange={(e) => setPassword(e.target.value)}
            id="pass"
            required
          />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="homepage">
      <img src={img} alt="logo" width="15%" />
      <div className="login-form">
        <div className="title">LOG IN</div>
        {loginForm}
        <div className="register">
          New to MY CHAT ?<a href="/signup">Register</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
