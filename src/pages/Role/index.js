import { useState } from 'react'; 
import _ from 'lodash';
import { Button } from "react-bootstrap";

import Card from '../../components/Card';
import EditableRow from '../../components/EditableRow';
import ActionModal from '../../components/ActionModal';

import './styles.css'

function Role(props) {
  const { data, addRole, editRole, deleteRole, permissions } = props;
  
  const [showModal, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  function filterRolePermission(data, target) {
    return _.filter(data, item => {
      return _.get(item, 'role.id', -1) == target;
    })
  }

  filterRolePermission();
  return(
    <div>
      <Card title="Roles" width="80%">
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
              _.map(_.get(data, 'roles', []), (role, index) => {
                return (
                  <EditableRow 
                    key={_.get(role, 'id', -1)}
                    index={index} 
                    editRole={editRole}
                    deleteRole={deleteRole}
                    dataObject={role}
                    tableName='Role'
                    modalList={filterRolePermission(_.get(data, 'rolePermissions', []), _.get(role, 'id'))} 
                    permissions={permissions}
                  />
                )
              })
            }            
          </tbody>
        </table>
        <Button variant="primary" onClick={handleShow}>
          Add Role
        </Button>
      </Card>
      <ActionModal
        editTable={'Add Role'}
        onSubmit={addRole}
        handleClose={handleClose} 
        showModal={showModal} 
      />
    </div>
  )
}

export default Role;