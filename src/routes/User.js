import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from '../components/Layout';
import PermissionsPage from '../containers/Permissions';
import RolesPage from '../containers/Roles';

function UserRoutes() {
  return (
    <>
      <Router>
        <Switch>
          <Layout>
            <Route exact path='/' component={PermissionsPage} />
            <Route path='/roles' component={RolesPage} />
          </Layout>
        </Switch>
      </Router>
    </>
  );
}

export default UserRoutes;
