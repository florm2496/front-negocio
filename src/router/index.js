import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import ViewLogin from '../views/Login.vue'
import Productos from '../views/ViewProductos.vue'



Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'dashboard',
    component: Dashboard,
    children: [
     
      {
        path: 'clientes',
        component: () => import('../views/ViewClientes.vue')
      },
      {
        path: 'inicio',
        name:'inicio',
        component: () => import('../views/Home.vue')
      },
  
      {
        path: 'editarcliente',
        name:'editarcliente',
        component: () => import('../components/clientes/editarCliente.vue')
      },
      {
        path: 'cuentascliente',
        component: () => import('../components/clientes/cuentascliente.vue'),
        name:'cuentascliente'
      },
    
      {
        path: 'cuentas',
        component: () => import('../views/ViewCuentas.vue'),
  
      },
      {
        path: 'nuevacuenta',
        name: 'nuevacuenta',
        component: () => import('../components/cuentas/nuevacuenta.vue'),
      },
      {
        path: 'productos',
        component: Productos,
  
      },
      {
        path: 'modalcuentas',
        component: () => import('../components/clientes/modaltablaclientes.vue'),
  
      },
      {
        path: 'detallecuenta',
        component: () => import('../components/cuentas/detallecuenta.vue'),
  
      },
      {
        path: 'detallepagos',
        component: () => import('../components/cuentas/detallepagos.vue'),
  
      },
      {
        path: 'ingresos',
        component: () => import('../components/ingresos/tabla.vue'),
  
      },
      {
        path: 'nuevosingresos',
        name: 'nuevosingresos',
        component: () => import('../components/ingresos/nuevoingreso.vue'),
        
  
      },
      {
        path: 'utilidades',
        name: 'utilidades',
        component: () => import('../components/base/utilidades.vue'),
        
  
      },
      
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: ViewLogin,

  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to,from,next)=>
{
  const islogged= localStorage.getItem("access")!=null ? true:false
  console.log(from.name,to.name)
  if(to.name!='login' && ! islogged ){
    next({name:'login'})
  }else{
    next()
  }
}
)

export default router
