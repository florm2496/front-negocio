<template>
    <div class="dashboard">
        <Sidebar/>
 
  <div class="content">

            <router-view/>

            
        </div>
    </div>
</template>

<script>
import Sidebar from '../components/base/sidebar'

export default {
    name: 'Dashboard',

    components: {
        Sidebar,
      
    }
}
</script>

<style>
.dashboard {
    display: grid;
    grid-template-columns: 1fr 5fr;
    background-color: teal;
    height: 200vh;
    width: 100vw;
}

.content {
    background-color: white;
    border-radius: 10px;
    margin: 6px 6px 6px 0px;
}
.fila{
    display: flex;
    justify-content: flex-end;
}
.boton{
    
}
</style>