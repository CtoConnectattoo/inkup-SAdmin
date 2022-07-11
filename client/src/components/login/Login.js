import React from 'react'
import { LoginComponent } from './components';

const Login = ({setToken, token}) => {
    
  console.log("token de login", token);
  return (

    <div>
        <LoginComponent setToken={setToken} token={token}/>
    </div>
  )
};

export default Login;
