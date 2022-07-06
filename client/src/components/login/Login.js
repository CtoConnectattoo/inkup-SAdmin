import React from 'react'
import { LoginComponent } from './components';

const Login = ({setToken}) => {
    
  return (

    <div>
        <LoginComponent setToken={setToken}/>
    </div>
  )
};

export default Login;
