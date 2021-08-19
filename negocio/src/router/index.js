import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashboard from '../views/Dashboard.vue'
import ViewLogin from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'dashboard',
    component: Dashboard,
    children: [
     
      {
        path: 'clientes',
        component: () => import(/* webpackChunkName: "Messages" */ '../views/ViewClientes.vue')
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
