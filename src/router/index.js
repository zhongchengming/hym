import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home/home'
import person from '@/components/person/person'
import zixun from '@/components/zixun/zixun'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/person',
      component: person
    }, {
      path: '/zixun',
      component: zixun
    }, {
      path: '/home',
      component: home
    }
  ]
})


