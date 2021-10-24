import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";


function SignupForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  
  function validateForm() {
    return email.length > 0 && password.length > 0 && password === passwordConfirmation;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const params = { 
      first_name: firstName, 
      last_name: lastName,
      email, 
      password,
      mobile_no: mobileNo, 
    };
    
    let request;
    try {
      request = await axios.post("/users", params);
    } catch(e) { console.log(e) }
    const token = request.data.auth_token;
    window.localStorage.setItem('token', token);
  }

  return (
    <>
      <Form onSubmit={handleSubmit} style={{ width: "120%" }}>
        <h1 style={{ color: "#212529", marginBottom: 50 }}>Signup</h1>
        <div style={{
          display: "flex", flexDirection: "horizontal", justifyContent: "space-between"
        }}>
          <Form.Group size="lg" controlId="first_name">
            <div style={{ textAlign: "left" }}><Form.Label>First Name</Form.Label></div>
            <Form.Control
              autoFocus
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              style={{
                marginBottom: 16
              }}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="last_name">
            <div style={{ textAlign: "left" }}><Form.Label>Last Name</Form.Label></div>
            <Form.Control
              autoFocus
              type="last_name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              style={{
                marginBottom: 16
              }}
            />
          </Form.Group>
        </div>
        
        <div style={{
          display: "flex", flexDirection: "horizontal", justifyContent: "space-between"
        }}>
          <Form.Group size="lg" controlId="password">
            <div style={{ textAlign: "left" }}><Form.Label>Password</Form.Label></div>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                marginBottom: 16
              }}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password_confirmation">
            <div style={{ textAlign: "left" }}><Form.Label>Confirm Password</Form.Label></div>
            <Form.Control
              type="password"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              style={{
                marginBottom: 16
              }}
            />
          </Form.Group>
        </div>

        <Form.Group size="lg" controlId="email">
          <div style={{ textAlign: "left" }}><Form.Label>Email</Form.Label></div>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              marginBottom: 16
            }}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="mobile_no">
          <div style={{ textAlign: "left" }}><Form.Label>Mobile Number</Form.Label></div>
          <Form.Control
            autoFocus
            type="mobile_no"
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
            style={{
              marginBottom: 16
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
        <div style={{ textAlign: "right" }}><a href="/" style={{ color: "black" }}>Login?</a></div>
      </Form>
    </>
  );
}

export default SignupForm;