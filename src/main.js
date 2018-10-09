import Vue from 'vue'
// 导入element-ui
import ElementUI from 'element-ui';
//导入样式
import 'element-ui/lib/theme-chalk/index.css';
//导入index组件
import index from './components/index.vue';

import App from './App.vue'
//路由相关
import VueRouter from 'vue-router';


Vue.config.productionTip = false

Vue.use(VueRouter);

Vue.use(ElementUI);



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
//实例化路由对象
const router = new VueRouter({
  routes
})
//实例化Vue
new Vue({

  render: h => h(App),
//把实例化的路由对象挂载到Vue上
  router

}).$mount('#app')