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
       cancel-title="Cancelar"
    >
    <template #modal-header="{ close }">
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
            maxlength="40"
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
            maxlength="10"
            :state="codigoState"
            type="text"
            required
          ></b-form-input>


        </b-form-group>

        
          <b-form-group
          label="Codigo de referencia"
          label-for="codigo_ref_id"
          invalid-feedback="Debe ingresar el codigo de referencia"
          :state="codigoRefState"
        >
          <b-form-input
            id="codigo_ref_id"
            maxlength="10"
            v-model="producto.codigo_ref"
            :state="codigoRefState"
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
            type="number"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Tipo"
          label-for="tipo_id"
          invalid-feedback="Debe ingresar el rubro"
          :state="tipoState"
        >
        <v-select v-model="producto.rubro"  label="nombre"  :options="rubros"></v-select>
  </b-form-group>
      <br>

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
          tipo:'',
          stock:'',
          estado:true,
        },
        rubros:'',
        titulo:'',
        elect:'hola',
        codigo_producto:0,
    
    
        tipos: ['ELECTRODOMESTICOS','INDUMENTARIA'],
        nombreState:null,
        precioState:null,
        tipoState:null,
        codigoState:null,
        response:null,
        alert:false,
        accion:'',
        estado_producto:true,
       
      }
    },
    mounted(){
      this.estado_producto=true
      this.getRubrosProductos()
      
    },
    methods: {
        async getRubrosProductos(){
        const rubros = await APIProductos.getRubros();
        this.rubros = rubros

      },
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
        this.codigoRefState = null
        this.producto.codigo_ref = ''
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
 
        if (this.accion=='crear'){
          console.log('lalma crear')
          this.crearproducto()
        }
        else if(this.accion=='modificar'){
          this.modificarproducto()

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
          this.codigo_producto=producto.codigo
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
            // 'estado':this.producto.estado,
            'rubro':parseInt(this.producto.rubro.id),
            'codigo':this.producto.codigo,
            'codigo_ref':this.producto.codigo_ref
        }
        
        try{
            const response=await APIProductos.agregarProducto(producto)
            if (response.status==200) {
                this.$swal('En buena hora!','Un nuevo producto fue agregado','success');
                this.cerrarModal();
                this.$emit('recargar')

            }
     
        }
        catch(error){
              this.$swal('Ups!','Probablemente ya exista un producto con ese codigo','warning');
                this.cerrarModal();
      
            
        }
      
    },
     async modificarproducto(){
       console.log('antes',this.producto)
       let producto = {
         'nombre':this.producto.nombre,
         'precio':this.producto.precio,
         'codigo':this.producto.codigo,
         'codigo_ref':this.producto.codigo_ref,
         'rubro':this.producto.rubro.id,
         
         }
         console.log('datos ppr modificar',producto)
        try{
           const response=await APIProductos.actualizarProducto(this.codigo_producto,producto)
           console.log(response)
              if (response.status==200) {
                this.$swal('Bien hecho','El producto fue modificado con exito','success');
                this.cerrarModal();
                this.$emit('recargar')

            }
        }
           catch(error){
            this.$swal('Ups! Algo salio mal','Probablemente ya exista un producto con ese codigo .','warning');
        }
            
      },


      },
     
  }
</script>