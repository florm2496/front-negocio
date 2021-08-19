<template>

  <b-container fluid>
      <modal-cliente ref="modal"/>
      <b-button @click="abrirmodal('crear',{})">Nuevo cliente</b-button>
      <b-button @click="cargar()">recargar</b-button>
    <!-- User Interface controls -->
    <b-row>
  
      <b-col lg="6" class="my-1">
        <b-form-group
          label="Filter"
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
              placeholder="Type to Search"
            ></b-form-input>

            <b-input-group-append>
              <b-button :disabled="!filter" @click="filter = ''">Buscar</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>

      <b-col sm="5" md="6" class="my-1">
        <b-form-group
          label="Clientes por pagina"
          label-for="per-page-select"
          label-cols-sm="6"
          label-cols-md="4"
          label-cols-lg="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
        >
          <b-form-select
            id="per-page-select"
            v-model="perPage"
            :options="pageOptions"
            size="sm"
          ></b-form-select>
        </b-form-group>
      </b-col>

 
    </b-row>
    <b-table
      :items="items2"
      :fields="campos"
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
      id="tabla-clientes"
    >
      <template #cell(name)="row">
        {{ row.value.first }} {{ row.value.last }}
      </template>

      <template #cell(actions)="row">
        <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">
         Editar
        </b-button>
        <b-button @click="abrirmodal('modificar',row.item)">modificar</b-button>
   <!-- <modificar-cliente :cliente="sendcliente(row.item)" :modal="row.index"/> -->
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
    <!-- Info modal -->
    <b-modal :id="infoModal.id" :title="infoModal.title" ok-only @hide="resetInfoModal">
      <pre>{{ infoModal.content }}</pre>
    </b-modal>
  </b-container>
</template>

<script>
import ModalCliente from './modalcliente.vue'
// import ModificarCliente from './modificar.vue'
  export default {
      name: 'TablaClientes',
      props:['datos','fields'],
      components: {
        //   ModificarCliente,
          ModalCliente,
      },
    data() {
      return {
        items2: [],
        campos : [],
    
        data: [],
        totalRows: 1,
        currentPage: 1,
        perPage: 10,
        pageOptions: [5, 10, 15, { value: 100, text: "Show a lot" }],
        sortBy: '',
        sortDesc: false,
        sortDirection: 'asc',
        filter: null,
        filterOn: [],
        accion:'',
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
    mounted() {
        this.cargar()
      
      
      // Set the initial number of items
      this.totalRows = this.items2.length
    },
    methods: {
      info(item, index, button) {
        this.infoModal.title = `Row index: ${index}`
        this.infoModal.content = JSON.stringify(item, null, 2)
        this.$root.$emit('bv::show::modal', this.infoModal.id, button)
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
      cargar(){
        this.items2=this.datos
        this.campos=this.fields
     
      },
      abrirmodal(accion,cliente){
          this.$refs.modal.showModal(accion,cliente);
      },
      sendcliente(cliente){
          const datos=cliente
          return datos
      }

    }
  }
</script>

<style>
    .sr-only {display: none;}
</style>