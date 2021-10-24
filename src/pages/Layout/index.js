import Navbar from './Navbar'
import Footer from './Footer';
import Links from './NavBarData';

import './styles.css';

function Layout() {
  return (
    <>
      <Navbar links={Links} />
      <Footer />
    </>
  )
}

export default Layout;