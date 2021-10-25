import _ from 'lodash';

function ModalRow({ index, name }){
  return (
    <div className="row">
      <div className="col-4">{index}</div>
      <div className="col-8">{name}</div>
    </div>
  )
}

function ModalList ({ listObject }) {
  return (
    <>
      <ModalRow index="#" name='Permissions' />
      {
        listObject && _.map(listObject, (item, index) => <ModalRow index={index + 1} name={_.get(item, 'permission.name', '')} /> )
      }
      <p style={{marginTop: 40, fontWeight: 700, textAlign: 'center'}}> Add new Permission </p>
    </>
  )
}

export default ModalList;