import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import _ from 'lodash';

import Layout from './components/Layout';
import PermissionPage from './containers/Permission';
import LoginPage from './containers/Login';
import SignupPage from './containers/Signup';

import './App.css';

function App() {
  const token = window.localStorage.getItem('auth_token') || null;
  const [authToken, setAuthToken] = useState(token);
  
  if (!authToken) {
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
  return (
    <>
      <Layout>
        <Router>
          <Switch>
            <Route path='/' component={PermissionPage} />
          </Switch>
        </Router>
      </Layout>
    </>
  );
}

export default App;
