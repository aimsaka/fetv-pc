import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from "../Layout/index.vue"
// 主页
import home from "../views/home/home.vue";
// 新闻页面
import news from "../views/news/news.vue";
//文章详情页 
import newsDetails from "../views/news-details/news-details.vue";

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
    },
    {
      path:'/newsDetails',
      component:newsDetails,
    }
  ],
  mode:'history'
})
//阻止跳转同一个路径网页报错
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

export default router 

