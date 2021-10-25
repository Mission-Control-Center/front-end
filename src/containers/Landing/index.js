import Landing from "../../pages/Landing";

function LandingPage() {
  async function handleLogin(event) {
    event.preventDefault();
  }
  async function handleSignup(event) {
    event.preventDefault();
  }
  return <Landing handleSignup={handleSignup} handleLogin={handleLogin} hasAnAccount={0} />
}

export default LandingPage;