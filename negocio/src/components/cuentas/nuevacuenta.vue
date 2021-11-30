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
            <b-col cols="2" class="mr-auto p-3"><b-button @click="abrirmodalclientes()"><b-icon icon="list"></b-icon></b-button></b-col>
            <b-col cols="8"  class="mr-auto p-3" ><b-form-input v-model="buscar_solicitante"   placeholder="Busca un solicitante por DNI" ></b-form-input></b-col>
            <b-col cols="2" class="mr-auto p-3"><b-button @click="buscarCliente(buscar_solicitante,'solicitante')" :disabled="solicitante_disabled"><b-icon icon="search"></b-icon></b-button></b-col>
           
        </b-row>
        <b-row>
    <b-col cols="4" class="mr-auto p-3"><label for="">Documento</label></b-col>
    <b-col cols="auto" class="mr-auto p-3"><b-form-input v-model="cliente.dni" disabled/></b-col>
       <b-col cols="4" class="mr-auto p-3"><label for="">Nombre</label></b-col>
    <b-col cols="auto" class="mr-auto p-3"><b-form-input v-model="cliente.nombre" disabled/></b-col> 
       <b-col cols="4" class="mr-auto p-3"><label for="">Garante</label></b-col>
    <b-col cols="6" class="mr-auto p-3"><b-form-input v-model="buscar_garante" placeholder="Busca un garante por DNI" /></b-col> 
     <b-col cols="2" class="mr-auto p-3">
         <b-button @click="buscarCliente(buscar_garante,'garante')" :disabled="garante_disabled" ><b-icon icon="search"></b-icon></b-button>
         </b-col>
          <b-col cols="4" class="mr-auto p-3"><label for="">Documento</label></b-col>
    <b-col cols="auto" class="mr-auto p-3"><b-form-input v-model="garante.dni" disabled/></b-col>
       <b-col cols="4" class="mr-auto p-3"><label for="">Nombre</label></b-col>
    <b-col cols="auto" class="mr-auto p-3"><b-form-input v-model="garante.nombre" disabled/></b-col> 
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
                    <b-col cols="2"  class="mr-auto p-3"><label for="">N°c</label></b-col>
                    <b-col cols="3"  class="mr-auto p-3"><b-form-input v-model="num_cuenta" disabled></b-form-input></b-col>

                     <b-col cols="2"  class="mr-auto p-3"><label for="">Metodo pago</label></b-col>
                    <b-col cols="4" class="mr-auto p-3">
                        <v-select id="metodo_id" v-model="metodo" :options="metodos"></v-select>
                        </b-col>
                   
                   </b-row>
                    <b-row>
    
                    <b-col cols="2"  class="mr-auto p-3"><label for="">Cuotas</label></b-col>
                    <b-col cols="3" class="mr-auto p-3"><b-form-input v-model="cuotas" :disabled="total==0" placeholder="Ingrese la cantidad de cuotas" required></b-form-input></b-col>
               
                    <b-col cols="2"  class="mr-auto p-3"><label for="">Importe</label></b-col>
                    <b-col cols="3" class="mr-auto p-3"><b-form-input v-model="importecuotas" disabled></b-form-input></b-col>
                    <!-- <b-col cols="1"  class="mr-auto p-3" ><b-button @click="importecuotas()" ><b-icon icon="calculator"></b-icon></b-button></b-col> -->

                </b-row>
                <b-row>
                    
                    <b-col cols="2"  class="mr-auto p-3"><label for="">Anticipo</label></b-col>
                    <b-col cols="3" class="mr-auto p-3"><b-form-input v-model="anticipo"></b-form-input></b-col>

                   
               
                    <b-col cols="2"  class="mr-auto p-3"><label for="">Venc</label></b-col>
                    <b-col cols="5" class="mr-auto p-3"><b-form-input v-model="fecha_venc" type="date"></b-form-input></b-col>
                

                </b-row>
                   <b-row>
                    <!-- <b-col cols="2"  class="mr-auto p-3"><label for="">Descuento</label></b-col> -->
                    <!-- <b-col cols="3" class="mr-auto p-3"><b-form-input v-model="descuento"></b-form-input></b-col> -->
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

        <b-col cols="2"  class="mr-auto p-3"> <label for="">Detalles de productos</label></b-col>
         <b-col cols="2"   class="mr-auto p-3"> <label for="">Precio</label></b-col>
         <b-col cols="2"  class="mr-auto p-3"> <label for="">Cantidad</label></b-col>
        <b-col cols="2"  class="mr-auto p-3"> <label for="">Descuento</label></b-col>
  
  <b-row>
      
        <b-col cols="2" class="mr-auto mb-auto p-3"><b-form-input v-model="producto.nombre" placeholder="Producto"/></b-col>
        <b-col cols="2" class="mr-auto p-3"> <b-form-input v-model="producto.precio" placeholder="Precio" disabled/></b-col>
        <b-col cols="2" class="mr-auto p-3"><b-form-input v-model="cantidad" placeholder="Cantidad"/></b-col>
        <b-col cols="2" class="mr-auto p-3"><b-form-input v-model="descuento" placeholder="Descuento"/></b-col>
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
            buscar_garante:'',
            buscar_solicitante:'',
            garante:'',
            solicitante:null,
            cuotas:0,
            importe:0,
            total:0,
            subtotal:0,
            metodo:null,
            cliente:[],
            aux_dni_cliente:'',
            aux_cantidad:0,
            cantidad:0,
            anticipo:0,
            descuento:0,
            venc:'',
            fecha_venc:'',
            num_cuenta:0,
  
            disabled_solicitante:false,
            productos:[],
            subtotales:[],
            descuentos:[],
            cantidades:[],

  
            metodos:['tarjeta','contado'],
         
            producto:{
                precio:0,
                nombre:'',
                codigo:0,
            },
      
            fields: [
                { key: 'codigo', label: 'Codigo', },
                { key: 'producto', label: 'Producto', },
                { key: 'cantidad', label: 'Cantidad'},
                { key: 'precio', label: 'Precio'},
                { key: 'subtotal', label: 'Subtotal'},
                { key: 'actions', label: '' }
            ],
            items:[]




        }

    },
 
    mounted(){
        this.getnumcuenta()


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
                    garante_disabled() {
                    var estado = true
                    if (this.buscar_garante != '') {
                        estado=false
                    }
                return (
                    estado
                );
                },
                    solicitante_disabled() {
                    var estado = true
                    if (this.buscar_solicitante != '') {
                        estado=false
                    }
                return (
                    estado
                );
                },
                importecuotas(){
                    var importe=0
                    if (this.total > 0 && this.cuotas > 0) {
                        importe=this.total/parseInt(this.cuotas)
                    }
                    return (
                        importe
                    );
                    },

       totaldesc(){
           var total= this.total
           if ((this.descuento >= 0 && this.descuento <= total) && (this.anticipo >= 0 && this.anticipo <= total)){
              
                total=this.total - this.descuento - this.anticipo
           }
            return (
                total
            );
          
       }
  

    },
    methods:{
        async buscarCliente(tipo_cliente,tipo){
            try{
                this.loading=true
                

                const cliente=await APIClientes.getclientebyid(tipo_cliente,tipo)
                
                if (cliente.data.length>0){
                    let encontrado=cliente.data[0]

                if (tipo=='garante') {
                         this.garante=encontrado
                    
                }
                else{
                    this.cliente=encontrado
                }
               
                   
                }
                else{
                    let mensaje= tipo + ' no encontrado'
                    this.$swal(mensaje,'warning')
                    this.cliente=''
                    
                    
                }
            }catch(error){
                this.$swal(error)
                
            }finally{
                this.loading=false
                this.buscar_garante=''
                this.buscar_solicitante=''
            }
        },
        async getnumcuenta(){
            const response=await APICuentas.getNumCuenta()
            this.num_cuenta=response.num_cuenta
      

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
         this.producto=producto
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
        this.descuentos.splice(fila,1)
        this.subtotales.splice(fila,1)
        this.cantidades.splice(fila,1)

        console.log(this.productos)
        console.log(this.cantidades)

      },
      reset(){
          this.producto.nombre=''
          this.producto.precio=''
          this.cantidad=''
          this.descuento=0
      },
    agregarproducto(){
        let cant=this.cantidad
        let desc=this.descuento
        this.aux_cantidad=cant
        let prec=this.producto.precio
        let subt=(parseFloat(cant) * parseFloat(prec)) - desc
        this.subtotal=subt
        const obj={codigo:this.producto.codigo,producto:this.producto.nombre ,cantidad:cant , precio:prec , subtotal:subt}

        this.productos.push(parseInt(this.producto.codigo))
        this.subtotales.push(parseFloat(subt))
        this.descuentos.push(parseFloat(desc))
        this.cantidades.push(parseInt(cant))

        this.items.push(obj)

        this.reset()
        this.calculartotal()

        console.log(this.productos)
        console.log(this.cantidades)

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
       
    vender(){
        var datos={}
        if (this.cliente.dni != '' && this.garante != '' && this.total != 0 && this.productos.length > 0) {
            console.log('******++++',this.productos)
            datos={'solicitante':this.cliente.dni,
                    'garante':this.garante.dni,
                    'importe':this.total,
                    'anticipo':parseFloat(this.anticipo),
                    'metodo_pago':this.metodo,
                    'cant_cuotas':this.cuotas,
                    'importe_cuota':parseFloat(this.importecuotas),
                    'dia_venc':this.fecha_venc,
                    'num_cuenta':this.num_cuenta,
                    'productos':this.productos,
                    'cantidades':this.cantidades,
                    'descuentos':this.descuentos,
                    'subtotales':this.subtotales,
            }
            console.log(this.cantidades,this.productos)
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
                console.log('////////////////',error)
                this.$swal('cddffdfffff',error,'error')
                
            }
        }

    },
   
}
</script>

<style>

</style>