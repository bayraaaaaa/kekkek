import React from "react";
import "../styles/login.css";
import { TbSend } from "react-icons/tb";
import {Link} from "react-router-dom"
import {useState} from "react"
import axios from "axios"
<link href="https://fonts.google.com/specimen/Poppins" rel="stylesheet"></link>;
function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const Login = async () => {
    try {
      const res = await axios.post("http://localhost:6969/authorization/login", {
        email: email,
        password: password,
      });
      console.log(res, "this");
      //   console.log(res.data.data._id);
      alert("amjilttai");
      // window.localStorage.setItem("token", JSON.stringify(res.data.token));
      // window.localStorage.setItem("id", JSON.stringify(res.data.data_id));
      window.location.replace("/SignupPage");
      // localStorage.setItem("token");
    } catch (error) {
      alert(error.response.data.error);
    }
  };
  return (
    
    <div className="loginContainer">
      <div className="loginHeader">
        <p style={{ color: "rgb(88,134,249)", fontSize: "22px" }}>
          Register Now
        </p>
      </div>
      <div className="main">
        <input className="loginInput" placeholder="username" type="text" />
        <input className="loginInput" placeholder="email" type="text" onChange={(e)=>setEmail(e.target.value)}/>
        <input className="loginInput" placeholder="password" type="text" onChange={(e)=>setPassword(e.target.value)}/>
        <input
          className="loginInput"
          placeholder="confirm password"
          type="text"
        />
      </div>
      <div className="loginFooter">
        <div className="loginIcon">
          <TbSend style={{ color: "white" }} onClick={()=>Login()}/>
        </div>
      </div>
      <div className="loginFooterChoose">
        <p className="greyText">Already have an account?</p>
        
        <p className="blueText">
        <Link to={"/SignupPage"}>Sign In</Link>
        </p>
        
      </div>
      <div className="loginFooterShadow"></div>
    </div>
  );
}

export default Login;
