import React from "react";

import LoginForm from "./LoginForm";

import "./styles.css";

export default function Login(props) {
  const { handleLogin } = props;
  
  return (
    <>
      <div className="split left">
        <div className="centered">
          <p style={{ color: "white", fontSize: 30 }}>Mission Control Center</p>
        </div>
      </div>

      <div className="split right">
        <div className="centered">
          <LoginForm handleLogin={handleLogin} />
        </div>
      </div>
    </>
  );
}