import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import _ from 'lodash';

import FormInput from '../FormInput';
import ModalList from "./ModalList";
import AddItemRow from "./AddItemRow";

function ActionModal(props) {
  const { 
    onSubmit, 
    handleClose, 
    showModal, 
    editTable, 
    item, 
    modalList,
    permissions, 
    addSubObject,
    deleteSubObject,
  } = props;

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
          {
            modalList && modalList.length !== 0 && <ModalList listObject={modalList} deleteSubObject={deleteSubObject} /> 
          }
          { permissions && <AddItemRow items={permissions} mainObj={_.get(item, 'id', '')} addSubObject={addSubObject} /> }
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
