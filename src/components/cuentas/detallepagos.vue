<template>
<div>
<b-container>

  <b-row>

    <b-col>
          <h4>
            Cuotas y pagos de la cuenta N° {{this.numero_cuenta}}
          </h4>
          <br>
          </b-col>
  </b-row>

        <b-row>
      
          <b-col cols="3">

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
          </b-col>
          <b-col cols="3">

          <b-form-group
              id="importe"
              label="Total"
              label-for="importe"
              
            >
            <b-form-input
                id="importe"
                v-model="this.cuenta.importe"
                disabled
              ></b-form-input>
            </b-form-group>
          </b-col>

         <b-col cols="3">
            
          <b-form-group
              id="fecha"
              label="Fecha"
              label-for="fecha"
              
            >
            <b-form-input
                id="gecha"
                v-model="this.cuenta.fecha"
                type="date"
                disabled
              ></b-form-input>
            </b-form-group>


          </b-col>
          <b-col cols="2"><b-button style="margin:10px;" to="cuentas"><b-icon icon="arrow-left-circle-fill"></b-icon></b-button></b-col>

        </b-row>
   <b-row>
          <b-col  cols="3">
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

        </b-col>


        <b-col cols="3">
          
                <b-form-group
              id="garante"
              label="Garante 1"
              label-for="garante1"
              
            >
            <b-form-input
                id="garante1"
                v-model="cuenta.garante1"
                type="text"
                disabled
              ></b-form-input>
            </b-form-group>
        </b-col>

      <b-col cols="3">
                <b-form-group
              id="garante2"
              label="Garante 2"
              label-for="garante2"
              
            >
            <b-form-input
                id="garante2"
                v-model="cuenta.garante2"
                type="text"
                disabled
              ></b-form-input>
            </b-form-group>
      </b-col>
 </b-row>
      

        
<b-row>
  



    <b-col cols="3">
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
             </b-col>

  <b-col cols="3">

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
  <b-col cols="3">
        
              <b-button id="show-btn" variant="danger" @click="showModal">Refinanciar cuenta <b-icon icon="credit-card"></b-icon></b-button>

  
          </b-col>
      </b-row>




    <b-col>
        <b-row>
          <b-col>
   
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
                    <b-form-input v-model="datos_refinanciar.cant_cuotas" placeholder="Cuotas">

                </b-form-input>
                </b-form-group>
                  <b-form-group
                label="Fecha de vencimiento"
                type="date"
                >
                    <b-form-datepicker id="datepicker-refinanciar" v-model="datos_refinanciar.fecha_venc" class="mb-2"  locale="es" placeholder="Seleccione fecha" label-help=""></b-form-datepicker>  

                </b-form-group>
                  <b-button class="mt-2" variant="outline-primary" block @click="refinanciar_cuenta()" :disabled="disabled_refinanciar">Refinanciar</b-button>
                </b-modal>
  
          </b-col>
          <b-col>
            
    
            
          </b-col>
        </b-row>

    </b-col>

</b-container>

      <b-container id="listado-cuotas">
           <h4>LISTADO DE CUOTAS</h4>
           <b-table  striped hover :items="cuotas" :fields="fields">

        <template #cell(name)="row">
        {{ row.value.first }} {{ row.value.last }}
      </template>
           <template #cell(pagos)="row">
    

        <b-button size="sm" @click="verpagos(row.item,row.index)"> <b-icon icon="eye-fill"></b-icon> </b-button>

      </template>

           </b-table>
      </b-container>
  
    
    <b-modal ref="modal-pagos" id="modal-pagos" hide-footer :title="titulo_modal">
      
      <template #modal-header="{ close }">
      <b-button size="sm" variant="outline-danger" @click="close()">
      <span aria-hidden="true">&times;</span>
      </b-button> </template>
      <b-container>
        <h4>Nuevo pago para cuota {{this.cuota_actual.numero_cuota}}</h4>
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
         <v-select id="metodo_id" v-model="nuevo_pago.metodo" :options="metodos" />
    
       </b-col>
      <b-col lg="2"> <b-button variant="success" @click="validardatospago()" :disabled="disabled_pagar" size="sm">Pagar</b-button></b-col>
     </b-row>
      </b-container>
      <div class="d-block text-center">

        <h5>Pagos de esta cuota</h5>
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
            excedente:0,
            pagos:null,
            fecha_refinanciada:'',
            show_excedente:false,
            mensaje_excedente:'',
            hora:'',
            metodos:['Efectivo','T credito','T debito','Transferencia'],
          
            nuevo_pago: {
                'monto':0,
                'metodo':null,
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
                { key: 'refinanciada', label: 'Refinanciada', sortable: true, class: 'text-center' },
                
                { key: 'pagos', label: 'Pagos', sortable: true, class: 'text-center' },
                 { key: 'pagos', label: 'Pagos' },
                // { key: 'actions', label: 'Acciones' }

            ],
            fields_pagos:[{key: 'importe', label: 'Importe', sortable: true, },
                          {key: 'metodo_pago', label: 'Metodo de pago', sortable: true, },
                          {key: 'fecha', label: 'Fecha', sortable: true, }
                          ],
            cuenta: {
              'solicitante':'',
              'importe':0,
              'fecha':null,
              'garante':'',
              'saldo':0,
              'estado':null,

            },
            datos_refinanciar:{'cant_cuotas':0,'fecha_venc':null},
            cuotas: null,
            cuota_actual:{},
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

        console.log('cuota actual',this.cuota_actual)
        if (this.nuevo_pago.monto!=0 && this.nuevo_pago.metodo != null && this.cuota_actual.refinanciada != 'SI') {
            hab=false
        }

        return (
          hab
        );
            },
        
      disabled_refinanciar(){
        var hab=true
        if (this.datos_refinanciar.cant_cuotas!=0 && this.datos_refinanciar.fecha_venc != null) {
            hab=false
        }

        return (
          hab
        );
      }


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
                var diferencia=this.nuevo_pago.monto - this.cuota_actual.saldo
                // this.$swal('Esta ingresando un importe superior a esta cuota , desea descontar la diferencia de la siguiente cuota?','','warning')
                this.$swal({
                  title: 'Vas a pagar '+diferencia+' mas del importe de esta cuota. La diferencia se descontara al saldo de la siguiente cuota',
                  showCancelButton: true,
                  confirmButtonText: 'Confirmar',
                  cancelButtonText:'Cancelar'
              
                }).then((result) => {
             
                  if (result.isConfirmed) {
                    this.excedente=diferencia
                    this.nuevo_pago.monto=this.cuota_actual.saldo

                    this.realizarpago()
                  } else if (result.isDenied) {
                    // this.$swal('Operacion cancelada', '', 'info')


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
            'excedente':this.excedente,

          }
          try{
            const response = await APICuentas.nuevopago(nuevo_pago);
            if (response.status==200) {
              this.$swal('Bien hecho','Nuevo pago agregado','success')
              let nuevo_pago = response.pago
              this.pagos.push(nuevo_pago)
              this.nuevo_pago={
                'monto':0,
                'metodo':null,
              }
              this.excedente=0
              // this.cuota_actual=null
              this.getcuotas()
              this.verpagos(this.cuota_actual)
              this.$bvModal.hide('modal-pagos')
    
            }
          }
          catch(issue){
            
           this.$swal('Error',issue.message,'error')
          }
          
  

        },
        refinanciar_cuenta(){
         
               this.$swal({
                  title: `Vas a refinanciar un saldo de ${this.cuenta.saldo} en ${this.datos_refinanciar.cant_cuotas} cuotas a partir de ${this.datos_refinanciar.fecha_venc}`,
                  showCancelButton: true,
                  confirmButtonText: 'Confirmar',
                  cancelButtonText:'Cancelar'
              
                }).then((result) => {

                    if (result.isConfirmed) {
        
                    this.confirmar_refinanciacion()
                  } else if (result.isDenied) {
                    // this.$swal('Operacion cancelada', '', 'info')


                  }
                })

        },
          async confirmar_refinanciacion(){
          

          try{
            console.log('-------',this.datos_refinanciar)
            const response = await APICuentas.refinanciar_cuenta(this.numero_cuenta,this.datos_refinanciar.cant_cuotas,this.datos_refinanciar.fecha_venc);
            
            if (response.status==200) {
               this.getcuotas()
              this.$swal('Bien hecho','La cuenta ha sido refinanciada','success')
              this.datos_refinanciar={'cant_cuotas':0,'fecha_venc':''},
              this.cuota_actual=null
              this.nuevo_pago=null

             
            }
          }
          catch(issue){
            
           this.$swal('Algo salio mal',issue.message,'error')
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
#show-btn,#listado-cuotas{
  margin-top: 24px;
}
</style>