import { useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'lodash';

import Configuration from '../../pages/Configuration';
import userToConfigMapper from '../../utils/mapUsersToConfig';
import roleToConfigMapper from '../../utils/mapRolesToConfig';

function ConfigurationPage() {
  const [configData, setConfigData] = useState({});
  const [deletedConfig, setDeletedConfig] = useState({});
  const [roles, setRoles] = useState([]);
  const [users, setUsers] = useState([]);
  const [toggler, setToggler] = useState(false);

  useEffect(() => getConfigs(), [toggler]);


  async function getConfigs() {
    const appConfigs = axios.get('/app_configs');
    const deletedAppConfigs = axios.get('/app_configs/list_deleted');
    const appMetas = axios.get('/app_meta_infos');
    const users = axios.get('/users');
    const appRoles = axios.get('/app_roles');
    const roles = axios.get('/roles');
    
    const result = await Promise.all([appConfigs, appMetas, appRoles, users, deletedAppConfigs, roles]);
    
    userToConfigMapper(_.get(result[0], 'data', []), _.get(result[1], 'data', []))
    const transformed = roleToConfigMapper(_.get(result[0], 'data', []), _.get(result[2], 'data', []))

    userToConfigMapper(_.get(result[4], 'data', []), _.get(result[1], 'data', []))
    const deletedList = roleToConfigMapper(_.get(result[4], 'data', []), _.get(result[2], 'data', []))
    
    setUsers(_.get(result[3], 'data', []))
    setConfigData({ appConfigs: transformed });
    setDeletedConfig({ appConfigs: deletedList });
    setRoles(_.get(result[5], 'data', []))
  }
  
  async function addConfig(event, params) {
    event.preventDefault();
    
    await axios.post('/app_meta_infos/', params)
    setToggler(!toggler);
  }

  async function addAppRole(event, params) {
    event.preventDefault();
    
    await axios.post('/app_roles/', params)
    setToggler(!toggler);
  }

  async function editConfig(event, params) {
    event.preventDefault();
    
    await axios.patch(`/app_meta_infos/id=${params['id']}`, params)
    setToggler(!toggler);
  }

  async function deleteConfig(event, id) {
    event.preventDefault();
    
    await axios.delete(`/app_configs/id=${id}`)
    setToggler(!toggler);
  }

  async function restoreConfig(event, id) {
    event.preventDefault();
    
    await axios.get(`/app_configs/id=${id}/restore`)
    setToggler(!toggler);
  }
  
  async function deleteAppRole(event, id) {
    event.preventDefault();
    await axios.delete(`/app_roles/id=${id}`)
    setToggler(!toggler);
  }

  return (
    <Configuration 
      data={configData}
      deletedConfig={deletedConfig} 
      users={users}
      roles={roles}
      addConfig={addConfig} 
      editConfig={editConfig} 
      deleteConfig={deleteConfig} 
      restoreConfig={restoreConfig}
      addAppRole={addAppRole}
      deleteAppRole={deleteAppRole}
    />
  )
}

export default ConfigurationPage;