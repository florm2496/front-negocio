<template>
  <div>
  <b-modal id="modal" name="modal" ref="modal" size="lg" title="Clientes"  ok-only>
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
      empty-text="No hay clientes registrados" 
      show-empty
      small
      @filtered="onFiltered"
      id="tabla-clientes"
    >
      <template #cell(name)="row">
        {{ row.value.first }} {{ row.value.last }}
      </template>
      <template #empty="scope">
        <h6>{{ scope.emptyText }}</h6>
      </template>
      <template #cell(actions)="row">
    

        <b-button size="sm" @click="seleccionar(row.item)"> <b-icon icon="hand-thumbs-up"></b-icon> </b-button>

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
import APIClientes from '../../apis/clientes'
export default {
    name:'ModalTablaClientes',
    data() {
      return {
      
        objetocliente:null,
        datos: [],
        cliente_id:'0',
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
          // { key: 'numero_cliente', label: 'N°', sortable: true, class: 'text-center' },
          { key: 'apellido', label: 'Apellido', sortable: true, sortDirection: 'desc' },
          { key: 'nombre', label: 'Nombre', sortable: true, class: 'text-center' },
          { key: 'dni', label: 'DNI', sortable: true, class: 'text-center' },
          { key: 'telefono', label: 'Telefono', sortable: true, class: 'text-center' },
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
        this.getclientes()
    },
    mounted() {
      

// Set the initial number of items
      this.totalRows = this.datos.length
    },
    methods: {

      async getclientes(){
          
          const consulta=await APIClientes.getClientes();
          this.datos=consulta
          this.display=true;
          },
       showModal() {
        this.$refs['modal'].show()
        
    
        },
         hideModal() {
        this.$refs['modal'].hide()
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

      sendcliente(cliente){
          const datos=cliente
          return datos
      },
        getcliente: function(cliente){
          this.objetocliente=Object.assign({},cliente);
          return this.objetocliente
          
      },
      seleccionar(cliente){
        
        this.$emit('avisar',this.getcliente(cliente))
        this.hideModal()
      },
      cargar(){
        this.getclientes()
        
      },


    }
  }
</script>

<style>
    .sr-only {display: none;}
</style>