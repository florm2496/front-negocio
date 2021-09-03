<template>
<div>
<b-container fluid="xl" class="bv-example-row bv-example-row-flex-cols">
    <b-row>
        <b-row>
            <b-col cols="6" ></b-col>
            <b-col cols="6">
                <b-row>
                  
                
                </b-row>
             
                </b-col>
        </b-row>
        <b-col></b-col>

            <b-col ><label for="">Datos del cliente</label>
 
        <b-row>
                <b-col cols="auto" class="mr-auto p-3"><b-button @click="abrirmodalclientes()"><b-icon icon="list"></b-icon></b-button></b-col>
                <b-col cols="auto"  class="mr-auto p-3" ><b-form-input v-model="buscado" placeholder="Busca un cliente"></b-form-input></b-col>
                <b-col cols="auto" class="mr-auto p-3"><b-button @click="buscarCliente()"><b-icon icon="search"></b-icon></b-button></b-col>
        </b-row>
        <b-row>
    <b-col cols="4" class="mr-auto p-3"><label for="">Documento</label></b-col>
    <b-col cols="auto" class="mr-auto p-3"><b-form-input v-model="cliente.dni" disabled/></b-col>
       <b-col cols="4" class="mr-auto p-3"><label for="">Nombre</label></b-col>
    <b-col cols="auto" class="mr-auto p-3"><b-form-input v-model="cliente.nombre" disabled/></b-col> 
       <b-col cols="4" class="mr-auto p-3"><label for="">Garante</label></b-col>
    <b-col cols="auto" class="mr-auto p-3"><b-form-input v-model="garante"/></b-col> 

        </b-row>
            </b-col>

            <b-col>
              
             <b-container style="margin:15px">
                    <b-row>
                 <b-row>
                     <b-col cols="6"></b-col>
                      <b-col cols="4"></b-col>
                        <b-col cols="2"><b-button style="margin:10px;" to="cuentas"><b-icon icon="arrow-left-circle-fill"></b-icon></b-button></b-col>
                 </b-row>
                   <b-row>
                        <b-col cols="auto"><label for="">Numero de cuenta</label></b-col>
                    <b-col cols="auto"><b-form-input v-model="numero_cuenta"></b-form-input></b-col>
                   
                   </b-row>
<b-row>
    
                    <b-col cols="2"  class="mr-auto p-3"><label for="">Cuotas</label></b-col>
                    <b-col cols="3" class="mr-auto p-3"><b-form-input v-model="cuotas" placeholder="Ingrese la cantidad de cuotas" required></b-form-input></b-col>
               
                    <b-col cols="2"  class="mr-auto p-3"><label for="">Importe</label></b-col>
                    <b-col cols="3" class="mr-auto p-3"><b-form-input v-model="importe" disabled></b-form-input></b-col>
                    <b-col cols="1"  class="mr-auto p-3" ><b-button @click="importecuotas()" ><b-icon icon="calculator"></b-icon></b-button></b-col>

</b-row>
                <b-row>
                    
                    <b-col cols="1"  class="mr-auto p-3"><label for="">Ini.</label></b-col>
                    <b-col cols="5" class="mr-auto p-3"><b-form-input v-model="fecha_i" type="date" required></b-form-input></b-col>
               
                    <b-col cols="1"  class="mr-auto p-3"><label for="">Venc</label></b-col>
                    <b-col cols="5" class="mr-auto p-3"><b-form-input v-model="fecha_venc" type="date"></b-form-input></b-col>
                

                </b-row>
                   <b-row>
                    <b-col cols="2"  class="mr-auto p-3"><label for="">Descuento</label></b-col>
                    <b-col cols="3" class="mr-auto p-3"><b-form-input v-model="descuento"></b-form-input></b-col>
                    <b-col cols="2"  class="mr-auto p-3"><label for="">Total</label></b-col>
                    <b-col cols="3" class="mr-auto p-3"><b-form-input v-model="totaldesc" disabled></b-form-input></b-col>
                   </b-row>

                </b-row>
             </b-container>
              
                <b-row>
                    
                </b-row>
                  <b-row>
                      <b-col></b-col>
                      <b-col cols="auto" ><b-button @click="vender()" ><b-icon icon="cart-check"></b-icon> Vender</b-button></b-col>
                            <b-col></b-col>
                </b-row>
            </b-col>
    </b-row>
    <b-row>

        <b-col cols="auto" class="mr-auto p-3"> <label for="">Detalles de productos</label></b-col>
  
  <b-row>
      
        <b-col cols="3" class="mr-auto mb-auto p-3"><b-form-input v-model="producto.nombre" placeholder="Producto"/></b-col>
        <b-col cols="3" class="mr-auto p-3"> <b-form-input v-model="producto.precio" placeholder="Precio" disabled/></b-col>
        <b-col cols="3" class="mr-auto p-3"><b-form-input v-model="cantidad" placeholder="Cantidad"/></b-col>
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
    

        <b-button size="sm" @click="eliminar(row.item)"> <b-icon icon="x"></b-icon> </b-button>

      </template>

           </b-table>
      </b-container>

  
  </b-row>

</b-container>
<modal-tabla-clientes @avisar="clienteseleccionado" ref="modal"/>
<modal-tabla-productos @elegirproducto="productoseleccionado" ref="modal_productos"/>
</div>
</template>

<script>
import APIClientes from '../../apis/clientes'
import APICuentas from '../../apis/cuentas'
import ModalTablaClientes from '../../components/clientes/modaltablaclientes.vue'
import ModalTablaProductos from '../../components/productos/modaltablaproductos.vue'



export default {
    name:'nuevacuenta',
    components:{
        ModalTablaClientes,
        ModalTablaProductos,

    },
    data(){
        return{
            loading:false,
            buscado:'',
        
            cuotas:0,
            importe:0,
            total:0,
            cliente:[],
            aux_dni_cliente:'',
            aux_cantidad:0,
            cantidad:0,
            descuento:0,
            venc:'',
            fecha_i:'',
            garante:'',
            fecha_venc:'',
            disabled_agregar:true,
            numero_cuenta:'',
         
            producto:{
                precio:0,
                nombre:''
            },
      
            fields: [
                { key: 'producto', label: 'Producto', },
                { key: 'cantidad', label: 'Cantidad'},
                { key: 'precio', label: 'Precio'},
                { key: 'subtotal', label: 'Subtotal'},
                { key: 'actions', label: 'Actions' }
            ],
            items:[]




        }

    },
    mounted(){


    },
      computed: {
    fileSizeValidation() {
        var estado = true
        if (this.cantidad != 0 && this.producto.precio != 0) {
            estado=false
        }
      return (
        estado
      );
    },

       totaldesc(){
           var total= this.total
           if (this.total!=0 && this.descuento!=0){
              
                total=this.total - this.descuento
           }
            return (
                total
            );
          
       }
  

    },
    methods:{
        async buscarCliente(){
            try{
                this.loading=true
                
                const cliente=await APIClientes.getclientebyid(this.buscado)
                
                if (cliente.data.length>0){
                    this.cliente=cliente.data[0]
                    this.buscado=this.cliente.dni
               
                }
                else{
                    this.$swal('Cliente no encontrado','warning')
                    this.cliente=''
                    
                    
                }
            }catch(error){
                this.$swal(error)
                
            }finally{
                this.loading=false
            }
        },
      
      abrirmodalclientes(){
          this.$refs.modal.showModal();
          
      },
        abrirmodalproductos(){
          this.$refs.modal_productos.showModal();
          
      },
      clienteseleccionado: function(cliente){
          
         this.cliente=cliente
      },
        productoseleccionado: function(producto){
          console.log(producto.nombre)
         this.producto=producto
      },

      eliminar(product){
          
  
        const datos=this.items
    
        for(var i = 0; i < datos.length; i++) {
            if(datos[i].producto == product.producto) {
                let subtotal=datos[i].subtotal
                this.items.splice(i, 1);
                this.total=this.total - subtotal
                break;
            }
           
        }


      },
      reset(){
          this.producto.nombre=''
          this.producto.precio=''
          this.cantidad=''
      },
         agregarproducto(){
          let cant=this.cantidad
          this.aux_cantidad=cant
          let prec=this.producto.precio
          let subt=parseFloat(cant) * parseFloat(prec)
          const obj={producto:this.producto.nombre ,cantidad:cant , precio:prec , subtotal:subt}
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
       importecuotas(){
        this.importe=this.total/parseInt(this.cuotas)
    },
    vender(){
        var datos={}
        if (this.cliente.dni != '' && this.garante != '' && this.total != 0) {
            datos={'dni':this.cliente.dni,
                    'garante':this.garante,
                    'importe':this.total,
                    'numero_cuenta':this.numero_cuenta,
                    'cant_cuotas':this.cuotas,
                    'importe_cuota':this.importe,
                    'dia_inicio':this.fecha_i,
                    'dia_venc':this.fecha_venc,
            }
            this.agregarventa(datos)
            
        }
    },
       async agregarventa(datos){
            try{
                const response=await APICuentas.addcuenta(datos)

                if (response.status==200) {
                    this.$swal('Exito','Nueva cuenta creada','success')
                    this.$router.push('/cuentas')
                    
                }
        
            }catch(error){
                this.$swal('Algo salio mal',error,'error')
                
            }
        }

    },
   
}
</script>

<style>

</style>