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

            <b-col ><label for=""><h4>Cuenta N° {{cuenta.numero_cuenta}}</h4></label>
 
 
        <b-row>
          <b-col cols="3" class="mr-auto p-3">Solicitante</b-col>
          <b-col cols="9" class="mr-auto p-3"></b-col>
   <b-col cols="2" class="mr-auto p-3"><label for="">Apellido</label></b-col>
    <b-col cols="4" class="mr-auto p-3"><b-form-input v-model="solicitante.apellido" disabled/></b-col> 
       <b-col cols="2" class="mr-auto p-3"><label for="">Nombre</label></b-col>
    <b-col cols="4" class="mr-auto p-3"><b-form-input v-model="solicitante.nombre" disabled/></b-col> 
    
        <b-col cols="2" class="mr-auto p-3"><label for="">DNI</label></b-col>
    <b-col cols="4" class="mr-auto p-3"><b-form-input v-model="solicitante.dni" disabled/></b-col>
         <b-col cols="2" class="mr-auto p-3">Telefono<label for="Telefono"></label></b-col>
    <b-col cols="4" class="mr-auto p-3"><b-form-input v-model="solicitante.telefono" disabled/></b-col> 



       <b-col cols="3" class="mr-auto p-3"><label for="">Garantes</label></b-col>
       <b-col cols="9" class="mr-auto p-3"><label for=""></label></b-col>



          <b-col cols="2" class="mr-auto p-3"><label for="">DNI</label></b-col>
    <b-col cols="3" class="mr-auto p-3"><b-form-input v-model="garante1.dni" disabled/></b-col>
       <b-col cols="2" class="mr-auto p-3"><label for="">Apellido</label></b-col>
    <b-col cols="4" class="mr-auto p-3"><b-form-input v-model="garante1.apellido" disabled/></b-col> 


              <b-col cols="2" class="mr-auto p-3"><label for="">DNI</label></b-col>
    <b-col cols="3" class="mr-auto p-3"><b-form-input v-model="garante2.dni" disabled/></b-col>
       <b-col cols="2" class="mr-auto p-3"><label for="">Apellido</label></b-col>
    <b-col cols="4" class="mr-auto p-3"><b-form-input v-model="garante2.apellido" disabled/></b-col> 
        
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
                       <b-col cols="2"  class="mr-auto p-3"><label for="">Total</label></b-col>
                    <b-col cols="4" class="mr-auto p-3">
                        <b-form-input v-model="cuenta.importe" disabled></b-form-input>
                    
                        </b-col>
                    <b-col cols="2"  class="mr-auto p-3"><label for="">Fecha</label></b-col>
                    <b-col cols="4" class="mr-auto p-3">
                        <b-form-input v-model="cuenta.fecha" disabled></b-form-input>
                    
                        </b-col>

                     <b-col cols="2"  class="mr-auto p-3"><label for="">Descuento</label></b-col>
                    <b-col cols="4" class="mr-auto p-3">
                        <b-form-input v-model="cuenta.descuento" disabled></b-form-input>
                    
                        </b-col>

                         <b-col cols="2"  class="mr-auto p-3"><label for="">Anticipo</label></b-col>
                    <b-col cols="4" class="mr-auto p-3"><b-form-input v-model="cuenta.anticipo" disabled></b-form-input></b-col>
                 
                   
                   </b-row>
     
                <b-row>
                    
                   

                    <b-col cols="2"  class="mr-auto p-3"><label for="">Cuotas</label></b-col>
                    <b-col cols="4" class="mr-auto p-3" ><b-form-input v-model="cuenta.cuotas" disabled> </b-form-input>            </b-col>                                        
               
                    <b-col cols="2"  class="mr-auto p-3"><label for="">Metodo de pago</label></b-col>
                    <b-col cols="4" class="mr-auto p-3"><b-form-input v-model="cuenta.metodo_pago" disabled></b-form-input> </b-col>
                    <!-- <b-col cols="5" class="mr-auto p-3"><b-form-input v-model="fecha_venc" type="date"></b-form-input></b-col> -->
                

                </b-row>
                   <b-row>
            
                  <b-col cols="6"><label for=""></label></b-col>
                  <b-col cols="6"><label for=""></label></b-col>
                   </b-row>
                     <b-row>
            
                  <b-col cols="6"><label for=""></label></b-col>
                  <b-col cols="6"><label for=""></label></b-col>
                   </b-row>
                                 <b-row>
            
                  <b-col cols="7"><label for=""></label></b-col>
                  <b-col cols="5"><b-button variant="danger" @click="deleteswal()">Borrar esta cuenta <b-icon icon="trash-fill"></b-icon></b-button></b-col>
                   </b-row>

                </b-row>
             </b-container>
              
                <b-row>
                    
                </b-row>
                  <b-row>
                      <b-col></b-col>
                
                            <b-col></b-col>
                </b-row>
            </b-col>
    </b-row>
    <b-row>
          <b-col cols="10"  class="mr-auto p-3"> <label for=""><h4>Detalles de productos</h4></label></b-col>

  <b-row>
      
 

  </b-row>
  <b-row>

  </b-row>

    </b-row>
  <b-row>
   
      <b-container>
           <b-table striped hover :items="this.detalles" :fields="fields">

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

</div>
</template>

<script>
import APIConsultas from '../../apis/consultas'
import APICuentas from '../../apis/cuentas'
export default {
    name:'DetalleCuenta',
    components:{
     

    },
    data(){
        return{
            configs:{},
            num_cuenta:'',
            saldo : 0,
            total : 0,
            //cuotas :[],
           
            solicitante:0,
            pagos:null,
            hora:'',
            nuevo_pago: {
                'monto':0,
                'metodo':'',
            },
            cuotapagada:false,
            estado:0,
            titulo_modal:'',
            soliciante_dni:'',
            detalles:[],
            garante1:'',
            garante2:{'apellido':'','dni':''},
            fields:[
              
                { key: 'producto.nombre', label: 'Producto', sortable: true, class: 'text-center' },
                { key: 'producto.codigo', label: 'Codigo', sortable: true, sortDirection: 'desc' },

      
                { key: 'subtotal', label: 'Subtotal', sortable: true, class: 'text-center' },
                 { key: 'cantidad', label: 'Cantidad', sortable: true, class: 'text-center' },
                { key: 'descuento', label: 'Descuento', sortable: true, class: 'text-center' },
                
             

            ],

            cuenta: {
              'solicitante':'',
              'importe':0,
              'garante':'',
              'saldo':0,
              'estado':null,

            },
            cuotas: null,
            cuota_actual:null,
            saldo_cuota:0,
            dni_sol:'',
           

        }
    },
    created(){
        this.numero_cuenta=this.$route.query.numcuenta
        this.dni_sol=this.$route.query.solicitante

    },

    mounted(){
        this.hora = new Date()
        //numero de cuenta, anticipo ,fecha , meodo de pago, saldo , cuotas , pagos
        this.getdetalles();
        this.getConfigs();

    },
    methods:{
         
        async getdetalles(){
            
            
            const data = await APICuentas.detalleCuentaCliente(this.dni_sol,this.numero_cuenta);
         
          this.cuenta=data[0]
          this.solicitante=this.cuenta.solicitante
          this.detalles=this.cuenta.detalles
          this.garante1=this.cuenta.garante1

          console.log(this.detalles)
          
          if(this.cuenta.garante2 != null){
           this.garante2 =this.cuenta.garante2
            
          }

        
  
          
           }, 
    async getConfigs(){
            this.configs = await APIConsultas.getConfiguraciones();


        },

             confirmar_borrado_cuenta(){
              
                this.$swal({
                  title: 'Ingrese la contraseña para poder borrar esta cuenta',
                  input: 'text',
                  inputAttributes: {
                    autocapitalize: 'off'
                  },
                  showCancelButton: true,
                  cancelButtonText:'Cancelar',
                  confirmButtonText: 'Borrar',
                  showLoaderOnConfirm: true,
                  preConfirm: () => {
                        },
                        allowOutsideClick: () => !this.$swal.isLoading()
                      }).then((result) => {
                        
                        
                        if (result.isConfirmed) {
                          let password = result.value
                           console.log(password , this.configs.password_utilidades)

                                if (password == this.configs.password_utilidades) {

                                   

                                    this.borrar_cuenta()

                    
                                    
                                }
                                else{
                                    this.$swal('Ups,la contraseña ingresada es incorrecta','No se puede actualizar este campo','warning')

                                }

                    

                        }
                      })
      this.response_configs = null
                 },
           
           async borrar_cuenta(){

               const response = await APICuentas.deletecuenta(this.cuenta.id)

                if (response.status == 204){

                    this.$swal('Bien','Cuenta borrada correctamente','success')
                }
                else{
                    this.$swal('error',this.response_configs,'error')

                }

                this.$router.push('cuentas')
        




             },


        confirmswal(titulo,texto){
        return this.$swal({
            title: titulo.toUpperCase(),
            text: texto,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'SI, ELIMINAR ',
            cancelButtonText:'CANCELAR'
          })
      },
      deleteswal(){

         const texto='N de cuenta'  + '  ' + this.cuenta.numero_cuenta + ' del solicitante ' + ' '  + this.solicitante.nombre
         const titulo="Seguro quieres borrar esta cuenta?.Se perderan todos los datos"
         this.confirmswal(titulo,texto).then((result) => {
            if (result.isConfirmed) {
             this.confirmar_borrado_cuenta()}
})
      }
      },

    }

</script>

<style>
.spacing{
   padding: 20px;
}
</style>