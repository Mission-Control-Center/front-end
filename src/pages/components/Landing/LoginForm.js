import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

function LoginForm(props) {
  const { handleSubmit } = props;

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  return (
    <>
      <Form onSubmit={handleSubmit} style={{ width: "120%" }}>
        <h1 style={{ color: "#212529" }}>Sign In</h1>
        <Form.Group size="lg" controlId="email">
          <div style={{ textAlign: "left" }}>
            <Form.Label>Email</Form.Label>
          </div>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              marginBottom: 16,
            }}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="password">
          <div style={{ textAlign: "left" }}>
            <Form.Label>Password</Form.Label>
          </div>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              marginBottom: 16,
            }}
          />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button
            size="lg"
            type="submit"
            disabled={!validateForm()}
            size="lg"
            class="landing-submit-button"
          >
            Submit
          </Button>
        </div>
        <div style={{ textAlign: "right" }}>
          <a href="/signup" style={{ color: "black" }}>
            Not a member? Signup!
          </a>
        </div>
      </Form>
    </>
  );
}

export default LoginForm;
