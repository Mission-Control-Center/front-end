import { useState } from "react";
import { Form } from "react-bootstrap";

function FormInput(props) {
  const { label, inputType, controllerId } = props;

  const [inputValue, setInputValue] = useState(''); 
  
  return (
    <>
      <Form.Group size="lg" controlId={controllerId || label}>
        <div style={{ textAlign: "left" }}>
          <Form.Label>{label}</Form.Label>
        </div>
        <Form.Control
          autoFocus
          type={inputType || 'text'}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{
            marginBottom: 16,
          }}
        />
      </Form.Group>
    </>
  )
}

export default FormInput;