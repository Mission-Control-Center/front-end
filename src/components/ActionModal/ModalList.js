import _ from 'lodash';

function ModalRow({ index, dataItem, deleteSubObject }){
  return (
    <div className="row">
      <div className="col-4">{index}</div>
      <div className="col-6">{_.get(dataItem, 'permission.name', 'Permissions')}</div>
      <div className="col-2">
        {
          deleteSubObject 
          ? <span  onClick={(e) => deleteSubObject(e, _.get(dataItem, 'id', ''))}><i class="bi bi-archive-fill"></i></span> 
          : 'Delete'
        }
      </div>
    </div>
  )
}

function ModalList ({ listObject, deleteSubObject }) {
  return (
    <>
      <ModalRow index="#" name='Permissions' />
      {
        listObject && _.map(listObject, (item, index) => (
          <ModalRow 
            index={index + 1} 
            dataItem={item} 
            deleteSubObject={deleteSubObject}
          />
        ))
      }
      <p style={{marginTop: 40, fontWeight: 700, textAlign: 'center'}}> Add new Permission </p>
    </>
  )
}

export default ModalList;