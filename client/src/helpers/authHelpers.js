import axios from 'axios';
var CryptoJS = require("crypto-js");

export const loginAdmin = async(adminPayload) => {

    try{
        return await axios.post(`http://localhost:4000/admin/login`, adminPayload);
    } catch (error) {
        return false
    }
}


export const saveAuthAdmin = async (user, token) =>{

}


export const encript = async (data) => {
    var ciphertext = await CryptoJS.AES.encrypt(data).toString();
    return ciphertext;
}