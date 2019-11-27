import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    token:'',
    cartsarr:JSON.parse(localStorage.getItem('cartsarr'))||[]
  },
  mutations: {
    setToken(state,token){
      state.token=token
    },
    //添加商品到购物车
    toCart(state,right){
      let goods = state.cartsarr.find(v=>v.title==right.label);
      if(goods){
        goods.num+=1
      }else{
        state.cartsarr.push({
          title:right.label,
          num:1
        })
      }
    },
    //商品增加
    addCart(state,index){
      state.cartsarr[index].num++
    },
    //商品减少
    removeCart(state,index){
      if(state.cartsarr[index].num>1){
        state.cartsarr[index].num--
      }else{
        if(window.confirm('是否要移除商品?')){
          state.cartsarr.splice(index,1)
        }
      }
    },
    //清除购物车
    spliceCart(state){
      state.cartsarr=[]
    }


  },
  actions: {

  },
  //vuex的计算属性
  getters:{
    countsum:state=>{
      let num = 0;
      state.cartsarr.forEach(v=>{
        num+=v.num
      })
      return num
    }
  }
})
store.subscribe((mutations,state)=>{
  localStorage.setItem('cartsarr',JSON.stringify(state.cartsarr))
})
export default store
