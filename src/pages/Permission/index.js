import { useState } from 'react'; 
import _ from 'lodash';
import { Button } from "react-bootstrap";

import Card from '../../components/Card';
import EditableRow from '../../components/EditableRow';
import ActionModal from '../../components/ActionModal';

import './styles.css'

function Permission(props) {
  const { data, addPermission, editPermission, deletePermission } = props;
  
  const [showModal, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return(
    <div>
      <Card title="Permissions" width="80%">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              _.map(data, (permission, index) => {
                return (
                  <EditableRow 
                    key={_.get(permission, 'id', -1)}
                    index={index} 
                    tableName='Permission'
                    editObject={editPermission}
                    deleteObject={deletePermission}
                    dataObject={permission} 
                  />
                )
              })
            }            
          </tbody>
        </table>
        <Button variant="primary" onClick={handleShow}>
          Add Permission
        </Button>
      </Card>
      <ActionModal
        editTable={'Add Permission'}
        onSubmit={addPermission}
        handleClose={handleClose} 
        showModal={showModal} 
      />
    </div>
  )
}

export default Permission;