import {Routes, Route} from "react-router-dom"
import { Error } from "../../components/Error/Error"
import Login from "../../components/login/Login"


export default function PublicAdminRoute(props){
    
    const { setToken } = props;
    
    return (
        <>
        {/* <h1>Rutas Publicas</h1> */}
            <Routes>
                <Route path="/login" element={<Login setToken={setToken}/>}/>
                <Route path= "/" element={<Login/>}/>
                <Route path= "*" element={<Error/>}/>

            </Routes>

        </>
    )
}