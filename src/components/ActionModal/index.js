import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import _ from 'lodash';

import FormInput from '../FormInput';

function ActionModal(props) {
  const { onSubmit, handleClose, showModal, editTable, item } = props;
  const [formValue, setFormValue] = useState(_.get(item, 'name', ''));
  
  async function handleSubmit(e) {
    await onSubmit(e, { id: _.get(item, 'id', ''), value: formValue })
    handleClose();
  }
  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editTable}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormInput 
            label="Name" 
            inputValue={formValue} 
            setInputValue={setFormValue} 
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button 
            variant="primary" 
            onClick={handleClose} 
            onClick={(e) => handleSubmit(e)}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ActionModal;
