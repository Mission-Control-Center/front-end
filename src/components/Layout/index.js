import Navbar from './Navbar'
import Footer from './Footer';
import Links from './NavBarData';

import './styles.css';

function Layout(props) {
  return (
    <>
      <Navbar links={Links} />
        { props.children }
      <Footer />
    </>
  )
}

export default Layout;