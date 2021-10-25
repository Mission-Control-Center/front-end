import React from "react";

import SignupForm from "./SignupForm";

import "./styles.css";

function Signup(props) {
  const { handleSignup } = props;
  
  return (
    <>
      <div className="split left">
        <div className="centered">
          <p style={{ color: "white", fontSize: 30 }}>Mission Control Center</p>
        </div>
      </div>

      <div className="split right">
        <div className="centered">
          <SignupForm handleSignup={handleSignup} />
        </div>
      </div>
    </>
  );
}

export default Signup;