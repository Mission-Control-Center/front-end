import _ from 'lodash';

function userToConfigMapper(array1, array2) {
  _.forEach(array1, item => {
    _.forEach(array2, it => {
      if (_.get(item, 'app_meta_info.id') === _.get(it, 'id')) { 
        _.get(item, 'app_meta_info')['users'] = {
          owner: _.get(it, 'owner', {}),
          manager: _.get(it, 'manager', {})
        }; 
      }
    })
  })
  return array1;
}

export default userToConfigMapper;