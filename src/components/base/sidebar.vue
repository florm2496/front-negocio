<template>
    <div class="sidebar">

        <div class="menu-items">
                 <router-link to="#" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                HOGAREÑA
                </div>
            </router-link>
            <router-link to="/inicio" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                  Panel de control
                </div>
            </router-link>
            <router-link to="/clientes" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                   Clientes
                </div>
            </router-link>
            <router-link to="/cuentas" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                    Cuentas
                </div>
            </router-link>
              <router-link to="/productos" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                    Productos
                </div>
            </router-link>


                
              <router-link to="/utilidades" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                   Utilidades
                </div>
            </router-link>
  
               <router-link to='/login' active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                       <b-button @click="logout">
                        Salir
                    </b-button>
                </div>
            </router-link>

           
            
       
        </div>

        
    </div>
    
</template>

<script>
export default {
    name: "Sidebar",
    data (){
        return {
            usuario:'',

        }
    },
    mounted() {
        this.usuario=localStorage.getItem("usuario")
    },
    methods: {
        logout(){
            localStorage.removeItem("usuario")
            localStorage.removeItem("access")
            localStorage.removeItem("refresh")
            this.$router.push('/login')
        }

    },
   
}
</script>

<style scoped>
.title {
    color: white;
    font-size: 20px;
    margin-top: 10px;
}

.menu-items {
    display: flex;
    flex-direction: column;
    margin-top: 20px;

}

.menu-items > * {
    margin-top: 10px;
}

.side-btn {
    border: none;
    padding: 16px 0px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    color: white;
    background-color: transparent;
}

.side-btn:focus {
    outline: none;
}

.side-btn.active {
    position: relative;
    background-color: white;
    color: blue;
    font-weight: 600;
    margin-left: 10px;
   
}

.side-btn.active::before {
    top: -30px;
}

.side-btn.active::after {
    bottom: -30px;
}

.side-btn.active::before, .side-btn.active::after {
    position: absolute;
    content: "";
    right: 0;
    height: 30px;
    width: 50px;
    background-color: white;
}

.side-btn.active .link-container::before {
    top: -60px;
}

.side-btn.active .link-container::after {
    bottom: -60px;
    z-index: 99;
}

.side-btn.active .link-container::before, .side-btn.active .link-container::after {
    position: absolute;
    content: "";
    right: 0px;
    height: 200px;
    width: 60px;
    border-radius: 20%;
    background-color: teal;
}
</style>