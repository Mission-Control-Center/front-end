import { useHistory } from 'react-router'
import axios from 'axios';
import _ from 'lodash';

import Login from "../../pages/Login";
import refreshPage from '../../utils/refreshPage';

function LoginPage(props) {
  const history = useHistory();

  const { setAuthToken } = props;

  async function handleLogin(event, params) {
    event.preventDefault();
    
    const result = await axios.post('/login', params)
    const token = _.get(result, 'data.token', '');
    window.localStorage.setItem('auth_token', token) && setAuthToken(token);
    refreshPage() && history.push('/');
  }
  
  return <Login handleLogin={handleLogin} />
}

export default LoginPage;