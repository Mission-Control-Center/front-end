import Landing from "../../components/Landing";

function LandingPage() {
  async function handleLogin(event) {
    event.preventDefault();
  }
  async function handleSignup(event) {
    event.preventDefault();
  }
  return <Landing handleSignup={handleSignup} handleLogin={handleLogin} hasAnAccount={1} />
}

export default LandingPage;