import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/home/Home.vue'
import Gouwuche from '@/pages/gouwuche/Gouwuche.vue'
import Huiyuan from '@/pages/huiyuan/Huiyuan.vue'
import Shousuo from '@/pages/shousuo/Shousuo.vue'
import Newlist from '@/pages/newlist/Newlist.vue'
import Newinfo from '@/pages/newinfo/Newinfo.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/Home'
    },
    {
      path: '/Home',
      component:Home
    },
    {
      path: '/Gouwuche',
      component:Gouwuche
    },
    {
      path: '/Huiyuan',
      component:Huiyuan
    },
    {
      path: '/Shousuo',
      component:Shousuo
    },
    {
      path: '/Home/Newlist',
      component:Newlist
    },
    {
      path: '/Home/Newinfo/:id',
      component:Newinfo
    }
],
linkActiveClass:'mui-active'

})
