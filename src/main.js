import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router';

Vue.config.productionTip = false

Vue.use(VueRouter);

import index from './components/index.vue';


//写路由规则

const routes = [

  {
    path: '/',
    component: index
  },

  {
    path: '/index',
    component: index
  }
]

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router

}).$mount('#app')
