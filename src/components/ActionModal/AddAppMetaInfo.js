import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import _ from 'lodash';

import FormInput from '../FormInput';

function UserSelect({title, setItemVal, users}) {
  return (
    <Form.Select aria-label="manager-select" onChange={(e) => setItemVal(e.target.value)}>
      <option>{title}</option>
      {
        _.map(users, it => (
          <option value={_.get(it, 'id', '')}>{_.get(it, 'email', '')}</option>
        ))
      }
    </Form.Select>
  )
}

function AddAppMetaInfo(props) {
  const {
    onSubmit, 
    handleClose, 
    showModal, 
    editTable, 
    item, 
    users,
  } = props;

  const [formValue, setFormValue] = useState(_.get(item, 'name', ''));
  const [userOwner, setOwner] = useState(0);
  const [userAppManager, setAppManager] = useState(0);

  async function handleSubmit(e) {
    await onSubmit(e, { 
      id: _.get(item, 'id', ''), 
      name: formValue,
      manager_id: userAppManager,
      owner_id: userOwner,
    })
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
          {users && 
            <>
              <UserSelect title="Add Owner" setItemVal={setOwner} users={users} />
              <br />
              <UserSelect title="Add Manager" setItemVal={setAppManager} users={users} />
            </> 
          }
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
            Add Config
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddAppMetaInfo;
