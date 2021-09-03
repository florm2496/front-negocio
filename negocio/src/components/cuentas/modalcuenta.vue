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
          label="Cliente"
          label-for="cliente_id"
        
          :state="clienteState"
        >
          <b-form-input
            id="nombre_id"
            v-model="cuenta.cliente"
            :state="clienteState"
            required
            type="text"
          ></b-form-input>
        </b-form-group>


          <b-form-group
          label="Garante"
          label-for="garante_id"
      
          :state="garanteState"
        >
          <b-form-input
            id="apellido_id"
            v-model="cuenta.garante"
            :state="garanteState"
            type="text"
            required
          ></b-form-input>
        </b-form-group>


        <b-form-group
          label="Importe"
          label-for="importe_id"
         
          :state="importeState"
        >
          <b-form-input
            id="importe_id"
            v-model="cuenta.importe"
            :state="importeState"
            type="number"
            required
          ></b-form-input>
        </b-form-group>


            <b-form-group
          label="Numero de cuenta"
          label-for="numerocuenta_id"
         
          :state="numerocuentaState"
        >
          <b-form-input
            id="numerocuenta_id"
            v-model="cuenta.numero_cuenta"
            :state="numerocuentaState"
            type="text"
            required
          ></b-form-input> 
          </b-form-group>


            <b-form-group
           label="Saldo"
          label-for="saldo_id"

          :state="saldoState"
          >
               <b-form-input
            id="saldo_id"
            v-model="cuenta.saldo"
            :state="saldoState"
            type="number"
            required
          >
          </b-form-input>
        </b-form-group>
                  <b-form-group
            label="Productos"
          label-for="productos_id"
      
          :state="productosState"
          >
               <b-form-input
            id="productos_id"
            v-model="cuenta.productos"
            :state="productosState"
            type="text"
            required
          >
          </b-form-input>
        </b-form-group>

            <b-form-group
            label="Estado"
          label-for="estado_id"
      
          :state="estadoState"
          >
               <b-form-input
            id="estado_id"
            v-model="cuenta.estado"
            :state="estadoState"
            type="text"
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

import APICuentas from '../../apis/cuentas'
import APIClientes from '../../apis/clientes'
  export default {
    name:'ModalCuentas',
   
    data() {
      return {
        cuenta:{
          estado:'',
          cliente:'',
          importe:'',
          saldo:'',
          garante:'',
          fecha:'',
          numerocuenta:'',
          productos:'',



        },
        clientes: null,
        titulo:'',
        
        importeState:null,
        garanteState:null,
        estadoState:null,
       
        clienteState:null,
        
        saldoState:null,
        
        numerocuentaState:null,
        fechaState:null,
        productosState:null,


        response:null,
        alert:false,
        accion:'',
       
      }
    },
    mounted(){
      this.getclientes()
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
        this.importeState=null,
        this.garanteState=null,
        this.estadoState=null,
       
        this.clienteState=null,
        
        this.saldoState=null,
        
        this.numerocuentaState=null,
        this.fechaState=null,
        this.productosState=null
        this.display_alert=false

      
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
          this.crearcuenta()
        }
        else if(this.accion=='modificar'){
          this.modificarcuenta()
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
        showModal(accion,cuenta) {
        this.$refs['modal'].show()
        if (accion=='modificar') {
          this.cuenta=cuenta
          this.titulo='Modificar cuenta'
        } else if (accion=='crear') {
          this.cuenta={}
          this.titulo='Nuevo cuenta'
          
        }
        this.accion=accion
      },
       async getclientes(){
          
          const consulta=await APIClientes.getClientes();
          this.clientes=consulta
  
          },

        async crearcuenta(){
        const cuenta={

          'cliente':this.cuenta.cliente,
          'importe':this.cuenta.importe,
          'saldo':this.cuenta.saldo,
          'garante':this.cuenta.garante,
          'fecha':this.cuenta.fecha,
          'numerocuenta':this.cuenta.numerocuenta,
        

        }
        try{
            const response=await APICuentas.addcuenta(cuenta)
            if (response.status==201) {
                this.$swal('En buena hora!','Una nueva cuenta fue agregada','success');
                this.cerrarModal();
                this.$emit('recargar')

            }
        }
        catch(error){
            this.$swal('Error!Muestre esta ventana al desarrollador',error.message,'warning');
        }
      
    },
     async modificarcuenta(){
        try{
           const response=await APICuentas.updatecuenta(this.cuenta.id,this.cuenta)
              if (response.status==200) {
                this.$swal('Bien hecho','La cuenta fue modificada con exito','success');
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