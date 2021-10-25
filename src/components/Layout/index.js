import Navbar from './Navbar'
import Footer from './Footer';
import Links from './NavBarData';

import PermissionPage from '../../containers/Permission';

import './styles.css';

function Layout() {
  return (
    <>
      <Navbar links={Links} />
        <PermissionPage />
      <Footer />
    </>
  )
}

export default Layout;