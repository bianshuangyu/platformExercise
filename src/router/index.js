import Vue from 'vue'
import Router from 'vue-router'
import StartIndex from '@/view/StartIndex'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'StartIndex',
      component: () => import('@/view/StartIndex.vue'),
      children:[
        {
          path: '/',
          name: 'index',
          component: () => import('@/view/indexHoverBanner/index.vue'),
        }
      ]
    }
  ]
})
