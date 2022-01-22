<template>
  <div>

  <b-container fluid>
        <modal-producto  @recargar="cargar()" ref="modal"/>
      <b-button @click="abrirmodal('crear',{})"><b-icon class="m-10" icon="plus-circle"></b-icon>Nuevo</b-button>
  
    <b-row>
  
      <b-col lg="6"  style="margin-bottom:30px; margin-top:0px;">
        <b-form-group
          label=""
          label-for="filter-input"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
          
        >
          <b-input-group size="sm">
            <b-form-input
              id="filter-input"
              v-model="filter"
              type="search"
              placeholder="Escribe lo que quieras buscar"
            ></b-form-input>

            <b-input-group-append>
              <b-button :disabled="!filter" @click="filter = ''">Buscar</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>
 
    </b-row>
    <b-table
      :items="datos"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
      :filter="filter"
      :filter-included-fields="filterOn"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :sort-direction="sortDirection"
      stacked="md"
      empty-text="No hay productos cargados" show-empty
      small
      @filtered="onFiltered"
      id="tabla-productos"
    >
      <template #cell(name)="row">
        {{ row.value.first }} {{ row.value.last }}
      </template>

      <template #empty="scope">
        <h6>{{ scope.emptyText }}</h6>
      </template>

      <template #cell(actions)="row">
    

       
        <b-button id="editarproducto"  class="action" size="sm" @click="abrirmodal('modificar',getproducto(row.item))">    
            <b-icon icon="tag-fill"></b-icon></b-button>
            <b-tooltip target="editarproducto" triggers="hover">
                Editar este producto
              </b-tooltip>
           <b-button  id="eliminarproducto" class="action" size="sm" @click="deleteswal(row.item)">
         <b-icon icon="trash-fill"></b-icon>
        </b-button>
             <b-tooltip target="Dar de baja este producto" triggers="hover">
                Eliminar este producto
              </b-tooltip>
<!-- 
         <b-button class="action" size="sm" id="cuotaspagos">    <b-icon icon="wallet2"></b-icon></b-button>
                 <b-tooltip target="cuotaspagos" triggers="hover">
                Cuotas y pagos de esta cuenta
              </b-tooltip> -->

      </template>

  
    </b-table>
     <b-col sm="7" md="6" class="my-1">
        <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          align="fill"
          size="sm"
          class="my-0"
        ></b-pagination>
      </b-col>

  </b-container>
 
</div>
</template>

<script>
import APIProductos from '../../apis/productos'
import ModalProducto from './modalproducto.vue'
export default {
    name:'TablaProductos',
    components:{
        ModalProducto,

    },
    data() {
      return {
      
        objetoproducto:null,
        datos: [],
        producto_id:'0',
        totalRows: 1,
        currentPage: 1,
        perPage: 10,
     
        pageOptions: [5, 10, 15, { value: 100, text: "Show a lot" }],
        sortBy: '',
        sortDesc: false,
        sortDirection: 'asc',
        filter: null,
        filterOn: [],
        display:false,
        consulta:null,
        resultdelete:'',
   
            
        accion:'',
        fields:[
          { key: 'id', label: 'ID', sortable: true, sortDirection: 'desc' },
          { key: 'nombre', label: 'Nombre', sortable: true, sortDirection: 'desc' },
          { key: 'codigo', label: 'Codigo', sortable: true, class: 'text-center' },
          { key: 'codigo_ref', label: 'Codigo de ref', sortable: true, class: 'text-center' },
          { key: 'precio', label: 'Precio', sortable: true, class: 'text-center' },
          { key: 'rubro.nombre', label: 'Rubro', sortable: true, class: 'text-center' },
          // { key: 'stock', label: 'Stock', sortable: true, class: 'text-center' },
          // { key: 'cant_vendida', label: 'Cant vendida', sortable: true, class: 'text-center' },
          { key: 'actions', label: 'Acciones' }

            ],
        infoModal: {
          id: 'info-modal',
          title: '',
          content: ''
        }
      }
    },
    computed: {
      sortOptions() {
        // Create an options list from our fields
        return this.fields
          .filter(f => f.sortable)
          .map(f => {
            return { text: f.label, value: f.key }
          })
      },
 
   
    },
    
    created(){
        this.getproductos()
        
    },
    mounted() {
      

// Set the initial number of items
      this.totalRows = this.datos.length
    },
    methods: {

      async getproductos(){
          
          const productos=await APIProductos.getProductos();
          this.datos=productos
          this.display=true;
          },
    //    showModal() {
    //     this.$refs['modal_productos'].show()
        
    
    //     },
    //      hideModal() {
    //     this.$refs['modal_productos'].hide()
    //   },
      resetInfoModal() {
        this.infoModal.title = ''
        this.infoModal.content = ''
      },
      onFiltered(filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length
        this.currentPage = 1
      },

      sendproducto(producto){
          const datos=producto
          return datos
      },
        getproducto: function(producto){
          this.objetoproducto=Object.assign({},producto);
          return this.objetoproducto
          
      },

      cargar(){
        this.getproductos()
        
      },
        abrirmodal(accion,producto){
          this.$refs.modal.showModal(accion,producto);
      },

    async bajaProducto(producto){
         try{
   
           const response=await APIProductos.bajaProducto(producto.codigo)
           const texto=producto.nombre + '  con codigo  ' + producto.codigo
              if (response.status==200) {
                this.$swal(
                'EXITO!',
                 texto.toUpperCase() + 'HA SIDO DADO DE BAJA',
                'success'
                )
              
                }
                this.cargar()
              // this.$router.push('productos')
   
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
      deleteswal(producto){

         const titulo=producto.nombre + '  con codigo  ' + producto.codigo
         const texto="Seguro quieres dar de baja este producto?.Ya no podras verlo en la lista ni usarlo en otras funciones"
         this.confirmswal(titulo,texto).then((result) => {
            if (result.isConfirmed) {
             this.bajaProducto(producto)}
})
      }


    }
  }
</script>

<style>
    .sr-only {display: none;}
</style>