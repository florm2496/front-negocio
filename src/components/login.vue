<template>
  <div>
     <b-row  align-v="center"> 
       <b-col cols="4"></b-col>
       <b-col>
          <b-container  class="container-login">

     <b-form  @reset="onReset">
            <b-form-group
        id="input-group-username"
        label="Nombre de usuario:"
        label-for="input-username"
        description=""
      >
        <b-form-input
          id="input-username"
          v-model="username"
          type="text"
          placeholder="Ingresa tu usuario"
          required
        ></b-form-input>
    
      </b-form-group>
      <b-form-group
        id="input-group-password"
        label="Contraseña:"
        label-for="input-password"
        description="No debes compartir tu contraseña con nadie"
      >
        <b-form-input
          id="input-password"
          v-model="password"
          type="password"
          placeholder="Ingresa tu contraseña"
          required
        ></b-form-input>
        <b-button @click="login">Ingresar</b-button>
      </b-form-group>
     </b-form>
 
      </b-container>
  
       </b-col>
        <b-col cols="4"></b-col>
     </b-row>
  </div>
</template>

<script>
import {APIAuth} from '../apis/auth'
  export default {
    name:"Login",
    data() {
      return {
       
        username: '',
        password: '',
        api : new APIAuth(),
            
        
        show:true,
     
      }
    },
    mounted() {
       
    },
    methods: {
      async login(){
          let user=this.username
          let pass=this.password

          let token=await this.api.login(user,pass)
          console.log(token)

          if ('access' in token){
              localStorage.setItem("access",token.access)
              localStorage.setItem("refresh",token.refresh)
              this.$router.push('/inicio')
              localStorage.setItem("usuario",this.username)
          }else if('detail' in token){
              this.$swal( "No se puede ingresar al sistema","Usuario o contraseña incorrectos","error",);
          }else if ('error' in token){
              this.$swal( "No se puede ingresar al sistema","Ha ocurrido un error inesperado","error",);

          }else{
              this.$swal( "No se puede ingresar al sistema","Ha ocurrido un error inesperado","error",);
          }


    
      },
       onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.username = ''
        this.password = ''
        
      },
   
    }
  }
</script>

<style>
    /* .login{
       min-height: 100vh;
       display: flex;
       align-items: center;
       justify-content: center;
      
    } */
    /* .form{
         
         width: 500px;
         height: 300px;
         display: flex;
       align-items: center;
       justify-content: center;

    } */
    .container-login{
      color: white;
      background: teal;
      margin: 60px;
      padding: 100px;

    }
  
</style>