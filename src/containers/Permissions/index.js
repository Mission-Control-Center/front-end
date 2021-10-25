import { useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'lodash';

import Permission from '../../pages/Permission';

function PermissionPage() {
  const [permissions, setPermissions] = useState([]);
  const [toggler, setToggler] = useState(false);

  useEffect(() => getPermissions(), [toggler]);

  async function getPermissions() {
    const result = await axios.get('/permissions');
    setPermissions(_.get(result, 'data', []));
  }
  
  async function addPermission(event, params) {
    event.preventDefault();
    const { value } = params; 
    
    await axios.post(`/permissions/`, {
      name: value
    })
    setToggler(!toggler);
  }

  async function editPermission(event, params) {
    event.preventDefault();
    const { id, value } = params; 
    
    await axios.patch(`/permissions/id=${id}`, {
      name: value
    })
    setToggler(!toggler);
  }

  async function deletePermission(event, id) {
    event.preventDefault();
    await axios.delete(`/permissions/id=${id}`)
    setToggler(!toggler);
  }

  return (
    <Permission 
      data={permissions} 
      addPermission={addPermission} 
      editPermission={editPermission} 
      deletePermission={deletePermission} 
    />
  )
}

export default PermissionPage;