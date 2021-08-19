<template>
        <div>
       
      <tabla-clientes v-if="display" :fields="this.fields2" :datos="this.datos"/>
        </div>

</template>

<script>

import TablaClientes from './clientes/tabla.vue'


import APIClientes from '../apis/clientes'
export default {
    name:'Clientes',
    components:{
    
       
        TablaClientes,
        
    },
    data(){
        return{
            datos: [],
            display:false,
            
            fields2:[
            { key: 'apellido', label: 'Apellido', sortable: true, sortDirection: 'desc' },
            { key: 'nombre', label: 'Nombre', sortable: true, class: 'text-center' },
            { key: 'boleta_sueldo', label: 'Boleta de sueldo', sortable: true, class: 'text-center' },
            { key: 'dni', label: 'DNI', sortable: true, class: 'text-center' },
            { key: 'id', label: 'ID', sortable: true, class: 'text-center' },
            { key: 'sueldo', label: 'Sueldo', sortable: true, class: 'text-center' },
            { key: 'telefono', label: 'Telefono', sortable: true, class: 'text-center' },
            { key: 'actions', label: 'Actions' }

            ]

        }
    },
    
          methods: {
        
            async getclientes(){
           
            const consulta=await APIClientes.getClientes();
            this.datos=consulta;
            this.display=true;
            },
            recargar(){
                this.getclientes();
            }
        },
     
        created(){
            this.getclientes();
           
        },
    
  
       

}
</script>

<style>

</style>
 
 
 
 