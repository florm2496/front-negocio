<template>
<Clientes/>
</template>
<script>

//import Sidebar from './sidebar.vue'
//import CrearCliente from './addclientes.vue'  <crear-cliente/>

import Clientes from './clientes.vue'
export default {
  name: 'Index',
  components:{
      //Sidebar,
      //CrearCliente,
      Clientes,

  },
 
  data(){
      return{
        

      }
  },
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
