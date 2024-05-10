import React, { useState } from "react";
import "./Signup.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import img from "../images/logochat.png";
const Signup = () => {
  const navigate=useNavigate();
  const [User, setUser] = useState("");
  const [email,setEmail]=useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      
      const data={
        name:User,
        password:password,
        email:email
      };
      try{
      const response=await fetch(`http://localhost:5000/user`,{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(data),

      });
      if (response.ok) {
         toast.success("Successfully Registered");
      navigate("/");

    }
    else{
      toast.error("User Exist");
      setEmail("");
      setUser("");
      setConfirmPassword("");
      setPassword("");      
    }
    
      }
      catch(err){
        console.error("Error sending data",err);
      }
      

    }
     else {
      toast.error("Passwords do not match. Please try again.");
      setConfirmPassword('');
      setPassword('');      
    }
  };

  const signupForm = (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            placeholder="Email"
            name="uname"
            id="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-container">
          <input
            type="text"
            placeholder="Name"
            name="pass"
            value={User}
            onChange={(e) => setUser(e.target.value)}
            id="pass"
            required
          />
        </div>

        <div className="input-container">
          <input
            type="password"
            placeholder="Password"
            name="pass"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="pass"
            required
          />
        </div>

        <div className="input-container">
          <input
            type="password"
            placeholder="Confirm Password"
            name="pass"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            id="pass"
            required
          />
        </div>

        <div className="button-container">
          <input type="submit" placeholder="Sign Up" />
        </div>
      </form>
    </div>
  );


  return (
    <div className="signup">
      <img src={img} alt="logo" width="15%" />
      <div className="box1">
        <div className="title">SIGN UP</div>
        {signupForm}
        <div>
          Already a member to MY CHAT ? <a href="/"> Log In</a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
