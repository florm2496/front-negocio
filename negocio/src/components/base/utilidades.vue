<template>
  <div>
      <b-row>
          <b-col>
            <b-container class="container-utilidades">
              <b-row>
                  <b-col> 
                       <b-form-group
                id="recargo"
                label="Recargo por interes"
                >
                    <b-form-input v-model="recargo" >

                    </b-form-input>
                        <b-button id="boton-recargo">Actualizar</b-button>
                </b-form-group></b-col>
                  <b-col>
                  

                  </b-col>

                                    <b-col> 
                       <b-form-group
                id="recargo"
                label="Dias de regalia"
                >
                    <b-form-input v-model="recargo" >

                    </b-form-input>
                        <b-button id="boton-recargo">Actualizar</b-button>
                </b-form-group></b-col>
                  <b-col>
                  

                  </b-col>
              </b-row>
            </b-container>
          </b-col>
          <b-col>
            <b-container  class="container-utilidades">
              <b-row>
                  <b-col> 
                       <b-form-group
                id="comprobante"
                label="Reimprimir un comprobante"
                >
                    <b-form-input   placeholder="Ingresar numero de cuenta">

                    </b-form-input>
                        <b-button id="boton-recargo">Buscar</b-button>
                </b-form-group></b-col>
                  <b-col>
                  

                  </b-col>
              </b-row>
            </b-container>


          </b-col>
      </b-row>
  </div>
</template>

<script>
export default {

    name:'Utilidades',
    components:{

    },
    data(){
        return{
            recargo:20,

        }
    }

}
</script>

<style>
.container-utilidades{
    border: 2px solid #B22222;
}
#boton-recargo{
    margin: 10px;
}

</style>