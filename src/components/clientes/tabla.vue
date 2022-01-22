<template>

  <b-container fluid>
      <modal-cliente  @recargar="cargar()" ref="modal"/>
      <b-button @click="abrirmodal('crear',{})"><b-icon class="m-10" icon="plus-circle">Nuevo</b-icon>Nuevo</b-button>
    <!-- User Interface controls -->
    <b-row>
  
      <b-col lg="6" class="my-1">
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
      empty-text="No hay clientes registrados" show-empty
      small
      @filtered="onFiltered"
      id="tabla-clientes"
    >
         <template #empty="scope">
        <h6>{{ scope.emptyText }}</h6>
      </template>
      <template #cell(name)="row">
        {{ row.value.first }} {{ row.value.last }}
      </template>

      <template #cell(actions)="row">
        <!-- <b-button size="sm" @click="deletemodal(row.item, row.index, $event.target)" class="mr-1">
         Eliminar
        </b-button> -->


        <b-button id="modificar-cliente" size="sm" class="action"  @click="detallecliente(row.item)"><b-icon icon="tag-fill"></b-icon></b-button>
        <b-button id="cuentas-cliente" class="action" size="sm" @click="cuentascliente(row.item)" ><b-icon  icon="card-checklist"></b-icon></b-button>

                 <b-tooltip target="modificar-cliente" triggers="hover">
                Ver detalles
              </b-tooltip>
                 <b-tooltip target="cuentas-cliente" triggers="hover">
                Cuentas de este cliente
              </b-tooltip>
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
    <b-modal :id="infoModal.id" ok-only @hide="resetInfoModal">
      <pre>Seguro quiere eliminar este cliente ?</pre>
    </b-modal>

    <b-modal :id="this.cliente_id" ok-only @hide="resetInfoModal">
      <pre>Eliminar</pre>
    </b-modal>


  </b-container>
</template>

<script>

import APIClientes from '../../apis/clientes'
import ModalCliente from './modalclientes.vue'
// import ModificarCliente from './modificar.vue'
  export default {
      name: 'TablaClientes',
      components: {
        //   ModificarCliente,
          ModalCliente,
      },
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
          { key: 'numero_cliente', label: 'N° de cliente', sortable: true, class: 'text-center',sortDirection: 'desc' },
          { key: 'apellido', label: 'Apellido', sortable: true, sortDirection: 'desc' },
          { key: 'nombre', label: 'Nombre', sortable: true, class: 'text-center' },
          { key: 'dni', label: 'DNI', sortable: true, class: 'text-center' },
          { key: 'telefono', label: 'Telefono', sortable: true, class: 'text-center' },
          
          
          //{ key: 'sueldo', label: 'Sueldo', sortable: true, class: 'text-center' },
          //{ key: 'telefono', label: 'Telefono', sortable: true, class: 'text-center' },
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
        this.getclientes()
    },
    mounted() {
      

// Set the initial number of items
      this.totalRows = this.datos.length
    },
    methods: {
      deletemodal(item, index, button) {
        this.infoModal.title = `Row index: ${index}`
        this.infoModal.content = JSON.stringify(item, null, 2)
        this.$root.$emit('bv::show::modal', this.infoModal.id, button)
      },

      async getclientes(){
          
          const consulta=await APIClientes.getClientes();
          this.datos=consulta
          this.display=true;
          },

       cargar(){
         this.getclientes()

     },
     cuentascliente(cliente){
       let nombrecompleto= cliente.nombre + ' ' + cliente.apellido
       this.$router.push({path :'/cuentascliente',query:{dni:cliente.dni,nombre:nombrecompleto}});
     },
      detallecliente(cliente){
    
        this.$router.push({path :'/editarcliente',query:{id:cliente.id }});

      },
      getcliente(cliente){
        this.objetocliente=Object.assign({},cliente);
        return this.objetocliente
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

      abrirmodal(accion,cliente){
          this.$refs.modal.showModal(accion,cliente);
      },
      sendcliente(cliente){
          const datos=cliente
          return datos
      },


    }
  }
</script>

<style>
    .sr-only {display: none;}
    .action{
      margin: 3px;
    }
</style>