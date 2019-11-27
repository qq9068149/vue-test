import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import 'amfe-flexible'
import setaxios from './setaxios'

setaxios()
Vue.config.productionTip = false
//把axios全局设为$http
Vue.prototype.$http=axios

//路由守卫
router.beforeEach(function(to,from,next){
  //每次跳转都把localStorage里的token放进setToken
  store.commit('setToken',localStorage.getItem('token'))
  //查看需要设置权限的页面
  if(to.meta.requireAuth){
    //查看是否存在token
    if(store.state.token){
      next()
    }else{
      next({
        path:'/login',
        query:{red:to.fullPath}
      })
    }
  }else{
    next()
  }
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
