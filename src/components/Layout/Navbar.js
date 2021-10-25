import _ from 'lodash';

function Navbar(props) {
  const { links } = props;
  
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
      </nav>
    </>
  )
}

export default Navbar;