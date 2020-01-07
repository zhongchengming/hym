import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home/home'
import person from '@/components/person/person'
import zixun from '@/components/zixun/zixun'
import messageDetail from '@/components/zixun/messageDetail'
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
      component: zixun,
      children: [
        {
          path: 'detail',
          component: messageDetail
        }
      ]
    }, {
      path: '/home',
      component: home
    }
  ]
})
