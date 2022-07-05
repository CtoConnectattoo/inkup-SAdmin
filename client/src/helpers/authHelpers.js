import axios from 'axios';

export const loginAdmin = async(adminPayload) => {
    axios
        .post(`http://localhost:4000/admin/login`, adminPayload)
        .then((res)=>{
            console.log("Estoy en la respuesta del axios");
        })
        .catch((error)=>{console.log(error)})
}