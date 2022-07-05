import { useEffect, useState } from 'react';
import {BrowserRouter} from "react-router-dom"
import PublicAdminRoute from './routes/publicAdmin';
import PrivateAdminRoute from './routes/privateAdmin';

import './App.css';

function App() {
  const [token, setToken] = useState([]);

  // useEffect(() => {
  //   let token =  
  // }, [])
  


  return (
    <BrowserRouter>
      <PublicAdminRoute/>
      {/* <PrivateAdminRoute/> */}
    </BrowserRouter>
  )
}

export default App;
