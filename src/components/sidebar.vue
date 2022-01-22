<template>
  <div>
    <!-- <b-button v-b-toggle.sidebar-no-header>Toggle Sidebar</b-button> -->
    <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header visible>
    <template >
      <!-- <template #default="{ hide }"> -->
        <div class="p-3">
          <h4 id="sidebar-no-header-title">SISTEMA DE GESTION DE CUENTAS DE CLIENTES</h4>
          <p>
          
          </p>
          <nav class="mb-3">
            <b-nav vertical>
              <!-- <b-nav-item active @click="hide">Active</b-nav-item>
              <b-nav-item href="#link-1" @click="hide">Link</b-nav-item>
              <b-nav-item href="#link-2" @click="hide">Another Link</b-nav-item> -->
              <b-nav-item >Active</b-nav-item>
              <b-nav-item >Link</b-nav-item>
              <b-nav-item >Another Link</b-nav-item>
            </b-nav>
          </nav>
          <b-button variant="primary" block>Close Sidebar</b-button>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
export default {
    name: "Sidebar",
    components: {

    },
    data() {
        return{

        }
        
    },
}
</script>