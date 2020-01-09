import Vue from 'vue'
import Router from 'vue-router'
import shop from '@/components/shop/shop'
import person from '@/components/person/person'
import recommend from '@/components/recommend/recommend'
import messageDetail from '@/components/recommend/messageDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: recommend
    },
    {
      path: '/recommend',
      component: recommend,
      children: [
        {
          path: 'detail',
          component: messageDetail
        }
      ]
    },
    {
      path: '/person',
      component: person
    },
    {
      path: '/shop',
      component: shop
    }
  ]
})
