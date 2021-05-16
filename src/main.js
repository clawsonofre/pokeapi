import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import routes from './routes'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueRouter from 'vue-router'


Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VueRouter);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const router = new VueRouter({routes, mode: 'history'});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');


