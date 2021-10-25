import { useHistory } from 'react-router';
import _ from 'lodash';

import refreshPage from '../../utils/refreshPage';

function Navbar(props) {
  const history = useHistory();

  const { links } = props;
  
  function handleLogout() {
    localStorage.removeItem('auth_token');
    refreshPage() && history.push('/');
  }

  return (
    <>
      <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand" href="/">MCC</a>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ">
            {
              _.map(links, (link, key) => {
                return (
                  <a class="nav-link nav-link" href="#" key={key}>{link.name}</a>
                )
              })
            }
          </ul>
        </div>
        <button 
          type="button" 
          className="btn btn-primary btn-sm logout" 
          onClick={handleLogout}
        >Log out</button>
      </nav>
    </>
  )
}

export default Navbar;