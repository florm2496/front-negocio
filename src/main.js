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

import 'vue-input-search/dist/vue-search.css'
import VueSearch from 'vue-input-search/dist/vue-search.common'
import 'vue-select/dist/vue-select.css';
// Install BootstrapVue
//import VueSessionStorage from "vue-sessionstorage"; 
import vSelect from 'vue-select'
import VueMeta from 'vue-meta';




Vue.use(VueMeta);



Vue.config.productionTip = false
Vue.use(BootstrapVue)

Vue.use(VueSearch)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueAxios, axios)

Vue.use(require('vue-moment'));
//Vue.use(VueSessionStorage)

Vue.component('v-select', vSelect)
Vue.use(VueSweetalert2);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

