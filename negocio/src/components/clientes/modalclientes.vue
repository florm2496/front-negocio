<template>
  <div>
    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      :title="this.titulo"
      ok-title="Guardar"
      @show="this.resetModal"
      @hidden="this.resetModal"
      @ok="this.handleOk"
    >
      <form ref="form" @submit.stop.prevent="this.handleSubmit">
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
          label="Direccion"
          label-for="direccion_id"
          invalid-feedback="Debe ingresar el direccion"
          :state="direccionState"
        >
          <b-form-input
            id="direccion_id"
            v-model="cliente.direccion"
            :state="direccionState"
            type="text"
            required
          ></b-form-input> 
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
            required
          >
          </b-form-input>
        </b-form-group>

      <b-alert variant="warning" :show="alert">Complete todos los campos</b-alert>
      </form>
    </b-modal>
  </div>
</template>

<script>

import APIClientes from '../../apis/clientes'
  export default {
    name:'ModalCliente',
   
    data() {
      return {
        cliente:{
          nombre:'',
          apellido:'',
          dni:'',
          direccion:'',
          telefono:'',
          sueldo:'',
          boleta_sueldo:'',



        },
        titulo:'',
        
        nombreState:null,
        
        apellidoState:null,
       
        dniState:null,
        
        direccionState:null,
        
        telefonoState:null,
        sueldoState:null,
        boletaState:null,
        response:null,
        alert:false,
        accion:'',
       
      }
    },
    methods: {
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
        console.log(this.accion)
        if (this.accion=='crear'){
          console.log('lalma crear')
          this.crearcliente()
        }
        else if(this.accion=='modificar'){
          this.modificarcliente()
          console.log('lalma mod')
        }
        else{
          console.log('lalma nada')
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
            'direccion':this.cliente.direccion,
            'dni':parseInt(this.cliente.dni),
            'boleta_sueldo':parseInt(this.cliente.boleta_sueldo),
            'telefono':parseInt(this.cliente.telefono),
            'sueldo':parseFloat(this.cliente.sueldo),
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
            this.$swal('Error!Muestre esta ventana al desarrollador',error.message,'warning');
            
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