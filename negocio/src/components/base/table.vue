<template>

  <div id="app"  class="table container">
  
    <b-row class="mb-3" style="display:flex">
      <b-col md="3">
        <b-form-input v-model="filter" type="search" id="filterInput" placeholder="Type to Search"></b-form-input>
      </b-col>

    </b-row>
    <b-row>
      <b-col>
        <b-table
          striped
          hover
          outlined
          :items="this.data"
          :filter="this.filter"
          :per-page="this.perPage"
         
          :current-page="this.currentPage"
        >
           <template #cell(actions)="row">
        <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">
          Info modal
        </b-button>
        <b-button size="sm" @click="row.toggleDetails">
          {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
        </b-button>
      </template>
        </b-table>
           <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-table"
        ></b-pagination>
      </b-col>
    </b-row>
  </div>
</template>
<script>

export default {
  name: 'Table',
  components:{
      //Sidebar,
      //CrearCliente,

  },
  props:['datos',],
  data(){
      return{
          filter: "",
          perPage:"10",
          currentPage:"1",
          data: [],
          infoModal: {
          id: 'info-modal',
          title: '',
          content: ''
        }

      }
  },      
  methods: {
      info(item, index, button) {
        this.infoModal.title = `Row index: ${index}`
        this.infoModal.content = JSON.stringify(item, null, 2)
        this.$root.$emit('bv::show::modal', this.infoModal.id, button)
      },
  },
 mounted() {
     this.data=this.datos
     console.log('desde table',this.data)
 },
   computed: {
            rows() {
            return this.data.length;
            },
        },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.table{
  padding: 30px;
}
</style>
