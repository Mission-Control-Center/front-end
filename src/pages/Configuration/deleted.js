import { useState } from 'react'; 
import { Button } from "react-bootstrap";
import _ from 'lodash';

import Card from '../../components/Card';
import EditableRow from '../../components/EditableRow';
import ConfigModal from '../../components/ActionModal/ConfigModal';

import './styles.css'

function DeletedConfiguration(props) {
  const { data, deleteConfig, restoreConfig } = props;
  
  return(
    <div>
      <Card title="Deleted Configurations" width="80%">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Version</th>
              <th scope="col">Name</th>
              <th scope="col">Owner</th>
              <th scope="col">Manager</th>
              <th scope="col">Restore</th>
            </tr>
          </thead>
          <tbody>
            {
              _.map(_.get(data, 'appConfigs', []), (config, index) => {
                return (
                  <EditableRow 
                    key={_.get(config, 'id', -1)}
                    index={index} 
                    deleteObject={deleteConfig}
                    restoreObject={restoreConfig}
                    dataObject={_.get(config, 'app_meta_info', {})}
                    version={_.get(config, 'version', 0)}
                    owner={_.get(config, 'app_meta_info.users.owner', {})}
                    manager={_.get(config, 'app_meta_info.users.manager', {})}
                    tableName='Configuration'
                    modalList={_.get(config, 'app_roles', [])} 
                  />
                )
              })
            }            
          </tbody>
        </table>
      </Card>
    </div>
  )
}

export default DeletedConfiguration;