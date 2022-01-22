import axios from "axios";




export default axios.create({
    baseURL: "http://api.apimitienda.site/",
    headers:{
        "Content-type":"application/json"
    }
})

