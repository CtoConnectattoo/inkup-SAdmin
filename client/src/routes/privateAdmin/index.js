import {Routes, Route} from "react-router-dom"
import { Dashboard } from "../../components/Dashboard/Dashboard"
import Login from "../../components/login/Login"

export default function PrivateAdminRoute() {
    return (
        <>
        
        
        <Routes>
                <Route path="/inicio" element={<Dashboard/>}/>
                <Route path="*" element={<Dashboard/>}/>

               
            </Routes>
        </>
    )

}