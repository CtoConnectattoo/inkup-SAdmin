import {Routes, Route} from "react-router-dom"
import { Error } from "../../components/Error/Error"
import Login from "../../components/login/Login"


export default function PublicAdminRoute(props){
    
    const { setToken, token } = props;
    console.log("token de publicroute", token)
    
    return (
        <>
        {/* <h1>Rutas Publicas</h1> */}
            <Routes>
                <Route path="/login" element={<Login setToken={setToken} token={token}/>}/>
                <Route path= "/" element={<Login setToken={setToken} token={token}/>}/>
                <Route path= "*" element={<Error/>}/>

            </Routes>

        </>
    )
}