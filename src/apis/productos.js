import api from "../axios";


import {APIAuth} from "./auth";
// CommonJS

const url='productos/'
const apiauth = new APIAuth()


class APIProductos{
   

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


    async getProductos(){
        const headers= await this.getheaders();
        let url2= url + 'lista/'
        const productos =await api.get(url2,{headers})
    
        return productos.data;
        
     
        
    }

    async agregarProducto(producto){
    
        const headers= await this.getheaders();
        let url2 = url + 'altaproducto'

        return await api.post(url2,producto,{headers})
       
    }
    async actualizarProducto(codigo,producto){
        const headers= await this.getheaders();
        const url2=url + 'actualizarproducto/' + codigo
 
        return await api.put(url2,producto ,{headers})
         
    

    }
    async bajaProducto(codigo){
        const url2=url + 'bajaproducto/' + codigo
        const headers= await this.getheaders();
        return await api.delete(url2,{headers})
    }
    async nuevosIngresos(datos){
        const headers= await this.getheaders();
        let url2 = url +  'nuevosingresos'
        return await api.post(url2,datos,{headers})
       
    }
    async getIngresos(){
        const headers= await this.getheaders();
        let url2 = url +  'nuevosingresos'
        let ingresos = await api.get(url2,{headers})
        return ingresos.data;
    }

    async getRubros(){
        const headers= await this.getheaders();
        let url2 = url +  'rubros/'
        let rubros = await api.get(url2,{headers})
        return rubros.data;

    }
}

export default new APIProductos();