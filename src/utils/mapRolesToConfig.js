import _ from 'lodash';

function roleToConfigMapper(array1, array2) {
  _.forEach(array1, item => {
    const roleObjects = [];
    
    _.forEach(array2, it => {
      if (_.get(item, 'id') === _.get(it, 'app_config.id')) { 
        roleObjects.push({..._.get(it, 'role', {}), app_role_id: _.get(it, 'id', '')}) 
      }
    })
    item['app_roles'] = roleObjects;
  })
  
  return array1;
}

export default roleToConfigMapper;