import React from "react";

import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

import "../../stylesheets/Landing.css";

export default function Login(props) {
  const { handleSubmit, hasAnAccount } = props;
  
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
            hasAnAccount ? <LoginForm handleSubmit={handleSubmit} /> : <SignupForm />
          }
        </div>
      </div>
    </>
  );
}