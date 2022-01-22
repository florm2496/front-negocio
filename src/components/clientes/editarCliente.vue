<template>
  <div>
  <b-container>
      <b-row align-h="between">
        <b-col cols="4">   <h4>EDITAR CLIENTE NUMERO  {{this.cliente.numero_cliente}}</h4></b-col>
        <b-col cols="2">  <b-button style="margin:10px;" to="clientes"><b-icon icon="arrow-left-circle-fill"></b-icon></b-button></b-col>
        </b-row>
           <form ref="form" @submit.stop.prevent="this.handleSubmit">

<b-row>
<b-col>

    <b-form-group
          label="Nombre"
          label-for="nombre_id"
          invalid-feedback="Debe ingresar el nombre"
          :state="nombreState"
        >
          <b-form-input
            id="nombre_id"
            v-model="cliente.nombre"
            :state="nombreState"
            required
            type="text"
          ></b-form-input>
        </b-form-group>

        
        <b-form-group
          label="DNI"
          label-for="dni_id"
          invalid-feedback="Debe ingresar el DNI"
          :state="dniState"
        >
          <b-form-input
            id="dni_id"
            v-model="cliente.dni"
            :state="dniState"
            type="number"
            required
          ></b-form-input>
        </b-form-group>
            <b-form-group
          label="Fecha de nacimiento"
          label-for="fc_id"
          invalid-feedback="Ingrese fecha de nacimiento"
          :state="fcState"
        >
      <datepicker v-model="cliente.fecha_nacimiento" input-class="input-clase"  :language="es" @closed="fechaSeleccionada" placeholder="Seleccione una fecha" ></datepicker>
          </b-form-group>
 
                  <b-form-group
            label="Boleta"
          label-for="boleta_id"
          invalid-feedback="Debe ingresar la boleta"
          :state="boletaState"
          >
               <b-form-input
            id="boleta_id"
            v-model="cliente.boleta_sueldo"
            :state="boletaState"
            type="number"

          >
          </b-form-input>
         
        </b-form-group>
        
                  <b-form-group
            label="Referente"
          label-for="referente_id"
        
          >
               <b-form-input
            id="referente_id"
            v-model="cliente.referente"

          >
          </b-form-input>
         
        </b-form-group>


        
            <b-form-group
           label="Email"
          label-for="email_id"
    
          >
               <b-form-input
            id="email_id"
            v-model="cliente.email"
          >
          </b-form-input>
        </b-form-group>
</b-col>
<b-col>



          <b-form-group
          label="Apellido"
          label-for="apellido_id"
          invalid-feedback="Debe ingresar el apellido"
          :state="apellidoState"
        >
          <b-form-input
            id="apellido_id"
            v-model="cliente.apellido"
            :state="apellidoState"
            type="text"
            required
          ></b-form-input>
        </b-form-group>
      <b-form-group
          label="Telefono"
          label-for="telefono_id"
          invalid-feedback="Debe ingresar el telefono"
          :state="telefonoState"
        >
          <b-form-input
            id="telefono_id"
            v-model="cliente.telefono"
            :state="telefonoState"
            type="number"
            required
          ></b-form-input>
        </b-form-group>

        

       <b-form-group
           label="Edad"
          label-for="edad_id"
          invalid-feedback="Debe ingresar la edad"
          :state="edadState"
          >
               <b-form-input
            id="edad_id"
            v-model="cliente.edad"
            :state="edadState"
            type="number"
            required
          >
          </b-form-input>
        </b-form-group>

     
       <b-form-group
           label="Lugar de trabajo"
          label-for="lugar_trabajo_id"
          invalid-feedback="Ingrese el lugar de trabajo"
          :state="lugar_trabajoState"
          >
               <b-form-input
            id="lugar_trabajo_id"
            v-model="cliente.lugar_trabajo"
            :state="lugar_trabajoState"
           
            required
          >
          </b-form-input>
        </b-form-group>

            <b-form-group
           label="Sueldo"
          label-for="sueldo_id"
          invalid-feedback="Debe ingresar el sueldo"
          :state="sueldoState"
          >
               <b-form-input
            id="sueldo_id"
            v-model="cliente.sueldo"
            :state="sueldoState"
            type="number"
            required
          >
          </b-form-input>
        </b-form-group>

      

</b-col>


</b-row>
<b-col>
  <b-row>
                         
       <b-form-group>
           <br>

    </b-form-group>                       
       <b-form-group>
            <h4>DOMICILIO</h4>

    </b-form-group>
   <b-form-group>
           <br>

    </b-form-group> 
    <b-col>
      
            <b-form-group
          label="Direccion"
          label-for="direccion_id"
          invalid-feedback="Debe ingresar la direccion"
          :state="direccionState"
        >
          <b-form-input
            id="direccion_id"
            v-model="domicilio.direccion"
            :state="direccionState"
            type="text"
            required
          ></b-form-input> 
          </b-form-group>
    </b-col>

          <b-col>
               <b-form-group
          label="Localidad"
          label-for="localidad_id"
          invalid-feedback="Debe ingresar la localidad"
          :state="localidadState"
        >
          <b-form-input
            id="localidas_id"
            v-model="domicilio.localidad"
            :state="localidadState"
            type="text"
            required
          ></b-form-input> 
          </b-form-group>

          </b-col>

                  
  <b-col>
         <b-form-group
           label="Codigo postal"
          label-for="codigo_postal_id"
          invalid-feedback="Ingrese el codigo postal"
          :state="cpState"
          >
               <b-form-input
            id="codigo_postal_id"
            v-model="domicilio.codigo_postal"
            :state="cpState"
            type="number"
            required
          >
          </b-form-input>
        </b-form-group> 
  </b-col>
  </b-row>
</b-col>
      <b-alert variant="warning" :show="alert">Complete todos los campos</b-alert>
       <b-form-group>
           <br>

    </b-form-group> 
         <b-row align-v="center">
        <b-col ><b-button style="margin:10px;" @click="deleteswal()" ><b-icon icon="trash-fill"></b-icon></b-button>  </b-col>
        <b-col>   <b-button @click="modificarcliente()">Guardar</b-button></b-col>
        </b-row>
      </form>

  </b-container>
 
  </div>
</template>

<script>

import APIClientes from '../../apis/clientes'
import Datepicker from 'vuejs-datepicker';
import { es } from 'vuejs-datepicker/dist/locale';
import moment from 'moment'


  export default {
    name:'EditarCliente',
    components : {
      Datepicker,
    },
   
    data() {
      return {
         doms:[],
         domicilio: {
            localidad:'',
            codigo_postal:4172,
            direccion:'',

          },
        cliente:null,

        es: es,

       
        activo:'',
        
        titulo:'',
        
        nombreState:null,
        
        apellidoState:null,
       
        dniState:null,
        
        direccionState:null,
        
        telefonoState:null,
        sueldoState:null,
        boletaState:null,
        fcState:null,
        cpState:null,
        edadState:null,
        localidadState:null,
        referenteState:null,
        lugar_trabajoState:null,
        emailState:null,
        response:null,
        alert:false,
        accion:'',
        idcliente:'',
       
      }
    },
    created(){

      this.idcliente=this.$route.query.id
      },
      mounted(){
      this.getcliente()
      
    },
    methods: {

      fechaSeleccionada(){
        let date = this.cliente.fecha_nacimiento
        let date2= moment(date).format('YYYY-MM-DD')
        this.cliente.fecha_nacimiento=date2

      },
    async getcliente(){
   
      const cliente= await APIClientes.getClienteById(this.idcliente)

      this.cliente = cliente
      this.domicilio=this.cliente.domicilio

    },
      checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        if (valid==false) {
            this.alert=true
        }
        return valid

      },

      resetModal() {
        this.nombre = ''
        this.nombreState = null
        this.telefono = ''
        this.telefonoState = null
        this.apellido = ''
        this.apellidoSTtae = null
        this.sueldo=''
        this.sueldoState=null
        this.boleta=''
        this.boletaState=null
        this.dni =''
        this.dniState = null
        this.direccionState=null
        this.direccion=''

        this.tipo='',
        this.alert=false

      },
      
  
 
     async modificarcliente(){
        try{
            let cliente =this.cliente
            cliente.domicilio=this.domicilio
           const response=await APIClientes.updateCliente(this.cliente.id,cliente)
              if (response.status==200) {
                this.$swal('Bien hecho','El cliente fue modificado con exito','success');

            }
        }
           catch(error){
            this.$swal('Error!Muestre esta ventana al desarrollador',error.message,'warning');
        }
            
      },
    async deletecliente(){
         try{
           let datos_cliente={
             'id':this.cliente.id,
             'dni':this.cliente.dni,
              
            }
           const response=await APIClientes.deletecliente(datos_cliente)
           const texto=this.cliente.nombre + ' ' + this.cliente.apellido
              if (response.status==200) {
                this.$swal(
                'EXITO!',
                 texto.toUpperCase() + 'HA SIDO DADO DE BAJA',
                'success'
              )
              
            }
            else if(response.status==204){
              this.$swal(
                'BORRADO!',
                 texto.toUpperCase() + ' HA SIDO DADO DE BAJA',
                'success'
              )
              this.$router.push('clientes')
              
            }
        }
           catch(error){
               this.$swal(
                'ERROR ! MUESTRE ESTA VENTANA AL DESARROLLADOR',
                 error,
                'error'
              )
        }
            
      },
      confirmswal(titulo,texto){
        return this.$swal({
            title: titulo.toUpperCase(),
            text: texto,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'SI, DAR DE BAJA ',
            cancelButtonText:'CANCELAR'
          })
      },
      deleteswal(){

         const titulo=this.cliente.nombre + ' ' + this.cliente.apellido
         const texto="Seguro quieres dar de baja a este cliente?.Ya no podras verlo en la lista de clientes"
         this.confirmswal(titulo,texto).then((result) => {
            if (result.isConfirmed) {
             this.deletecliente()}
})
      }
      },
     
  }
</script>

<style>

.vdp-datepicker * {
    box-sizing: border-box;
     width: 100%;
    background-color: #fff;
    background-clip: padding-box;
    padding: 0.375rem 0.75rem;
        border-radius: 0.25rem;
    border: 1px solid #ced4da;
}

</style>