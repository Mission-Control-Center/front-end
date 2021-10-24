import Landing from "../../pages/Landing";

function LandingPage() {
  async function handleLogin(event) {
    event.preventDefault();
  }
  async function handleSignup(event) {
    event.preventDefault();
    const params = { 
      // first_name: firstName, 
      // last_name: lastName,
      // email, 
      // password,
      // mobile_no: mobileNo, 
    };
    
    // let request;
    // try {
    //   request = await axios.post("/users", params);
    // } catch(e) { console.log(e) }
    // const token = request.data.auth_token;
    // window.localStorage.setItem('token', token);
  }
  return <Landing handleSignup={handleSignup} handleLogin={handleLogin} hasAnAccount={0} />
}

export default LandingPage;