import { useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'lodash';

import Role from '../../pages/Role';

function RolePage() {
  const [roleData, setRoleData] = useState({});
  const [permissions, setPermissions] = useState([]);

  const [toggler, setToggler] = useState(false);

  useEffect(() => getRole(), [toggler]);
  
  async function getPermissions() {
    const permissions = await axios.get('/permissions');
    console.log(permissions, '-1')
    setPermissions(_.get(permissions, 'data', []));
  }

  async function getRole() {
    getPermissions();
    const role_permissions = axios.get('/role_permissions');
    const roles = axios.get('/roles');
    
    const result = await Promise.all([roles, role_permissions])
    setRoleData({
      roles: _.get(result[0], 'data', []),
      rolePermissions: _.get(result[1], 'data', [])
    });
  }
  
//   async function addRole(event, params) {
//     event.preventDefault();
//     const { value } = params; 
    
//     await axios.post(`/Roles/`, {
//       name: value
//     })
//     setToggler(!toggler);
//   }

//   async function editRole(event, params) {
//     event.preventDefault();
//     const { id, value } = params; 
    
//     await axios.patch(`/Roles/id=${id}`, {
//       name: value
//     })
//     setToggler(!toggler);
//   }

//   async function deleteRole(event, id) {
//     event.preventDefault();
//     await axios.delete(`/Roles/id=${id}`)
//     setToggler(!toggler);
//   }

  return (
    <Role 
      data={roleData} 
      permissions={permissions}
    //   addRole={addRole} 
    //   editRole={editRole} 
    //   deleteRole={deleteRole} 
    />
  )
}

export default RolePage;