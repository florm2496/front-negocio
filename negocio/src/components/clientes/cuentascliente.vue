<template>
<div></div>
 
</template>

<script>

// import APIClientes from '../../apis/clientes'

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
          { key: 'apellido', label: 'Apellido', sortable: true, sortDirection: 'desc' },
          { key: 'nombre', label: 'Nombre', sortable: true, class: 'text-center' },
          { key: 'boleta_sueldo', label: 'Boleta de sueldo', sortable: true, class: 'text-center' },
          { key: 'dni', label: 'DNI', sortable: true, class: 'text-center' },
          { key: 'id', label: 'ID', sortable: true, class: 'text-center' },
          { key: 'sueldo', label: 'Sueldo', sortable: true, class: 'text-center' },
          { key: 'telefono', label: 'Telefono', sortable: true, class: 'text-center' },
          { key: 'actions', label: 'Acciones' }

            ],
        infoModal: {
          id: 'info-modal',
          title: '',
          content: ''
        }
      }
    },
 
  }
</script>

<style>
    .sr-only {display: none;}
    .action{
      margin: 3px;
    }
</style>