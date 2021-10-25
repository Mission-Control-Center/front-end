import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LoginPage from '../containers/Login';
import SignupPage from '../containers/Signup';

function NonUserRoutes(props) {
  const { setAuthToken } = props;

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <LoginPage setAuthToken={setAuthToken} />
        </Route>
        <Route path='/signup'>
          <SignupPage setAuthToken={setAuthToken} />
        </Route>
      </Switch>
    </Router>
  )
  
}

export default NonUserRoutes;
