import _ from 'lodash';
import { Form } from 'react-bootstrap';

function AddItemRow({ items }) {
  return (
    <Form.Select aria-label="Default select example">
      <option>Permission</option>
      {
        items && _.map(items, it => (
          <option value={_.get(it, 'id', '')}>{_.get(it, 'name', '')}</option>
        ))
      }
    </Form.Select>
  )
}

export default AddItemRow;