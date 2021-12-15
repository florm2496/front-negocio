<template>
  <div>

<b-container class="mt-50">
    <b-row>
        <b-col>
                <b-card bg-variant="primary" text-variant="white" header="Ventas realizadas" class="text-center">
        <b-card-text>29</b-card-text>
      </b-card>
        </b-col>
        <b-col>     <b-card bg-variant="secondary" text-variant="white" header="Clientes morosos" class="text-center">
        <b-card-text>
            <ul>
                <li>
                    Florencia Muñoz
                </li>
                <li>
                    Gustavo perez
                </li>
                <li>
                    Sonia Guzman
                </li>
            </ul>
        </b-card-text>
      </b-card></b-col>
        <b-col>     <b-card bg-variant="info" text-variant="white" header="Clientes al dia" class="text-center">
        <b-card-text>
                <ul>
                <li>
                   Lucas Aguirre
                </li>
                <li>
                    Ramon Torres
                </li>
                <li>
                    Sonia Guzman
                </li>
            </ul>

        </b-card-text>
      </b-card></b-col>
    </b-row>

       <b-row>
        <b-col>
                <b-card bg-variant="danger" text-variant="white" header="Productos vendidos" class="text-center">
        <b-card-text>10</b-card-text>
      </b-card>
        </b-col>
        <b-col>     <b-card bg-variant="primary" text-variant="white" header="Clientes nuevos" class="text-center">
        <b-card-text>5</b-card-text>
      </b-card></b-col>
        <b-col>     <b-card bg-variant="warning" text-variant="white" header="Cuentas morosas" class="text-center">
        <b-card-text>
            <ul>
                <li>
                    Numero: 10 , solicitante : Florencia Muñoz
                </li>
                  <li>
                    Numero: 32 , solicitante : Raul Gomez
                </li>
            </ul>
        </b-card-text>
      </b-card></b-col>
    </b-row>
          <b-row>
        <b-col>
                <b-card bg-variant="success" text-variant="white" header="Productos mas vendidos" class="text-center">
        <b-card-text><ul>
            
            <li>Heladera Whirpool</li>
            <li>Remera Taverniti de hombre modelo Summer</li>
            </ul></b-card-text>
      </b-card>
        </b-col>
        <b-col>     <b-card bg-variant="dark" text-variant="white" header="Clientes nuevos" class="text-center">
        <b-card-text>5</b-card-text>
      </b-card></b-col>
        <b-col>     <b-card bg-variant="light" text-variant="black" header="Cuentas morosas" class="text-center">
        <b-card-text>
            <ul>
                <li>
                    Numero: 10 , solicitante : Florencia Muñoz
                </li>
                  <li>
                    Numero: 32 , solicitante : Raul Gomez
                </li>
            </ul>
        </b-card-text>
      </b-card></b-col>
    </b-row>
</b-container>
     
</div>
</template>

<script>
export default {
    name: 'Dashboard',
    data(){
      return{
          ventas_realizadas:10
          
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