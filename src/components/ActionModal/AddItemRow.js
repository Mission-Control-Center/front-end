import { useState } from 'react';
import _ from 'lodash';
import { Form } from 'react-bootstrap';

function AddItemRow(props) {
  const { items, addSubObject, mainObj } = props;

  const [itemVal, setItemVal] = useState(''); 

  return (
    <div style={{display: 'flex', alignItems: 'center'}}>
      <Form.Select aria-label="Default select example" onChange={(e) => setItemVal(e.target.value)}>
        <option>Add Permission</option>
        {
          items && _.map(items, it => (
            <option value={_.get(it, 'id', '')}>{_.get(it, 'name', '')}</option>
          ))
        }
      </Form.Select>
      <span onClick={(e) => addSubObject(e, { permission_id: itemVal, role_id: mainObj })}><i class="bi bi-plus" style={{fontSize: 25, marginLeft: 20}}></i></span>
    </div>
  )
}

export default AddItemRow;