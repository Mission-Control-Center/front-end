import React from "react";

import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

import "./styles.css";

export default function Login(props) {
  const { handleSignup, handleLogin, hasAnAccount } = props;
  
  return (
    <>
      <div className="split left">
        <div className="centered">
          <p style={{ color: "white", fontSize: 30 }}>Mission Control Center</p>
        </div>
      </div>

      <div className="split right">
        <div className="centered">
          {
            hasAnAccount ? <LoginForm handleLogin={handleLogin} /> : <SignupForm handleSignup={handleSignup} />
          }
        </div>
      </div>
    </>
  );
}