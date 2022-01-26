<template>
  <div>
    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      :title="this.titulo"
      ok-title="Guardar"
      cancel-title="Cancelar"
      @show="this.resetModal"
      @hidden="this.resetModal"
      @ok="this.handleOk"
      size="lg"   
    >
      <template #modal-header="{ close }">
      <b-button size="sm" variant="outline-danger" @click="close()">
      <span aria-hidden="true">&times;</span>
      </b-button> </template>
      <form ref="form" @submit.stop.prevent="this.handleSubmit">
   
<b-row>
<b-col>
    <b-form-group
          label="Nombre"
          label-for="nombre_id"
          invalid-feedback="Debe ingresar el nombre"
          :state="nombreState"
          class="obligatorio"
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
          class="obligatorio"
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
           label="Email"
          label-for="email_id"
    
          >
               <b-form-input
            id="email_id"
            v-model="cliente.email"
          >
          </b-form-input>
        </b-form-group>
                <b-form-group
          label="Fecha de nacimiento"
          label-for="fc_id"
        >
      <datepicker v-model="cliente.fecha_nacimiento" input-class="input-clase"  :language="es" @closed="fechaSeleccionada" placeholder="Seleccione una fecha" ></datepicker>
          </b-form-group>
 


            <b-form-group
          label="Direccion"
          label-for="direccion_id"
          invalid-feedback="Debe ingresar la direccion"
          :state="direccionState"
          class="obligatorio"
        >
          <b-form-input
            id="direccion_id"
            v-model="domicilio.direccion"
            :state="direccionState"
            type="text"
            required
          ></b-form-input> 
          </b-form-group>

             <b-form-group
          label="Localidad"
          label-for="localidad_id"
          invalid-feedback="Debe ingresar la localidad"
          :state="localidadState"
          class="obligatorio"
        >
          <b-form-input
            id="localidas_id"
            v-model="domicilio.localidad"
            :state="localidadState"
            type="text"
            required
          ></b-form-input> 
          </b-form-group>

   <b-form-group
           label="Codigo postal"
          label-for="codigo_postal_id"
          invalid-feedback="Ingrese el codigo postal"
          :state="cpState"
          class="obligatorio"
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
<b-col>



          <b-form-group
          label="Apellido"
          label-for="apellido_id"
          invalid-feedback="Debe ingresar el apellido"
          :state="apellidoState"
          class="obligatorio"
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

        >
          <b-form-input
            id="telefono_id"
            v-model="cliente.telefono"
    
            type="number"
            required
          ></b-form-input>
        </b-form-group>

        

       <b-form-group
           label="Edad"
          label-for="edad_id"

          >
               <b-form-input
            id="edad_id"
            v-model="cliente.edad"
    
            type="number"
            required
          >
          </b-form-input>
        </b-form-group>

        
      
       <b-form-group
           label="Lugar de trabajo"
          label-for="lugar_trabajo_id"

          >
               <b-form-input
            id="lugar_trabajo_id"
            v-model="cliente.lugar_trabajo"
     
           
            required
          >
          </b-form-input>
        </b-form-group>

            <b-form-group
           label="Sueldo"
          label-for="sueldo_id"

          >
               <b-form-input
            id="sueldo_id"
            v-model="cliente.sueldo"
       
            type="number"
            required
          >
          </b-form-input>
        </b-form-group>
        
    
           <b-form-group
            label="Boleta"
          label-for="boleta_id"

          >
               <b-form-input
            id="boleta_id"
            v-model="cliente.boleta_sueldo"
  
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
  
      

</b-col>
</b-row>
       

    



      <b-alert variant="warning" :show="alert">Debe completar Nombre , Apellido  , DNI y Domicilio (localidad, direccion y codigo postal)</b-alert>
      </form>
    </b-modal>
  </div>
</template>

<script>

import APIClientes from '../../apis/clientes'

import Datepicker from 'vuejs-datepicker';

import { es } from 'vuejs-datepicker/dist/locale';

import moment from 'moment';


  export default {
    name:'ModalCliente',
    metaInfo: {
      title: 'Hogareña',
      icon:null,
    },

    components:{
      Datepicker,
    
    },
   
    data() {
      return {
         doms:[],
         domicilio: {
            localidad:null,
            codigo_postal:null,
            direccion:null,

          },
        cliente:{
          nombre:'',
          apellido:'',
          dni:'',
          
          telefono:'',
          sueldo:'',
          fecha_nacimiento:'',
          edad:'',
          boleta_sueldo:'',
          lugar_trabajo:'',
          tipo:'',
          garante:false,
          solicitante:false,
         
          email:'',
          referente:'',
          direccion:''

        },
        es:es,
       
        activo:'',
        
        titulo:'',
        
        nombreState:null,
        
        apellidoState:null,
       
        dniState:null,
        
        direccionState:null,
    
        cpState:null,
 
        localidadState:null,
     
        response:null,
        alert:false,
        accion:'',
       
      }
    },
    methods: {
      checkFormValidity() {
        var valid = false
        if ((typeof(this.cliente.apellido) != 'undefined' && this.cliente.apellido != '' && this.cliente.apellido != null )
            && ( typeof(this.cliente.nombre) != 'undefined' &&  this.cliente.nombre != '' &&  this.cliente.nombre != null ) 
            && (typeof(this.cliente.dni) != 'undefined'  && this.cliente.dni != ''  && this.cliente.dni != null ) 
            && (typeof(this.domicilio.localidad) !='undefined' && this.domicilio.localidad != '' && this.domicilio.localidad != null)
            && (typeof(this.domicilio.codigo_postal) != 'undefined' && this.domicilio.codigo_postal !='' && this.domicilio.codigo_postal != null) 
            && (typeof(this.domicilio.direccion!= 'undefined') && this.domicilio.direccion!='' && this.domicilio.direccion!= null )) {

                    valid = true
          
        }
        console.log(this.domicilio.codigo_postal ,typeof(this.domicilio.codigo_postal ))
        console.log(this.domicilio.direccion,typeof(this.domicilio.direccion))
        console.log(this.domicilio.localidad,typeof(this.domicilio.localidad))
        console.log(this.cliente.apellido,typeof(this.cliente.apellido))
        console.log(this.cliente.nombre,typeof(this.cliente.nombre))
        console.log(this.cliente.dni,typeof(this.cliente.dni))
  
        if (valid==false) {
            this.alert=true
        }
      console.log(valid)

        return valid

      },
      fechaSeleccionada(){
        let date = this.cliente.fecha_nacimiento
        let date2= moment(date).format('YYYY-MM-DD')
        this.cliente.fecha_nacimiento=date2
      },

      resetModal() {
        this.nombre = ''
        this.nombreState = null
        this.telefono = ''

        this.apellido = ''
        this.apellidoSTtae = null
        this.sueldo=''

        this.boleta=''

        this.dni =''
        this.dniState = null
        this.direccionState=null
        this.direccion=''

        this.tipo='',
        this.alert=false

      },
      
      handleOk(bvModalEvt) {
       
        bvModalEvt.preventDefault()
       
        this.handleSubmit()
      },
    cerrarModal(){
          this.$bvModal.hide('modal-prevent-closing')
     },
      handleSubmit() {
       
        if (!this.checkFormValidity()) {
          return
        }

        if (this.accion=='crear'){
          this.crearcliente()
        }
        else if(this.accion=='modificar'){
          this.modificarcliente()
 
        }
    
        
        this.$nextTick(() => {
          

          //AQUI DEBERIA EMITIR UN EVENTO HACIA EL COMPONENTE PADRE PARA ACTUALIZAR LOS DATOS

        })
      },
      recargartabla(){
          this.$emit("avisar")

      },
        showModal(accion,cliente) {
        this.$refs['modal'].show()
        if (accion=='modificar') {
          this.cliente=cliente
          this.domicilio=this.cliente.domicilio
          this.titulo='Modificar cliente'
        } else if (accion=='crear') {
          this.cliente={}
          this.titulo='Nuevo cliente'
          
        }
        this.accion=accion
      },

        async crearcliente(){
          
          
        const cliente={
            'nombre':this.cliente.nombre,
            'apellido':this.cliente.apellido,
            'dni':parseInt(this.cliente.dni),
            'boleta_sueldo':parseInt(this.cliente.boleta_sueldo),
            'telefono':parseInt(this.cliente.telefono),
            'sueldo':parseFloat(this.cliente.sueldo),
  
            'referente':this.cliente.referente,
            'domicilio': this.domicilio,
        
            'lugar_trabajo':this.cliente.lugar_trabajo,
            'fecha_nacimiento':this.cliente.fecha_nacimiento,
            'edad':this.cliente.edad,
            'email':this.cliente.email,

        }
        try{
            const response=await APIClientes.addcliente(cliente)
            if (response.status==201) {
                this.$swal('En buena hora!','Un nuevo cliente fue agregado','success');
                this.cerrarModal();
                this.$emit('recargar')

            }
        }
        catch(error){
          console.log(error)
            this.$swal('Ups!No se pudo crear el cliente','Recuerde que no pueden existir dos clientes con el mismo dni en la base de datos','warning');
            
        }
      
    },
     async modificarcliente(){
        try{
           const response=await APIClientes.updatecliente(this.cliente.id,this.cliente)
              if (response.status==200) {
                this.$swal('Bien hecho','El cliente fue modificado con exito','success');
                this.cerrarModal();
                this.$emit('recargar')

            }
        }
           catch(error){
            this.$swal('Error!Muestre esta ventana al desarrollador',error.message,'warning');
        }
            
      },
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
.obligatorio{

  color: red;

}
</style>
