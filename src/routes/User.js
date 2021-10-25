import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from '../components/Layout';
import PermissionPage from '../containers/Permission';

function UserRoutes() {
  return (
    <>
      <Router>
        <Switch>
          <Layout><Route path='/' component={PermissionPage} /></Layout>
        </Switch>
      </Router>
    </>
  );
}

export default UserRoutes;
