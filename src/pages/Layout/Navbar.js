import _ from 'lodash';

function Navbar(props) {
  const { links } = props;
  console.log("MAAMMAMA", links)
  return (
    <>
      <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand" href="/">MCC</a>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ">
            {
              _.map(links, link => {
                return (
                  <a class="nav-link nav-link" href="#">{link.name}</a>
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