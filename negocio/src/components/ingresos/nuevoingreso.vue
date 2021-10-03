<template>
 <div>
   
     <b-container fluid class="form-container">
         <b-form @submit="onSubmit" @reset="onReset">
<div>
       <b-row class="justify-content-md-center" v-for="(i,index) in productos" :key="index">
      
    <b-col cols="4">
    
      
      <b-form-group label="Producto">
      <v-select id="metodo_id" v-model="i.producto" :options="prods"></v-select>
      </b-form-group>
    </b-col>

    <b-col cols="4">         
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
              },
            ],

        }
    },
    created(){
       
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
          onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      agregar(){
        this.forms += 1
        //let key='producto'+ this.forms
          let producto={
                'producto':'',
                'cantidad':'0',
              }

        this.productos.push(producto)
        
       
      },
      eliminar(indice){
         this.productos.splice(indice,1)
          },
            guardar(){
       console.log( this.productos)

      }
          
          },

    


}
</script>

<style>


</style>