import React, { useState } from 'react'
import './Login.css'
import { Header } from '../Header/Header';
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleStartClick = () => {
    const inputValue = document.getElementById('nameInput').value;
    navigate("/question", { state: { name: inputValue } });
  };

  return (
    <div>
      <Header/>
      <div className="login-container">
        <div className="login-box">
          <h2 className="text-center login_title">Login</h2>
          <div className="login-image">
            <img className="login_img" src="../src/assets/login_img.png" />
          </div>
          <div className="mb-3">
            <input type="text" id="nameInput" className="form-control" placeholder="Name" />
          </div>
          <div className="text-center">
            <button className="btn btn-success"  onClick={handleStartClick} >Start</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login