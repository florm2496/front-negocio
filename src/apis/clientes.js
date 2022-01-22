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
       let url2= url + 'viewset/'
        try{
            const clientes =await api.get(url2,{headers})

        
            return clientes.data;
        }
        catch(error){
            console.log('error',error)
        }
        
    }
    
    async getClienteById(idcliente){

        const headers= await this.getheaders();
         let url2= url + 'viewset/' + idcliente + '/'
          try{
              const clientes =await api.get(url2,{headers})
  
          
              return clientes.data;
          }
          catch(error){
              console.log('error',error)
          }
          
      }
    async addcliente(cliente){
        const headers= await this.getheaders();
        let url2 = url + 'viewset/'
        return await api.post(url2,cliente,{headers})
       
    }
    async updateCliente(id,cliente){
        const headers= await this.getheaders();
        const url2=url + 'viewset/' + id + '/'
 
        return await api.put(url2,cliente ,{headers})
         
    

    }
    async deletecliente(datos_cliente){
        const url2=url + 'bajacliente/'
        const headers= await this.getheaders();
        return await api.post(url2,datos_cliente,{headers})
    }
    async getClienteCuenta(cliente){
        let url2 = url + 'getclientecuenta/'
        const headers= await this.getheaders();
        const params={'busqueda':cliente}
 
        return await api.get(url2,{params} ,{headers})
         
    }
    async getcuentascliente(dni){
        const headers= await this.getheaders();
        const params={'dni':dni,}
 
        return await api.get(url,{params} ,{headers})
         
    }
}

export default new APIClientes();