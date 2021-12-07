import axios from "axios";

const BASE_URL = "http://localhost:5000/api/auth/";

export const loginService = (username, password) =>{
    axios.post("http://localhost:5000/api/auth/login",{
       'username': username,
       'password': password
    })
    .catch(e => {console.log(e); return ([false, e]);})
    .then(response => {
        return [true, ""];
    })
}

export const registerService = (username, password, email) => {
    axios.post(BASE_URL+"register",{
        'username': username,
        'password': password,
        'email': email
     })
     .catch(e => {console.log(e))
     .then(response => {
         
     }) 
}