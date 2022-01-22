<template>
<div>

  
  <b-container fluid>

<b-row align-h="between">
  <b-col cols="4">   <h3>Cuentas de {{this.nombrecliente}}</h3></b-col>
  <b-col cols="2">  <b-button style="margin:10px;" to="clientes"><b-icon icon="arrow-left-circle-fill"></b-icon></b-button></b-col>
</b-row>
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
          label="Cuentas por pagina"
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
      :items="cuentas"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
      :filter="filter"
      :filter-included-fields="filterOn"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :sort-direction="sortDirection"
      stacked="md"
      empty-text="Este cliente no tiene cuentas aun" show-empty
      small
      @filtered="onFiltered"
      id="tabla-clientes"
    >
      <template #cell(name)="row">
        {{ row.value.first }} {{ row.value.last }}
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
      <!-- <template #cell(actions)="row">
       <b-button size="sm" @click="deletemodal(row.item, row.index, $event.target)" class="mr-1">
         Eliminar
        </b-button>

      </template> -->

  
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

import APICuentas from '../../apis/cuentas'

// import ModificarCliente from './modificar.vue'
  export default {
      name: 'CuentasCliente',
      components: {
        //   ModificarCliente,
         
      },
    data() {
      return {
      
        objetocliente:null,
        datos: [],
        cliente_id:'0',
        totalRows: 1,
        currentPage: 1,
        perPage: 10,
        cuentas: null,
     
        pageOptions: [5, 10, 15, { value: 100, text: "Show a lot" }],
        sortBy: '',
        sortDesc: false,
        sortDirection: 'asc',
        filter: null,
        filterOn: [],
        display:false,
        consulta:null,
        resultdelete:'',
        dnicliente: '',
        nombrecliente:'',
        accion:'',
        fields:[
          { key: 'fecha', label: 'Fecha', sortable: true, class: 'text-center' },
          { key: 'garante', label: 'Garante', sortable: true, sortDirection: 'desc' },
       
          { key: 'importe', label: 'Importe', sortable: true, class: 'text-center' },
          { key: 'numero_cuenta', label: 'N° cuenta', sortable: true, class: 'text-center' },
          { key: 'anticipo', label: 'saldo', sortable: true, class: 'text-center' },
 
          { key: 'metodo_pago', label: 'metodo_pago', sortable: true, class: 'text-center' },
          { key: 'estado', label: 'estado', sortable: true, class: 'text-center' },
          { key: 'actions', label: 'Acciones' }

            ],
        infoModal: {
          id: 'info-modal',
          title: '',
          content: ''
        }
      }
    },
    created(){
    this.dnicliente=this.$route.query.dni

    this.nombrecliente=this.$route.query.nombre
    console.log(this.cliente.nombre)
    },
  mounted(){
    this.getcuentas()
    
  },
  methods:{
    async getcuentas(){
      console.log(this.dnicliente)
      const datos= await APICuentas.cuentasbycliente(this.dnicliente,null)
      console.log(datos)
      this.cuentas = datos
    },
         onFiltered(filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length
        this.currentPage = 1
      },
     detallepagos(cuenta){
        console.log(cuenta.id)
        this.$router.push({path :'/detallepagos',query:{num_cuenta:cuenta.numero_cuenta ,id_cuenta:cuenta.id}});
      },
       detallecuenta(cuenta){
        
        this.$router.push({path :'/detallecuenta',query:{num_cuenta:cuenta.numero_cuenta ,solicitante_dni:cuenta.solicitante_dni}});
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