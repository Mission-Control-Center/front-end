import { useState } from 'react'; 
import { Button } from "react-bootstrap";
import _ from 'lodash';

import Card from '../../components/Card';
import EditableRow from '../../components/EditableRow';
import ConfigModal from '../../components/ActionModal/ConfigModal';

import ActiveConfiguration from './active';
import DeletedConfiguration from './deleted';

import './styles.css'

function Configuration(props) {
  const { 
    data, 
    deletedConfig,
    addConfig, 
    editConfig, 
    deleteConfig, 
    restoreConfig,
    users,
    roles,
    addAppRole,
    deleteAppRole,
  } = props;
  
  return(
    <div>
      <ActiveConfiguration 
        data={data} 
        addConfig={addConfig}
        editConfig={editConfig} 
        deleteConfig={deleteConfig} 
        users={users}
        roles={roles}
        addAppRole={addAppRole}
        deleteAppRole={deleteAppRole}
      />
      <DeletedConfiguration data={deletedConfig} deleteConfig={deleteConfig} restoreConfig={restoreConfig} />
    </div>
  )
}

export default Configuration;