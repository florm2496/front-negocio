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
    <template #modal-header="{ close }">
      <!-- Emulate built in modal header close button action -->
      <b-button size="sm" variant="outline-danger" @click="close()">
      <span aria-hidden="true">&times;</span>
      </b-button>
    </template>
      <form ref="form" @submit.stop.prevent="this.handleSubmit">
        <b-form-group
          label="Nombre"
          label-for="nombre_id"
          invalid-feedback="Ingrese el nombre del producto"
          :state="nombreState"
        >
          <b-form-input
            id="nombre_id"
            v-model="producto.nombre"
            :state="nombreState"
            required
            type="text"
          ></b-form-input>
        </b-form-group>


          <b-form-group
          label="Codigo"
          label-for="codigo_id"
          invalid-feedback="Debe ingresar el codigo"
          :state="codigoState"
        >
          <b-form-input
            id="producto_id"
            v-model="producto.codigo"
            :state="codigoState"
            type="text"
            required
          ></b-form-input>
        </b-form-group>
        
          <b-form-group
          label="Precio"
          label-for="precio_id"
          invalid-feedback="Debe ingresar el precio"
          :state="precioState"
        >
          <b-form-input
            id="producto_id"
            v-model="producto.precio"
            :state="precioState"
            type="text"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Tipo"
          label-for="tipo_id"
          invalid-feedback="Debe ingresar el tipo"
          :state="tipoState"
        >
        <v-select id="tipo_id" v-model="producto.tipo" :options="tipos"></v-select>
  </b-form-group>
      <br>

      <b-form-checkbox v-model="producto.estado">Estado</b-form-checkbox>

      <b-alert variant="warning" :show="alert">Complete todos los campos</b-alert>
      </form>
    </b-modal>
  </div>
</template>

<script>

import APIProductos from '../../apis/productos'
  export default {
    name:'ModalProducto',
   
    data() {
      return {
        producto:{
          nombre:'',
          codigo:'',
          precio:'',
          tipo:null,
          stock:'',
          estado:false,
        },
        titulo:'',
        elect:'hola',
    
        tipos: ['ELECTRODOMESTICOS','INDUMENTARIA'],
        nombreState:null,
        precioState:null,
        tipoState:null,
        codigoState:null,
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
        this.producto.nombre = ''
        this.nombreState = null
        this.producto.precio = ''
        this.precioState = null
        this.producto.codigo = ''
        this.codigoState = null
        this.producto.tipo=null
        this.tipoState=null
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
          this.crearproducto()
        }
        else if(this.accion=='modificar'){
          this.modificarproducto()
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
        showModal(accion,producto) {
        this.$refs['modal'].show()
        if (accion=='modificar') {
          this.producto=producto
          this.titulo='Modificar producto'
        } else if (accion=='crear') {
          this.producto={}
          this.titulo='Nuevo producto'
          
        }
        this.accion=accion
      },

        async crearproducto(){
        const producto={
            'nombre':this.producto.nombre,
            'precio':parseFloat(this.producto.precio),
            'estado':this.producto.estado,
            'tipo':this.producto.tipo,
            'codigo':parseInt(this.producto.codigo)
        }
        try{
            const response=await APIProductos.agregarProducto(producto)
            if (response.status==201) {
                this.$swal('En buena hora!','Un nuevo producto fue agregado','success');
                this.cerrarModal();
                this.$emit('recargar')

            }
        }
        catch(error){
            this.$swal('Error!Muestre esta ventana al desarrollador',error.message,'warning');
            
        }
      
    },
     async modificarproducto(){
        try{
           const response=await APIProductos.updateproducto(this.producto.id,this.producto)
              if (response.status==200) {
                this.$swal('Bien hecho','El producto fue modificado con exito','success');
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