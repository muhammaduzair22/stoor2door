import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css"

import axios from "axios";

const LoginPage = () => {
  let navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = async (e) => {
    axios.post('http://localhost:3001/user/login', {
      "username": username,
      "password": password
    }).then(res => {
      alert('Login successful');
      localStorage.setItem('token', res.data);
      console.log('Response:', res.data);
      navigate('/home');
    }).catch(err => {
      alert("Invalid Credentails")
    })
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
              onChange={(e) => setUsername(e.target.value)}
            ></input>
            <br />
            <br />
            <h2>Password</h2>
            <br />
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
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
            LogIn
          </button>
        </div>
      </div>
    </div>

  );
};

export default LoginPage;
