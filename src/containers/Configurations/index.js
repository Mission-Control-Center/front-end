import { useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'lodash';

import Configuration from '../../pages/Configuration';
import userToConfigMapper from '../../utils/mapUsersToConfig';

function ConfigurationPage() {
  const [configData, setConfigData] = useState({});
  const [roles, setRoles] = useState([]);
  const [users, setUsers] = useState([]);
  const [toggler, setToggler] = useState(false);

  useEffect(() => getConfigs(), [toggler]);


  async function getConfigs() {
    const appConfigs = axios.get('/app_configs');
    const appMetas = axios.get('/app_meta_infos');
    const users = axios.get('/users');
    const roles = axios.get('/roles');
    
    const result = await Promise.all([appConfigs, appMetas, roles, users]);
    const transformerObj = userToConfigMapper(_.get(result[0], 'data', []), _.get(result[1], 'data', []))
    
    setUsers(_.get(result[3], 'data', []))
    setConfigData({
      appConfigs: transformerObj,
      appRoles: _.get(result[1], 'data', [])
    });
  }
  
  async function addConfig(event, params) {
    event.preventDefault();
    console.log('PARAMS', params)
    
    await axios.post('/app_meta_infos/', params)
    setToggler(!toggler);
  }

  // async function addRolePermission(event, params) {
  //   event.preventDefault();
    
  //   await axios.post('/role_permissions/', params)
  //   setToggler(!toggler);
  // }

  // async function editRole(event, params) {
  //   event.preventDefault();
  //   const { id, value } = params; 
    
  //   await axios.patch(`/roles/id=${id}`, { name: value })
  //   setToggler(!toggler);
  // }

  // async function deleteRole(event, id) {
  //   event.preventDefault();
  //   await axios.delete(`/roles/id=${id}`)
  //   setToggler(!toggler);
  // }
  
  // async function deleteRolePermission(event, id) {
  //   event.preventDefault();
  //   await axios.delete(`/role_permissions/id=${id}`)
  //   setToggler(!toggler);
  // }

  return (
    <Configuration 
      data={configData} 
      users={users}
      addConfig={addConfig} 
      // editRole={editRole} 
      // deleteRole={deleteRole} 
      // addRolePermission={addRolePermission}
      // deleteRolePermission={deleteRolePermission}
    />
  )
}

export default ConfigurationPage;