import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'


Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/post',
      name: 'post',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Post.vue')
    },
    {
      path: '/botnav',
      name: 'botnav',
      component: () => import('./views/botNav.vue'),
      //嵌套路由
      children:[
        {
          path: 'index',
          name: 'index',
          component: () => import('./views/Index.vue')
        },
        {
          path: 'search',
          name: 'search',
          component: () => import('./views/Search.vue')
        },
        {
          path: 'cart',
          name: 'cart',
          meta:{
            //设置是否有权限
            requireAuth:true,
          },
          component: () => import('./views/Cart.vue')
        },
        {
          path: 'mine',
          name: 'mine',
          meta:{
            //设置是否有权限
            requireAuth:true,
          },
          component: () => import('./views/Mine.vue')
        },
        {
          path: 'sort',
          name: 'sort',
          component: () => import('./views/Sort.vue')
        },
      ]
    },

    
  ]
})
