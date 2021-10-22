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
   <b-row style="margin-top:15px;" class="justify-content-md-center">
     <b-col cols="6">
       <b-form-textarea
      id="observacion"
      v-model="observacion"
      placeholder="Observacion sobre la compra"
      rows="3"
      max-rows="6"
    ></b-form-textarea>
     </b-col>
   </b-row>

  <b-row style="margin-top:15px;" class="justify-content-md-center">
     <b-col cols="3">
     <b-button size="sm" @click="guardar_ingresos()"> <b-icon icon="x"></b-icon>Guardar</b-button>
     </b-col>
   </b-row>
   
     <b-container fluid class="form-container">
     <b-row>

        <b-col cols="2"  class="mr-auto p-1"> <label for="">Detalles de productos</label></b-col>
         <b-col cols="2"   class="mr-auto p-1"> <label for="">Precio</label></b-col>
         <b-col cols="2"  class="mr-auto p-1"> <label for="">Cantidad</label></b-col>
 
  
  <b-row>
      
        <b-col cols="2" class="mr-auto mb-auto p-3"><b-form-input v-model="producto.nombre" placeholder="Producto"/></b-col>
        <b-col cols="2" class="mr-auto p-3"> <b-form-input v-model="producto.precio" placeholder="Precio" disabled/></b-col>
        <b-col cols="2" class="mr-auto p-3"><b-form-input v-model="cantidad" placeholder="Cantidad"/></b-col>
      
        <b-col cols="1" class="mr-auto p-3"><b-button @click="abrirmodalproductos()"><b-icon icon="search"></b-icon></b-button></b-col>
     <b-col cols="1" class="mr-auto p-3"><b-button @click="agregarproducto" :disabled="fileSizeValidation"><b-icon icon="plus"></b-icon></b-button></b-col>


  </b-row>
  <b-row>

  </b-row>

    </b-row>
  <b-row>
   
      <b-container>
           <b-table striped hover :items="items" :fields="fields">

        <template #cell(name)="row">
        {{ row.value.first }} {{ row.value.last }}
      </template>

      <template #cell(actions)="row">
    

        <b-button size="sm" @click="eliminar(row.item,row.index)"> <b-icon icon="x"></b-icon> </b-button>

      </template>

           </b-table>
      </b-container>

  
  </b-row>

     </b-container>
     <modal-tabla-productos @elegirproducto="productoseleccionado" ref="modal_productos"/>
 </div>
</template>

<script>

import APIProductos from '../../apis/productos'
import get_date from '../../funciones/fecha'

import ModalTablaProductos from '../../components/productos/modaltablaproductos_ingresos.vue'
export default {
    name:'NuevosIngresos',
    components:{
      ModalTablaProductos,
     

    },
    data(){
        return{
     
            forms:1,
            show:false,
            datos:null,
            prods:[],
            producto:{
                precio:0,
                nombre:'',
                codigo:0,
            },
            cantidad:0,
            total:0,
            fields: [
            { key: 'codigo', label: 'Codigo', },
            { key: 'producto', label: 'Producto', },
            { key: 'cantidad', label: 'Cantidad'},
            { key: 'precio', label: 'Precio'},
            { key: 'subtotal', label: 'Subtotal'},
            { key: 'actions', label: '' }
        ],
        items:[],
        cantidades:[],
        subtotales:[],
        productos:[],
        observacion:'',
        

        }
    },
    computed:{
        fileSizeValidation() {
                    var estado = true
                    if (this.cantidad != 0 && this.producto.precio != 0) {
                        estado=false
                    }
                return (
                    estado
                );
                },

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

          // for (let index = 0; index < this.datos.length; index++) {
          //   const element = this.datos[index];
          //   this.prods.push(element.nombre)
            
          // }

          },
      productoseleccionado: function(producto){
         this.producto=producto
      },
         abrirmodalproductos(){
          this.$refs.modal_productos.showModal();
          
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
      agregarproducto(){
        let cant=this.cantidad

        this.aux_cantidad=cant
        let prec=this.producto.precio
        let subt=(parseFloat(cant) * parseFloat(prec))
        this.subtotal=subt
        const obj={codigo:this.producto.codigo,producto:this.producto.nombre ,cantidad:cant , precio:prec , subtotal:subt}

        this.productos.push(parseInt(this.producto.codigo))
        this.subtotales.push(parseFloat(subt))

        this.cantidades.push(parseInt(cant))

        this.items.push(obj)

        
        this.reset()
        this.calculartotal()


      },
      calculartotal(){
        let datos=this.items
        var total=0

        for(var i = 0; i < datos.length; i++) {
            let subt=total
            total = subt + parseFloat(datos[i].subtotal)
      }
      this.total=total

      },
      // eliminar(indice){
      //    this.productos.splice(indice,1)
      //     },
      async guardar_ingresos(){
        let compra ={
          'observacion':this.observacion,
          'total':this.total,
          'cantidades':this.cantidades,
          'productos':this.productos,
          'subtotales':this.subtotales
        }

        try{
          const response=await APIProductos.nuevosIngresos(compra)
          console.log(response)

          if (response.status==200) {
            this.$swal('Exito','Ingresos guardados','success')
            this.$router.push('/ingresos')
          }
        }
        catch(error){
          this.$swal('Error',error.message,'error')

        }
        

      },
        eliminar(product,fila){
          
        const datos=this.items
    
        //estas lineas eliminan el producto de la tabla
        for(var i = 0; i < datos.length; i++) {
            if(datos[i].producto == product.producto) {
                let subtotal=datos[i].subtotal
                this.items.splice(i, 1);
                this.total=this.total - subtotal
                break;
            }
           
        }
        //eliminar el producto de los arrays que se enviaran en la api
        this.productos.splice(fila,1)
        this.subtotales.splice(fila,1)
        this.cantidades.splice(fila,1)

    

      },
      reset(){
          this.producto.nombre=''
          this.producto.precio=''
          this.cantidad=''
 
      },
        get_date(){
          this.current_date = get_date.currentDateTime()
        }
        
          
          },

    


}
</script>

<style>


</style>