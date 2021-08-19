import Vue from 'vue'
import App from './App.vue'
//import vuetify from '@/plugins/vuetify' // path to vuetify export

import axios from "axios";
import VueAxios from "vue-axios";

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
//import css files
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'

import VueSweetalert2 from 'vue-sweetalert2';

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';


// Install BootstrapVue
//import VueSessionStorage from "vue-sessionstorage"; 



Vue.config.productionTip = false
Vue.use(BootstrapVue)

// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueAxios, axios)
//Vue.use(VueSessionStorage)


Vue.use(VueSweetalert2);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

