<template>
  <div>
  <b-modal id="modal_productos" name="modal_productos" ref="modal_productos" size="lg" title="Productos"  ok-only>
      <template #modal-header="{ close }">
      <!-- Emulate built in modal header close button action -->
      <b-button size="sm" variant="outline-danger" @click="close()">
      <span aria-hidden="true">&times;</span>
      </b-button>
    </template>

  <b-container fluid>
  
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
      show-empty
      small
      @filtered="onFiltered"
      id="tabla-productos"
    >
      <template #cell(name)="row">
        {{ row.value.first }} {{ row.value.last }}
      </template>

      <template #cell(actions)="row">
         
        <b-button id="editarproducto"  class="action" size="sm" @click="seleccionarproducto(row.item)">    
            <b-icon icon="hand-thumbs-up"></b-icon></b-button>

       

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
   <template #modal-footer="">
 
    </template>
  </b-container>
  </b-modal>
</div>
</template>

<script>
import APIProductos from '../../apis/productos'
export default {
    name:'ModalTablaProductos',
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
          { key: 'nombre', label: 'Nombre', sortable: true, sortDirection: 'desc' },
          { key: 'codigo', label: 'Codigo', sortable: true, class: 'text-center' },
          { key: 'precio', label: 'Precio', sortable: true, class: 'text-center' },
          { key: 'tipo', label: 'Tipo', sortable: true, class: 'text-center' },

          { key: 'stock', label: 'Stock', sortable: true, class: 'text-center' },
          { key: 'actions', label: 'Elegir' }

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
       showModal() {
        this.$refs['modal_productos'].show()
        
    
        },
         hideModal() {
        this.$refs['modal_productos'].hide()
      },
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
      seleccionarproducto(producto){
        
        this.$emit('elegirproducto',this.getproducto(producto))
        this.hideModal()
      },
      cargar(){
        this.productos()
        
      },


    }
  }
</script>

<style>
    .sr-only {display: none;}
</style>