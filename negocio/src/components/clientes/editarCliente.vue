<template>
  <div>
  <b-container>
      <b-row align-h="between">
        <b-col cols="4">   <h3>Numero de cliente {{this.cliente.numero_cliente}}</h3></b-col>
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
          <b-form-input
            id="fc_id"
            v-model="cliente.fecha_nacimiento"
            :state="fcState"
            type="date"
            required
          ></b-form-input> 
          </b-form-group>


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
        
        <b-form-group>
     <b-form-checkbox
      id="garante_id"
      v-model="cliente.garante"
      status="garante"
      name="garante"
      value=true
      unchecked-value=false
    >
      Garante
    </b-form-checkbox>
        </b-form-group>
 
    <b-form-group>
          <b-form-checkbox
          id="solicitante_id"
          v-model="cliente.solicitante"
          status="solicitante"
          name="solicitante"
          value=true
          unchecked-value=false
        >
          Solicitante
        </b-form-checkbox>
        
    </b-form-group>
      

</b-col>
</b-row>

      <b-alert variant="warning" :show="alert">Complete todos los campos</b-alert>

         <b-row align-v="center">
        <b-col ><b-button style="margin:10px;" @click="deleteswal()" ><b-icon icon="trash-fill"></b-icon></b-button>  </b-col>
        <b-col>   <b-button @click="modificarcliente()">Editar cliente</b-button></b-col>
        </b-row>
      </form>

  </b-container>
 
  </div>
</template>

<script>

import APIClientes from '../../apis/clientes'
  export default {
    name:'EditarCliente',
   
    data() {
      return {
         doms:[],
         domicilio: {
            localidad:'',
            codigo_postal:4172,
            direccion:'',

          },
        cliente:null,
        dnicliente:null,
       
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
       
      }
    },
   created(){
    this.dnicliente=this.$route.query.dni
    console.log(this.dnicliente)
    },
    mounted(){
    this.getcliente()
    
  },
    methods: {
    async getcliente(){
   
      const cliente= await APIClientes.getclientebyid(this.dnicliente,null)

      this.cliente = cliente.data[0]
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
           const response=await APIClientes.updatecliente(this.cliente.id,cliente)
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
           const response=await APIClientes.deletecliente(this.cliente.id)
           const texto=this.cliente.nombre + ' ' + this.cliente.apellido
              if (response.status==200) {
                this.$swal(
                'BORRADO!',
                 texto.toUpperCase() + 'HA SIDO BORRADO',
                'success'
              )
              
            }
            else if(response.status==204){
              this.$swal(
                'BORRADO!',
                 texto.toUpperCase() + ' HA SIDO BORRADO',
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
            confirmButtonText: 'SI, BORRAR',
            cancelButtonText:'CANCELAR'
          })
      },
      deleteswal(cliente){
         const titulo=cliente.nombre + ' ' + cliente.apellido
         const texto="Seguro quieres borrar a este cliente ?"
         this.confirmswal(titulo,texto).then((result) => {
            if (result.isConfirmed) {
             this.deletecliente(cliente)}
})
      }
      },
     
  }
</script>