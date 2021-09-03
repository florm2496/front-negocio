import api from "../axios";


import {APIAuth} from "./auth";
// CommonJS

const url='cuentas/'
const apiauth = new APIAuth()


class APICuentas{
   

    async getToken(){
        const token = apiauth.getToken()
        return token
    }

    async getheaders(){
        const token = await this.getToken();
        const headers={
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token.access,
        }
        return headers

    }


    async getCuentas(){
        let u=url + 'lista'
        const headers= await this.getheaders();
        const cuentas =await api.get(u,{headers})
        console.log(cuentas.data)
        return cuentas.data;
        
     
        
    }
    async addcuenta(datos){
        const headers= await this.getheaders();
        let u=url+ 'nuevacuenta'
        return await api.post(u,datos,{headers})
       
    }
    async updatecuenta(id,cliente){
        const headers= await this.getheaders();
        const url2=url + id + '/'
 
        return await api.put(url2,cliente ,{headers})
         
    

    }
    async deletecuenta(id){
        const url2=url + id + '/'
        const headers= await this.getheaders();
        return await api.delete(url2,{headers})
    }
}

export default new APICuentas();