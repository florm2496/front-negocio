<template>
<div>
<b-container>
  <b-row>
    <b-col>
        <b-row>
      
            <b-col>
    <b-form-group
        id="num_cuenta"
        label="Numero de cuenta"
        label-for="num_cuenta"
        
      >
       <b-form-input
          id="num_cuenta"
          v-model="this.numero_cuenta"
          type="text"
          disabled
        ></b-form-input>
      </b-form-group>
          <b-form-group
        id="solicitante"
        label="Solicitante"
        label-for="solicitante"
        
      >
       <b-form-input
          id="solicitante"
          v-model="cuenta.solicitante"
          type="text"
          disabled
        ></b-form-input>
      </b-form-group>
          <b-form-group
        id="garante"
        label="Garante"
        label-for="garante"
        
      >
       <b-form-input
          id="garante"
          v-model="cuenta.garante"
          type="text"
          disabled
        ></b-form-input>
      </b-form-group>

            </b-col>
            <b-col>
          <b-form-group
        id="estado"
        label="Estado"
        label-for="estado"
        
      >
       <b-form-input
          id="estado"
          v-model="cuenta.estado"
          type="text"
          disabled
        ></b-form-input>
      </b-form-group>
        <b-form-group
        id="total"
        label="Total"
        label-for="total"
        
      >
       <b-form-input
          id="total"
          v-model="cuenta.importe"
          type="text"
          disabled
        ></b-form-input>
      </b-form-group>
    <b-form-group
        id="saldo"
        label="Saldo"
        label-for="saldo"
        
      >
       <b-form-input
          id="saldo"
          v-model="cuenta.saldo"
          type="text"
          disabled
        ></b-form-input>
      </b-form-group>
            </b-col>
        </b-row>

    </b-col>


    <b-col>
        <b-row>
          <b-col>
   


          </b-col>
          <b-col>
            
    
            
          </b-col>
        </b-row>

    </b-col>
</b-row>

</b-container>
   <h4>Detalle de la cuenta</h4>
      <b-container>
           <b-table  striped hover :items="detalles" :fields="fields">

        <template #cell(name)="row">
        {{ row.value.first }} {{ row.value.last }}
      </template>
    

           </b-table>
      </b-container>

</div>
  
</template>

<script>

import APICuentas from '../../apis/cuentas'
export default {
    name:'DetalleCuenta',
    components:{
     

    },
    data(){
        return{
            num_cuenta:'',
            saldo : 0,
            total : 0,
            //cuotas :[],
            garante : 0,
            solicitante:0,
            pagos:null,
            hora:'',
            nuevo_pago: {
                'monto':0,
                'metodo':'',
            },
            cuotapagada:false,
            estado:0,
            titulo_modal:'',
            soliciante_dni:'',
            detalles:[],
            fields:[
                { key: 'producto.codigo', label: 'Codigo de producto', sortable: true, sortDirection: 'desc' },
                { key: 'producto.nombre', label: 'Nombre de producto', sortable: true, class: 'text-center' },

      
                { key: 'subtotal', label: 'Subtotal', sortable: true, class: 'text-center' },
                { key: 'descuento', label: 'Descuento', sortable: true, class: 'text-center' },
                
                { key: 'cantidad', label: 'Cantidad', sortable: true, class: 'text-center' },

                { key: 'actions', label: 'Acciones' }

            ],

            cuenta: {
              'solicitante':'',
              'importe':0,
              'garante':'',
              'saldo':0,
              'estado':null,

            },
            cuotas: null,
            cuota_actual:null,
            saldo_cuota:0,
            dni_sol:'',
           

        }
    },
    created(){
        this.numero_cuenta=this.$route.query.num_cuenta
        this.dni_sol=this.$route.query.solicitante_dni

    },

    mounted(){
        this.hora = new Date()
        //numero de cuenta, anticipo ,fecha , meodo de pago, saldo , cuotas , pagos
        this.getdetalles();

    },
    methods:{
         
        async getdetalles(){
            
            
            const data = await APICuentas.cuentasbycliente(this.dni_sol,this.numero_cuenta);
         console.log(data)
           this.cuenta=data[0]
        this.detalles=this.cuenta.detalles
          
           }, 


    
        
            //this.cuotas = data.cuotas
        
    
    }
}
</script>

<style>
.spacing{
   padding: 20px;
}
</style>