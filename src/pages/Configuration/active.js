import { useState } from 'react'; 
import { Button } from "react-bootstrap";
import _ from 'lodash';

import Card from '../../components/Card';
import EditableRow from '../../components/EditableRow';
import ConfigModal from '../../components/ActionModal/ConfigModal';

import './styles.css'

function ActiveConfiguration(props) {
  const { 
    data, 
    addConfig, 
    editConfig, 
    deleteConfig, 
    users,
    roles,
    addAppRole,
    deleteAppRole,
  } = props;
  
  const [showModal, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  function filterAppRoles(data, target) {
    return _.filter(data, item => {
      return _.get(item, 'role.name', '') == target;
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
                    editObject={editConfig}
                    deleteObject={deleteConfig}
                    dataObject={_.get(config, 'app_meta_info', {})}
                    version={_.get(config, 'version', 0)}
                    owner={_.get(config, 'app_meta_info.users.owner', {})}
                    manager={_.get(config, 'app_meta_info.users.manager', {})}
                    addSubObject={addAppRole}
                    deleteSubObject={deleteAppRole}
                    tableName='Configuration'
                    modalList={_.get(config, 'app_roles', [])} 
                    users={users}
                    roles={roles}
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
      <ConfigModal
        editTable={'Add Config'}
        onSubmit={addConfig}
        users={users}
        handleClose={handleClose} 
        showModal={showModal} 
      />
    </div>
  )
}

export default ActiveConfiguration;