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
   
 <b-button id="show-btn" @click="showModal">Refinanciar cuenta </b-button>
 <b-modal ref="modal-refinanciar" hide-footer title="Refinanciar cuenta">
      <b-form-group
     label="Saldo pendiente"
     >
         <b-form-input v-model="cuenta.saldo" disabled>

    </b-form-input>
     </b-form-group>
     <b-form-group
     label="Cantidad de cuotas"
     >
         <b-form-input v-model="cuotas_refinanciadas" placeholder="Cuotas">

    </b-form-input>
     </b-form-group>
       <b-form-group
     label="Fecha de vencimiento"
     type="date"
     >
         <b-button v-model="fecha_refinanciada">Fecha refinanciada</b-button>

     </b-form-group>
      <b-button class="mt-2" variant="outline-warning" block @click="refinanciar_cuenta()">Refinanciar</b-button>
    </b-modal>
  
          </b-col>
          <b-col>
            
    
            
          </b-col>
        </b-row>

    </b-col>
</b-row>

</b-container>
   <h4>LISTADO DE CUOTAS</h4>
      <b-container>
           <b-table  striped hover :items="cuotas" :fields="fields">

        <template #cell(name)="row">
        {{ row.value.first }} {{ row.value.last }}
      </template>
           <template #cell(pagos)="row">
    

        <b-button size="sm" @click="verpagos(row.item,row.index)"> <b-icon icon="eye-fill"></b-icon> </b-button>

      </template>
<!-- 
      <template #cell(actions)="row">
    
          <b-button size="sm" @click="eliminar(row.item,row.index)"> <b-icon icon="x"></b-icon> </b-button>
    

      </template> -->

           </b-table>
      </b-container>
  
    
    <b-modal ref="modal-pagos" hide-footer :title="titulo_modal">
      <b-container>
        <h4>Nuevo pago</h4>
       <b-row class="spacing">
       
       <b-col>
            <b-form-input
          id="monto_pago"
          v-model="nuevo_pago.monto"
          type="number"
         :disabled="cuotapagada"
          placeholder="Ingrese el monto"
          
        >
        </b-form-input>
          
       </b-col>
       <b-col>
         <v-select id="metodo_id" v-model="nuevo_pago.metodo" :disabled="cuotapagada" :options="metodos" />
    
       </b-col>
      <b-col lg="2"> <b-button variant="success" @click="validardatospago()" :disabled="disabled_pagar" size="sm">Pagar</b-button></b-col>
     </b-row>
      </b-container>
      <div class="d-block text-center">


    <b-table  striped hover :items="pagos" :fields="fields_pagos">

        <template #cell(name)="row">
        {{ row.value.first }} {{ row.value.last }}
      </template>


           </b-table>
      </div>
  
    </b-modal>
</div>
  
</template>

<script>

import APICuentas from '../../apis/cuentas'
export default {
    name:'DetallePagos',
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
            cuotas_refinanciadas:0,
            pagos:null,
            fecha_refinanciada:'',
            hora:'',
            metodos:['Efectivo','T credito','T debito','Transferencia'],
          
            nuevo_pago: {
                'monto':0,
                'metodo':'',
            },
            cuotapagada:false,
            estado:0,
            titulo_modal:'',
            fields:[
                { key: 'numero_cuota', label: 'N°cuota', sortable: true, sortDirection: 'desc' },
                { key: 'importe', label: 'Importe', sortable: true, class: 'text-center' },
                
                { key: 'fecha_vencimiento', label: 'Vencimiento', sortable: true, class: 'text-center' },
                { key: 'vencida', label: 'Vencida', sortable: true, class: 'text-center'},
                { key: 'recargo', label: 'Recargo', sortable: true, class: 'text-center' },
      
                { key: 'estado', label: 'Estado', sortable: true, class: 'text-center' },
                { key: 'saldo', label: 'Saldo', sortable: true, class: 'text-center' },
                
                { key: 'pagos', label: 'Pagos', sortable: true, class: 'text-center' },
                 { key: 'pagos', label: 'Pagos' },
                { key: 'actions', label: 'Acciones' }

            ],
            fields_pagos:[{key: 'importe', label: 'Importe', sortable: true, },
                          {key: 'metodo_pago', label: 'Metodo de pago', sortable: true, },
                          {key: 'fecha', label: 'Fecha', sortable: true, }
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
           

        }
    },
    beforeCreate(){
        this.numero_cuenta=this.$route.query.num_cuenta
        this.id_cuenta=this.$route.query.id_cuenta

    },
    refinanciar_cuenta(){

    },
    created(){
      this.getcuotas();
      
      
    },
    computed:{

      disabled_pagar(){
        var hab=true
        console.log('------',this.nuevo_pago.metodo)
        if (this.nuevo_pago.monto!=0 && this.nuevo_pago.metodo.length==0) {
            hab=false
            console.log(this.nuevo_pago.monto)
            console.log('------',typeof(this.nuevo_pago.metodo),this.nuevo_pago.metodo.length)
            console.log('entra aqui')
          
        }
        else{
          console.log('no cumple')
        }
        return (
          hab
        );
            },


    },
    mounted(){
        this.hora = new Date()
        //numero de cuenta, anticipo ,fecha , meodo de pago, saldo , cuotas , pagos
        console.log(this.cuota_actual)
        
        
    

    },
    methods:{
      
        async getcuotas(){
            
            const data = await APICuentas.cuotascuenta(this.numero_cuenta);
            
            this.cuenta = data   
            this.cuotas = data.cuotas
            
           }, 
        verpagos(cuota){
          this.cuota_actual=cuota
          this.cuotapagada=cuota.pagada
          this.saldo_cuota=cuota.saldo
          this.nuevo_pago.monto=cuota.saldo
          this.$refs['modal-pagos'].show()
          this.titulo_modal='Cuota ' + cuota.numero_cuota
          this.pagos = cuota.pagos_cuotas

        },
        validardatospago(){
          if (this.cuotapagada == false) {
             if (this.nuevo_pago.monto <= 0 ) {
              this.$swal('El monto del pago debe ser mayor a 0','','warning')
            
              }
              else if(this.nuevo_pago.monto > this.cuota_actual.saldo){
                // this.$swal('Esta ingresando un importe superior a esta cuota , desea descontar la diferencia de la siguiente cuota?','','warning')
                this.$swal({
                  title: 'Vas a pagar mas del importe de esta cuota. Quieres descontar la diferencia a la siguiente cuota?',
                  showDenyButton: true,
                  showCancelButton: true,
                  confirmButtonText: 'Confirmar',
              
                }).then((result) => {
             
                  if (result.isConfirmed) {

                    this.$swal('Pagado!', '', 'success')
                  } else if (result.isDenied) {
                    this.$swal('Operacion cancelada', '', 'info')


                  }
                })

              }
            
              else{
                this.realizarpago()

              }
                
              }else{
                this.$swal('CUOTA SALDADA')
              }
         

        },
        showModal() {
        this.$refs['modal-refinanciar'].show()
      },
      hideModal() {
        this.$refs['modal-refinanciar'].hide()
      },
        async realizarpago(){
          
          let nuevo_pago = {
            'metodo': this.nuevo_pago.metodo,
            'monto': this.nuevo_pago.monto,
            'numero_cuenta': this.numero_cuenta,
            'id_cuenta':this.id_cuenta,
            'numero_cuota': this.cuota_actual.numero_cuota,
            'id_cuota':this.cuota_actual.id,

          }
          try{
            const response = await APICuentas.nuevopago(nuevo_pago);
            if (response.status==200) {
              this.$swal('Bien hecho','Nuevo pago agregado','success')
              let nuevo_pago = response.pago
              this.pagos.push(nuevo_pago)
              this.nuevo_pago.metodo=''
              this.nuevo_pago.monto=0


              this.getcuotas()


              
              
            }
          }
          catch(issue){
            
           this.$swal('Error',issue.message,'error')
          }
          
  

        }
      
        
            //this.cuotas = data.cuotas
        
    
    }
}
</script>

<style>
.spacing{
   padding: 20px;
}
</style>