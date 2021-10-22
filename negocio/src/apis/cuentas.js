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
    async cuentasbycliente(cliente){
        let u=url + 'reportescuentas'
        let params = {'cliente':cliente}
        const headers= await this.getheaders();
        
        const cuentas =await api.get(u,{params},{headers})
        return cuentas.data;

    }
    async getNumCuenta(){
        let u=url + 'numerocuenta'
        const headers= await this.getheaders();
        const cuenta =await api.get(u,{headers})
        return cuenta.data;
        
     
        
    }

    async addcuenta(datos){
        const headers= await this.getheaders();
        let u=url+ 'registrarcuenta'
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
    async cuotascuenta(numerocuenta){
        let u=url + 'cuotascuenta'
        const headers= await this.getheaders();
        let params = {'num_cuenta':numerocuenta}
        const cuenta =await api.get(u,{params},{headers})
        return cuenta.data;
        

    }
    async nuevopago(datos){
        let u=url + 'nuevopago'
        const headers= await this.getheaders();
        const nuevopago =await api.post(u,datos,{headers})
        return nuevopago.data;

    }
}

export default new APICuentas();