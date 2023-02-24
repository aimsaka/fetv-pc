import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from './router/index'
// 引入公共样式
import '@/styles/index.scss' 
Vue.config.productionTip = false
// 引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import './assets/font_3914416_g4c5o9s9e3/iconfont.css'
// import './assets/font_3914416_g4c5o9s9e3/iconfont'
Vue.use(ElementUI);
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
