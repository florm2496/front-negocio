<template>
  <div>
 <!-- 'numero_cuentas':cuentas_totales['cantidad'],
            'clientes_aldia': clientes_aldia,
            'clientes_morosos':clientes_morosos,
            'clientes_activos':clientes.aggregate(cantidad=Count('id'))['cantidad'],
            'cuentas_aldia':cuentas_aldia['cantidad'],
            'cuentas_morosas':cuentas_morosas['cantidad'],
            'cuentas_saldadas':cuentas_saldadas['cantidad'], -->


<b-container class="mt-50">
    <b-row>
        <b-col>
                <b-card bg-variant="primary" text-variant="white" header="Ventas realizadas" class="text-center">
        <b-card-text>{{this.datos.numero_cuentas}}</b-card-text>
      </b-card>
        </b-col>
        <b-col>     <b-card bg-variant="success" text-variant="white" header="Clientes al dia" class="text-center">
        <b-card-text>

          
            <ul>
                <li v-for="cliente in this.datos.clientes_aldia" :key="cliente">
                      {{ cliente}}
                    </li>
                    <h6 v-if="this.datos.clientes_aldia.length ==0">No hay clientes al dia</h6>
            </ul>
        </b-card-text>
      </b-card></b-col>
        <b-col>     <b-card bg-variant="danger" text-variant="white" header="Clientes morosos" class="text-center">
        <b-card-text>
               
            <ul>
                <li v-for="cliente in this.datos.clientes_morosos" :key="cliente">
                      {{ cliente}}
                    </li>
                     <h6 v-if="this.datos.clientes_morosos.length ==0">No hay clientes morosos</h6>
            </ul>

        </b-card-text>
      </b-card></b-col>
    </b-row>

       <b-row>
        <b-col>
              <b-card bg-variant="success" text-variant="white" header="Cuentas al dia" class="text-center">
      <b-card-text>{{this.datos.cuentas_aldia}}</b-card-text>
    </b-card>
        </b-col>
        <b-col>     <b-card bg-variant="danger" text-variant="white" header="Cuentas morosas" class="text-center">
        <b-card-text>{{this.datos.cuentas_morosas}}</b-card-text>
      </b-card></b-col>
        <b-col>     <b-card bg-variant="primary" text-variant="white" header="Cuentas saldadas" class="text-center">
    <b-card-text>{{this.datos.cuentas_morosas}}</b-card-text>
      </b-card></b-col>
    </b-row>
      
</b-container>
     
</div>
</template>

<script>

import APIConsultas from '../../apis/consultas'

export default {
    name: 'Dashboard',
    metaInfo: {
      title: 'Hogareña'
    },
    data(){
      return{
          datos:''
          
        }

      },
      mounted(){
        this.estadisticas()

      },

      methods:{

        async estadisticas(){
        const consulta= await APIConsultas.getEstadisticas()
        this.datos=consulta

        console.log(this.datos)
        


        }



      }



}

</script>

<style>
.container{
    margin-top: 60px;

}
.card{
    margin: 20px;
}
</style>