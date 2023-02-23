import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from "../Layout/index.vue"
// 主页
import home from "../views/home/home.vue";
// 新闻页面
import news from "../views/news/news.vue";

Vue.use(VueRouter)
const router =new VueRouter({
  routes : [
    {
      path:'/',
      component:Layout,
      redirect: '/home',
      children:[
        {
          path:'/home',
          component:home,
        },
        {
          path:'/news',
          component:news,
        }
      ]
    }
  ],
  mode:'history'
})

export default router 