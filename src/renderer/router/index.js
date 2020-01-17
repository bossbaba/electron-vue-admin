import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/views/Login').default
    },
    {
      path: '/home',
      name: 'home',
      component: require('@/views/Home').default
    },
    {
      path:'/index',
      name:'index',
      component:require('@/views/Index').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
