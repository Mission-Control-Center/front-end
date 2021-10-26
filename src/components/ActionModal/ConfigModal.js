import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import _ from 'lodash';

import AddItemRow from "./AddItemRow";
import FormInput from '../FormInput';
import ModalList from "./ModalList";

function UserSelect({title, defaultVal, setItemVal, users}) {
  return (
    <>
      <div style={{ textAlign: "left" }}>
        <Form.Label>{title}</Form.Label>
      </div>
          
      <Form.Select aria-label="manager-select" onChange={(e) => setItemVal(e.target.value)}>
        <option>{defaultVal}</option>
        {
          _.map(users, it => (
            <option value={_.get(it, 'id', '')}>{_.get(it, 'email', '')}</option>
          ))
        }
      </Form.Select>
    </>
  )
}

function ConfigModal(props) {
  const {
    onSubmit, 
    handleClose, 
    showModal, 
    editTable, 
    item, 
    users,
    roles,
    addSubObject,
    modalList,
    deleteSubObject,
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
          { users && 
              <>
                <UserSelect title="Add Owner" setItemVal={setOwner} users={users} defaultVal={_.get(item, 'users.owner.email')} />
                <br />
                <UserSelect title="Add Manager" setItemVal={setAppManager} users={users} defaultVal={_.get(item, 'users.manager.email')} />
              </> 
          }
          <hr />
          {
            modalList && modalList.length !== 0 && 
              (<ModalList 
                tableName="Roles" 
                listObject={modalList} 
                deleteSubObject={deleteSubObject} 
              />) 
          }
          { roles &&
              <>
                <div style={{ textAlign: "left" }}>
                  <Form.Label>Add Role</Form.Label>
                </div> 
                <AddItemRow 
                  title="Add Role" 
                  items={roles} 
                  mainObj={_.get(item, 'app_config_id', '')} 
                  addSubObject={addSubObject}
                  configTable={true} 
                /> 
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

export default ConfigModal;
