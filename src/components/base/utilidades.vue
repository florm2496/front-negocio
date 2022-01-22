<template>
  <div>
    <b-container fluid="xl" class="bv-example-row bv-example-row-flex-cols">
      <b-row>
      
                  <b-col cols="4"> 
                       <b-form-group
                          id="recargo"
                          label="Recargo por interes"
                          >
                          <b-form-input v-model="configs.recargo_interes" ></b-form-input>
                       
                          </b-form-group>
                
              
                        </b-col>


                  <b-col cols="2">
                  
              <b-form-group>
                  <b-button id="boton-recargo" style="margin-top:30px" @click="swal_changes_configs('recargo')">Modificar</b-button>
              </b-form-group>
                  </b-col>
   </b-row>
       <b-row>
                    <b-col cols="4"> 
                       <b-form-group
                id="recargo"
                label="Dias de regalia"
                >
                    <b-form-input v-model="configs.dias_regalia" >

                    </b-form-input>
                    
                </b-form-group>
                
                </b-col>
                  <b-col cols="2">
                  <b-form-group>
                        <b-button  style="margin-top:30px" id="boton-regalias" @click="swal_changes_configs('regalia')">Modificar</b-button>
                  </b-form-group>

                  </b-col>
          
   
      </b-row>
      </b-container>
  </div>
</template>

<script>

import APIConsultas from '../../apis/consultas'

export default {

    name:'Utilidades',
    components:{

    },
    data(){
        return{
            configs : {},
            dato:'',
            response_configs:null,

        }
    },
    mounted(){
      this.getConfigs()
    },
    methods:{

      async getConfigs(){
        this.configs = await APIConsultas.getConfiguraciones();


      },
 
      async actualizar_configs(campo){
              if (campo=='recargo') {

                    this.dato= this.configs.recargo_interes
            
            
                  }
                  else if(campo == 'regalia'){
                    this.dato = this.configs.dias_regalia
                  }

                  let datos ={
          
                    'campo':campo,
                    'dato':this.dato
                  }

                  this.response_configs =await APIConsultas.actualizarConfigs(datos);
                  
                              

                            if (this.response_configs == 200){

                              this.$swal('Bien','Datos actualizados correctamente','success')
                            }
                            else{
                               this.$swal('error',this.response_configs,'error')

                            }

                            
      },

      swal_changes_configs(campo){
              
                this.$swal({
                  title: 'Ingrese la contraseña para poder modificar',
                  input: 'text',
                  inputAttributes: {
                    autocapitalize: 'off'
                  },
                  showCancelButton: true,
                  cancelButtonText:'Cancelar',
                  confirmButtonText: 'Modificar',
                  showLoaderOnConfirm: true,
                  preConfirm: () => {
                        },
                        allowOutsideClick: () => !this.$swal.isLoading()
                      }).then((result) => {
                        
                        
                        if (result.isConfirmed) {
                          let password = result.value

                          if (password == this.configs.password_utilidades) {

                            this.actualizar_configs(campo)

               
                            
                          }
                          else{
                            this.$swal('Ups,la contraseña ingresada es incorrecta','No se puede actualizar este campo','warning')

                          }

                    

                        }
                      })
      this.response_configs = null
      }

    }

}
</script>
