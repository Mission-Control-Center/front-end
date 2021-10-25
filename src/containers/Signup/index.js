import { useHistory } from 'react-router'
import axios from 'axios';
import _ from 'lodash';

import Signup from '../../pages/Signup';
import refreshPage from '../../utils/refreshPage';

function SignupPage(props) {
  const history = useHistory();
  
  const { setAuthToken } = props;
  
  async function handleSignup(event, params) {
    event.preventDefault();
    
    const result = await axios.post('/users', { user: params });
    const token = _.get(result, 'data.token', '');
    window.localStorage.setItem('auth_token', token) && setAuthToken(token); 
    refreshPage() && history.push('/');
  }
  return <Signup handleSignup={handleSignup} />
}

export default SignupPage;