import axios from "axios";

const url="http://api.apimitienda.site/"


export default axios.create({
    baseURL: url,
    headers:{
        "Content-type":"application/json"
    }
})

