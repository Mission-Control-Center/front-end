import { useState } from 'react';
import _ from 'lodash';
import { Form } from 'react-bootstrap';

function AddItemRow(props) {
  const { title, items, addSubObject, mainObj, configTable } = props;

  const [itemVal, setItemVal] = useState(''); 

  function handleAdd(e, params) {
    if (configTable) {
      addSubObject(e, { role_id: params?.subObj, app_config_id: params?.mainObj })
    } else {
      addSubObject(e, { permission_id: params?.subObj, role_id: params?.mainObj })
    }
  }
  return (
    <div style={{display: 'flex', alignItems: 'center'}}>
      <Form.Select aria-label="Default select example" onChange={(e) => setItemVal(e.target.value)}>
        <option>{title}</option>
        {
          items && _.map(items, it => (
            <option key={_.get(it, 'id', '')} value={_.get(it, 'id', '')}>{_.get(it, 'name', '')}</option>
          ))
        }
      </Form.Select>
      <span 
        onClick={(e) => handleAdd(e, { subObj: itemVal, mainObj: mainObj })}
      >
        <i class="bi bi-plus" style={{fontSize: 25, marginLeft: 20}}></i>
      </span>
    </div>
  )
}

export default AddItemRow;