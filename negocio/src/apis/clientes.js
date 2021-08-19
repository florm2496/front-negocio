import api from "../axios";


import {APIAuth} from "./auth";
// CommonJS

const url='clientes/'
const apiauth = new APIAuth()


class APIClientes{
   

    async getToken(){
        const token = apiauth.getToken()
        console.log('tokeeeen',token)
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


    async getClientes(){
      const headers= await this.getheaders();
        try{
            const clientes =await api.get(url,{headers})

        
            return clientes.data;
        }
        catch(error){
            console.log('error',error)
        }
        
    }
    async addcliente(cliente){
        const headers= await this.getheaders();
        console.log('headerssss',cliente)
        return await api.post(url,cliente,{headers})
       
    }
    async updatecliente(id,cliente){
        const headers= await this.getheaders();
        const url2=url + id + '/'
 
        return await api.put(url2,cliente ,{headers})
         
    

    }
}

export default new APIClientes();