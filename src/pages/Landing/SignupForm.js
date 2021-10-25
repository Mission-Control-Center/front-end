import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

import FormInput from "../../components/FormInput";

function SignupForm(props) {
  const { handleSingup } = props;
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  
  function validateForm() {
    return email.length > 0 && password.length > 0 && password === passwordConfirmation;
  }

  return (
    <>
      <Form onSubmit={handleSingup} style={{ width: "120%" }}>
        <h1 className="landing-heading">Signup</h1>
        
        <FormInput label="Username" />
        <FormInput label="Email" />
        <FormInput label="Password" inputType="password" />
        <FormInput label="Password Confirmation" inputType="password" />
        
        <div className="d-grid gap-2">
          <Button 
            size="lg" 
            type="submit" 
            disabled={!validateForm()} 
            size="lg"
            className="landing-submit-button"
          >
            Submit
          </Button>
        </div>
        <div style={{ textAlign: "right" }}><a href="/">Login?</a></div>
      </Form>
    </>
  );
}

export default SignupForm;