import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import Citylist from '@/components/Citylist'
// import Category from '@/components/Category'
// //1.引入分类组件
// import HomePage from '../components/HomePage.vue'
import CateShop from '../components/CateShop.vue'
// //1.引入购物车组件
import ShopCar from '../components/ShopCar.vue'
// //1.引入我的组件
import MyPage from '../components/MyPage.vue'
//支付页面
import payment from '../components/payment.vue'
// 增加的详情页---------------
import Shop from '../components/shop/Index.vue'
// import SCategory from '../components/shop/Category.vue'
import SContent from '../components/shop/Content.vue'
import Content from '../components/shop/Content.vue'
// 增加的详情页---------------
/* 菜谱 */
import Menu from '../components/menu/Index.vue'
import MContent from '../components/menu/Content.vue'  // 详情页
// 地址列表页
import Site from '../components/Site/Site.vue'
// 地址
import address from '../components/address.vue' 
Vue.use(Router)
export default new Router({
  //去掉地址栏的 #  号
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage
      //使用路由重定向
      //当访问 '/' 地址, 然后自动改变成访问 '/sub'
      // redirect:"/sub"
    },
    {
      path: '/citylist',
      name: 'city',
      component: Citylist
    },
    {
      path: '/CateShop',
      component: CateShop
    },
    {
      path: '/ShopCar',
      component: ShopCar
    },
    {
      path: '/MyPage',
      component: MyPage
    },
    {
      path: '/Content',
      component: Content
    },
    {
      path: '/address',
      component: address
    },
    {
      path: '/payment',
      component: payment
    },
    {path:'/shop', component:Shop,
   children: [
     { path: '/', redirect:'/shop/0' },
     // { path: ':category', component:SCategory },
     { path: ':category/:listname/:contentId', component:SContent }
   ]
  },
  {path:'/menu', component:Menu,
   children: [
     { path: 'recommend/:id', component:MContent, name:"Recommend" }
   ]
  },
  {
      path: '/site',
      component: Site,
      meta: {
        notKeepAlive: false
      }
    },
  ]
})
