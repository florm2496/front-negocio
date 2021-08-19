<template>
  <div>
 
    <b-button @click="showModal">EDITAR</b-button>
    <b-modal
      :id="this.aux"
      ref="modificar"
      title="Modificar cliente"
      @ok="handleOk"
      ok-title="Modificar"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
    <b-form-group
          label="Nombre"
          label-for="nombre_id"
          invalid-feedback="Debe ingresar el nombre"
          :state="nombreState"
        >
          <b-form-input
            id="nombre_id"
            v-model="instancia_cliente.nombre"
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
            v-model="instancia_cliente.apellido"
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
            v-model="instancia_cliente.telefono"
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
            v-model="instancia_cliente.dni"
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
            v-model="instancia_cliente.direccion"
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
            v-model="instancia_cliente.sueldo"
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
            v-model="instancia_cliente.boleta_sueldo"
            :state="boletaState"
            type="number"
            required
          >
          </b-form-input>
        </b-form-group>
   
     
      </form>
    </b-modal>
  </div>
</template>

<script>
import APIClientes from '../../apis/clientes'
  export default {
    name: 'ModificarCliente',
    props:['modal','cliente'],
    data() {
      return {        
        nombreState: null,
        apellidoState:null,
        boletaState:null,
        sueldoState:null,
        direccionState:null,
        dniState:null,
        telefonoState:null,
        aux: '',
        texto: '',
        alert: false,
        instancia_cliente:null,
      }
    },
    created() {
        this.aux=this.modal.toString()
        this.instancia_cliente=this.cliente
        
    },
    methods: {
        showModal() {
        this.$refs['modificar'].show()
      },
      checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        if (valid==false) {
            this.alert=true
            
        }
        return valid
      },
  
      handleOk(bvModalEvt) {
      
        bvModalEvt.preventDefault()
     
        this.handleSubmit()
      },
    
      handleSubmit() {
        
        if (!this.checkFormValidity()) {
          return
        }
        else{
           console.log(this.modificarcliente())
          
            
        }
        this.$nextTick(() => {
          this.$refs['modificar'].hide()
          this.alert=false
        })
      }
    }
  }
</script>