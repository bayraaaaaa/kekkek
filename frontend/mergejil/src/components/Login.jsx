import React from "react";
import "../styles/login.css";
import { TbSend } from "react-icons/tb";
<link href="https://fonts.google.com/specimen/Poppins" rel="stylesheet"></link>;
function Login() {
  return (
    <div className="loginContainer">
      <div className="loginHeader">
        <p style={{ color: "rgb(88,134,249)", fontSize: "22px" }}>
          Register Now
        </p>
      </div>
      <div className="main">
        <input className="loginInput" placeholder="username" type="text" />
        <input className="loginInput" placeholder="email" type="text" />
        <input className="loginInput" placeholder="password" type="text" />
        <input
          className="loginInput"
          placeholder="confirm password"
          type="text"
        />
      </div>
      <div className="loginFooter">
        <div className="loginIcon">
          <TbSend style={{ color: "white" }} />
        </div>
      </div>
      <div className="loginFooterChoose">
        <p className="greyText">Already have an account?</p>
        <p className="blueText">Sign In</p>
      </div>
      <div className="loginFooterShadow"></div>
    </div>
  );
}

export default Login;
