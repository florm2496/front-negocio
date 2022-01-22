import api from "../axios";


import {APIAuth} from "./auth";
// CommonJS

const url='base/'
const apiauth = new APIAuth()


class APIConsultas{
   

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


    async getEstadisticas(){
      const headers= await this.getheaders();
       let url2= url + 'estadisticas/'
        try{
            const estadisticas =await api.get(url2,{headers})

        
            return estadisticas.data;
        }
        catch(error){
            console.log('error',error)
        }
        
    }
    async actualizarConfigs(datos){

        console.log(datos)
        const headers= await this.getheaders();
        let url2= url + 'configuraciones/'
        const configs =await api.post(url2,datos,{headers})
        return configs.data;

    }
    async getConfiguraciones(){
        const headers= await this.getheaders();
        let url2= url + 'configuraciones/'
        const configs =await api.get(url2,{headers})
        return configs.data;
       
          
      }

    
}

export default new APIConsultas();