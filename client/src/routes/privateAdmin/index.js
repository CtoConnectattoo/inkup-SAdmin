import {Routes, Route} from "react-router-dom"
import { Dashboard } from "../../components/Dashboard/Dashboard"
import Login from "../../components/login/Login"

export default function PrivateAdminRoute() {
    return (
        <>
        
        <h1>rutas Privadas</h1>
        <Routes>
                <Route path="/dashboardadmin" element={<Dashboard/>}/>
                <Route path="*" element={<Dashboard/>}/>

               
            </Routes>
        </>
    )

}