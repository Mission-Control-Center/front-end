import React, { useState } from "react";
import _ from 'lodash';

import ActionModal from '../../components/ActionModal';

function EditableRow(props) {
  const { index, dataObject, editPermission, deletePermission } = props;

  const [showModal, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <>
      <tr key={index}>
        <th scope="row">{index + 1}</th>
        <td>{_.get(dataObject, 'name', '')}</td>
        <td><span onClick={handleShow}><i class="bi bi-pencil-fill"></i></span></td>
        <td>  
          <span onClick={(e) => deletePermission(e, _.get(dataObject, 'id', ''))}><i class="bi bi-archive-fill"></i></span>
        </td>
      </tr>
      <ActionModal
        editTable={'Edit Permission'}
        item={dataObject} 
        onSubmit={editPermission}
        handleClose={handleClose} 
        showModal={showModal} 
      />
    </>
  )
}

export default EditableRow;