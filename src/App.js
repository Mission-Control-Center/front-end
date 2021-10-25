import { useState } from 'react';

import NonUserRoutes from './routes/NonUser';
import UserRoutes from './routes/User';

import './App.css';

function App() {
  const token = window.localStorage.getItem('auth_token') || null;
  const [authToken, setAuthToken] = useState(token);
  
  return (
    <>
      { authToken ? <UserRoutes /> : <NonUserRoutes setAuthToken={setAuthToken} /> }
    </>
  );
}

export default App;
