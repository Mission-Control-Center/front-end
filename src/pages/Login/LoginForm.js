import { useState } from "react";
import { Form, Button } from "react-bootstrap";

import FormInput from "../../components/FormInput";

function LoginForm(props) {
  const { handleLogin } = props;
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  return (
    <>
      <Form style={{ width: "120%" }}>
        <h1 className="landing-heading">Sign In</h1>
        
        <FormInput label="Email" inputValue={email} setInputValue={setEmail} />
        <FormInput label="Password" inputType="password" inputValue={password} setInputValue={setPassword} />
        
        <div className="d-grid gap-2">
          <Button
            size="lg"
            type="submit"
            disabled={!validateForm()}
            size="lg"
            className="landing-submit-button"
            onClick={(e) => handleLogin(e, { email, password })}
          >
            Submit
          </Button>
        </div>
        <div style={{ textAlign: "right" }}>
          <a href="/signup">
            Not a member? Signup!
          </a>
        </div>
      </Form>
    </>
  );
}

export default LoginForm;
