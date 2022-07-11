import { useEffect, useState } from 'react';
import {BrowserRouter} from "react-router-dom"
import PublicAdminRoute from './routes/publicAdmin';
import PrivateAdminRoute from './routes/privateAdmin';

import './App.css';

function App() {
  // const [token, setToken] = useState("hola");
  const [token, setToken] = useState([]);

  // useEffect(() => {
  //   let token =  
  // }, [])
  console.log(token);


  return (

    <BrowserRouter>
     {!token || token.length === 0 ? (
      <PublicAdminRoute setToken={setToken} token={token}/>
     ) : (
      <PrivateAdminRoute setToken={setToken}/> )}
    </BrowserRouter>
  )
}

export default App;
