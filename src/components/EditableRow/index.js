import React, { useState } from "react";
import _ from 'lodash';

import ActionModal from '../ActionModal';
import ConfigModal from '../ActionModal/ConfigModal';

function EditableRow(props) {
  const { 
    index, 
    dataObject, 
    editObject, 
    deleteObject, 
    tableName, 
    modalList,
    permissions,
    addSubObject,
    deleteSubObject,
    version,
    owner,
    manager,
    users,
    roles,
    restoreObject,
  } = props;

  const [showModal, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  function handleDelete(e, params) {
    if (tableName === 'Configuration') {
      deleteObject(e, _.get(params, 'app_config_id', ''));
    } else {
      deleteObject(e, _.get(params, 'id', ''));  
    }
  }

  return(
    <>
      <tr key={index}>
        <th scope="row">{index + 1}</th>
        { version && <td>{version}</td> }
        <td>{_.get(dataObject, 'name', '')}</td>
        { owner && <td>{_.get(owner, 'username', '')}</td> }
        { manager && <td>{_.get(manager, 'username', '')}</td> }
        
        {
          restoreObject ? 
          <td>  
            <span onClick={(e) => restoreObject(e, _.get(dataObject, 'app_config_id', ''))}><i class="bi bi-recycle" /></span>
          </td>
          :
          <>
            <td><span onClick={handleShow}><i class="bi bi-pencil-fill"></i></span></td>
            <td>  
              <span onClick={(e) => handleDelete(e, dataObject)}><i class="bi bi-archive-fill" /></span>
            </td>
          </>
        }
      </tr>
      {
        tableName == "Configuration" ?
        <ConfigModal
          editTable={'Edit Config'}
          onSubmit={editObject}
          item={dataObject}
          users={users}
          roles={roles}
          handleClose={handleClose} 
          showModal={showModal}
          addSubObject={addSubObject}
          deleteSubObject={deleteSubObject}
          modalList={modalList}
        /> :
        <ActionModal
          tableName={tableName}
          item={dataObject} 
          onSubmit={editObject}
          handleClose={handleClose} 
          showModal={showModal}
          modalList={modalList}
          permissions={permissions}
          addSubObject={addSubObject}
          deleteSubObject={deleteSubObject}
        />
      }
    </>
  )
}

export default EditableRow;