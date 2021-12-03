<template>

  <b-container fluid>
  <modal-cuentas @recargar="cargar()" ref="modal"/>
    <b-button to="nuevacuenta"> <b-icon icon="plus-circle"></b-icon>Nueva</b-button>
      <!-- <b-button @click="abrirmodal('crear',{})"> <b-icon icon="plus-circle"></b-icon> Nueva</b-button> -->

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
              <b-button :disabled="!filter" @click="filter = ''"> <b-icon icon="search"></b-icon> </b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>

      <b-col sm="5" md="6" class="my-1">
        <b-form-group
          label="Cuentas por pagina por pagina"
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
      empty-text="No hay cuentas registradas" show-empty
      small
      @filtered="onFiltered"
      id="tabla-cuentas"
    >
      <template #cell(name)="row">
        {{ row.value.first }} {{ row.value.last }}
      </template>
        <template #empty="scope">
      <h3>{{ scope.emptyText }}</h3>
    </template>
   
      <template #cell(actions)="row">
        <!-- <b-button size="sm" @click="deletemodal(row.item, row.index, $event.target)" class="mr-1">
         Eliminar
        </b-button> -->
   
        <b-button id="editarcuenta"  class="action" size="sm" @click="abrirmodal('modificar',getcuenta(row.item))">    <b-icon icon="tag-fill"></b-icon></b-button>
            <b-tooltip target="editarcuenta" triggers="hover">
                Editar esta cuenta
              </b-tooltip>
           <b-button  id="eliminarcuenta" class="action" size="sm" @click="deleteswal(row.item)">
         <b-icon icon="trash-fill"></b-icon>
        </b-button>
             <b-tooltip target="eliminarcuenta" triggers="hover">
                Eliminar esta cuenta
              </b-tooltip>


        <b-button id="detallecuenta" class="action" size="sm" @click="detallecuenta(row.item)">    <b-icon icon="folder2"></b-icon></b-button>
         <b-tooltip target="detallecuenta" triggers="hover">
                Detalle de esta cuenta
              </b-tooltip>

         <b-button class="action" size="sm" id="cuotaspagos"  @click="detallepagos(row.item)">    <b-icon icon="wallet2"></b-icon></b-button>
                 <b-tooltip target="cuotaspagos" triggers="hover">
                Cuotas y pagos de esta cuenta
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
      <pre>Seguro quiere eliminar esta cuenta ?</pre>
    </b-modal>

    <b-modal :id="this.cuenta_id" ok-only @hide="resetInfoModal">
      <pre>Eliminar</pre>
    </b-modal>

<modal-cuentas/>
  </b-container>

</template>

<script>


import ModalCuentas from './modalcuenta.vue'
import APICuentas from '../../apis/cuentas'
  export default {
      name: 'TablaCuentas',
      components: {
        //   ModificarCliente,
          ModalCuentas,
      },
    data() {
      return {
      
        objetocuenta:null,
        datos: [],
        totalRows: 1,
        currentPage: 1,
        perPage: 10,
        texto:'texto',
     
        pageOptions: [5, 10, 15, { value: 100, text: "Show a lot" }],
        sortBy: '',
        sortDesc: false,
        sortDirection: 'asc',
        filter: null,
        filterOn: [],
        display_alert:false,
        consulta:null,
        resultdelete:'',
        cuenta_id:'',
            
        accion:'',
        fields:[
          { key: 'numero_cuenta', label: 'Numero de cuenta', sortable: true, class: 'text-center' },
          { key: 'solicitante_nombre', label: 'Solicitante', sortable: true, sortDirection: 'desc' },
          { key: 'solicitante_dni', label: 'DNI solicitante', sortable: true, sortDirection: 'desc' },
          { key: 'garante1', label: 'Garante 1', sortable: true, class: 'text-center' },
          { key: 'garante2', label: 'Garante 2', sortable: true, class: 'text-center' },
          { key: 'importe', label: 'Importe', sortable: true, class: 'text-center' },
          { key: 'fecha', label: 'Fecha', sortable: true, class: 'text-center' },
          
          // { key: 'saldo', label: 'Saldo', sortable: true, class: 'text-center' },
          { key: 'estado', label: 'Estado', sortable: true, class: 'text-center' },
          { key: 'actions', label: 'Actions' }

            ],
        infoModal: {
          id: 'info-modal',
          title: '',
          content: ''
        }
  
      }
    },
    mounted(){
      this.getCuentas()
    },
    methods:{

        abrirmodal(accion,cuenta){
          this.$refs.modal.showModal(accion,cuenta);
      },
      detallepagos(cuenta){
        console.log(cuenta.id)
        this.$router.push({path :'/detallepagos',query:{num_cuenta:cuenta.numero_cuenta ,id_cuenta:cuenta.id}});
      },
       detallecuenta(cuenta){
        
        this.$router.push({path :'/detallecuenta',query:{num_cuenta:cuenta.numero_cuenta ,solicitante_dni:cuenta.solicitante_dni}});
      },



      async getCuentas(){
          const consulta=await APICuentas.getCuentas();
          console.log(consulta)
          this.datos=consulta
          this.display_alert=true;
      },

       cargar(){
         this.getCuentas()

     },


       getcuenta(cuenta){
        this.objetocuenta=Object.assign({},cuenta);
        return this.objetocuenta
      
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
      

    }
   
   
  }
</script>

<style>
    .sr-only {display: none;}
    .action{
      margin: 3px;
    }
</style>