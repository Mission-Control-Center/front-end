import { useState, useEffect } from 'react';
import axios from 'axios';

import Permission from '../../pages/Permission';

function PermissionPage() {
  const [permissions, setPermissions] = useState([]);

  useEffect(() => getPermissions(), [addPermission, editPermission, deletePermission]);

  async function getPermissions() {
    const result = await axios.get('http://localhost:3000/permissions')
    setPermissions(result.data);
  }
  
  async function addPermission(event, params) {
    event.preventDefault();
    const { value } = params; 
    
    await axios.post(`http://localhost:3000/permissions/`, {
      name: value
    })
  }

  async function editPermission(event, params) {
    event.preventDefault();
    const { id, value } = params; 
    
    await axios.patch(`http://localhost:3000/permissions/id=${id}`, {
      name: value
    })
  }

  async function deletePermission(event, id) {
    event.preventDefault();
    await axios.delete(`http://localhost:3000/permissions/id=${id}`)
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