<template>
  <div class="productos">

   <tabla-productos/>
  </div>
  
</template>

<script>
// @ is an alias to /src

import TablaProductos from "../components/productos/tabla.vue"
export default {
  name: 'Productos',
  components: {
    TablaProductos,
   
  }
}
</script>
