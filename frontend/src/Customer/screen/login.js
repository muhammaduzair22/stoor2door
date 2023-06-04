import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css"

import axios from "axios";

const LoginPage = (props) => {
  let navigate = useNavigate();
  // const [loginResName, setloginResName] = useState("false");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const usernameHandeler = (event) => {
    setUserName(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const loginHandler = async (e) => {
    e.preventDefault();

    // try {
    //   const response = await axios.post('/api/login', { email, password });

    //   // Handle successful login response
    //   console.log('Login successful:', response.data);

    //   // Reset form fields
    //   setEmail('');
    //   setPassword('');
    //   setErrorMessage('');
    // } catch (error) {
    //   // Handle error response from the API
    //   console.error('Login error:', error.response.data);
    //   setErrorMessage('Invalid email or password');
    // }
  };

  const admin = () => {
    console.log("Admin");
  };

  return (

    <div data-testid="comp">
      <div className="box-form">
        <div className="left" ></div>
        <div className="right">
          <h1>Login</h1>
          <br></br>
          <br></br>
          <div className="inputs">
            <h2>Username</h2>
            <br />
            <input
              type="text"
              placeholder="Username"
              onChange={usernameHandeler}
            ></input>
            <br />
            <br />
            <h2>Password</h2>
            <br />
            <input
              type="password"
              placeholder="password"
              onChange={passwordHandler}
            ></input>
          </div>
          <br />
          Don't have an account?
          <br />
          <a href="/signup">
            Create New account
          </a>
          <br />
          <br />
          <br />
          <button className="button-34" onClick={loginHandler}>
            Submit
          </button>
        </div>
      </div>
    </div>

  );
};

export default LoginPage;
