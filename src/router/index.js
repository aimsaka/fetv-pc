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
const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: [
        {
          // 首页
          path: '/home',
          component: home,
        },
        {
          // 新闻列表
          path: '/news',
          component: news,
        }
      ]
    },
    {
      // 新闻详情
      path: '/newsDetails',
      component: newsDetails,
    },
    {
      // 学校详情
      path: '/Introduction',
      component: () => import('../views/school-detail/school-detail')
    }
  ],
  mode: 'history'
})
//阻止跳转同一个路径网页报错
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

export default router

