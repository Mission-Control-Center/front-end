import _ from 'lodash';

function ModalRow({ index, dataItem, deleteSubObject, tableName }){
  function handleDelete(e, params) {
    if (tableName == "Roles") {
      deleteSubObject(e, _.get(params, 'app_role_id', ''))
    } else {
      deleteSubObject(e, _.get(params, 'id', ''))
    }
  }

  return (
    <div className="row">
      <div className="col-4">{index}</div>
      <div className="col-6">{_.get(dataItem, 'name', tableName)}</div>
      <div className="col-2">
        {
          deleteSubObject 
          ? <span  onClick={(e) => handleDelete(e, dataItem)}><i class="bi bi-archive-fill"></i></span> 
          : 'Delete'
        }
      </div>
    </div>
  )
}

function ModalList ({ tableName, listObject, deleteSubObject }) {
  return (
    <>
      <ModalRow index="#" tableName={tableName} />
      {
        listObject && _.map(listObject, (item, index) => (
          <ModalRow
            tableName={tableName} 
            key={index}
            index={index + 1} 
            dataItem={item} 
            deleteSubObject={deleteSubObject}
          />
        ))
      }
      <p style={{marginTop: 40, fontWeight: 700, textAlign: 'center'}}> Add new {tableName} </p>
    </>
  )
}

export default ModalList;