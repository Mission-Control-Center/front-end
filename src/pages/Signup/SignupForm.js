import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

import FormInput from "../../components/FormInput";

function SignupForm(props) {
  const { handleSignup } = props;
  
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  
  function validateForm() {
    return email.length > 0 && password.length > 0 && password === passwordConfirmation;
  }

  return (
    <>
      <Form style={{ width: "120%" }}>
        <h1 className="landing-heading">Signup</h1>
        
        <FormInput label="Username" inputValue={username} setInputValue={setUsername} />
        <FormInput label="Email" inputValue={email} setInputValue={setEmail} />
        <FormInput label="Password" inputType="password" inputValue={password} setInputValue={setPassword} />
        <FormInput 
          label="Password Confirmation" 
          inputType="password" 
          inputValue={passwordConfirmation} 
          setInputValue={setPasswordConfirmation} 
        />
        
        <div className="d-grid gap-2">
          <Button 
            size="lg" 
            type="submit" 
            disabled={!validateForm()} 
            size="lg"
            className="landing-submit-button"
            onClick={(e) => handleSignup(e, { email, username, password })}
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