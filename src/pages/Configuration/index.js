import { useState } from 'react'; 
import { Button } from "react-bootstrap";
import _ from 'lodash';

import Card from '../../components/Card';
import EditableRow from '../../components/EditableRow';
import ActionModal from '../../components/ActionModal';
import AddAppMetaInfo from '../../components/ActionModal/AddAppMetaInfo';

import './styles.css'

function Configuration(props) {
  const { 
    data, 
    addConfig, 
    editRole, 
    deleteRole, 
    users,
    addRolePermission,
    deleteRolePermission,
  } = props;
  console.log(data, 'DATA!!!')
  const [showModal, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  function filterRolePermission(data, target) {
    return _.filter(data, item => {
      return _.get(item, 'role.id', -1) == target;
    })
  }

  return(
    <div>
      <Card title="Configurations" width="80%">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Version</th>
              <th scope="col">Name</th>
              <th scope="col">Owner</th>
              <th scope="col">Manager</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              _.map(_.get(data, 'appConfigs', []), (config, index) => {
                return (
                  <EditableRow 
                    key={_.get(config, 'id', -1)}
                    index={index} 
                    editObject={editRole}
                    deleteObject={deleteRole}
                    dataObject={_.get(config, 'app_meta_info', {})}
                    version={_.get(config, 'version', 0)}
                    owner={_.get(config, 'app_meta_info.users.owner', {})}
                    manager={_.get(config, 'app_meta_info.users.manager', {})}
                    addSubObject={addRolePermission}
                    deleteSubObject={deleteRolePermission}
                    tableName='Role'
                    modalList={filterRolePermission(_.get(data, 'rolePermissions', []), _.get(config, 'id'))} 
                    // permissions={permissions}
                  />
                )
              })
            }            
          </tbody>
        </table>
        <Button variant="primary" onClick={handleShow}>
          Add Configuration
        </Button>
      </Card>
      <AddAppMetaInfo
        editTable={'Add Config'}
        onSubmit={addConfig}
        users={users}
        handleClose={handleClose} 
        showModal={showModal} 
      />
    </div>
  )
}

export default Configuration;