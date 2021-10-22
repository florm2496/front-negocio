<template>
 <div>
   <b-row class="justify-content-md-center">
        <b-col cols="3">         
        <b-form-group
        id="input-group-1"
        label="Fecha de hoy"
        label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="current_date"
          
          disabled
         
          required
        ></b-form-input>
          </b-form-group>
        </b-col>


     <b-col cols="3">
          <b-form-group
        id="input-group-1"
        label="Total"
        label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="total"
          
          disabled
         
          required
        ></b-form-input>
          </b-form-group>

     </b-col>
   </b-row>
   
     <b-container fluid class="form-container">
         <b-form @submit="onSubmit" @reset="onReset">
<div>
       <b-row class="justify-content-md-center" v-for="(i,index) in productos" :key="index">
      
    <b-col cols="3">
    
      
      <b-form-group label="Producto">
      <v-select id="metodo_id" v-model="i.producto" :options="prods"></v-select>
      </b-form-group>
    </b-col>

    <b-col cols="3">         
        <b-form-group
        id="input-group-1"
        label="Cantidad"
        label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="i.cantidad"
          type="number"
         
          required
        ></b-form-input>
          </b-form-group>
        </b-col>
      <b-col cols="3">
    <b-form-group
        id="input-group-1"
        label="Cantidad"
        label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="i.subtotal"
          type="number"
         
          disabled
        ></b-form-input>
          </b-form-group>
      </b-col>

     <b-col cols="2" >
     <b-button style="margin-top:24px;" @click="eliminar(index)" ><b-icon icon="x-circle" ></b-icon></b-button>
    
     </b-col>

       </b-row>
</div>
  
    </b-form>

  
      <b-row class="justify-content-md-center">
      <b-col cols="4">
         <b-button variant="success"  @click="agregar()"><b-icon icon="plus"></b-icon>producto</b-button>
      </b-col>
    </b-row>
       <b-row class="justify-content-md-center">
      <b-col cols="4">
         <b-button variant="secondary"  @click="guardar()"><b-icon icon="plus"></b-icon>GUARDAR</b-button>
      </b-col>
    </b-row>

     </b-container>
 </div>
</template>

<script>

import APIProductos from '../../apis/productos'
import get_date from '../../funciones/fecha'


export default {
    name:'NuevosIngresos',
    components:{
     

    },
    data(){
        return{
     
            forms:1,
            show:false,
            datos:null,
            prods:[],
            productos:[
              {
                'producto':'',
                'cantidad':0,
                'subtotal':0,
              },
            ],
            total:0,

        }
    },
    created(){
      this.get_date()
       
    },
    mounted(){
       this.get_productos()

    },
    methods:{
      async get_productos(){
          
          const productos=await APIProductos.getProductos();
          this.datos=productos
          this.display=true;

          for (let index = 0; index < this.datos.length; index++) {
            const element = this.datos[index];
            this.prods.push(element.nombre)
            
          }

          },
  
    

      agregar(){
        this.forms += 1
        //let key='producto'+ this.forms
          let producto={
                'producto':'',
                'cantidad':'0',
                'subtotal':'0',
              }

        this.productos.push(producto)
        
       
      },
      eliminar(indice){
         this.productos.splice(indice,1)
          },
            guardar(){
       console.log( this.productos)

      },
        get_date(){
          this.current_date = get_date.currentDateTime()
        }
        
          
          },

    


}
</script>

<style>


</style>